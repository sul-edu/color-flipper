// console.log("hello");
const colors = ["red", "blue", "green", "rgba(132,120,180)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const container = document.querySelector("#main")

btn.addEventListener("click", function(){
   //change the color of the body
   let randomNumber = getRandomNum();
  container.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber]

});

const getRandomNum = () => {
    return Math.floor(Math.random() * colors.length);
}



