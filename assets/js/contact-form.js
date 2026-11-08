/*
 * Quote form behaviour (contact.html).
 *
 * Submission:
 *   - If the form has data-endpoint="https://..." (e.g. a Formspree/Netlify/Basin URL), the form
 *     is POSTed there as multipart/form-data, photos included.
 *   - While data-endpoint is empty, it opens the visitor's email app with the request filled in,
 *     addressed to data-email. Photos can't be attached that way, so the message asks the visitor
 *     to attach them. Nothing is ever reported as "sent" unless a server actually confirmed it.
 */
(function () {
  "use strict";

  var form = document.getElementById("quote-form");
  if (!form) return;

  var EMAIL = form.getAttribute("data-email") || "";
  var MAX_FILES = 5;
  var MAX_FILE_MB = 10;
  var status = document.getElementById("form-status");
  var submitBtn = form.querySelector('button[type="submit"]');
  var attempted = false;

  // ---------- helpers ----------
  function $(id) {
    return document.getElementById(id);
  }

  function setError(input, message) {
    var err = $(input.id + "-error");
    if (err) err.textContent = message || "";
    if (message) input.setAttribute("aria-invalid", "true");
    else input.removeAttribute("aria-invalid");
  }

  function setStatus(kind, html) {
    status.className = "form-status" + (kind ? " form-status--" + kind : "");
    status.innerHTML = html || "";
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function todayISO() {
    var d = new Date();
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().slice(0, 10);
  }

  // ---------- preferred date: placeholder overlay + no past dates ----------
  var date = $("date");
  if (date) {
    date.min = todayISO();
    var syncDate = function () {
      date.classList.toggle("is-empty", !date.value);
    };
    date.addEventListener("input", syncDate);
    date.addEventListener("change", syncDate);
    syncDate();
  }

  // ---------- description character counter ----------
  var desc = $("description");
  var count = $("description-count");
  if (desc && count) {
    var max = desc.maxLength > 0 ? desc.maxLength : 500;
    var syncCount = function () {
      count.textContent = desc.value.length + " / " + max;
    };
    desc.addEventListener("input", syncCount);
    syncCount();
  }

  // ---------- photo picker ----------
  var photos = $("photos");
  var photoList = $("photos-list");

  function validatePhotos() {
    if (!photos) return true;
    var files = Array.prototype.slice.call(photos.files || []);
    var msg = "";
    if (files.length > MAX_FILES) {
      msg = "You can upload up to " + MAX_FILES + " photos.";
    } else if (files.some(function (f) { return f.type && f.type.indexOf("image/") !== 0; })) {
      msg = "Please choose image files only (for example JPG, PNG, or HEIC).";
    } else if (files.some(function (f) { return f.size > MAX_FILE_MB * 1024 * 1024; })) {
      msg = "Each photo needs to be under " + MAX_FILE_MB + " MB.";
    }
    setError(photos, msg);
    return !msg;
  }

  function renderPhotos() {
    var files = Array.prototype.slice.call(photos.files || []);
    photoList.innerHTML = "";
    if (!files.length) return;
    var names = files.map(function (f) { return escapeHtml(f.name); }).join(", ");
    var label = files.length === 1 ? "1 photo selected: " : files.length + " photos selected: ";
    photoList.innerHTML =
      "<span>" + label + names + "</span>" +
      '<button type="button" data-clear-photos>Remove</button>';
  }

  if (photos && photoList) {
    photos.addEventListener("change", function () {
      renderPhotos();
      validatePhotos();
    });
    photoList.addEventListener("click", function (e) {
      if (e.target && e.target.hasAttribute("data-clear-photos")) {
        photos.value = "";
        renderPhotos();
        setError(photos, "");
        photos.focus();
      }
    });
  }

  // ---------- validation ----------
  var rules = {
    "first-name": function (v) {
      return v ? "" : "Please enter your first name.";
    },
    email: function (v) {
      if (!v) return "Please enter your email address.";
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Please enter a valid email address, like name@example.com.";
    },
    phone: function (v) {
      if (!v) return "Please enter a phone number we can text or call.";
      var digits = v.replace(/\D/g, "");
      return digits.length >= 10 && digits.length <= 15 ? "" : "Please enter a full phone number, including the area code.";
    },
    service: function (v) {
      return v ? "" : "Please choose the type of cleaning you need.";
    },
    date: function (v) {
      return v && v < todayISO() ? "Please choose today or a later date." : "";
    }
  };

  function validateField(id) {
    var el = $(id);
    if (!el || !rules[id]) return true;
    var msg = rules[id](el.value.trim());
    setError(el, msg);
    return !msg;
  }

  function validateAll() {
    var firstInvalid = null;
    Object.keys(rules).forEach(function (id) {
      if (!validateField(id) && !firstInvalid) firstInvalid = $(id);
    });
    if (!validatePhotos() && !firstInvalid) firstInvalid = photos;
    return firstInvalid;
  }

  // Re-check a field as the visitor fixes it, but only after a first submit attempt.
  Object.keys(rules).forEach(function (id) {
    var el = $(id);
    if (!el) return;
    var evt = el.tagName === "SELECT" || el.type === "date" ? "change" : "input";
    el.addEventListener(evt, function () {
      if (attempted) validateField(id);
    });
    el.addEventListener("blur", function () {
      if (attempted) validateField(id);
    });
  });

  // ---------- submission ----------
  function value(id) {
    var el = $(id);
    return el ? el.value.trim() : "";
  }

  function buildMailto() {
    var name = (value("first-name") + " " + value("last-name")).trim();
    var lines = [
      "Name: " + name,
      "Email: " + value("email"),
      "Phone: " + value("phone"),
      "Property type: " + (value("property-type") || "-"),
      "Cleaning service: " + (value("service") || "-"),
      "Preferred date: " + (value("date") || "-"),
      "Number of rooms: " + (value("rooms") || "-"),
      "Square footage: " + (value("sqft") || "-"),
      "",
      "Description:",
      value("description") || "-"
    ];
    var n = photos && photos.files ? photos.files.length : 0;
    if (n) {
      lines.push("", "(" + n + " photo" + (n > 1 ? "s" : "") + " to attach to this email)");
    }
    var subject = "Quote request: " + (value("service") || "cleaning") + " (" + name + ")";
    return "mailto:" + EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(lines.join("\n"));
  }

  function fallbackHtml() {
    return 'You can also email us directly at <a href="mailto:' + EMAIL + '">' + EMAIL + "</a>.";
  }

  function endpoint() {
    return (form.getAttribute("data-endpoint") || "").trim();
  }

  function sendToEndpoint(url) {
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";
    setStatus("info", "Sending your request…");
    return fetch(url, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    })
      .then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        form.reset();
        if (date) date.classList.add("is-empty");
        if (photoList) photoList.innerHTML = "";
        if (count) count.textContent = "0 / " + (desc.maxLength > 0 ? desc.maxLength : 500);
        attempted = false;
        setStatus(
          "success",
          "<strong>Thank you! Your request was sent.</strong> We reply within 1 business day. " +
            "For forensic or trauma emergencies, please text us any time."
        );
      })
      .catch(function () {
        setStatus("error", "<strong>Sorry, your request didn’t go through.</strong> Please try again in a moment. " + fallbackHtml());
      })
      .then(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit";
      });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    attempted = true;
    var firstInvalid = validateAll();
    if (firstInvalid) {
      setStatus("error", "Please check the highlighted fields.");
      firstInvalid.focus();
      return;
    }

    var url = endpoint();
    if (url) {
      sendToEndpoint(url);
      return;
    }

    // No endpoint configured yet: hand off to the visitor's email app.
    var hasPhotos = photos && photos.files && photos.files.length;
    setStatus(
      "info",
      "<strong>Almost done, " + escapeHtml(value("first-name")) + ".</strong> Your email app should open with your request filled in. " +
        "Press send to reach us." +
        (hasPhotos ? " Please attach your photos to that email." : "") +
        " Nothing opened? " + fallbackHtml()
    );
    window.location.href = buildMailto();
  });
})();
