window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    document.querySelector("header").classList.add("scrolled");
  } else {
    document.querySelector("header").classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  function togglePopup(popupId) {
    const popup = document.getElementById(popupId);
    const video = popup.querySelector("video");
    const iframe = popup.querySelector("iframe");

    popup.classList.toggle("active");

    if (!popup.classList.contains("active") && video) {
      video.pause();
    }

    if (!popup.classList.contains("active") && iframe) {
      const iframeSrc = iframe.src;
      iframe.src = iframeSrc;
    }
  }

  document.querySelectorAll("button[id^='show-popup-btn-']").forEach(function (button) {
    button.addEventListener("click", function () {
      const number = button.id.replace("show-popup-btn-", "");
      togglePopup("popup-" + number);
    });
  });

  document.querySelectorAll(".popup .close-btn").forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      event.stopPropagation();
      const popupId = btn.closest(".popup").id;
      togglePopup(popupId);
    });
  });
});