const images = [
    "0",
    "1",
    "2",
    "3",
]
const chosenImage = images[Math.floor(Math.random() * images.length)];
const image = document.createElement("img");
image.src = "img/" + chosenImage + ".jpg";
document.body.appendChild(image);
