function slideshow(img){
  document.getElementById("main-img").src=img;
}



var i = 0;
function slideshow(){
  var images = ["img/13.jpg","img/12.jpg","img/11.jpg","img/14.jpg"];
  document.getElementById("main-img").src =images[i];
  i++;
  if(i>=images.length){
    i = 0;
  }
  console.log(i);
}
setInterval("slideshow()",1000);