var myID = document.querySelector(".bottom-mobile-form");
var dockedNav = document.querySelector(".docked-nav");

var bottomFormScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 900) {
    myID.className = "bottom-mobile-form show"
  } else {
    myID.className = "bottom-mobile-form hide"
  }
};

window.addEventListener("scroll", bottomFormScrollFunc);



var dockedNavScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 440) {
    dockedNav.className = "docked-nav show"
  } else {
    dockedNav.className = "docked-nav hide"
  }
};

window.addEventListener("scroll", dockedNavScrollFunc);