document.addEventListener("DOMContentLoaded", function() {
    
    const botonesFiltro = document.querySelectorAll('.btn-filtro');

    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', function() {
            
            botonesFiltro.forEach(b => b.classList.remove('activo'));
            
            this.classList.add('activo');
        });
    });

    console.log("¡Archivo app.js cargado exitosamente! Listo para programar.");
});

function mostrarNombreArchivo(input) {
            const nombre = input.files[0] ? input.files[0].name : '';
            document.getElementById('nombre-archivo').textContent = nombre;
        }

        function enviarReporte() {
            const problema = document.getElementById('problema').value.trim();
            const ubicacion = document.getElementById('ubicacion').value.trim();
            const descripcion = document.getElementById('descripcion').value.trim();

            if (!problema || !ubicacion || !descripcion) {
                alert('Por favor completa todos los campos antes de enviar.');
                return;
            }

            const mensaje = document.getElementById('mensaje-exito');
            mensaje.style.display = 'block';

            // Limpiar formulario
            document.getElementById('problema').value = '';
            document.getElementById('ubicacion').value = '';
            document.getElementById('descripcion').value = '';
            document.getElementById('nombre-archivo').textContent = '';

            setTimeout(() => { mensaje.style.display = 'none'; }, 4000);
        }