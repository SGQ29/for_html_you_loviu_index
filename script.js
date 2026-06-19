const mensaje = `Oye...

Preciosa de mi vida...

Tengo algo importante que decirte...

Y espero que me regales unos minutitos de tu tiempo ❤️`;



let i=0;



function escribir(){

    if(i<mensaje.length){

        document.getElementById("texto").innerHTML += mensaje.charAt(i);

        i++;

        setTimeout(escribir,60);

    }

}


escribir();







/* ESTRELLAS */

function estrellas(){

    for(let i=0;i<120;i++){

        let estrella=document.createElement("div");

        estrella.className="star";

        estrella.style.width="2px";
        estrella.style.height="2px";

        estrella.style.left=Math.random()*100+"vw";
        estrella.style.top=Math.random()*100+"vh";


        document.body.appendChild(estrella);

    }

}


estrellas();





/* CORAZONES */


function corazones(){


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



setInterval(corazones,800);







const boton=document.getElementById("boton");



boton.onclick=()=>{


let musica=document.getElementById("musica");


musica.play().catch(()=>{});




document.getElementById("escena1").style.opacity="0";




setTimeout(()=>{


document.getElementById("escena1").style.display="none";



document.getElementById("escena2").style.display="block";



document.getElementById("escena2").style.opacity="1";



},1000);



}








const no=document.getElementById("no");



no.addEventListener("mouseover",()=>{


let x=Math.random()*400-200;


let y=Math.random()*250-125;



no.style.transform=`translate(${x}px,${y}px)`;


});






document.getElementById("si").onclick=()=>{


alert("❤️ Correcto preciosa ❤️");


}
