document.addEventListener("DOMContentLoaded", function () {
  const carouselList = document.getElementById("carousel-list");
  const thumbnailList = document.getElementById("thumbnail-list");

  // Función para obtener y renderizar los datos del JSON
  function fetchCarouselData() {
    fetch("./vista/js/carousel/datosCarousel.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("La respuesta de la red no fue correcta");
        }
        return response.json();
      })
      .then((data) => {
        // Iterar sobre los items del carouselItems y crear los elementos HTML
        data.carouselObjeto.forEach((item) => {
          const itemElement = document.createElement("div");
          itemElement.className = "item";

          const imgElement = document.createElement("img");
          imgElement.src = `./vista/imagenes/carroucel/${item.imagenSrc}`;
          imgElement.alt = item.titulo;

          const contentElement = document.createElement("div");
          contentElement.className = "content";

          contentElement.innerHTML = `
            <div class="author"><p>Albergue Angelitos Traviesos</p></div>
            <div class="title"><p>${item.titulo}</p></div>
            <div class="topic"><p>${item.tema}</p></div>
            <div class="des"><p>${item.descripcion}</p></div>
            <div class="buttons">
              <a href="https://www.facebook.com/people/Albergue-Angelitos-Traviesos/100064845214726/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
              <a href="https://www.instagram.com/albergue_angelitostraviesos/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
              <a href="https://www.tiktok.com/@albergueangelitos" target="_blank"><i class="fa-brands fa-tiktok"></i></a>
              <a href="https://x.com/CamarenaTatiana?t=pKx-ijQl4PXIJkx5D6UOew&s=09"><i class="fa-brands fa-x-twitter"></i></a>
            </div>
          `;

          itemElement.appendChild(imgElement);
          itemElement.appendChild(contentElement);
          carouselList.appendChild(itemElement);
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  fetchCarouselData();
});