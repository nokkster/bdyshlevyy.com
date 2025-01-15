window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
      document.querySelector('header').classList.add('scrolled');
  } else {
      document.querySelector('header').classList.remove('scrolled');
  }
});




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

  const showPopupBtn4 = document.getElementById("show-popup-btn-4");
  showPopupBtn4.addEventListener("click", function() {
      togglePopup("popup-4");
  });

  const showPopupBtn5 = document.getElementById("show-popup-btn-5");
  showPopupBtn5.addEventListener("click", function() {
      togglePopup("popup-5");
  });

  const showPopupBtn6 = document.getElementById("show-popup-btn-6");
  showPopupBtn6.addEventListener("click", function() {
      togglePopup("popup-6");
  });

  const showPopupBtn7 = document.getElementById("show-popup-btn-7");
  showPopupBtn7.addEventListener("click", function() {
      togglePopup("popup-7");
  });

  const showPopupBtn8 = document.getElementById("show-popup-btn-8");
showPopupBtn8.addEventListener("click", function() {
    togglePopup("popup-8");
});

const showPopupBtn9 = document.getElementById("show-popup-btn-9");
showPopupBtn9.addEventListener("click", function() {
    togglePopup("popup-9");
});

const showPopupBtn10 = document.getElementById("show-popup-btn-10");
showPopupBtn10.addEventListener("click", function() {
    togglePopup("popup-10");
});

const showPopupBtn11 = document.getElementById("show-popup-btn-11");
showPopupBtn11.addEventListener("click", function() {
    togglePopup("popup-11");
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


