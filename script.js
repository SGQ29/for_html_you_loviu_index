//================================================
// MENSAJE INICIAL
//================================================

const mensaje = `

Mi preciosa.

Tengo algo importante que decirte.

Y espero que me regales unos minutitos de tu tiempo ❤️

`;

let i = 0;
let texto = "";

function escribir() {

    if (i < mensaje.length) {

        texto += mensaje.charAt(i);

        document.getElementById("texto").innerHTML =
            texto.replace(/\n/g, "<br>");

        i++;

        setTimeout(escribir, 50);
    }

}

escribir();




//================================================
// ESTRELLAS
//================================================

function estrellas() {

    const fondo = document.getElementById("stars");

    for(let i=0;i<120;i++){

        let s=document.createElement("div");

        s.className="star";

        s.style.left=Math.random()*100+"vw";
        s.style.top=Math.random()*100+"vh";

        s.style.width="2px";
        s.style.height="2px";

        fondo.appendChild(s);

    }

}

estrellas();




//================================================
// CORAZONES
//================================================

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

setInterval(corazones,1500);




//================================================
// CAMBIO ESCENAS
//================================================

function cambiarEscena(a,b){

document.getElementById(a)
.classList.add("oculto");


document.getElementById(b)
.classList.remove("oculto");

}




//================================================
// ESCENA 1
//================================================

boton1.onclick=()=>{

musica.play();

cambiarEscena(
"escena1",
"escena2"
);

};




//================================================
// ESCENA 2
//================================================

boton2.onclick=()=>{

cambiarEscena(
"escena2",
"escena3"
);

};




//================================================
// TARJETAS
//================================================

let abiertas=0;


function revelarTarjeta(t){


if(t.classList.contains("revelada"))
return;


t.classList.add("revelada");

abiertas++;


if(abiertas==3){

setTimeout(()=>{

boton3.classList.remove("oculto");

},700);

}


}




//================================================
// ESCENA 3
//================================================


boton3.onclick=()=>{

cambiarEscena(

"escena3",

"escena4"

);

};




//================================================
// BOTON NO
//================================================

const no=document.getElementById("no");


function mover(){


let x=Math.random()*

(window.innerWidth-180);


let y=Math.random()*

(window.innerHeight-100);



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




//================================================
// CARTA
//================================================


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



Con muchísimo cariño,


Polar ❤️


`;



let p=0;



function escribirCarta(){


if(p<carta.length){


textoCarta.innerHTML+=carta.charAt(p);


p++;


setTimeout(

escribirCarta,

40

);


}


}





//================================================
// ESCENA 4
//================================================


si.onclick=()=>{


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


boton5.classList.remove("oculto");


},4500);



},1200);



},800);


};




//================================================
// ESCENA 5
//================================================


boton5.onclick=()=>{


cambiarEscena(

"escena5",

"escena6"

);


};





//================================================
// GALERIA
//================================================


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


galeriaFoto.style.opacity=0;



setTimeout(()=>{


galeriaFoto.src=fotos[indice];


galeriaFoto.style.opacity=1;



indice++;


if(indice>=fotos.length){

indice=0;

}



},500);



}



setInterval(

cambiarFoto,

3000

);




//================================================
// ESCENA 6
//================================================


boton6.onclick=()=>{


cambiarEscena(

"escena6",

"escena7"

);


iniciarContador();



};





//================================================
// CONTADOR
//================================================


function iniciarContador(){



let dias=128;


const cont=document.getElementById("contador");



let inter=setInterval(()=>{


dias--;


cont.innerHTML=dias;



if(dias<=0){


clearInterval(inter);


cont.innerHTML="❤️";


}



},70);



}




//================================================
// ESCENA 7
//================================================


boton7.onclick=()=>{


cambiarEscena(

"escena7",

"escena8"

);



escribirMensaje();


};




//================================================
// ESCENA 8
//================================================


const mensajeFinal=`


Eres mi niña.


Mi preciosa.


Mi corazón bonito.


Mi lugar seguro.



Gracias por cada sonrisa.


Gracias por existir.



Con muchísimo cariño.



Polar ❤️


`;



let mf=0;



function escribirMensaje(){



if(mf<mensajeFinal.length){



mensajeFinalElemento.innerHTML+=

mensajeFinal.charAt(mf);



mf++;



setTimeout(


escribirMensaje,


45


);


}


}


const mensajeFinalElemento=
document.getElementById("mensajeFinal");




boton8.onclick=()=>{


cambiarEscena(

"escena8",

"escena9"

);


};




//================================================
// ESCENA 9
//================================================


document.getElementById("final").innerHTML=`

Te quiero muchísimo


<br><br>

Jacqueline ❤️

`;

