document.addEventListener("DOMContentLoaded", () => {
  const prevButton = document.querySelector(".carousel-control.prev");
  const nextButton = document.querySelector(".carousel-control.next");
  const carouselContainer = document.querySelector(".carruseles");
  const slides = document.querySelectorAll(".carousel");
  const indicatorsContainer = document.querySelector(".carousel-indicators");
  let currentIndex = 0;

  function updateCarousel() {
      const offset = -currentIndex * 100;
      carouselContainer.style.transform = `translateX(${offset}%)`;
      updateIndicators();
  }

  function updateIndicators() {
      const indicators = document.querySelectorAll(".indicator");
      indicators.forEach((indicator, index) => {
          if (index === currentIndex) {
              indicator.classList.add("active");
          } else {
              indicator.classList.remove("active");
          }
      });
  }

  function createIndicators() {
      // Vaciar los indicadores existentes
      indicatorsContainer.innerHTML = '';

      // Crear un indicador para cada slide
      slides.forEach((_, index) => {
          const indicator = document.createElement("button");
          indicator.classList.add("indicator");
          indicator.setAttribute("data-index", index);
          indicatorsContainer.appendChild(indicator);
      });
      
      // Inicializar el primer indicador como activo
      updateIndicators();
  }

  function goToNextSlide() {
      currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
      updateCarousel();
  }

  function goToPreviousSlide() {
      currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
      updateCarousel();
  }

  prevButton.addEventListener("click", () => {
      goToPreviousSlide();
      resetAutoSlide();
  });

  nextButton.addEventListener("click", () => {
      goToNextSlide();
      resetAutoSlide();
  });

  indicatorsContainer.addEventListener("click", (event) => {
      if (event.target.classList.contains("indicator")) {
          currentIndex = parseInt(event.target.getAttribute("data-index"));
          updateCarousel();
          resetAutoSlide();
      }
  });

  // Iniciar el cambio automático de slides cada 10 segundos
  let autoSlideInterval = setInterval(goToNextSlide, 10000);

  function resetAutoSlide() {
      clearInterval(autoSlideInterval); // Detener el intervalo actual
      autoSlideInterval = setInterval(goToNextSlide, 10000); // Iniciar uno nuevo
  }

  // Inicializar la visibilidad y los indicadores
  createIndicators();
  updateCarousel();
});
