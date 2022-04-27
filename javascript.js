let css = document.querySelector("h2");
let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let body = document.querySelector("body");
let button = document.querySelector("#random");

//setzt Startfarben auf rot und gelb
color1.value = "#ff0000";
color2.value = "#ffff00";
setGradient();

function setGradient() {
    body.style.background = "linear-gradient(to right," +   color1.value + "," +  color2.value + ")";    
    css.textContent = body.style.background + ";";
}

function getRandomColors() {
    color1.value = "#" + Math.floor(Math.random()*16777215).toString(16);
    color2.value = "#" + Math.floor(Math.random()*16777215).toString(16);
    setGradient();
    
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", getRandomColors);