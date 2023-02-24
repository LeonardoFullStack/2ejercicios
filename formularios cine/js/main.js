//crear arrays correlacionados en titulo,director,año y género 
let arrayTitulo = JSON.parse(localStorage.getItem('Títulos')) || [];
let arrayDirector = JSON.parse(localStorage.getItem('Director')) || [];
let arrayAnio = JSON.parse(localStorage.getItem('Anio')) || [];
let arrayGen = JSON.parse(localStorage.getItem('Género')) || [];
let contador = 0;

const titulo = document.querySelector('#titulo');
const director = document.querySelector('#director');
const anio = document.querySelector('#anio');
const genero = document.querySelector('#genero');
const formulario = document.querySelector('#formulario');
const enviar = document.querySelector('#enviar');
const eliminar = document.querySelector('#eliminar')



let objValidar = {
    titulo: false,
    director: false,
    anio: false,
    genero: false,

}

eliminar.addEventListener('click', (ev) => {
    if  (ev.target.matches('#eliminar')) {
        tabla.innerHTML = '';
        localStorage.clear();
    }
})

enviar.addEventListener('click', (ev) => {
    ev.preventDefault();
    validar();
    const eliminar = document.querySelector('#eliminar')
    if  (ev.target.matches('#eliminar')) {
    }
})

const validar = () => {
    const campoTitulo = titulo.value
    const campoDirector = director.value;
    const campoAnio = anio.value;
    const campoGenero = genero.value;
    const regExpTitle = /[a-z0-9]/gi;
    const regExpDirector = /[a-z]/gi;
    const regExpAnio = /[0-9]/gi;
    let fecha = new Date();
    const repe = arrayTitulo.find((item) => item == campoTitulo)




    if (regExpTitle.test(campoTitulo) && repe == undefined) {
        objValidar.titulo = true;

    } else {
        objValidar.titulo = false;
        alert('Título inválido o repetido');
    }
    if (regExpDirector.test(campoDirector)) {
        objValidar.director = true;


    } else {
        objValidar.director = false;
        alert('El campo director es inválido');
    }
    if (campoAnio > 1800 && campoAnio <= fecha.getFullYear() && regExpAnio.test(campoAnio)) {
        objValidar.anio = true;

    } else {
        objValidar.anio = false;
        alert('El año es inválido');
    }
    if (genero.value != 'Selecciona un género') {
        objValidar.genero = true;
    } else {
        objValidar.genero = false;
        alert('Tienes que poner un género');
    }

    const validacion = Object.values(objValidar);
    const valida = validacion.findIndex(item => item == false); 


    if (valida == -1) {
        arrayTitulo.push(campoTitulo);
        arrayDirector.push(campoDirector);
        arrayGen.push(campoGenero);
        arrayAnio.push(campoAnio);
        console.log(arrayTitulo, arrayDirector, arrayGen, arrayAnio);
        localStorage.setItem('Títulos', JSON.stringify(arrayTitulo));
        localStorage.setItem('Director', JSON.stringify(arrayDirector));
        localStorage.setItem('Género', JSON.stringify(arrayGen));
        localStorage.setItem('Anio', JSON.stringify(arrayAnio));

        pintar();
    }

}

const pintar = () => {
    const tabla = document.querySelector('#tabla')
    tabla.innerHTML = '';
    for (i = 0; i <= arrayTitulo.length - 1; i++) {
        const fila = document.createElement('tr')
        const celdaTitulo = document.createElement('td')
        celdaTitulo.textContent = arrayTitulo[i]
        fila.append(celdaTitulo)
        tabla.append(fila)

        const celdaDirector = document.createElement('td')
        celdaDirector.textContent = arrayDirector[i]
        fila.append(celdaDirector);

        const celdaAnio = document.createElement('td')
        celdaAnio.textContent = arrayAnio[i]
        fila.append(celdaAnio);

        const celdaGen = document.createElement('td')
        celdaGen.textContent = arrayGen[i]
        fila.append(celdaGen);
    }



}

pintar();

