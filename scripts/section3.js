function checkVisibility() {
    
    const elements = document.querySelectorAll('.contact');

    elements.forEach(function(element) {

        // console.log(element);

        if (isInViewPort(element)) {
            element.classList.add('contact-section-visible');
        }
        else {
            element.classList.remove('contact-section-visible');
        }
    });
}

function isInViewPort(element) {
    
    const dimensions = element.getBoundingClientRect();

    // console.log(dimensions);

    return (
        dimensions.top >= 0 &&
        dimensions.left >= 0 &&
        dimensions.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        dimensions.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', checkVisibility, false);
    window.addEventListener('load', checkVisibility, false);
    window.addEventListener('scroll', checkVisibility, false);
}