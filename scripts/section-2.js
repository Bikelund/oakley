(function(){


function checkForVisibility() {
    var welcomeText = document.querySelector(".welcome-first-2");
    if (isElementInViewport(welcomeText)) {
        welcomeText.classList.add("welcome-first-2-visible");
    }else{
        welcomeText.classList.remove("welcome-first-2-visible");
    }
}
function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    );
}

if (window.addEventListener) {
addEventListener('DOMContentLoaded', checkForVisibility, false); 
addEventListener('load', checkForVisibility, false);
addEventListener("scroll", checkForVisibility);
}



const leftArrow = document.querySelectorAll(".left-arrow-2");
const rightArrow = document.querySelectorAll(".right-arrow-2");

leftArrow.forEach(btn => {
    btn.addEventListener("click", event => {
        let btnType;
        if(event.target.dataset.gender === "male"){
            btnType = "male";
        }else{
            btnType = "female";
        }
        const id = +document.querySelector(`.glasses-${btnType}-2`).dataset.id;
        const img = document.querySelector(`.glasses-${btnType}-2`);
        const changeGlasses = anime.timeline();
        changeGlasses.add({
            targets: img,
            duration: 500,
            translateX: -100,
            opacity: [1, 0],
            easing: "linear",
            complete: () => {
                switch(id){
                    case 1:
                        img.src = `./images/${btnType}-2.jpg`;
                        img.dataset.id = 2;
                        break;
                    case 2:
                        img.src = `./images/${btnType}-3.jpg`;
                        img.dataset.id = 3;
                        break;
                    case 3:
                        img.src = `./images/${btnType}-4.jpg`;
                        img.dataset.id = 4;
                        break;
                    default:
                        img.src = `./images/${btnType}-1.jpg`;
                        img.dataset.id = 1;
                        break;
                }
            }
        })
        .add({
            targets: img,
            translateX: [100, 0],
            duration: 500,
            opacity: [0, 1],
            easing: "easeInQuad"
        });
    })
})

rightArrow.forEach(btn => {
    btn.addEventListener("click", event => {
        let btnType;
        if(event.target.dataset.gender === "male"){
            btnType = "male";
        }else{
            btnType = "female";
        }
        const id = +document.querySelector(`.glasses-${btnType}-2`).dataset.id;
        const img = document.querySelector(`.glasses-${btnType}-2`);
        const changeGlasses = anime.timeline();
        changeGlasses.add({
            targets: img,
            duration: 500,
            translateX: 100,
            opacity: [1, 0],
            easing: "linear",
            complete: () => {
                switch(id){
                    case 1:
                        img.src = `./images/${btnType}-4.jpg`;
                        img.dataset.id = 4;
                        break;
                    case 2:
                        img.src = `./images/${btnType}-1.jpg`;
                        img.dataset.id = 1;
                        break;
                    case 3:
                        img.src = `./images/${btnType}-2.jpg`;
                        img.dataset.id = 2;
                        break;
                    default:
                        img.src = `./images/${btnType}-3.jpg`;
                        img.dataset.id = 3;
                        break;
                }
            }
        })
        .add({
            targets: img,
            translateX: [-100, 0],
            duration: 500,
            opacity: [0, 1],
            easing: "easeInQuad"
        });
    })
})

const mensBtn = document.querySelector(".mens-btn");

mensBtn.addEventListener("click", () => {
    let overlayControl = anime.timeline().add({
        targets: ".overlay-2",
        clipPath: " polygon(50% 50%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1000,
        easing: "easeInQuad"
    })
    overlayControl.add({
        targets: ".welcome-first-2",
        opacity: [1, 0],
        duration: 1000,
        easing: "easeInQuad",
        complete: () => {
            document.querySelector(".mens-btn").style.pointerEvents = "none";
            document.querySelector(".welcome-first-2").style.zIndex = "10";
            document.querySelector(".womens-btn").style.pointerEvents = "auto";
            document.querySelector(".welcome-second-2").style.zIndex = "20";
        }
    }, "-=1000");
    overlayControl.add({
        targets: ".womens-fact",
        opacity: 0,
        duration: 500,
        easing: "linear"
    }, 0)
    .add({
        targets: ".welcome-second-2",
        opacity: [0, 1],
        duration: 1000,
        easing: "easeInQuad",
        translateY: [0, 50],
        begin: () => {
            document.querySelector(".welcome-second-2").style.display = "initial";
        },
    })
    .add({
        targets: ".intro-2-men",
        opacity: [0, 1],
        timeline: "easeInQuad",
        duration: 1000
    }, 200)
    .add({
        targets: ".mens-fact",
        opacity: [0, 1],
        duration: 1000,
        easing: "easeInQuad"
    }, 1000);
});

const womensBtn = document.querySelector(".womens-btn");
womensBtn.addEventListener("click", () => {
    let overlayControl = anime.timeline().add({
        targets: ".overlay-2",
        clipPath: ["polygon(0% 0%, 100% 0%, 50% 50%, 0% 100%)"],
        duration: 1000,
        easing: "linear"
    });
    overlayControl.add({
        targets: ".mens-fact",
        opacity: [1, 0],
        duration: 1000,
        easing: "linear"
    }, 0)
    overlayControl.add({
        targets: ".womens-fact",
        opacity: [0, 1],
        duration: 1000,
        easing: "easeInQuad"
    });
    overlayControl.add({
        targets: ".welcome-second-2",
        opacity: [1, 0],
        duration: 1000,
        easing: "linear",
        complete: () => {
            document.querySelector(".womens-btn").style.pointerEvents = "none";
            document.querySelector(".welcome-second-2").style.zIndex = "10";
            document.querySelector(".mens-btn").style.pointerEvents = "auto";
            document.querySelector(".welcome-first-2").style.zIndex = "20";
        }
    }, 0);
    overlayControl.add({
        targets: ".welcome-first-2",
        opacity: [0, 1],
        duration: 1000,
        easing: "easeInQuad",
        translateY: [0 ,100]
    }, 0);
});



}());