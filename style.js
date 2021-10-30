// let i = 0;
// let images = [];
// let time = 3000;

// images[0] = "picture/close.gif";
// images[1] = "picture/open.gif";

// function changImg() {
//   document.slide.src = images[i];

//   if (i < images.length - 1) {
//     i++;
//   } else {
//     i = 0;
//   }

//   setTimeout("changImg"(), time);
// }
// window.onload = changImg;

var i = 0; // Start Point
var images = []; // Images Array
var time = 600000; // Time Between Switch

// Image List
images[0] = "picture/open.gif";
images[1] = " picture/close.gif";

// Change Image
function changeImg() {
  document.slide.src = images[i];

  // Check If Index Is Under Max
  if (i < images.length - 1) {
    // Add 1 to Index
    i++;
  } else {
    // Reset Back To O
    i = 0;
  }

  // Run function every x seconds
  setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload = changeImg;
