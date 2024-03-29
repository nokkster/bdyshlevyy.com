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
      popup.classList.toggle("active");
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
  
    const closeBtns = document.querySelectorAll(".popup .close-btn");
    closeBtns.forEach(function(btn) {
      btn.addEventListener("click", function (event) {
        event.stopPropagation();
        const popupId = btn.closest('.popup').id;
        togglePopup(popupId);
      });
    });
});


