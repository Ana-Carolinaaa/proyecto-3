class Alumno {
    saludar() {
        console.log('saludar alumno')
    }
}
class Curso {

}

function saludar() {
    alert('hola grupo')
}
const alumnos =JSON.parse(localStorage.getItem('Alumnos2')) || [];

function mostrarContenido(contenido) {
    document.getElementById('contenido1').style.display = 'none';
    document.getElementById('contenido2').style.display = 'none';

    document.getElementById(contenido).style.display = 'block';

    if (contenido === 'contenido1') {
        const tablaBody =document.querySelector(`#${contenido} tbody`);
        tablaBody.innerHTML = crearFilasTabla(alumnos);
    }
}

const jose = new Alumno();

function agregarAlumno(nombre, apellido, edad) {
    let nuevoAlumno = ({ nombre, edad, apellido})

    alumnos.push(nuevoAlumno);

    localStorage.setItem('Alumnos2', JSON.stringify(alumnos));

    console.log('Nuevo alumno agregado', nuevoAlumno);

}

function getLocalSorage() {
    const local = JSON.parse(localStorage.getItem('Alumnos2'));
    console.log(local)
}

jose.saludar()

function crearFilasTabla(datos){
    let filasHTML ='';
    for (let i = 0; i < datos.length; i++) {
        const { nombre, apellido, edad, cursos } = datos[i];
        filasHTML += `
            <tr>
                <td>${nombre}</td>
                <td>${apellido}</td>
                <td>${edad}</td>
                <td>${cursos?.join(', ') || 'No hay cursos'}</td>
            </tr>
        `;
    }

    return filasHTML;
}
