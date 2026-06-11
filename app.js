//canvas and its drawing context
const canvas = document.querySelector("#drawing-board");
const ctx = canvas.getContext("2d");

//Canvas Size
function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 80;
}
resizeCanvas();
//console.log(canvas.width, canvas.height);

//Handle browser resizing
window.addEventListener("resize", resizeCanvas);

//Brush Appearence
ctx.lineCap = "round";
ctx.lineJoin = "round";

//State Variables
let currentColor = "black";
let currentWidth = 5;
let isDrawing = false;
let isErasing = false;

console.log(currentColor);
console.log(currentWidth);
console.log(isDrawing);
console.log(isErasing);

//Select all color boxes
const colorBoxes = document.querySelectorAll(".color-box");
//This will return a NodeList

//Loop through every color box
colorBoxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        const selectedColor = box.dataset.color;
        currentColor = selectedColor;
        isErasing = false;  //Turn-off eraser when user clicks color
        eraserBtn.classList.remove("active"); //Remove active state from eraser button

        //Remove active class from all color
        colorBoxes.forEach((color) =>{
            color.classList.remove("active");
        });

        //Highlight selected color
        box.classList.add("active");
        //console.log(currentColor);
    })
})  

//Select the slider
const sizeSlider = document.getElementById("size");

sizeSlider.addEventListener("input", () => {
    currentWidth = Number(sizeSlider.value);
    //console.log(currentWidth);
});

const eraserBtn = document.getElementById("eraser-btn");

eraserBtn.addEventListener("click", () => {

    isErasing = true;
    eraserBtn.classList.add("active");
    //console.log("Eraser Mode");
}); 

//Start Drawing
canvas.addEventListener("mousedown",(event)=>{
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
});

//Draw while moving
canvas.addEventListener("mousemove", (event)=>{
    if(!isDrawing) return;
    //Apply Current Settings
    ctx.lineWidth = currentWidth;
    ctx.strokeStyle = isErasing ? "white" : currentColor;

    //Draw the line
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
});

canvas.addEventListener("mouseup", ()=>{
    isDrawing = false;
});

canvas.addEventListener("mouseleave", ()=>{
    isDrawing = false;
})
