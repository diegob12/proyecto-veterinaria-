let tablamascotas = document.getElementById("tabla-mascotas")
let cuerpotabla = tablamascotas.querySelector("tbody");

//Arreglos
let nombreMAscotas=["luna","orion"]
let nombreDueños=["Ana","pedro"]
let cedulanombreDueños=["1234567","565799"]
let edadMascotas=["5 años","4 años"]
let telefonodueño=["3102354789","3203245686"]
let especialidad=["veterinaria","Cirugía veterinaria"]
let medico=["juan","pedro"]

for(let i=0; i<nombreMAscotas.length; i++ ){
    let fila =cuerpotabla.insertRow();
    let celdanombreMascotas = fila.insertCell();
    let celdanombreDueños = fila.insertCell();
    let celdacedulanombreDueños = fila.insertCell();
    let celdaedadMascotas = fila.insertCell();
    let celdatelefonodueño =fila.insertCell();
    let celdaespecialidad = fila.insertCell();
    let celdamedico = fila.insertCell();

    celdanombreMascotas.textContent=nombreMAscotas[i];
    celdanombreDueños.textContent=nombreDueños[i];
    celdacedulanombreDueños.textContent=cedulanombreDueños[i];
    celdaedadMascotas.textContent=edadMascotas[i];
    celdatelefonodueño.textContent=telefonodueño[i];
    celdaespecialidad.textContent=especialidad[i]
    celdamedico.textContent=medico[i];

}


