import { registerImage } from "./lazy.js";

const minNum = 1;
const maxNum = 122;

// Genera un número aleatorio entre minNum y maxNum
const random = () => Math.floor(Math.random() * (maxNum - minNum)) + minNum;

// Crea el nodo de la imagen y su contenedor
const createImageNode = () => {
  const container = document.createElement("div");
  container.className = "p-4";

  const image = document.createElement("img");
  image.className = "mx-auto";
  image.width = 320;
  image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

  container.appendChild(image);

  return container;
};

// Obtener el contenedor donde se van a agregar las imágenes
const mountNode = document.getElementById("images");

// Obtener el botón de añadir imagen
const addButton = document.querySelector("button");

// Función para agregar una nueva imagen al contenedor y registrarla para carga diferida
const addImage = () => {
  const newImageNode = createImageNode(); // Crear el nodo de imagen
  mountNode.append(newImageNode); // Añadir la imagen al DOM
  registerImage(newImageNode); // Registrar la imagen para la carga diferida
};

// Agregar un listener al botón para agregar nuevas imágenes cuando se haga clic
addButton.addEventListener("click", addImage);
