


const nextGlassesBtnS2 = document.querySelector(".change-glasses-2");
nextGlassesBtnS2.addEventListener("click", () => {
    const img1 = document.querySelector(".glasses-2");
    const glasses = anime.timeline();
    glasses.add({
        targets: img1,
        opacity: [1, 0],
        duration: 500,
        easing: "linear",
        translateX: -100,
    })
    setTimeout(() => {
        const id = img1.dataset.id;
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
    }, 500);
    glasses.add({
        targets: img1,
        translateX: 100,
        duration: 0,
        easing: "linear",
    });
    glasses.add({
        targets: img1,
        opacity: [0, 1],
        duration: 500,
        easing: "easeInQuad",
        translateX: 0,
    });
})