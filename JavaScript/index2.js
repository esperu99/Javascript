console.log("Bienvenido a index2.js")
let frutas = ["naranja", "pera", "fresa"]
console.log("Mi fruta favorita es la:", frutas[2])
let cont
for(cont=0;cont<3;cont++){
console.log(frutas)
}
const enviar= document.querySelector("#enviar")
console.log(enviar.innerHTML)

const botonEnviar = document.querySelector("#enviar")
botonEnviar.addEventListener("click",alertaClick)


function alertaClick(){
    console.log("Has hecho click en el boton")
    botonEnviar.classList.add("green")

}

const divCont3= document.querySelector("#contenido3")

for(cont=0;cont<3;cont++){

    divCont1.add("<li></li>")

}