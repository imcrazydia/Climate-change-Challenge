document.getElementById("fakeTemp").addEventListener("mouseover", function() {
  document.getElementById("background").style.backgroundImage = "url(img/back2.jpg)"
}, false);
document.getElementById("fakeTemp").addEventListener("mouseout", function() {
  document.getElementById("background").style.backgroundImage = "url(img/back.jpg)"
}, false);

let slideshow = document.getElementById("slideshow");

var i= 0;
var images=["img/ijsbeer1.jpg", "img/ijsbeer2.jpg", "img/klimaat1.jpg", "img/klimaat2.jpg", "img/klimaat3.jpg"];

 function changeImg(){
   slideshow.src = images[i];
   if(i < images.length -1) {
     i++;
   } else {
     i= 0;
   }

  setTimeout("changeImg()",2500);
 }

changeImg();
