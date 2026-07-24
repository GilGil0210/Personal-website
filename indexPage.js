const heroImage = document.getElementById("TheFirstPageImage");

window.addEventListener("scroll",() => {
    const scrollY = window.scrollY;

    const opacity = Math.max(1 - scrollY/ 500, 0);

    heroImage.style.opacity = opacity;
})