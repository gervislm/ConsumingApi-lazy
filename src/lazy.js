// Función para verificar si la entrada está intersectando
const isIntersecting = (entry) => entry.isIntersecting;

// Función para cargar la imagen
const loadImage = (entry) => {
  const container = entry.target;
  const image = container.querySelector("img"); // Selecciona de manera explícita la etiqueta <img>
  const url = image?.dataset.src;

  if (image && url) {
    image.src = url;
    observer.unobserve(container); // Deja de observar el contenedor una vez cargada la imagen
  }
};

// Crear un IntersectionObserver para manejar las intersecciones
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (isIntersecting(entry)) {
      loadImage(entry);
    }
  });
});

// Función para registrar un contenedor de imagen para la observación
export const registerImage = (imageContainer) => {
  observer.observe(imageContainer);
};
