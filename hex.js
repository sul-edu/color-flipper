

const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","E", "F","G"]

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const container = document.querySelector("#main");


btn.addEventListener("click", () => {
    let hexNumber= "#";

    for(let i = 0; i < 6; i++){
        hexNumber += hex[getRandomNum()];
        // console.log(hexNumber);
        container.style.backgroundColor = hexNumber;
        color.innerHTML = hexNumber;
    }


});


const getRandomNum = () => {
    return Math.floor(Math.random()* hex.length )
}

