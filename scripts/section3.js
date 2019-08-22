function checkVisibility() {
    
    const elements = document.querySelectorAll('.contact');

    elements.forEach(function(element) {

        if (isInViewPort(element)) {

            // console.log(element.className);

            if (element.className === 'contact text-3') {
                element.classList.add('visible-3');
            }

            if (element.className === 'contact images-3') {
                console.log(element.className);
            }
        }
        else {
            // if (element.className === 'contact text-3' || element.className === 'contact text-3 visible-3') {
            //     element.classList.remove('visible-3');
            // }
            
            element.classList.remove('visible-3');
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