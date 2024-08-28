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



darkTheme = true


const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');




const themeButton = document.querySelector('.theme');


themeButton.addEventListener('click',()=>{
    darkTheme = !darkTheme;
    console.log(darkTheme)


    if (darkTheme) {
        sun.classList.add('hide-sun');
        sun.classList.remove('show-sun');
        moon.classList.add('show-moon');
        moon.classList.remove('hide-moon');
    } else {
        sun.classList.add('show-sun');
        sun.classList.remove('hide-sun');
        moon.classList.add('hide-moon');
        moon.classList.remove('show-moon');
    }
});

if (darkTheme) {
    sun.classList.add('hide-sun');
    moon.classList.add('show-moon');
} else {
    sun.classList.add('show-sun');
    moon.classList.add('hide-moon');
}