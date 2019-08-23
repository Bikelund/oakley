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


const nextGlasses = document.querySelectorAll(".change-glasses-2");
nextGlasses.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let img1;
        if(e.target.dataset.gender === "male"){
            img1 = document.querySelector(".glasses-men-2");
        }
        else{
            img1 = document.querySelector(".glasses-women-2");
        }
        const glasses = anime.timeline();
        glasses.add({
            targets: img1,
            opacity: [1, 0],
            duration: 300,
            easing: "linear",
            translateX: -100,
        });
        setTimeout(() => {
            const id = img1.dataset.id;
            if(e.target.dataset.gender === "male"){
                switch(id){
                    case "1":
                        img1.src = "./images/s2-first-glasses2.jpg";
                        img1.dataset.id = "2";
                        break;
                    case "2":
                        img1.src = "./images/s2-first-glasses3.jpg";
                        img1.dataset.id = "3";
                        break;
                    case "3":
                        img1.src = "./images/s2-first-glasses4.jpg";
                        img1.dataset.id = "4";
                        break;
                    default:
                        img1.src = "./images/s2-first-glasses1.jpg";
                        img1.dataset.id = "1";
                        break;
                }
            }
            else{
                switch(id){
                    case "1":
                        img1.src = "./images/s2-second-glasses2.jpg";
                        img1.dataset.id = "2";
                        break;
                    case "2":
                        img1.src = "./images/s2-second-glasses3.jpg";
                        img1.dataset.id = "3";
                        break;
                    case "3":
                        img1.src = "./images/s2-second-glasses4.jpg";
                        img1.dataset.id = "4";
                        break;
                    default:
                        img1.src = "./images/s2-second-glasses1.jpg";
                        img1.dataset.id = "1";
                        break;
                }
            }
        }, 500);
        glasses.add({
            targets: img1,
            translateX: 100,
            duration: 300,
            easing: "linear",
        })
        glasses.add({
            targets: img1,
            opacity: [0, 1],
            duration: 300,
            easing: "easeInQuad",
            translateX: 0,
        });
    });
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