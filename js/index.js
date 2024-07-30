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

/* Swiper (Slider) */
const swiper = new Swiper(".swiper", {
    loop: true,
    centeredSlides: true,
    slidesPerView: 4,
    spaceBetween: 0,
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

function updateSlidesScale() {
    let allSlides = document.querySelectorAll(".swiper-slide");
    allSlides.forEach((slide) => {
        slide.style.height = "414px";
        slide.style.opacity = "0.5";
    });

    let activeSlide = document.querySelector(".swiper-slide-active");
    if (activeSlide) {
        activeSlide.style.height = "828px";
        activeSlide.style.opacity = "1";

        let nextSlide = activeSlide.nextElementSibling;
        let prevSlide = activeSlide.previousElementSibling;
        if (nextSlide) {
            nextSlide.style.height = "628px";
            nextSlide.style.opacity = "0.75";
        }
        if (prevSlide) {
            prevSlide.style.height = "628px";
            prevSlide.style.opacity = "0.75";
        }
    }
}
