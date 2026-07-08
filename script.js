//================================================
// PARA JACQUELINE ❤️
// Script Unificado
//================================================

//===============================================
// MENSAJE INICIAL
//===============================================

const mensaje = `
Mi preciosa.

Tengo algo importante
que decirte...

Y espero que me regales
unos minutitos
de tu tiempo ❤️
`;

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

escribir();

//===============================================
// ESTRELLAS
//===============================================

function estrellas() {
    const fondo = document.getElementById("stars");
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

estrellas();

//===============================================
// CORAZONES FLOTANDO
//===============================================

function crearCorazon() {
    if (document.hidden) return;

    const corazon = document.createElement("div");
    corazon.className = "corazon";
    corazon.innerHTML = "❤️";
    corazon.style.left = Math.random() * 90 + "vw";
    corazon.style.fontSize = (20 + Math.random() * 15) + "px";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 5000);
}

setInterval(crearCorazon, 1800);

//===============================================
// CAMBIO DE ESCENAS
//===============================================

function cambiarEscena(actual, siguiente) {
    document.getElementById(actual).classList.add("oculto");
    document.getElementById(siguiente).classList.remove("oculto");
}

//===============================================
// MÚSICA
//===============================================

const musica = document.getElementById("musica");

//===============================================
// ESCENA 1
//===============================================

document.getElementById("boton1").onclick = () => {
    clearTimeout(maquina);
    musica.play().catch(() => {});
    cambiarEscena("escena1", "escena2");
};

//===============================================
// ESCENA 2
//===============================================

document.getElementById("boton2").onclick = () => {
    cambiarEscena("escena2", "escena3");
};

//===============================================
// TARJETAS
//===============================================

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

//===============================================
// ESCENA 3
//===============================================

document.getElementById("boton3").onclick = () => {
    cambiarEscena("escena3", "escena4");
};

//===============================================
// BOTÓN "NO"
//===============================================

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

//===============================================
// BOTÓN "SÍ"
//===============================================

document.getElementById("si").onclick = () => {
    cambiarEscena("escena4", "escena5");
};

//================================================
// SCRIPT PARTE 2
//================================================

//===============================================
// CARTA CORREGIDA (Usa innerHTML y reemplazo de \n)
//===============================================

const carta = `Mi niña...
Mi preciosa...
Mi corazón bonito...
Quiero que nunca olvides lo especial que eres para mí.
Gracias por cada sonrisa.
Gracias por cada abrazo.
Gracias por hacerme sentir tan tranquilo cuando estoy contigo.
Me encanta escuchar tu voz, verte sonreír y compartir momentos contigo.
Espero poder seguir creando muchísimos recuerdos contigo.`;

let indiceCarta = 0;
let textoAcumulado = ""; // Almacena el progreso del texto

const textoCarta = document.getElementById("textoCarta");

function escribirCarta() {
    if (indiceCarta < carta.length) {
        textoAcumulado += carta.charAt(indiceCarta);
        
        // Reemplazamos saltos de línea por formato HTML válido
        textoCarta.innerHTML = textoAcumulado.replace(/\n/g, "<br>");

        indiceCarta++;
        setTimeout(escribirCarta, 38);
    }
}

//===============================================
// BOTÓN ABRIR SOBRE
//===============================================

const botonAbrir = document.getElementById("btnAbrirSobre");
const boton5 = document.getElementById("boton5");

botonAbrir.onclick = () => {
    botonAbrir.style.display = "none";
    const sobre = document.querySelector(".envelope");
    sobre.classList.add("open");

    setTimeout(() => {
        escribirCarta();
        setTimeout(() => {
            boton5.classList.remove("oculto");
        }, 5200);
    }, 1200);
};

//===============================================
// ESCENA 5
//===============================================

boton5.onclick = () => {
    cambiarEscena("escena5", "escena6");
    iniciarGaleria();
};

//===============================================
// GALERÍA
//===============================================

const fotos = [
    "amor.jpg", "feli.jpg", "felij.jpg", "familia.jpg", "nojada.jpg",
    "Ojos.jpg", "Diosa.jpg", "divina.jpg", "bonita.jpg", "cariño.jpg"
];

let indiceFoto = 0;
let intervaloGaleria;
const galeria = document.getElementById("galeriaFoto");

function cambiarFoto() {
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

//===============================================
// ESCENA 6
//===============================================

document.getElementById("boton6").onclick = () => {
    clearInterval(intervaloGaleria);
    cambiarEscena("escena6", "escena7");
    iniciarContador();
};

//===============================================
// CONTADOR
//===============================================

let cronometro;

function iniciarContador(){
    const numero = document.getElementById("contadorAleatorio");
    cronometro = setInterval(()=>{
        const valor = Math.floor(Math.random()*999);
        numero.innerHTML = valor.toString().padStart(3, "0");
    }, 70);
}

//===============================================
// BOTÓN DETENER
//===============================================

document.getElementById("detener").onclick = ()=>{
    clearInterval(cronometro);
    const numero = document.getElementById("contadorAleatorio");
    numero.innerHTML = "❤️";
    numero.style.fontSize = "80px";

    document.getElementById("respuestaAmor").innerHTML = "Todos los días quiero verte ❤️";
    document.getElementById("boton7").classList.remove("oculto");
    document.getElementById("detener").style.display = "none";
};

//================================================
// SCRIPT PARTE 3
//================================================

//===============================================
// MENSAJE FINAL (ESCENA 8)
//===============================================

const mensajeFinal = `
Eres mi niña.
Mi preciosa.
Mi corazón bonito.
Gracias por cada sonrisa.
Gracias por cada abrazo.
Gracias por existir.
No sabes lo feliz que me haces.
Y quiero que nos sigamos enamorando a diario, en nuestras
altas y bajas, siempre.
Quizás es muy idealizado pero contigo lo deseo todo.
`;

let indiceMensaje = 0;
const mensajeElemento = document.getElementById("mensajeFinal");

function escribirMensaje(){
    if(indiceMensaje < mensajeFinal.length){
        mensajeElemento.innerHTML += mensajeFinal.charAt(indiceMensaje);
        indiceMensaje++;
        setTimeout(escribirMensaje, 45);
    }
}

//===============================================
// ESCENA 7 -> ESCENA 8
//===============================================

document.getElementById("boton7").onclick = ()=>{
    cambiarEscena("escena7", "escena8");
    escribirMensaje();
};

//===============================================
// ESCENA 8 -> ESCENA 9
//===============================================

document.getElementById("boton8").onclick = ()=>{
    cambiarEscena("escena8", "escena9");
};

//===============================================
// ESCENA 9 -> ESCENA 10
//===============================================

document.getElementById("boton9").onclick = () => {
    cambiarEscena("escena9", "escena10");
};

//===============================================
// EFECTO EXTRA DE CORAZONES EN LA ESCENA FINAL
//===============================================

function lluviaFinal(){
    const corazon = document.createElement("div");
    corazon.innerHTML = "💖";
    corazon.className = "corazon";
    corazon.style.left = Math.random()*100+"vw";
    corazon.style.fontSize = (20+Math.random()*30)+"px";
    corazon.style.animationDuration = (3+Math.random()*2)+"s";

    document.body.appendChild(corazon);

    setTimeout(()=>{
        corazon.remove();
    }, 5000);
}

//===============================================
// CONTROLADOR ESCENA 10
//===============================================

const escena10 = document.getElementById("escena10");
const observador = new MutationObserver(()=>{
    if(!escena10.classList.contains("oculto")){
        setInterval(lluviaFinal, 450);
    }
});

observador.observe(escena10, { attributes:true });

console.log("Para la niña más bonita del mundo ❤️");
