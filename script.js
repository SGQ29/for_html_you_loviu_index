const texto = "Para la mujer más hermosa de mi vida ❤️";

let i=0;



function escribir(){

if(i<texto.length){

document.getElementById("titulo").innerHTML += texto.charAt(i);

i++;

setTimeout(escribir,100);

}

}





const fotos=[

"feli.jpg",

"nojada.jpg",

"Ojos.jpg",

"felij.jpg",

"divina.jpg",

"Diosa.jpg",

"cariño.jpg",

"amor.jpg",

"bonita.jpg",

"familia.jpg"

];




let indice=0;



function cambiar(){


document.getElementById("foto").src=fotos[indice];


indice++;



if(indice>=fotos.length){

indice=0;

}



}



setInterval(cambiar,3000);






function crearCorazon(){


let c=document.createElement("div");


c.className="corazon";


c.innerHTML="❤️";


c.style.left=Math.random()*100+"vw";


c.style.top="100vh";



document.body.appendChild(c);



setTimeout(()=>{


c.remove();

},6000);



}




function iniciarCorazones(){


setInterval(crearCorazon,300);


}




const boton = document.getElementById("boton");


boton.onclick=function(){


let musica=document.getElementById("musica");

musica.play();



document.getElementById("inicio").style.display="none";



escribir();



cambiar();



setInterval(cambiar,3000);



iniciarCorazones();


}
