//======================================================
// JAVASCRIPT COMPLETAMENTE CONFIGURADO Y OPTIMIZADO
//======================================================

// Arreglo de Fotos para la Galería (Reemplaza con tus rutas reales de tus imágenes)
const fotosGaleria = [
    "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg"
];
let fotoActualIndex = 0;
let tarjetasReveladasCount = 0;

// Inicialización de efectos decorativos al cargar la página
window.onload = function() {
    crearEstrellas();
    setInterval(crearCorazonFlotante, 400);
    inicializarIndicadoresGaleria();
};

// Función para cambiar entre escenas secuencialmente
function siguienteEscena(actual, siguiente) {
    const escenaActual = document.getElementById(`escena${actual}`);
    const escenaSiguiente = document.getElementById(`escena${siguiente}`);
    
    if (escenaActual && escenaSiguiente) {
        escenaActual.classList.add("oculto");
        escenaSiguiente.classList.remove("oculto");
    }
}

// Control de las Tarjetas de la Escena 3
function revelarTarjeta(elemento) {
    if (!elemento.classList.contains("revelada")) {
        elemento.classList.add("revelada");
        tarjetasReveladasCount++;
        
        // Muestra el botón de avanzar solo al revelar las 3 tarjetas
        if (tarjetasReveladasCount === 3) {
            document.getElementById("btnTarjetasSiguiente").classList.remove("oculto");
        }
    }
}

// Mecánica del Botón "No" en Escena 4
function moverBotonNo() {
    const btnNo = document.getElementById("no");
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth - 40) + 20;
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight - 40) + 20;
    
    btnNo.style.position = "fixed";
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
}

// Acción de respuesta para la pregunta
function responderPregunta(acepto) {
    if (acepto) {
        const btnNo = document.getElementById("no");
        btnNo.style.position = "static";
        siguienteEscena(4, 5);
    }
}

// Animación de Apertura del Sobre (Escena 5)
function abrirSobre() {
    const envelope = document.getElementById("envelope");
    const btnAbrir = document.getElementById("btnAbrirSobre");
    const btnSiguiente = document.getElementById("btnCartaSiguiente");
    
    if (envelope && !envelope.classList.contains("open")) {
        envelope.classList.add("open");
        btnAbrir.classList.add("oculto");
        
        // Muestra el botón para avanzar después de que termine la animación
        setTimeout(() => {
            btnSiguiente.classList.remove("oculto");
        }, 1200);
    }
}

// Inicialización de los puntos indicadores en la Galería
function inicializarIndicadoresGaleria() {
    const contenedoresIndicadores = document.getElementById("indicadores");
    if (!contenedoresIndicadores) return;
    
    contenedoresIndicadores.innerHTML = "";
    fotosGaleria.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("indicador");
        if (index === 0) dot.classList.add("activo");
        contenedoresIndicadores.appendChild(dot);
    });
}

// Control del Carrusel de Fotos (Escena 6)
function siguienteFotoGaleria() {
    fotoActualIndex++;
    const imgElement = document.getElementById("galeriaFoto");
    const indicadores = document.querySelectorAll(".indicador");
    
    if (fotoActualIndex < fotosGaleria.length) {
        imgElement.src = fotosGaleria[fotoActualIndex];
        indicadores.forEach((dot, idx) => {
            dot.classList.toggle("activo", idx === fotoActualIndex);
        });
    }
    
    if (fotoActualIndex === fotosGaleria.length - 1) {
        document.getElementById("btnGaleriaSiguiente").classList.remove("oculto");
    }
}

// Efecto del Contador del Amor Rápido (Escena 7)
function calcularAmor() {
    const contador = document.getElementById("contadorAleatorio");
    const respuesta = document.getElementById("respuestaAmor");
    const btnCalcular = document.getElementById("btnCalcularAmor");
    const btnSiguiente = document.getElementById("btnContadorSiguiente");
    
    btnCalcular.classList.add("oculto");
    let valorActual = 0;
    
    const intervalo = setInterval(() => {
        valorActual += Math.floor(Math.random() * 4) + 1;
        if (valorActual >= 100) {
            valorActual = 100;
            clearInterval(intervalo);
            contador.innerText = "1000000%";
            respuesta.innerText = "¡Mi amor por ti no se puede medir! Infinity ❤️";
            btnSiguiente.classList.remove("oculto");
        } else {
            contador.innerText = `${valorActual}%`;
        }
    }, 30);
}

// Generación de fondo estrellado estático parpadeante
function crearEstrellas() {
    for (let i = 0; i < 60; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.width = `${Math.random() * 3 + 1}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        document.body.appendChild(star);
    }
}

// Generación de corazones flotantes ascendentes
function crearCorazonFlotante() {
    const listaCorazones = ["❤️", "💖", "💝", "💕", "🌸"];
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.innerText = listaCorazones[Math.floor(Math.random() * listaCorazones.length)];
    corazon.style.left = `${Math.random() * 100}vw`;
    corazon.style.fontSize = `${Math.random() * 20 + 16}px`;
    corazon.style.animationDuration = `${Math.random() * 3 + 3}s`;
    document.body.appendChild(corazon);
    
    setTimeout(() => {
        corazon.remove();
    }, 5000);
}
