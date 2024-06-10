

fetch("https://meowfacts.herokuapp.com/")
  .then((response) => response.json())
  //   .then((json) => console.log(json));
  .then((json) => document.getElementById("api").innerHTML = json.data);

// above is a GET request to retrieve a cat fact using an API

j = 0
catArray = ["cat8.jpg", "cat2.jpg", "cat3.jpg", "cat4.webp", "cat5.webp", "cat6.webp", "cat7.jpg", "cat.webp"]
// 8 images

function catLoad() {
  setInterval(display, 3000)
}

function display() {
  document.getElementById("catImage").src = "images/" + catArray[j]
  j++
  if (j == 8) {
    j = 0
  }
}



// code starts for image change in div 
imgCounter = 0

$(document).ready(function () {
  $("#showdiv").mouseenter(function () {
   

    //Refresh the thumbnail
    $(".photo-container").animate({
      opacity: 0.10,
    }, 200, function () {

      if (imgCounter == 0) {
        $(".photo-info").attr("src", "images/snowman.jpeg");
        imgCounter++
      }
      else if (imgCounter == 1) {
        $(".photo-info").attr("src", "images/tree.jpeg");
        imgCounter++
      }
      else {
        $(".photo-info").attr("src", "images/gift.webp");
        imgCounter=0
      }

      
      //ReloadGallery(currentContext); // Just showing extra logic can be use here...

    }).animate({ opacity: 1 }, 200)

  })
})
// code ends for image change in div 


