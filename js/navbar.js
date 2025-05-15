const collapse = document.getElementById("collapse");
const navbar = document.getElementById("navbar");

collapse.addEventListener("click", () => {
    collapse.classList.toggle("open");
    navbar.classList.toggle("open");
})