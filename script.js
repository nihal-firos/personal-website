// Changing the font of the name every 1 seconds

const fonts = ["Arial", "Courier New", "Georgia", "Times New Roman", "Verdana", "Lucida Console", "Tahoma", "Trebuchet MS", "Garamond", "Brush Script MT"];
let currentFontIndex = 0;

const textElement = document.getElementById("changingText");

function changeFont() {
    textElement.style.fontFamily = fonts[currentFontIndex];
    currentFontIndex = (currentFontIndex + 1) % fonts.length;
}

setInterval(changeFont, 1000);