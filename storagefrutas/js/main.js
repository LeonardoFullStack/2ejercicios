
const tabla = document.querySelector('.carrito');
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
console.log(carrito)
//tabla.textContent = carrito



document.addEventListener('click', (ev) => {
    if (ev.target.matches('.aniadir')) {
        const id = ev.target.id;
        insertar(id);
    } else if (ev.target.matches('.quitar')) {
        const id = ev.target.previousSibling.id
        eliminar(id);
    }

    if (ev.target.matches('.quitar2')) {
        const producto = ev.target.previousSibling.textContent;
        eliminar(producto);}

    if (ev.target.matches('#eliminar')) {
            tabla.innerHTML = ''
            localStorage.clear();
            carrito = [];
    }
})

const insertar = (elemento) => {
    carrito.push(elemento)
    console.log(carrito)
    localStorage.setItem('carrito', JSON.stringify(carrito));
    pintar();
}

const eliminar = (elemento) => {  
    let contador= 0; 
    for (i = 0; i <= carrito.length - 1; i++) { // Esto lo  tengo que pulir con un find.index
        if (carrito[i] == elemento && contador < 1) {
            carrito.splice(i, 1);
            contador++;
            console.log(carrito);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            pintar();

        }
    }

}

const pintar = () => {
    tabla.innerHTML = ''
    carrito.forEach((item)=>{
        const carrito = document.querySelector('.carrito')
        const li = document.createElement('LI');
        li.classList.add(item)
        const boton2 = document.createElement('button');
        boton2.classList.add('quitar2');
        boton2.textContent = 'Quitar'
        li.textContent = item;
        li.append(boton2)
        carrito.append(li)
    })
}



pintar();




