document
  .getElementById("contactanos-formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío tradicional del formulario

    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Mostrar SweetAlert2
          Swal.fire({
            icon: "success",
            title: "¡Éxito!",
            text: "Tu mensaje ha sido enviado.",
            showConfirmButton: false,
            timer: 1500, // Tiempo en milisegundos para mostrar el mensaje
          }).then(() => {
            // Limpiar el formulario
            form.reset();

            // Redirigir a la página deseada
            window.location.href =
              "https://augusto-bm.github.io/Albergue-Angelitos-Traviesos";
          });
        } else {
          // Mostrar un mensaje de error si el envío falla
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Hubo un problema al enviar el formulario. Inténtalo de nuevo.",
          });
        }
      })
      .catch((error) => {
        // Manejo de errores de red
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Error de red. Por favor, inténtalo de nuevo.",
        });
      });
  });
