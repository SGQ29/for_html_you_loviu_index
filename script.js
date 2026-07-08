//================================================
// PARA JACQUELINE ❤️
// Script Unificado Completo
//================================================

//===============================================
// MENSAJE INICIAL (ESCENA 1)
//===============================================
const mensaje = `Mi preciosa.

Tengo algo importante
que decirte...

Y espero que me regales
unos minutitos
de tu tiempo ❤️`;

let i = 0;
let texto = "";
let maquina;

function escribir() {
    if (i < mensaje.length) {
        texto += mensaje.charAt(i);
        const contenedorTexto = document.getElementById("texto");
        if (contenedorTexto) {
            contenedorTexto.innerHTML = texto.replace(/\n/g, "<br>");
        }
        i++;
        maquina = setTimeout(escribir, 45);
    }
}

// Iniciar máquina de escribir al cargar la página
window.addEventListener("DOMContentLoaded", () => {
    escribir();
    estrellas();
});

//===============================================
// ESTRELLAS DEL FONDO
//===============================================
function estrellas() {
    const fondo = document.getElementById("stars");
    if (!fondo) return;
    const fragmento = document.createDocumentFragment();

    for (let j = 0; j < 100; j++) {
        const estrella = document.createElement("div");
        estrella.className = "star";
        estrella.style.left = Math.random() * 100 + "vw";
        estrella.style.top = Math.random() * 100 + "vh";
        estrella.style.width = "2px";
        estrella.style.height = "2px";
        estrella.style.animationDelay = Math.random() * 3 + "s";
        fragmento.appendChild(estrella);
    }
    fondo.appendChild(fragmento);
}

//===============================================
// CORAZONES FLOTANDO MULTICOLOR
//===============================================
function crearCorazon() {
    if (document.hidden) return;

    const corazon = document.createElement("div");
    corazon.className = "corazon";
    
    // Alterna emojis aleatoriamente para mayor dinamismo visual
    const emojis = ["❤️", "💖", "💕", "💗"];
    corazon.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    corazon.style.left = Math.random() * 90 + "vw";
    corazon.style.fontSize = (20 + Math.random() * 15) + "px";
    corazon.style.position = "fixed";
    corazon.style.bottom = "0px";
    corazon.style.zIndex = "999";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 5000);
}
setInterval(crearCorazon, 1800);

//===============================================
// FUNCIÓN CAMBIO DE ESCENAS
//===============================================
function cambiarEscena(actual, siguiente) {
    const act = document.getElementById(actual);
    const sig = document.getElementById(siguiente);
    if (act) act.classList.add("oculto");
    if (sig) sig.classList.remove("oculto");
}

//===============================================
// GESTIÓN DE ELEMENTOS Y EVENTOS
//===============================================
const musica = document.getElementById("musica");

// Escena 1 -> Escena 2
document.getElementById("boton1").onclick = () => {
    clearTimeout(maquina);
    if (musica) {
        musica.play().catch(() => {
            console.log("Interacción requerida para audio.");
        });
    }
    cambiarEscena("escena1", "escena2");
};

// Escena 2 -> Escena 3
document.getElementById("boton2").onclick = () => {
    cambiarEscena("escena2", "escena3");
};

// Interacción de Tarjetas (Escena 3)
let abiertas = 0;
function revelarTarjeta(tarjeta) {
    if (tarjeta.classList.contains("revelada")) return;

    tarjeta.classList.add("revelada");
    abiertas++;

    if (abiertas === 3) {
        setTimeout(() => {
            const btn3 = document.getElementById("boton3");
            if (btn3) btn3.classList.remove("oculto");
        }, 800);
    }
}

// Escena 3 -> Escena 4
document.getElementById("boton3").onclick = () => {
    cambiarEscena("escena3", "escena4");
};

// Botón "NO" que huye (Escena 4)
const botonNo = document.getElementById("no");
function moverBoton() {
    let x = Math.random() * (window.innerWidth - 220);
    let y = Math.random() * (window.innerHeight - 120);
    botonNo.style.position = "fixed";
    botonNo.style.left = x + "px";
    botonNo.style.top = y + "px";
}
botonNo.addEventListener("mouseover", moverBoton);
botonNo.addEventListener("touchstart", moverBoton, { passive: true });

// Botón "SÍ" -> Escena 5
document.getElementById("si").onclick = () => {
    cambiarEscena("escena4", "escena5");
};

//===============================================
// ESCENA 5: CARTA EN SOBRE
//===============================================
const carta = `Mi niña...

Mi preciosa...

Mi corazón bonito...

Quiero que nunca olvides lo especial que eres para mí.
Gracias por cada sonrisa.
Gracias por cada abrazo.
Gracias por hacerme sentir tan tranquilo cuando estoy contigo.

Me encanta escuchar tu voz, verte sonreír y compartir momentos contigo.

Eres mi lugar seguro.
Y espero poder seguir creando muchísimos recuerdos contigo.

Con muchísimo cariño...

Polar ❤️`;

let indiceCarta = 0;
const textoCarta = document.getElementById("textoCarta");

function escribirCarta() {
    if (indiceCarta < carta.length) {
        // Usamos innerHTML convirtiendo los saltos de línea correctamente
        let fragmento = carta.substring(0, indiceCarta + 1);
        textoCarta.innerHTML = fragmento.replace(/\n/g, "<br>");
        indiceCarta++;
        setTimeout(escribirCarta, 38);
    }
}

const botonAbrir = document.getElementById("btnAbrirSobre");
const boton5 = document.getElementById("boton5");

botonAbrir.onclick = () => {
    botonAbrir.style.display = "none";
    const sobre = document.querySelector(".envelope");
    if (sobre) sobre.classList.add("open");

    setTimeout(() => {
        escribirCarta();
        setTimeout(() => {
            if (boton5) boton5.classList.remove("oculto");
        }, 8000); // Tiempo prudencial para leer la carta antes de continuar
    }, 1200);
};

// Escena 5 -> Escena 6
boton5.onclick = () => {
    cambiarEscena("escena5", "escena6");
    iniciarGaleria();
};

//===============================================
// ESCENA 6: GALERÍA
//===============================================
const fotos = [
    "amor.jpg", "feli.jpg", "felij.jpg", "familia.jpg", "nojada.jpg",
    "Ojos.jpg", "Diosa.jpg", "divina.jpg", "bonita.jpg", "cariño.jpg"
];
let indiceFoto = 0;
let intervaloGaleria;
const galeria = document.getElementById("galeriaFoto");

function cambiarFoto() {
    if (!galeria) return;
    galeria.style.opacity = 0;

    setTimeout(() => {
        indiceFoto++;
        if (indiceFoto >= fotos.length) {
            indiceFoto = 0;
        }
        galeria.src = fotos[indiceFoto];
        galeria.style.opacity = 1;
    }, 500);
}

function iniciarGaleria() {
    if (intervaloGaleria) return;
    intervaloGaleria = setInterval(cambiarFoto, 3000);
}

// Escena 6 -> Escena 7
document.getElementById("boton6").onclick = () => {
    clearInterval(intervaloGaleria);
    cambiarEscena("escena6", "escena7");
    iniciarContador();
};

//===============================================
// ESCENA 7: CONTADOR NUMÉRICO ALOCADO
//===============================================
let cronometro;
function iniciarContador() {
    const numero = document.getElementById("contadorAleatorio");
    if (!numero) return;

    cronometro = setInterval(() => {
        const valor = Math.floor(Math.random() * 999);
        numero.innerHTML = valor.toString().padStart(3, "0");
    }, 70);
}

// Botón Detener Contador
document.getElementById("detener").onclick = () => {
    clearInterval(cronometro);
    const numero = document.getElementById("contadorAleatorio");
    if (numero) {
        numero.innerHTML = "❤️";
        numero.style.fontSize = "80px";
    }

    document.getElementById("respuestaAmor").innerHTML = "Todos los días quiero verte ❤️";
    document.getElementById("boton7").classList.remove("oculto");
    document.getElementById("detener").style.display = "none";
};

//===============================================
// ESCENA 8: TEXTO FINAL REPETIDO
//===============================================
const mensajeFinalText = `Eres mi niña.
Mi preciosa.
Mi corazón bonito.
Mi lugar seguro.

Gracias por cada sonrisa.
Gracias por cada abrazo.
Gracias por existir.

No sabes lo feliz que me haces.
Y quiero seguir compartiendo muchísimos momentos contigo.

Te quiero muchísimo ❤️

Con todo mi cariño...
Polar ❤️`;

let indiceMensaje = 0;
const mensajeElemento = document.getElementById("mensajeFinal");

function escribirMensaje() {
    if (indiceMensaje < mensajeFinalText.length) {
        let fragmento = mensajeFinalText.substring(0, indiceMensaje + 1);
        mensajeElemento.innerHTML = fragmento.replace(/\n/g, "<br>");
        indiceMensaje++;
        setTimeout(escribirMensaje, 45);
    }
}

// Escena 7 -> Escena 8
document.getElementById("boton7").onclick = () => {
    cambiarEscena("escena7", "escena8");
    escribirMensaje();
};

// Escena 8 -> Escena 9
document.getElementById("boton8").onclick = () => {
    cambiarEscena("escena8", "escena9");
};

// Escena 9 -> Escena 10
document.getElementById("boton9").onclick = () => {
    cambiarEscena("escena9", "escena10");
};

//===============================================
// EFECTOS ESPECIALES FINALES (ESCENA 10)
//===============================================
function lluviaFinal() {
    const corazon = document.createElement("div");
    corazon.innerHTML = "💖";
    corazon.className = "corazon";
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = (20 + Math.random() * 30) + "px";
    corazon.style.animationDuration = (3 + Math.random() * 2) + "s";
    corazon.style.position = "fixed";
    corazon.style.bottom = "0px";
    corazon.style.zIndex = "999";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 5000);
}

// Observador mutación para activar lluvia al quitar la clase 'oculto'
const escena10 = document.getElementById("escena10");
if (escena10) {
    const observador = new MutationObserver(() => {
        if (!escena10.classList.contains("oculto")) {
            setInterval(lluviaFinal, 450);
            observador.disconnect(); // Desconectar una vez activado el intervalo continuo
        }
    });

    observador.observe(escena10, { attributes: true });
}

console.log("Para la niña más bonita del mundo ❤️");
