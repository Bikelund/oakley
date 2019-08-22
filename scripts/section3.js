function checkVisibility() {
    
    const elements = document.querySelectorAll('.contact');

    elements.forEach(function(element) {

        // console.log(element.className);
        // console.log(isInViewPort(element));

        if (isInViewPort(element)) {

            // console.log(element.className);

            anime({
                targets: '.img-3',
                scale: 1.5,
                opacity: 1
            });

            if (element.className === 'contact text-3') {
                element.classList.add('visible-3');
            }

            if (element.className === 'contact images-3') {
                // console.log(element.className);

                // anime({
                //     targets: '.images-3',
                //     scale: 1.5
                // });
            }
        }
        else {

            // console.log(element.className);
            // if (element.className === 'contact text-3' || element.className === 'contact text-3 visible-3') {
            //     element.classList.remove('visible-3');
            // }
            
            element.classList.remove('visible-3');

            anime({
                targets: '.img-3',
                scale: 1,
                opacity: 0
            });
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