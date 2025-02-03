// ESTE EL ARCHIVO DE JAVASCRIPT
console.log("Hola desde index.js")
let nombre = "Pepito"
let edad = 18
let mensaje = "El señor" + nombre + "tiene"+ edad + "años" // se pueden concatenar var y textos 
const ciclo = "DAW1"
let arrayEstudios = ["informatica", "electricidad", "pfi"]
console.log(mensaje)

/* Sumamos un año */
edad = edad + 1
console.log(mensaje)
mensaje = "Ahora tengo " + edad + "años y estudio " + ciclo
console.log(mensaje)

// arrays
console.log("Este es el arrayEstudios: ", arrayEstudios)
console.log("El segundoi elemento del array es: ", arrayEstudios[1])

//objeto
let alumno = {
    nombre : "Paco",
    apellidos : "Sanchez Alcaraz",
    edad : 20

}
console.log("Este es el objeto alumno: ", alumno)

console.log("El nombre del alumno es: ",alumno.nombre)

// Capturamos en variables los diferentes elementos del dom

const divCont1= document.querySelector("#contenido1")
console.log("Este es el objeto correspondiente al div #contenido1: ",divCont1)
console.log(divCont1.innerHTML)

// Cambiamos el contenido de un elemento del dom(lo que permite a JavaScript modificar el html)
divCont1.innerHTML ="<h2>Nuevo Contenido</h2>"

// Cambiamos el aspecto de una clase
divCont1.classList.remove("Coloragua")
divCont1.classList.add("Colormarron")

// Capturando valores del input
const miInput = document.querySelector("input")
console.log("el value del input es: ",miInput.value)
miInput.value="Otro texto"

// Capturar eventos
const botonEnviar = document.querySelector("#enviar")
botonEnviar.addEventListener("click",alertaClick)

//Declarar funcion
function alertaClick(){
    console.log("Has hecho click en el boton")
    alert("Has hecho click!!!!")
}
