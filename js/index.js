/* Header Menus */
const navigationMenu = document.querySelector("#navigation-menu");
const burgerButton = document.querySelector("#burger-button");

/* Opening Burger Menu (Mobile version) */
const onBurgerMenuClick = () => {
    if (navigationMenu.classList.contains("active")) {
        navigationMenu.classList.remove("active");
    } else {
        navigationMenu.classList.add("active");
    }
};
burgerButton.addEventListener("click", onBurgerMenuClick);

/* Closing Burger Menu if click not in Burger Menu */
document.addEventListener("click", (event) => {
    if (
        !burgerButton.contains(event.target) &&
        !navigationMenu.contains(event.target) &&
        navigationMenu.classList.contains("active")
    ) {
        navigationMenu.classList.remove("active");
    }
});

/* Swiper (Slider) & Init Settings */
let swiper = initializeSwiper();
function initializeSwiper() {
    return new Swiper(".swiper", {
        loop: true,
        centeredSlides: true,
        slidesPerView: window.innerWidth < 600 ? 2 : 4,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        on: {
            init: updateSlidesScale,
            slideChangeTransitionStart: updateSlidesScale,
            slideChangeTransitionEnd: updateSlidesScale,
        },
    });
}

/* On Device Width Change Handler */
window.addEventListener("resize", () => {
    if (
        (window.innerWidth <= 600 && swiper.params.slidesPerView !== 3) ||
        (window.innerWidth > 600 && swiper.params.slidesPerView !== 4)
    ) {
        swiper.destroy(true, true);
        swiper = initializeSwiper();
    }
});

/* Slides Width Changer */
function updateSlidesScale() {
    let allImages = document.querySelectorAll(".swiper-slide img");
    allImages.forEach((img) => {
        img.style.transform = "scale(0.6)";
        img.style.opacity = "0.5";
    });

    let activeImage = document.querySelector(".swiper-slide-active img");
    if (activeImage) {
        activeImage.style.transform = "scale(1)";
        activeImage.style.opacity = "1";
    }

    let nextImage =
        activeImage.parentElement.nextElementSibling.querySelector("img");
    let prevImage =
        activeImage.parentElement.previousElementSibling.querySelector("img");
    if (nextImage) {
        nextImage.style.transform = "scale(0.8)";
        nextImage.style.opacity = "0.75";
        /* nextImage.style.marginLeft = "0";
        nextImage.style.marginRight = "0"; */
    }
    if (prevImage) {
        prevImage.style.transform = "scale(0.8)";
        prevImage.style.opacity = "0.75";
        /* prevImage.style.marginLeft = "0";
        prevImage.style.marginRight = "0"; */
    }

    let secondNextImage =
        nextImage?.parentElement.nextElementSibling?.querySelector("img");
    let secondPrevImage =
        prevImage?.parentElement.previousElementSibling?.querySelector("img");
    if (secondNextImage) {
        secondNextImage.style.transform = "scale(0.5)";
        secondNextImage.style.opacity = "0.5";
        /* secondNextImage.style.marginRight = "50%"; */
    }
    if (secondPrevImage) {
        secondPrevImage.style.transform = "scale(0.5)";
        secondPrevImage.style.opacity = "0.5";
        /* secondPrevImage.style.marginLeft = "50%"; */
    }
}
