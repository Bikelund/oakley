
let textWrapper = document.querySelector('.intro-text1');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline().add({
    targets: '.intro-text',
    delay: 50
}).add({
    targets: '.intro-text1 .letter',
    scale: [4, 1],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: function(el, i) {
      return 300*i;
    }
}).add({
    targets: '.intro-text',
    opacity: [0,1],
    duration: 1800,
    translateY: 20,
    translateX: 20,
    easing: "easeOutExpo",
    delay: function(el, i) {
        return 400 *(i+1);
    }
});

function checkForVisibility() {
    var headers = document.querySelectorAll(".boxes");
    headers.forEach(function(header) {
      if (isElementInViewport(header)) {
        header.classList.add('box-visible');
      } else {
        header.classList.remove('box-visible');
      }
    });
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
    addEventListener('scroll', checkForVisibility);
  }

/* 
function parallax() {
    let chasImg = document.querySelector(".chas");
    let multiplier = 0.2;

    if (isElementInViewport(chasImg)) {
        let distance = elementDistanceFromBottomOfViewport(chasImg);
        console.log(distance);
        chasImg.style.transform = "translateY(" + multiplier * distance + "px)";
    }
}
  
function isElementInViewport (el) {
    let rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    );
}

if (window.addEventListener) {
    addEventListener('DOMContentLoaded', parallax, false); 
    addEventListener('load', parallax, false);
    addEventListener('scroll', parallax, false);
}

function elementDistanceFromBottomOfViewport(el) {
    let rect = el.getBoundingClientRect();

    return window.innerHeight - rect.top;
} */