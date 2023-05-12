const formularioMedicos = document.getElementById('registro-medicos-form')
formularioMedicos.addEventListener('submit', (event) =>{
    event.preventDefault();
    const datosmedicos = {
        nombreMedico: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        cedula: document.getElementById('cedula').value,
        consultorio: document.getElementById('consultorio').value,
        telefono: document.getElementById('telefono').value,
        correo: document.getElementById('correo').value,
        especialiad: document.getElementById('especialidad').value
    }
    console.log(datosmedicos)
    //const jsonDatos = JSON.stringify(datosmedicos)
   // console.log(jsonDatos)
})


