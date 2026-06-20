
//=====================================
// ESCENA 1
//=====================================


const mensaje=`

Mi preciosa.

Tengo algo importante que decirte.

Y espero que me regales unos minutitos de tu tiempo ❤️

`;



let i=0;
let textoAcumulado="";


function escribir(){


if(i<mensaje.length){


textoAcumulado+=mensaje.charAt(i);


document.getElementById("texto").innerHTML=
textoAcumulado.replace(/\n/g,"<br>");



i++;

setTimeout(escribir,55);


}


}

escribir();




//=====================================
// ESTRELLAS
//=====================================



function estrellas(){


const fondo=document.getElementById("stars");



for(let i=0;i<120;i++){


let e=document.createElement("div");


e.className="star";


e.style.width="2px";
e.style.height="2px";


e.style.left=Math.random()*100+"vw";


e.style.top=Math.random()*100+"vh";


fondo.appendChild(e);


}



}


estrellas();





//=====================================
// CORAZONES
//=====================================



function corazones(){



let c=document.createElement("div");


c.className="corazon";


c.innerHTML="❤️";



c.style.left=Math.random()*95+"vw";


document.body.appendChild(c);



setTimeout(()=>{


c.remove();


},5000);



}



setInterval(corazones,700);






//=====================================
// CAMBIAR ESCENAS
//=====================================



function cambiarEscena(actual,siguiente){


document.getElementById(actual)

.classList.add("oculto");



document.getElementById(siguiente)

.classList.remove("oculto");



}






//=====================================
// ESCENA 1
//=====================================



document.getElementById("boton1").onclick=()=>{


let musica=document.getElementById("musica");


musica.play();



cambiarEscena(

"escena1",

"escena2"

);



};






//=====================================
// ESCENA 2
//=====================================



document.getElementById("boton2").onclick=()=>{


cambiarEscena(

"escena2",

"escena3"

);



};







//=====================================
// TARJETAS
//=====================================



let contador=0;




function revelarTarjeta(t){



if(t.classList.contains("revelada")) return;




t.classList.add("revelada");



contador++;




if(contador==3){




setTimeout(()=>{


document.getElementById("boton3")

.classList.remove("oculto");


},800);



}



}







//=====================================
// ESCENA 3
//=====================================



document.getElementById("boton3").onclick=()=>{


cambiarEscena(

"escena3",

"escena4"

);



};






//=====================================
// BOTON NO
//=====================================



const no=document.getElementById("no");




function mover(){



let x=Math.random()*

(window.innerWidth-150);



let y=Math.random()*

(window.innerHeight-80);




no.style.position="fixed";



no.style.left=x+"px";



no.style.top=y+"px";



}



no.addEventListener(

"mouseover",

mover

);



no.addEventListener(

"touchstart",

mover

);






//=====================================
// CARTA
//=====================================



const carta=`


Jacqueline...


Mi niña...


Mi preciosa...


Mi corazón bonito...



Eres mi lugar seguro.



La persona con quien más tranquilidad siento.



Gracias por existir.



Gracias por tu sonrisa.



Gracias por tus ojitos.



Gracias por ser tú.




Con amor,


Polar ❤️



`;





let p=0;



function escribirCarta(){



if(p<carta.length){



document.getElementById("textoCarta")

.innerHTML+=carta.charAt(p);



p++;



setTimeout(

escribirCarta,

45

);



}



}







//=====================================
// ESCENA 4
//=====================================



document.getElementById("si").onclick=()=>{


cambiarEscena(

"escena4",

"escena5"

);



setTimeout(()=>{


document.querySelector(".envelope")

.classList.add("open");



setTimeout(()=>{


escribirCarta();



setTimeout(()=>{


document.getElementById("boton5")

.classList.remove("oculto");


},5000);



},1500);



},1000);



};






//=====================================
// ESCENA 5
//=====================================



document.getElementById("boton5").onclick=()=>{


cambiarEscena(

"escena5",

"escena6"

);



};






//=====================================
// GALERIA
//=====================================



const fotos=[


"amor.jpg",

"feli.jpg",

"felij.jpg",

"familia.jpg",

"nojada.jpg",

"Ojos.jpg",

"Diosa.jpg",

"divina.jpg",

"bonita.jpg",

"cariño.jpg"



];




let indice=0;



function cambiarFoto(){


document.getElementById("galeriaFoto")

.src=fotos[indice];



indice++;



if(indice>=fotos.length){

indice=0;

}



}



setInterval(

cambiarFoto,

3000

);






//=====================================
// ESCENA 6
//=====================================



document.getElementById("boton6").onclick=()=>{


cambiarEscena(

"escena6",

"escena7"

);



iniciarContador();



};






//=====================================
// CONTADOR
//=====================================



function iniciarContador(){



let dias=365;



const contador=


document.getElementById("contador");



let intervalo=


setInterval(()=>{


dias--;



contador.innerHTML=


dias+" días";




if(dias<=0){


clearInterval(intervalo);


contador.innerHTML=


"Hoy la veo ❤️";


}



},50);



}







//=====================================
// ESCENA 7
//=====================================



document.getElementById("boton7").onclick=()=>{


cambiarEscena(

"escena7",

"escena8"

);



};






//=====================================
// ESCENA 8
//=====================================



document.getElementById("boton8").onclick=()=>{


cambiarEscena(

"escena8",

"escena9"

);



};
