function checkVisibility() {
    let element = document.querySelector('.contact-text-3');
    
    console.log(isInViewPort(element));

    if (isInViewPort(element)) {
        element.classList.add('contact-text-visible-3');
    }
    else {
        element.classList.remove('contact-text-visible-3');
    }
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