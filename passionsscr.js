document.addEventListener("DOMContentLoaded", function () {
  function togglePopup(popupId) {
    const popup = document.getElementById(popupId);
    const video = popup.querySelector("video"); // Get the video element inside the popup
    const iframe = popup.querySelector("iframe"); // Get the iframe element inside the popup

    popup.classList.toggle("active");

    // Pause the video when the popup is closed
    if (!popup.classList.contains("active") && video) {
      video.pause();
    }

    // Pause the iframe video when the popup is closed
    if (!popup.classList.contains("active") && iframe) {
      const iframeSrc = iframe.src;
      iframe.src = iframeSrc; // Reloads the iframe, stopping the video
    }
  }
  
  const showPopupBtn1 = document.getElementById("show-popup-btn-1");
  showPopupBtn1.addEventListener("click", function() {
    togglePopup("popup-1");
  });

  const showPopupBtn2 = document.getElementById("show-popup-btn-2");
  showPopupBtn2.addEventListener("click", function() {
    togglePopup("popup-2");
  });

  const showPopupBtn3 = document.getElementById("show-popup-btn-3");
  showPopupBtn3.addEventListener("click", function() {
    togglePopup("popup-3");
  });

  const closeBtns = document.querySelectorAll(".popup .close-btn");
  closeBtns.forEach(function(btn) {
    btn.addEventListener("click", function (event) {
      event.stopPropagation();
      const popupId = btn.closest('.popup').id;
      togglePopup(popupId);
    });
  });
});
