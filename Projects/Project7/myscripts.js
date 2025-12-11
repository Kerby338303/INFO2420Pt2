// External JavaScript for Project 7 - Rent A Pet

var imgArray = [];
var titleArray = [];

// Preload rollover and large images
function preloadImages() {
  var files = [
    "Images/print2.jpg",
    "Images/logo2.jpg",
    "Images/fullsize/image1lg.jpg",
    "Images/fullsize/image2lg.jpg",
    "Images/fullsize/image3lg.jpg",
    "Images/fullsize/image4lg.jpg"
  ];
  for (var i = 0; i < files.length; i++) {
    var img = new Image();
    img.src = files[i];
  }
}

// Set up arrays for image swap
function loadArrays() {
  imgArray[0] = new Image();
  imgArray[0].src = "Images/fullsize/image1lg.jpg";
  titleArray[0] = "Cat and dog friends";

  imgArray[1] = new Image();
  imgArray[1].src = "Images/fullsize/image2lg.jpg";
  titleArray[1] = "Hunting dogs";

  imgArray[2] = new Image();
  imgArray[2].src = "Images/fullsize/image3lg.jpg";
  titleArray[2] = "Girl riding a horse";

  imgArray[3] = new Image();
  imgArray[3].src = "Images/fullsize/image4lg.jpg";
  titleArray[3] = "Pot-bellied pig in the grass";
}

// Called by thumbnail mouseover
function swapImage(index) {
  var bigPic = document.getElementById("bigpic");
  var bigTitle = document.getElementById("bigtitle");
  if (bigPic && bigTitle && imgArray[index]) {
    bigPic.src = imgArray[index].src;
    bigTitle.innerHTML = titleArray[index];
  }
}

// Onload handler to be called from body tag
function initPage() {
  preloadImages();
  loadArrays();
}
