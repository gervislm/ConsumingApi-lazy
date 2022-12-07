import { registerImage } from "./lazy.js";

const minNum = 1;
const maxNum = 122;
const random = () => Math.floor(Math.random() * (maxNum - minNum)) + minNum;

const createImageNode = () => {
  const container = document.createElement('div');
  container.className = "p-4";

  const image = document.createElement('img')
  image.className = "mx-auto";
  image.width = '320';
  image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

  container.appendChild(image);

  return container;
};

const mountNode = document.getElementById("images");

const addButton = document.querySelector('button');

const addImage = () => {
  const newImage = createImageNode();
  mountNode.append(newImage);
  registerImage(newImage);
};

addButton.addEventListener("click", addImage);