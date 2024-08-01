document.addEventListener('DOMContentLoaded', () => {
  const nombreInput = document.getElementById('nombre');
  const emailInput = document.getElementById('email');
  const celularInput = document.getElementById('celular');
  const motivoInput = document.getElementById('motivo');
  const mensajeTextarea = document.getElementById('mensaje');

  const nombreError = document.getElementById('nombre-error');
  const emailError = document.getElementById('email-error');
  const celularError = document.getElementById('celular-error');
  const motivoError = document.getElementById('motivo-error');
  const mensajeError = document.getElementById('mensaje-error');

  // Validaciones en tiempo real
  nombreInput.addEventListener('input', () => {
    const namePattern = /^[a-zA-Z\s]+$/;
    if (!namePattern.test(nombreInput.value)) {
      nombreError.style.display = 'block';
    } else {
      nombreError.style.display = 'none';
    }
  });

  emailInput.addEventListener('input', () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      emailError.style.display = 'block';
    } else {
      emailError.style.display = 'none';
    }
  });

  celularInput.addEventListener('input', () => {
    const phonePattern = /^[0-9]{9}$/;
    if (!phonePattern.test(celularInput.value)) {
      celularError.style.display = 'block';
    } else {
      celularError.style.display = 'none';
    }
  });

  motivoInput.addEventListener('input', () => {
    const motivoPattern = /^[a-zA-Z\s]+$/;
    if (!motivoPattern.test(motivoInput.value)) {
      motivoError.style.display = 'block';
    } else {
      motivoError.style.display = 'none';
    }
  });

  mensajeTextarea.addEventListener('input', () => {
    if (mensajeTextarea.value.trim() === '') {
      mensajeError.style.display = 'block';
    } else {
      mensajeError.style.display = 'none';
    }
  });

  // Validaciones en el submit
  document.getElementById('contactanos-formulario').addEventListener('submit', (event) => {
    let valid = true;

    if (!/^[a-zA-Z\s]+$/.test(nombreInput.value)) {
      nombreError.style.display = 'block';
      valid = false;
    } else {
      nombreError.style.display = 'none';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
      emailError.style.display = 'block';
      valid = false;
    } else {
      emailError.style.display = 'none';
    }

    if (!/^[0-9]{9}$/.test(celularInput.value)) {
      celularError.style.display = 'block';
      valid = false;
    } else {
      celularError.style.display = 'none';
    }

    if (!/^[a-zA-Z\s]+$/.test(motivoInput.value)) {
      motivoError.style.display = 'block';
      valid = false;
    } else {
      motivoError.style.display = 'none';
    }

    if (mensajeTextarea.value.trim() === '') {
      mensajeError.style.display = 'block';
      valid = false;
    } else {
      mensajeError.style.display = 'none';
    }

    if (!valid) {
      event.preventDefault(); // Previene el envío del formulario si hay errores
    }
  });

  // Restricción de caracteres en los inputs
  nombreInput.addEventListener('keydown', (event) => {
    const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Enter', ' '];
    if (!allowedKeys.includes(event.key) && !/^[a-zA-Z\s]$/.test(event.key)) {
      event.preventDefault();
    }
  });

  motivoInput.addEventListener('keydown', (event) => {
    const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Enter', ' '];
    if (!allowedKeys.includes(event.key) && !/^[a-zA-Z\s]$/.test(event.key)) {
      event.preventDefault();
    }
  });

  celularInput.addEventListener('keydown', (event) => {
    const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Enter'];
    if (!allowedKeys.includes(event.key) && !/^[0-9]$/.test(event.key)) {
      event.preventDefault();
    }
  });

  
});
