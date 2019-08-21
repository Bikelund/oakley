
let textWrapper = document.querySelector('.intro-text1');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline().add({
    targets: '.intro-text',
    delay: 100
}).add({
    targets: '.intro-text1 .letter',
    scale: [4, 1],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: function(el, i) {
      return 400*i;
    }
}).add({
    targets: '.intro-text',
    opacity: [0,1],
    duration: 2000,
    translateY: 20,
    translateX: 20,
    easing: "easeOutExpo",
    delay: function(el, i) {
        return 400 *(i+1);
    }
});