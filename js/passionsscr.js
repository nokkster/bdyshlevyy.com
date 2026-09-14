window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (!header) return;

    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", function () {

    function openPopup(popupId) {
        const popup = document.getElementById(popupId);

        if (!popup) return;

        document.querySelectorAll(".popup.active").forEach(function (openedPopup) {
            closePopup(openedPopup);
        });

        popup.classList.add("active");
        document.body.classList.add("popup-open");
    }

    function closePopup(popup) {
        if (!popup) return;

        const video = popup.querySelector("video");
        const iframe = popup.querySelector("iframe");

        popup.classList.remove("active");

        if (!document.querySelector(".popup.active")) {
            document.body.classList.remove("popup-open");
        }

        if (video) {
            video.pause();
        }

        if (iframe) {
            const iframeSrc = iframe.src;
            iframe.src = "";
            iframe.src = iframeSrc;
        }
    }

    document.querySelectorAll("button[id^='show-popup-btn-']").forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();

            const number = button.id.replace("show-popup-btn-", "");
            openPopup("popup-" + number);
        });
    });

    document.querySelectorAll(".popup .close-btn").forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();

            closePopup(button.closest(".popup"));
        });
    });

    document.querySelectorAll(".popup .overlay").forEach(function (overlay) {
        overlay.addEventListener("click", function (event) {
            event.preventDefault();

            closePopup(overlay.closest(".popup"));
        });
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            const openedPopup = document.querySelector(".popup.active");

            if (openedPopup) {
                closePopup(openedPopup);
            }
        }
    });
});