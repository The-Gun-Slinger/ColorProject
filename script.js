let numSqaures = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var sp1 = document.querySelector("#sp1");
sp1.textContent = pickedColor;
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");


init();

function init() {
    setupModeButtons();
    setupSquares();
    reset(numSqaures);
}

function setupModeButtons() {
    for(let i=0;i<modeBtn.length;i++) {
        modeBtn[i].addEventListener("click", function() {
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
    
            this.textContent === "Easy" ? numSqaures = 3 : numSqaures = 6;
    
            reset(numSqaures);
        });
    }
}

function setupSquares() {
    for(let i=0;i<squares.length;i++) {    
        // add click listeners
        squares[i].addEventListener("click", function() {
            // grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            // compare color to pickedColor
            if(clickedColor === pickedColor) {
                changeColor(clickedColor);
                message.textContent = "correct";
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                message.textContent = "try again";
            }
        });
    }
}


function reset(numSqaures) {
    // generate all new color
    colors = generateRandomColors(numSqaures);
    // pick a new random color from array
    pickedColor = pickColor();

    // change color display to picked color
    sp1.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    // change colors of square
    for (let i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        
    }
    message.textContent = "";
    h1.style.backgroundColor = "steelblue"; 

}


resetButton.addEventListener("click", function() {
    reset(numSqaures);
});

function changeColor(color) {
    for(let i=0;i<colors.length;i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make an array
    var arr = []
    // add num random colors to array
    for(let i=0;i<num;i++) {
        // get random color and push it to the array
        arr.push(randomColor());
    }
    // return the array
    return arr;
}

function randomColor() {
    // pick red from 0-255
    let r = Math.floor(Math.random() * 256);
    // pick green from 0-255
    let g = Math.floor(Math.random() * 256);
    // pick blue from 0-255
    let b = Math.floor(Math.random() * 256);
    // return string rgb(r, g, b)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
