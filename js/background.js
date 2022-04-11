const images = [
  "img 0.jpg",
  "img 1.jpg",
  "img 2.jpg",
  "img 3.jpg",
  "img 4.jpg",
  "img 5.jpg",
  "img 6.jpg",
  "img 7.jpg",
  "img 8.jpg",
];

const chosenImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImages}`;

document.body.appendChild(bgImage);
