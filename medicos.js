let tablamedicos = document.getElementById("tabla-medicos")
let cuerpotabla = tablamedicos.querySelector("tbody");

class medicos {
    constructor(nombreMEdico,apellidoMedico,cedulaMedico,especialidad,consultorio,correoContacto,paciente)
    {this.nombreMEdico=nombreMEdico;
    this.apellidoMedico=apellidoMedico;
    this.cedulaMedico=cedulaMedico;
    this.especialidad=especialidad;
    this.consultorio=consultorio;
    this.correoContacto=correoContacto;
    this.paciente=paciente}
}
let medico1= new medicos("juan","fernandez","123456789","cirujia","201","fernandez@clinica123","tita" )
let medico2= new medicos("Enrique","Muñoz","7456123","vacunacion","301","muñoz@clinica123","crox")

agregarFila(medico1)
agregarFila(medico2)

function agregarFila(medicos){
    let fila = cuerpotabla.insertRow();  
    let celdanombreMEdico = fila.insertCell();
    let celdaapellidoMedico = fila.insertCell();
    let celdacedulaMedico =fila.insertCell();
    let celdaespecialidad =fila.insertCell();
    let celdaconsultorio =fila.insertCell();
    let celdacorreoContacto=fila.insertCell();
    let celdapaciente =fila.insertCell();
    celdanombreMEdico.textContent=medicos.nombreMEdico;
    celdaapellidoMedico.textContent=medicos.apellidoMedico;
    celdacedulaMedico.textContent=medicos.cedulaMedico;
    celdaespecialidad.textContent=medicos.especialidad;
    celdaconsultorio.textContent=medicos.consultorio;
    celdacorreoContacto.textContent=medicos.correoContacto;
    celdapaciente.textContent=medicos.paciente;
}

//let medicos= [
   // {
   //     nombreMEdico:"Juan",
   //     apellidoMedico:"fernandez",
   //     cedulaMedico:"123456789",
   //     especialidad:"cirujia",
   //     consultorio:"201",
   //     correoContacto:"fernandez@clinica123",
   //     paciente:"tita"
  //  },
  //  {
  //      nombreMEdico:"Enrique",
  //      apellidoMedico:"Muñoz",
  //      cedulaMedico:"7456123",
 //    especialidad:"vacunacion",
//     consultorio:"301",
   //     correoContacto:"muñoz@clinica123",
   //     paciente:"crox",
    //}
//]
//let nombreMEdico=["juan","enrique"]
//let apellidoMedico=["fernandez","muñoz"]
//let cedulaMedico=["123456789","7456123"]
//let especialidad=["cirujia","vacunacion"]
//let consultorio=["201","301"]
//let correoContacto=["fernandez@clinica123","muñoz@clinica123"]
//let paciente=["tita","crox"]

//for (let i=0; i<medicos.length; i++ ){
   // let medico=medicos[i];
    //let fila =cuerpotabla.insertRow();
   // let celdanombreMEdico = fila.insertCell();
   // let celdaapellidoMedico = fila.insertCell();
    //let celdacedulaMedico =fila.insertCell();
    //let celdaespecialidad =fila.insertCell();
    //let celdaconsultorio =fila.insertCell();
    //let celdacorreoContacto=fila.insertCell();
    //let celdapaciente =fila.insertCell();

   // celdanombreMEdico.textContent=medico.nombreMEdico;
    //celdaapellidoMedico.textContent=medico.apellidoMedico;
   // celdacedulaMedico.textContent=medico.cedulaMedico;
   // celdaespecialidad.textContent=medico.especialidad;
    //celdaconsultorio.textContent=medico.consultorio;
    //celdacorreoContacto.textContent=medico.correoContacto;
    //celdapaciente.textContent=medico.paciente;

//}
  



