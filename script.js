"use strict";
function q(selector) {
  return document.querySelector(selector);
}

const slideShow = q(".slideshow"),
  navigation = q(".nav"),
  prev = q(".nav__prev"),
  next = q(".nav__next"),
  img = q(".slideshow__image");

/********************/
// enter amount of images loaded here.
/********************/
const totalImages = 16;

navigation.addEventListener("click", function(e) {
  let count = counter();
  if (e.target === next) {
    count++;
    if (count > totalImages) count = 1;
  } else if (e.target === prev) {
    count--;
    if (count < 1) count = totalImages;
  } else {
    stopPropagation();
  }

  img.setAttribute("src", "images/" + count + ".jpg");
});

//uses an array to determine current position in img src attrib
function counter() {
  let count, getAttrib, attribArray, joinArrayIndex;
  getAttrib = img.getAttribute("src");
  attribArray = getAttrib.split("");
  if (attribArray.length > 11) {
    joinArrayIndex = attribArray[7] + attribArray[8];
    count = parseInt(joinArrayIndex);
  } else {
    count = parseInt(attribArray[7]);
  }
  return count;
}

//** Bonus credits**//
//add a css transitioning style where the image slides into view
//add an auto slide
//1s intervals
//user can pause it by hovering over the image
//auto slider pauses when there is a click event
//delay 5s before enabling auto slider
