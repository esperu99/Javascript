
// console.log("Bienvenido a index2.js")
// let frutas = ["naranja", "pera", "fresa"]
// console.log("Mi fruta favorita es la:", frutas[2])
// let cont
// for(cont=0;cont<3;cont++){
// console.log(frutas)
// }
// const enviar= document.querySelector("#enviar")
// console.log(enviar.innerHTML)

// const botonEnviar = document.querySelector("#enviar")
// botonEnviar.addEventListener("click",alertaClick)


// function alertaClick(){
//     console.log("Has hecho click en el boton")
//     botonEnviar.classList.add("green")

// }

// const divCont3= document.querySelector("#contenido3")

// for(cont=0;cont<3;cont++){

//     divCont1.add("<li></li>")

// }
// Creamos una matriz de objetos y accedemos a sus propiedades
const alumnosDaw = [
    {
    nombre : "Paco",
    apellidos: "Sanchez Alcaraz",
    edad: 20,
    notas: [4,6,9]

},
{
    nombre: "Pepa",
    apellidos: "Perez Lopez",
    edad: 22,
    notas: [5,6,7]
},
{
    nombre :"Luis",
    apellidos: "Gomez",
    edad: 22,
    notas: [7,8,7]

},
{
    nombre :"Sofía",
    apellidos: "Gomez",
    edad: 22,
    notas: [7,8,7]

}
]
//Acceder a los elementos de un array de objetos
console.log("Segundo alumn@", alumnosDaw[1].apellidos)

let filasBody = "";

    //Usamos un bucle para generar los tr
    for(let i=0;i<alumnosDaw.length;i++){
        console.log(i)
        filasBody = filasBody +      
        `<tr>
        <td>${i}</td>
        <td>${alumnosDaw[i].nombre}</td>
        <td>${alumnosDaw[i].apellidos}</td>
    </tr>`;
        }

        const miTabla = document.querySelector("tbody")
        miTabla.innerHTML = filasBody
    