
var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")

var Glow = 0

btn.addEventListener("click" , function(){
    if(Glow == 0){
   bulb.style.backgroundColor = "yellow"
      console.log("clicked")
      Glow = 1
    } else {
        bulb.style.backgroundColor ="transparent"
        console.log("again clicked")
        Glow = 0 
    }
}) 