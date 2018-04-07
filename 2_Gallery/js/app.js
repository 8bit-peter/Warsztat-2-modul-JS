/**
 * Created by Jacek on 2015-12-16.
 */

/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */
document.addEventListener("DOMContentLoaded", function(){

  var body = document.querySelector('body')
  var images = document.querySelectorAll('.gallery img')

  for(i = 0; i < images.length; i++) {
  images[i].addEventListener('click', function(event) {
    
    var div = document.createElement("div")
    var img = document.createElement("img")
    var button = document.createElement("button")

    div.classList.add("fullScreen")
    img.setAttribute("src", "./"+this.getAttribute("src"))
    button.classList.add("close")
    button.innerText = "Close"
  
    body.appendChild(div)
    div.appendChild(img)
    div.appendChild(button)

    button.addEventListener('click', function(event) {
      
      body.removeChild(div)

    })
    
    //create
    //fill
    //close button

  })
}
  
});