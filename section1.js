
let textWrapper = document.querySelector('.intro-text1');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline().add({
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
})



anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: function(el, i) {
      return 70*i;
    }
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });