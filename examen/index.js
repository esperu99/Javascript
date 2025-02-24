console.log("Hola desde index.js")
 // const divCont1= document.querySelector("#luna")
 // divCont1.classList.add("luzluna")


const jugadores = [
    {
    nombre : "Messi",
    url: "https://img.a.transfermarkt.technology/portrait/header/28003-1710080339.jpg?lm=1",

},
{
    nombre : "Ronaldo",
    url: "https://img.a.transfermarkt.technology/portrait/header/8198-1694609670.jpg?lm=1",

},
{
    nombre : "Lewandowski",
    url: "https://img.a.transfermarkt.technology/portrait/header/38253-1701118759.jpg?lm=1",

},
]
function futbol(){
    let tarjetas = "";
    for(let i=0; i<jugadores.length;i++){
        console.log("i: ",jugadores[i].nombre,jugadores[i].url);
        tarjetas = tarjetas + `
        <div class="tarjeta">
        <div class="imagen">
          <img src="${jugadores[i].url}"
            alt="" />
        </div>
        <div class="nombre">${jugadores[i].nombre}</div>
      </div>`;
    }

    const contenedor = document.querySelector(".contenedor");

    // Inserta las tarjetas en el contenedor
    
        document.querySelector(".contenedor").innerHTML = tarjetas;
    
}
const boton = document.querySelector("#enviar")
boton.addEventListener("click", function(e){

e.preventDefault();
let nombre = document.querySelector("#nombre").value;
let url = document.querySelector("#url").value;

// Crea un objeto con los valores capturados
const nuevoSuperheroe = {
    nombre: nombre,
    url_imagen: url
};

// Añade el nuevo superhéroe al array
jugadores.push(nuevoSuperheroe);





futbol();

});
