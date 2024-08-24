



let min = document.getElementById("min")
let max = document.getElementById("max")
let score = document.getElementById("score")
let enter = document.getElementById("enter")

let btn = document.querySelectorAll("#keypad > button")

for(let i=0 ; i<btn.length; i++){
  
  btn[i].addEventListener("click" , function(){
    score.innerText += btn[i].innerHTML
  })
}
enter.addEventListener("click", function(){

    if(parseInt(score.innerText) < parseInt(min.innerText)){
      min.innerText = score.innerText
    }
    
    else if(parseInt(score.innerText) > parseInt(max.innerText)){
      max.innerText = score.innerText
    }

    score.innerText = ""
})