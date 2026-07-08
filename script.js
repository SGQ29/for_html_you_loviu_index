//================================================
// PARA JACQUELINE ❤️
// Script General Unificado
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
escribir();

// EFECTO ESTRELLAS DE FONDO
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
    musica.play().catch(() => {});
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
botonNo.addEventListener("mouseover", moverBoton);
botonNo.addEventListener("touchstart", moverBoton, { passive: true });

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
        }, 6500); // Da margen de tiempo a que se termine de escribir el contenido
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
        const valor = Math.floor(Math.random() * 999);
        numero.innerHTML = valor.toString().padStart(3, "0");
    }, 70);
}

document.getElementById("detener").onclick = () => {
    clearInterval(cronometro); // CORREGIDO: detenía una variable inexistente (cronmetro)
    const numero = document.getElementById("contadorAleatorio");
    numero.innerHTML = "❤️";
    numero.style.fontSize = "80px";
    document.getElementById("respuestaAmor").innerHTML = "Todos los días quiero verte ❤️";
    document.getElementById("boton7").classList.remove("oculto");
    document.getElementById("detener").style.display = "none";
};

// ENLACE ESCENA 7 A ESCENA 8
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
        mensajeElemento.innerHTML += mensajeFinal.charAt(indiceMensaje) === '\n' ? '<br>' : mensajeFinal.charAt(indiceMensaje);
        indiceMensaje++;
        setTimeout(escribirMensaje, 45);
    }
}

// ENLACES FINALES (ESCENAS 8 -> 9 -> 10)
document.getElementById("boton8").onclick = () => {
    cambiarEscena("escena8", "escena9");
};

document.getElementById("boton9").onclick = () => {
    cambiarEscena("escena9", "escena10");
};
    z-index:10;

    animation:fade .8s;

}

.oculto{

    display:none !important;

}

@keyframes fade{

from{

opacity:0;

transform:
translate(-50%,-46%);

}

to{

opacity:1;

transform:
translate(-50%,-50%);

}

}

/*======================================================
BOTONES
======================================================*/

.btn-principal{

padding:16px 40px;

font-size:20px;

border:none;

border-radius:50px;

cursor:pointer;

color:white;

background:
linear-gradient(
45deg,
#4a0018,
#5f2380
);

box-shadow:

0 0 15px #6d1b7b,

0 0 30px #4a0018;

transition:.4s;

margin-top:35px;

}

.btn-principal:hover{

transform:scale(1.05);

box-shadow:

0 0 20px #ff006a,

0 0 50px purple;

}

/*======================================================
ESCENA 1
======================================================*/

#fotoPrincipal{

width:340px;

max-width:85vw;

border-radius:25px;

box-shadow:

0 0 25px purple,

0 0 55px crimson;

animation:latir 3s infinite;

}

@keyframes latir{

0%{

transform:scale(1);

}

50%{

transform:scale(1.03);

}

100%{

transform:scale(1);

}

}

#texto{

margin-top:30px;

color:white;

font-size:34px;

line-height:55px;

min-height:180px;

text-shadow:

0 0 10px purple,

0 0 25px crimson;

}

/*======================================================
TÍTULOS
======================================================*/

.titulo-escena{

font-size:42px;

color:white;

text-shadow:

0 0 15px #8d48ff,

0 0 35px crimson;

}

.subtitulo-escena{

margin-top:10px;

font-size:20px;

color:#e0c9ff;

}

.texto-intermedio{

margin-top:25px;

font-size:24px;

line-height:42px;

color:white;

text-shadow:

0 0 12px black;

}

/*======================================================
TARJETAS
======================================================*/

.tarjetas-container{

display:flex;

justify-content:center;

align-items:center;

gap:20px;

flex-wrap:wrap;

margin-top:35px;

}

.tarjeta{

width:180px;

height:220px;

perspective:1000px;

cursor:pointer;

}

.tarjeta-interior{

width:100%;

height:100%;

position:relative;

transform-style:preserve-3d;

transition:.8s;

}

.tarjeta.revelada
.tarjeta-interior{

transform:
rotateY(180deg);

}

.tarjeta-frente,
.tarjeta-atras{

position:absolute;

width:100%;

height:100%;

border-radius:25px;

display:flex;

justify-content:center;

align-items:center;

padding:15px;

backface-visibility:hidden;

text-align:center;

}

.tarjeta-frente{

background:

linear-gradient(

135deg,

#4b0018,

#5f2380

);

color:white;

font-size:22px;

}

.tarjeta-atras{

background:white;

color:#333;

transform:rotateY(180deg);

font-size:15px;

line-height:24px;

}

/*======================================================
PREGUNTA
======================================================*/

.pregunta{

font-size:38px;

line-height:55px;

color:white;

text-shadow:

0 0 15px purple;

}

.botones-container{

margin-top:35px;

display:flex;

justify-content:center;

gap:20px;

flex-wrap:wrap;

}

#si,
#no{

padding:16px 35px;

font-size:22px;

border:none;

border-radius:30px;

cursor:pointer;

transition:.3s;

}

#si{

background:#5f2380;

color:white;

}

#si:hover{

transform:scale(1.08);

}

#no{

background:#7a001f;

color:white;

}
/*======================================================
SOBRE Y CARTA PREMIUM
======================================================*/

.envelope-wrapper{

    position:relative;

    width:460px;

    height:310px;

    /* MODIFICADO: Se redujo el margen superior de 110px a 15px para eliminar el gran espacio en blanco */
    margin:15px auto 20px auto;

}

#btnAbrirSobre{

    position:absolute;

    left:50%;

    top:50%;

    transform:translate(-50%,-50%);

    z-index:100;

    margin:0;

}

.envelope{

    position:relative;

    width:100%;

    height:100%;

    background:#30000f;

    border-radius:0 0 12px 12px;

    overflow:visible;

    box-shadow:

    0 15px 35px rgba(0,0,0,.65),

    0 0 35px rgba(255,0,90,.25);

}

/*==========================
SOLAPA
==========================*/

.flap{

    position:absolute;

    top:0;

    left:0;

    width:0;

    height:0;

    border-left:230px solid transparent;

    border-right:230px solid transparent;

    border-top:165px solid #5a0c2a;

    transform-origin:top;

    transition:1s;

    z-index:5;

}

/*==========================
BOLSILLO
==========================*/

.pocket{

    position:absolute;

    top:0;

    left:0;

    width:0;

    height:0;

    border-left:230px solid #4a0018;

    border-right:230px solid #4a0018;

    border-top:145px solid transparent;

    border-bottom:165px solid #4a0018;

    z-index:4;

}

.envelope::after{

content:"❤️";

position:absolute;

bottom:25px;

left:50%;

transform:translateX(-50%);

font-size:42px;

z-index:6;

filter:

drop-shadow(0 0 12px crimson);

}

/*==========================
CARTA
==========================*/

.letter{

position:absolute;

left:20px;

bottom:15px;

width:420px;

height:280px;

background:white;

border-radius:15px;

padding:15px;

overflow:hidden;

box-sizing:border-box;

transition:1.2s;

box-shadow:

0 5px 15px rgba(0,0,0,.3);

z-index:2;

}

.letter-border{
    width:100%;
    height:100%;
    border:1px dashed #e6afc2;
    border-radius:12px;

    /* Mucho menos espacio interno */
    padding:8px;

    box-sizing:border-box;

    display:flex;
    flex-direction:column;
    align-items:center;

    overflow-y:auto;
    -ms-overflow-style:none;
    scrollbar-width:none;
}

.letter-border::-webkit-scrollbar{
    display:none;
}

.letter-heart-top{
    font-size:13px;
    margin-bottom:2px;
}

.letter-text{
    width:100%;
    text-align:center;

    font-size:15px;
    line-height:22px;

    color:#3d2229;
    white-space:pre-line;
}

.envelope.open .letter{
    transform:translateY(-160px);
    z-index:3;
    height:500px;
}

/*==========================
DECORACIÓN
==========================*/

.decoracion-inferior{

margin-top:45px;

display:flex;

justify-content:center;

align-items:center;

position:relative;

}

.corazon-centro{

font-size:26px;

padding:0 12px;

color:#d783ff;

filter:

drop-shadow(0 0 12px #d783ff);

z-index:2;

}

.lineas-decorativas{

position:absolute;

width:260px;

height:2px;

background:

linear-gradient(

to right,

transparent,

#7b2bff,

#d783ff,

#7b2bff,

transparent

);

}

/*======================================================
GALERÍA
======================================================*/

.galeria-container{

display:flex;

flex-direction:column;

align-items:center;

justify-content:center;

}

#galeriaFoto{

width:370px;

max-width:88vw;

border-radius:25px;

margin-top:25px;

transition:1s;

box-shadow:

0 0 25px purple,

0 0 45px crimson;

}

/*Indicadores*/

#indicadores{

margin-top:20px;

display:flex;

gap:10px;

justify-content:center;

align-items:center;

}

.indicador{

width:10px;

height:10px;

border-radius:50%;

background:white;

opacity:.4;

transition:.4s;

}

.indicador.activo{

opacity:1;

transform:scale(1.5);

background:#ff4d88;

}
/*======================================================
CONTADOR
======================================================*/

#contadorAleatorio{

    font-size:95px;

    font-weight:bold;

    color:white;

    margin-top:35px;

    min-height:120px;

    text-shadow:

        0 0 15px #9d4dff,

        0 0 35px #ff0055,

        0 0 70px purple;

    animation:latirNumero 1s infinite;

}

@keyframes latirNumero{

0%{

transform:scale(1);

}

50%{

transform:scale(1.08);

}

100%{

transform:scale(1);

}

}

#respuestaAmor{

margin-top:30px;

font-size:34px;

font-weight:bold;

color:white;

min-height:60px;

text-shadow:

0 0 12px white,

0 0 25px #ff4d88,

0 0 40px purple;

}

.botones-contador{

margin-top:40px;

display:flex;

justify-content:center;

gap:25px;

flex-wrap:wrap;

}

/*======================================================
MENSAJE FINAL
======================================================*/

.mensaje-elegante{

margin-top:30px;

display:flex;

justify-content:center;

}

#mensajeFinal{

max-width:700px;

font-size:28px;

line-height:48px;

color:white;

text-shadow:

0 0 10px purple,

0 0 20px crimson;

min-height:320px;

white-space:pre-line;

}

/*======================================================
ESCENA 9
======================================================*/

.final-card{

display:flex;

flex-direction:column;

align-items:center;

justify-content:center;

animation:aparecerFinal 1.2s;

}

#final{

font-size:68px;

line-height:85px;

color:white;

text-shadow:

0 0 20px #8d48ff,

0 0 40px crimson,

0 0 80px purple;

animation:brillo 2s infinite;

}

#firma{

margin-top:25px;

font-size:30px;

color:#e6d3ff;

}

#fraseFinal{

margin-top:40px;

font-size:23px;

line-height:38px;

color:white;

text-shadow:

0 0 10px purple;

}

/*======================================================
ESCENA 10
======================================================*/

#escena10{

animation:fade 1.5s;

}

#escena10 h1{

font-size:62px;

color:white;

text-shadow:

0 0 20px deeppink,

0 0 40px purple,

0 0 80px crimson;

animation:brillo 2s infinite;

}

#escena10 h2{

font-size:42px;

margin-top:25px;

color:#ffe0f2;

text-shadow:

0 0 18px hotpink;

}

#escena10 p{

margin-top:35px;

font-size:28px;

line-height:50px;

color:white;

text-shadow:

0 0 12px purple,

0 0 25px crimson;

max-width:800px;

}

/*======================================================
ESTRELLAS
======================================================*/

.star{

position:absolute;

background:white;

border-radius:50%;

animation:parpadear 2s infinite;

z-index:2;

}

@keyframes parpadear{

0%{

opacity:.2;

}

50%{

opacity:1;

}

100%{

opacity:.2;

}

}

/*======================================================
CORAZONES
======================================================*/

.corazon{

position:fixed;

bottom:-60px;

font-size:24px;

pointer-events:none;

z-index:20;

animation:subir 5s linear forwards;

}

@keyframes subir{

0%{

transform:

translateY(0)

rotate(0deg);

opacity:1;

}

100%{

transform:

translateY(-110vh)

rotate(360deg);

opacity:0;

}

}

/*======================================================
ANIMACIONES
======================================================*/

@keyframes brillo{

0%{

opacity:.6;

}

50%{

opacity:1;

}

100%{

opacity:.6;

}

}

@keyframes aparecerFinal{

from{

opacity:0;

transform:

translateY(40px);

}

to{

opacity:1;

transform:

translateY(0);

}

}

/*======================================================
RESPONSIVE
======================================================*/

@media(max-width:768px){

#fotoPrincipal{

width:250px;

}

#texto{

font-size:25px;

line-height:42px;

}

.titulo-escena{

font-size:31px;

}

.texto-intermedio{

font-size:20px;

line-height:34px;

}

.tarjeta{

width:150px;

height:190px;

}

.envelope-wrapper{

width:320px;

height:220px;

/* MODIFICADO EN RESPONSIVE: Se bajó de 80px a 20px para celulares */
margin-top:20px;

}

.flap{

border-left:160px solid transparent;

border-right:160px solid transparent;

border-top:110px solid #5a0c2a;

}

.pocket{

border-left:160px solid #4a0018;

border-right:160px solid #4a0018;

border-top:100px solid transparent;

border-bottom:120px solid #4a0018;

}

.letter{

width:285px;

height:200px;

left:18px;

}

.envelope.open .letter{

height:320px;

transform:translateY(-120px);

}

#galeriaFoto{

width:280px;

}

#contadorAleatorio{

font-size:70px;

}

#mensajeFinal{

font-size:22px;

line-height:38px;

}

#final{

font-size:48px;

line-height:60px;

}

#escena10 h1{

font-size:42px;

}

#escena10 h2{

font-size:30px;

}

#escena10 p{

font-size:22px;

line-height:38px;

}

.btn-principal{

font-size:18px;

padding:14px 28px;

}

}
