document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = 1;
    document.body.style.opacity = 1;
    document.querySelector('.logo').style.opacity = 1;
    document.querySelector('.button').style.opacity = 1;
    document.querySelector('.concept').style.opacity = 1;
});
document.addEventListener("DOMContentLoaded", function () {
    var textSlide = document.querySelector(".full-screen-text");

    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
        var elementPosition = textSlide.offsetTop;

        if (scrollPosition >= elementPosition - window.innerHeight / 2) {
            textSlide.classList.add("active");
        }
    });
});
const dropdown = document.querySelector('.dropdown');
const box = document.querySelector('.box');

dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active');
});
