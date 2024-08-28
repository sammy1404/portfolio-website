// Hamburger Menu
menuActive = false


const hamMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');
hamMenu.addEventListener('click',()=>{
    menuActive = !menuActive;
    hamMenu.classList.toggle('active')
    menu.classList.toggle('active')
})


document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0;
    const nav = document.querySelector('nav'); // Adjust selector as needed

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if ((scrollTop > lastScrollTop)&&!menuActive) {
            // Scrolling down
            nav.style.transform = 'translateY(-100%)'; // Hide the navbar
        } else {
            // Scrolling up
            nav.style.transform = 'translateY(0)'; // Show the navbar
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });
});

