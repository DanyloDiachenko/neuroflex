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
