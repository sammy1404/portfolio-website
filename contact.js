document.addEventListener('DOMContentLoaded', function() {
    // Select the element to observe and the target element to be affected
    const socialsElement = document.querySelector('.socials');
    const contactSection = document.getElementById('contact');
    const footer = document.getElementById('footer');
    const element1 = document.getElementById('svg1');
    const element2 = document.getElementById('svg2');
    const element3 = document.getElementById('svg3');
    const element4 = document.getElementById('svg4');
    const element5 = document.getElementById('svg5');
    const element6 = document.getElementById('svg6');


    // Callback function to execute when the element is intersecting
    const handleIntersect = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                socialsElement.classList.add('onScroll');
                element1.classList.add('onScroll');
                element2.classList.add('onScroll');
                element3.classList.add('onScroll');
                element4.classList.add('onScroll');
                element5.classList.add('onScroll');
                element6.classList.add('onScroll');
            } else {
                socialsElement.classList.remove('onScroll');
                element1.classList.remove('onScroll');
                element2.classList.remove('onScroll');
                element3.classList.remove('onScroll');
                element4.classList.remove('onScroll');
                element5.classList.remove('onScroll');
                element6.classList.remove('onScroll');
            }
        });
    };

    // Options for the observer (how much of the element must be visible to trigger the callback)
    const options = {
        root: null, // Use the viewport as the root
        threshold: 0.9 // Trigger when 50% of the element is visible
    };

    // Create an Intersection Observer
    const observer = new IntersectionObserver(handleIntersect, options);

    // Start observing the contact section
    observer.observe(contactSection);

});
