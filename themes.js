darkTheme = true


const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const themeButton = document.querySelector('.theme');



const mobileThemeButton = document.querySelector('.menu .theme');
const sunM = document.querySelector('.menu .sun');
const moonM = document.querySelector('.menu .moon');


themeButton.addEventListener('click',()=>{
    darkTheme = !darkTheme;
    console.log(darkTheme)


    if (darkTheme) {
        sun.classList.add('hide-sun');
        sun.classList.remove('show-sun');
        moon.classList.add('show-moon');
        moon.classList.remove('hide-moon');


        sunM.classList.add('hide-sun');
        sunM.classList.remove('show-sun');
        moonM.classList.add('show-moon');
        moonM.classList.remove('hide-moon');
        document.body.classList.remove('light-theme');
    } else {
        sun.classList.add('show-sun');
        sun.classList.remove('hide-sun');
        moon.classList.add('hide-moon');
        moon.classList.remove('show-moon');


        sunM.classList.add('show-sun');
        sunM.classList.remove('hide-sun');
        moonM.classList.add('hide-moon');
        moonM.classList.remove('show-moon');
        document.body.classList.add('light-theme');
    }
});





mobileThemeButton.addEventListener('click',()=>{
    darkTheme = !darkTheme;
    console.log(darkTheme)


    if (darkTheme) {
        sunM.classList.add('hide-sun');
        sunM.classList.remove('show-sun');
        moonM.classList.add('show-moon');
        moonM.classList.remove('hide-moon');


        sun.classList.add('hide-sun');
        sun.classList.remove('show-sun');
        moon.classList.add('show-moon');
        moon.classList.remove('hide-moon');
        document.body.classList.remove('light-theme');
    } else {
        sunM.classList.add('show-sun');
        sunM.classList.remove('hide-sun');
        moonM.classList.add('hide-moon');
        moonM.classList.remove('show-moon');


        sun.classList.add('show-sun');
        sun.classList.remove('hide-sun');
        moon.classList.add('hide-moon');
        moon.classList.remove('show-moon');
        document.body.classList.add('light-theme');
    }
});

if (darkTheme) {
    sun.classList.add('hide-sun');
    moon.classList.add('show-moon');
} else {
    sun.classList.add('show-sun');
    moon.classList.add('hide-moon');
}

