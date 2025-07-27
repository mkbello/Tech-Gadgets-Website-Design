const toggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = mobileMenu.querySelectorAll('a');

toggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

const carousel = document.getElementById('carousel');
const totalSlides = carousel.children.length;
let index = 0;

function showSlide(i) {
    index = (i + totalSlides) % totalSlides;
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

document.getElementById('prev').addEventListener('click', () => showSlide(index - 1));
document.getElementById('next').addEventListener('click', () => showSlide(index + 1));

setInterval(() => showSlide(index + 1), 5000);
