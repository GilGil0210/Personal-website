const heroImage = document.getElementById("TheFirstPageImage");

window.addEventListener("scroll",() => {
    const scrollY = window.scrollY;

    const opacity = Math.max(1 - scrollY/ 500, 0);

    heroImage.style.opacity = opacity;
})

const wholeContainer = document.getElementById("lowerconatiner");
window.addEventListener("scroll",() => {
    const scrollY = window.scrollY;

    const opacity = Math.max(scrollY/ 1000, 0);

    lowerconatiner.style.opacity = opacity;
})