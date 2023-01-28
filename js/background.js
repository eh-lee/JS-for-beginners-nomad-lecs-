const images = [ "0.jpg", "1.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
//create HTML element in JS

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
    //>1-1 const h2 = document.querySelector("#clock")
    //>1-2 document.body.insertBefore(bgImage, h2);