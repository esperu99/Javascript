const cartas = [
    {
        heroe: "Daredevil",
        nombre: "Matt Murdock",
        img: "https://cdn.marvel.com/content/1x/026ddm_com_crd_01.jpg",
    },
    {
        heroe: "Kingpin",
        nombre: "Wilson Fisk",
        img: "https://cdn.marvel.com/content/1x/032kgp_com_crd_01.jpg",
    },
    {
        heroe: "Captain America",
        nombre: "Sam Wilson",
        img: "https://cdn.marvel.com/content/1x/014fal_com_crd_01.jpg",
    },
];

function generarCarta() {
    let carta = "";

    for (let i = 0; i < cartas.length; i++) {
        carta += `
                <div class="carta">
                <img src="${cartas[i].img}" alt="">
                <p class="heroe">${cartas[i].heroe}</p>
                <p class="nombre">${cartas[i].nombre}</p>
            </div>
        `;
    }
    document.querySelector("#cartas").innerHTML = carta;
}
    const boton = document.querySelector("button");
    boton.addEventListener("click", function (e){
       //Previene el error de comportamiento por defecto
        e.preventDefault();

        let nombre = document.querySelector("#nombre").value;
        let url = document.querySelector("#url").value;

        const nuevoSuperheroe = {
            heroe: nombre,
            img: url,
        }

        cartas.push(nuevoSuperheroe);
        generarCarta();
    });
    document.querySelector("#cambiarEstilo").addEventListener("click", function () {
        const clarooscuroDiv = document.querySelector("#clarooscuro");
        const imgElement = clarooscuroDiv.querySelector("img");
    
        // Verificar la imagen actual y alternar
        if (imgElement.src.includes("luna-creciente.png")) {
            // Cambiar a otra imagen
            imgElement.src = "sol.png"; // Cambia esta URL por la imagen deseada
            imgElement.alt = "sol";
            clarooscuroDiv.style.backgroundColor = "#f0f0f0"; // Cambia el color de fondo
        } else {
            // Cambiar a la imagen de la luna
            imgElement.src = "luna-creciente.png"; // Cambia esta URL por la imagen de la luna
            imgElement.alt = "luna";
            clarooscuroDiv.style.backgroundColor = "#333333"; // Cambia el color de fondo
        }
    });    
generarCarta();