/* Animates the text */
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

let futureText = document.querySelector('.future');
futureText.innerHTML = futureText.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter-future'>$&</span>");

anime.timeline({loop: true})
.add({
  targets: '.letter-future',
  translateX: [40,0],
  translateZ: 0,
  opacity: [0,1],
  easing: "easeOutExpo",
  duration: 1000,
  delay: function(el, i) {
    return 100 * (i+1);
  }
}).add({
  targets: '.letter-future',
  color: '#F3F719',
  easing: "easeInExpo",
  duration: 600,
  delay: function(el, i) {
    return 30 * (i+1);
  }
}).add({
  targets: '.letter-future',
  color: '#000',
  easing: "easeOutExpo",
  duration: 600,
  delay: function(el, i) {
    return 30 * (i+1);
  }
}).add({
  targets: '.letter-future',
  translateX: [0,-30],
  opacity: [1,0],
  easing: "easeInExpo",
  duration: 1000,
  delay: function(el, i) {
    return 100 * (i+1);
  }
});

/* The Three Bars */

function parallax() {
  let headers = document.querySelectorAll(".mash");
  let mashOdd = document.querySelectorAll('.mashOdd');
  let multiplier = 0.3;
  
  headers.forEach(function(header) {
    if (isElementInViewport(header)) {
      let distance = elementDistanceFromBottomOfViewport(header);
      header.style.transform = "translateY(-" + multiplier * distance + "px)";
    }
  });
  mashOdd.forEach(function(odd) {
    if (isElementInViewport(odd)) {
      let distance = elementDistanceFromBottomOfViewport(odd);
      odd.style.transform = "translateY(-" + 0.2 * distance + "px)";
    }
  });
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
}

/* Animates the menubar */
anime({
  targets: '.menu-link',
  color: '#F3F719',
  duration: 3000,
  direction: 'alternate',
  easing: 'easeInOutCubic'
});

/* Animates the underline */
anime.timeline()
.add({
  targets: '.line',
  scaleX: [0,1],
  opacity: [0,1],
  easing: "easeInOutExpo",
  duration: 1000,
  delay: 2500
}).add({
  targets: '.line',
  backgroundColor: '#F3F719',
  easing: "easeInOutExpo",
  duration: 500,
  scaleY: [1,1.5]
});
