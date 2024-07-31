// Manejo de apertura del modal
document.querySelectorAll(".modal-trigger").forEach((trigger) => {
  trigger.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.style.visibility = "visible";
    target.style.opacity = "1";
  });
});

// Manejo del botón de cerrar del modal
document.querySelectorAll(".modal_close").forEach((close) => {
  close.addEventListener("click", function (e) {
    e.preventDefault();
    const modal = this.closest(".modal");
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
  });
});

// Cierra el modal si se hace clic fuera del contenido del modal
document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", function (e) {
    if (e.target === this) {
      this.style.visibility = "hidden";
      this.style.opacity = "0";
    }
  });
});

// Manejo de la tecla Escape para cerrar el modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const openModal = document.querySelector(".modal[style*='visibility: visible']");
    if (openModal) {
      openModal.style.visibility = "hidden";
      openModal.style.opacity = "0";
    }
  }
});
