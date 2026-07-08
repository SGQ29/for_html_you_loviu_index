//================================================
// PARA JACQUELINE ❤️
// Script General Unificado - Corregido
//================================================

// MÁQUINA DE ESCRIBIR - ESCENA 1
const mensaje = `Mi preciosa.\nTengo algo importante\nque decirte...\nY espero que me regales\nunos minutitos\nde tu tiempo ❤️`;
let i = 0;
let texto = "";
let maquina;

function escribir() {
    if (i < mensaje.length) {
        texto += mensaje.charAt(i);
        document.getElementById("texto").innerHTML = texto.replace(/\n/g, "<br>");
        i++;
        maquina = setTimeout(escribir, 45);
    }
}

// Ejecutar máquina de escribir cuando la página cargue por completo
window.onload = () => {
    escribir();
    estrellas();
};

// EFECTO ESTRELLAS DE FONDO
function estrellas() {
    const fondo = document.getElementById("stars");
    if (!fondo) return;
    const fragmento = document.createDocumentFragment();
    for (let i = 0; i < 100; i++) {
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

// CORAZONES FLOTANTES CONTINUOS
function crearCorazon() {
    if (document.hidden) return;
    const corazon = document.createElement("div");
    corazon.className = "corazon";
    corazon.innerHTML = "❤️";
    corazon.style.left = Math.random() * 90 + "vw";
    corazon.style.fontSize = (20 + Math.random() * 15) + "px";
    document.body.appendChild(corazon);
    setTimeout(() => { corazon.remove(); }, 5000);
}
setInterval(crearCorazon, 1800);

// NAVEGACIÓN DE ESCENAS
function cambiarEscena(actual, siguiente) {
    document.getElementById(actual).classList.add("oculto");
    document.getElementById(siguiente).classList.remove("oculto");
}

const musica = document.getElementById("musica");

// PASES DE BOTONES b1 -> b2 -> b3
document.getElementById("boton1").onclick = () => {
    clearTimeout(maquina);
    if (musica) {
        musica.play().catch(() => {});
    }
    cambiarEscena("escena1", "escena2");
};

document.getElementById("boton2").onclick = () => {
    cambiarEscena("escena2", "escena3");
};

// TARJETAS INTERACTIVAS
let abiertas = 0;
function revelarTarjeta(tarjeta) {
    if (tarjeta.classList.contains("revelada")) return;
    tarjeta.classList.add("revelada");
    abiertas++;
    if (abiertas === 3) {
        setTimeout(() => {
            document.getElementById("boton3").classList.remove("oculto");
        }, 800);
    }
}

document.getElementById("boton3").onclick = () => {
    cambiarEscena("escena3", "escena4");
};

// BOTÓN TRAVIESO "NO"
const botonNo = document.getElementById("no");
function moverBoton() {
    let x = Math.random() * (window.innerWidth - 220);
    let y = Math.random() * (window.innerHeight - 120);
    botonNo.style.position = "fixed";
    botonNo.style.left = x + "px";
    botonNo.style.top = y + "px";
}
if (botonNo) {
    botonNo.addEventListener("mouseover", moverBoton);
    botonNo.addEventListener("touchstart", moverBoton, { passive: true });
}

document.getElementById("si").onclick = () => {
    cambiarEscena("escena4", "escena5");
};

// TEXTO DINÁMICO DE LA CARTA (ESCENA 5)
const carta = `Mi niña...
Mi preciosa...
Mi corazón bonito...

Quiero que nunca olvides lo especial que eres para mí. Gracias por cada sonrisa. Gracias por cada abrazo. Gracias por hacerme sentir tan tranquilo cuando estoy contigo.

Me encanta escuchar tu voz, verte sonreír y compartir momentos contigo. Eres mi lugar seguro. Y espero poder seguir creando muchísimos recuerdos contigo.

Con muchísimo cariño...
Polar ❤️`;

let indiceCarta = 0;
const textoCarta = document.getElementById("textoCarta");

function escribirCarta() {
    if (indiceCarta < carta.length) {
        textoCarta.textContent += carta.charAt(indiceCarta);
        indiceCarta++;
        setTimeout(escribirCarta, 38);
    }
}

const botonAbrir = document.getElementById("btnAbrirSobre");
const boton5 = document.getElementById("boton5");

botonAbrir.onclick = () => {
    botonAbrir.style.display = "none";
    document.querySelector(".envelope").classList.add("open");
    setTimeout(() => {
        escribirCarta();
        setTimeout(() => {
            boton5.classList.remove("oculto");
        }, 6500);
    }, 1200);
};

boton5.onclick = () => {
    cambiarEscena("escena5", "escena6");
    iniciarGaleria();
};

// GALERÍA DE FOTOS (ESCENA 6)
const fotos = ["amor.jpg", "feli.jpg", "felij.jpg", "familia.jpg", "nojada.jpg", "Ojos.jpg", "Diosa.jpg", "divina.jpg", "bonita.jpg", "cariño.jpg"];
let indiceFoto = 0;
let intervaloGaleria;
const galeria = document.getElementById("galeriaFoto");

function cambiarFoto() {
    if (!galeria) return;
    galeria.style.opacity = 0;
    setTimeout(() => {
        indiceFoto = (indiceFoto + 1) % fotos.length;
        galeria.src = fotos[indiceFoto];
        galeria.style.opacity = 1;
    }, 500);
}

function iniciarGaleria() {
    if (!intervaloGaleria) intervaloGaleria = setInterval(cambiarFoto, 3000);
}

document.getElementById("boton6").onclick = () => {
    clearInterval(intervaloGaleria);
    cambiarEscena("escena6", "escena7");
    iniciarContador();
};

// CONTADOR ALEATORIO (ESCENA 7)
let cronometro;
function iniciarContador(){
    const numero = document.getElementById("contadorAleatorio");
    cronometro = setInterval(() => {
        if (numero) {
            const valor = Math.floor(Math.random() * 999);
            numero.innerHTML = valor.toString().padStart(3, "0");
        }
    }, 70);
}

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

document.getElementById("boton7").onclick = () => {
    cambiarEscena("escena7", "escena8");
    escribirMensaje();
};

// MÁQUINA DE ESCRIBIR - ESCENA 8
const mensajeFinal = `Eres mi niña.\nMi preciosa.\nMi corazón bonito.\nGracias por cada sonrisa.\nGracias por cada abrazo.\nGracias por existir.\nNo sabes lo feliz que me haces.\nY quiero seguir compartiendo\nmuchísimos momentos contigo.`;
let indiceMensaje = 0;
const mensajeElemento = document.getElementById("mensajeFinal");

function escribirMensaje(){
    if(indiceMensaje < mensajeFinal.length){
        if (mensajeElemento) {
            mensajeElemento.innerHTML += mensajeFinal.charAt(indiceMensaje) === '\n' ? '<br>' : mensajeFinal.charAt(indiceMensaje);
        }
        indiceMensaje++;
        setTimeout(escribirMensaje, 45);
    }
}

document.getElementById("boton8").onclick = () => {
    cambiarEscena("escena8", "escena9");
};

document.getElementById("boton9").onclick = () => {
    cambiarEscena("escena9", "escena10");
};
