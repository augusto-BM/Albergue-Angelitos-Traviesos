document.addEventListener("DOMContentLoaded", function () {
  const cardList = document.getElementById("card-list");

  // Función para obtener y renderizar los datos del JSON
  function fetchCardData() {
    fetch("./vista/js/card/datosCard.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("La respuesta de la red no fue correcta");
        }
        return response.json();
      })
      .then((data) => {
        // Iterar sobre los items del JSON y crear las tarjetas
        data.cardObjeto.forEach((item) => {
          // Crear un elemento figure para cada tarjeta
          const figureElement = document.createElement("figure");

          // Crear el elemento img y configurarlo
          const imgElement = document.createElement("img");
          imgElement.src = `./vista/imagenes/animales/${item.imagenSrc}`;
          imgElement.alt = item.descripcion;

          // Crear la capa con título y descripción
          const capaElement = document.createElement("div");
          capaElement.classList.add("capa");

          const tituloElement = document.createElement("h3");
          tituloElement.textContent = item.nombre;

          const subtituloElement = document.createElement("h4");
          subtituloElement.textContent = item.condicion;

          const descripcionElement = document.createElement("p");
          descripcionElement.textContent = item.descripcion;

          // Añadir elementos a la capa
          capaElement.appendChild(tituloElement);
          capaElement.appendChild(subtituloElement);
          capaElement.appendChild(descripcionElement);

          // Añadir elementos a la figura
          figureElement.appendChild(imgElement);
          figureElement.appendChild(capaElement);

          // Añadir figura al contenedor de tarjetas
          cardList.appendChild(figureElement);
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  fetchCardData();
});