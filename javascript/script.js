
new TypeIt("#myElement",  {
strings: "yaPATRONES TE DA LA BIENVENIDA  A  NUESTRO SITIO.... ",
  }).go();


const hamburs=document.querySelector(".cont-line");
const menu=document.querySelector(".nav-bars");

hamburs.addEventListener("click",()=>{
  menu.classList.toggle("chow");
});

const boton=document.querySelector(".boton")
const modal=document.getElementById("modal");
const cerrar=document.getElementById("cerrar");

boton.addEventListener("click",()=>{
  modal.style.display="block";
});

cerrar.addEventListener("click",()=>{
  modal.style.display="none";
});

const envio=document.getElementById("envio");

envio.addEventListener("click",()=>{
  alert("Mensaje enviado con exito");
});

