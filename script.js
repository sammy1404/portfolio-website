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



document.querySelectorAll('.toggle-color-pickers').forEach(button => {
    button.addEventListener('click', () => {
        const colorPickers = document.querySelector('.color-pickers');
        colorPickers.classList.toggle('visible');
    });
});


window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav'); // Adjust selector as needed
    const navHeight = nav.offsetHeight;

    if (window.scrollY > navHeight) {
        nav.classList.add('nav-on-scroll');
    } else {
        nav.classList.remove('nav-on-scroll');
    }
});


const sections = document.querySelectorAll('.animate-in');
const options = {
    root: null, // Use the viewport as the root
    threshold: 0.5 // Trigger when 10% of the section is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('animate-in');
            entry.target.classList.add('slide-in');
            observer.unobserve(entry.target); // Stop observing once the class is changed
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});


document.addEventListener("DOMContentLoaded", () => {
    // Animate socials
    const socials = document.querySelector(".socials");
    if (socials) {
        socials.classList.add("loaded");
    }

    // Set observer options
    const options = {
        root: null, // uses viewport
        rootMargin: "0px 0px -20% 0px", // triggers earlier in the viewport
        threshold: 0.1 // 10% of the element is visible
    };

    // Select all elements with the class 'animate-projects'
    const projects = document.querySelectorAll('.animate-projects');

    // Create Intersection Observer
    const projectObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('animate-projects');
                entry.target.classList.add('slide-projects-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Observe each project
    projects.forEach(project => {
        projectObserver.observe(project);
    });
});
