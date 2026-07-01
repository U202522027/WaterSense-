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
