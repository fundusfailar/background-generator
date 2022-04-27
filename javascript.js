const h1 = document.querySelector("h1");
const css = document.querySelector("h2");
let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let body = document.querySelector("body");
let button = document.querySelector("#random");

function aRandomColor() {
    return  "#" + Math.floor(Math.random()*16777215).toString(16);
}
getRandomColors();

function setGradient() {
    body.style.background = "linear-gradient(to right," +   color1.value + "," +  color2.value + ")";    
    css.textContent = body.style.background + ";";
}

function getRandomColors() {
    color1.value = aRandomColor();
    color2.value = aRandomColor();
    setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", getRandomColors);