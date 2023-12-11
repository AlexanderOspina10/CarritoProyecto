const nombre = document.getElementById('Nombre');
const apellido = document.getElementById('Apellido');
const botonSiguiente = document.getElementById('siguiente');

const email = document.getElementById('email');
const telefono = document.getElementById('Telefono');


nombre.addEventListener('blur', (e) => {
    const inputValue = e.target.value;
    
    // Verificar si el valor contiene algún número
    if (!isNaN(inputValue)) {
        console.log(e.target)
        // Si contiene números, aplicar estilo al borde (por ejemplo, cambiar a borde rojo)
        e.target.classList.remove('border-success');
        e.target.classList.add('border-danger');
        mensajeError.style.color = 'red';

        botonSiguiente.setAttribute('disabled', '' )

    } else {
        // Si no contiene números, quitar cualquier estilo existente
        e.target.classList.remove('border-danger');
        e.target.classList.add('border-success');

        botonSiguiente.removeAttribute('disabled')
        
    }

    Swal.fire(
        'Los Datos se guardaron correctamente',
        '',
        'success'
    )
});

nombre.addEventListener('keydown', (e) => {
    if ((e.keyCode >= 48 && e.keyCode <= 57)) e.preventDefault()//asi solo  me deja ingresar letras no numeros y con el signo de ! solo numeros
})


apellido.addEventListener('blur', (e) => {
    const inputValue = e.target.value;
    
    // Verificar si el valor contiene algún número
    if (!isNaN(inputValue)) {
        console.log(e.target)
        // Si contiene números, aplicar estilo al borde (por ejemplo, cambiar a borde rojo)
        e.target.classList.remove('border-success');
        e.target.classList.add('border-danger');

        botonSiguiente.setAttribute('disabled', '' )

    } else {
        // Si no contiene números, quitar cualquier estilo existente
        e.target.classList.remove('border-danger');
        e.target.classList.add('border-success');

        botonSiguiente.removeAttribute('disabled')
        
    }

    console.log('Aqui funciona')
});

apellido.addEventListener('keydown', (e) => {
    if ((e.keyCode >= 48 && e.keyCode <= 57)) e.preventDefault()//asi solo  me deja ingresar letras no numeros y con el signo de ! solo numeros
})


email.addEventListener('blur', (e) => {
    const inputValue = e.target.value;


    if (inputValue.length > 40) {
        e.target.value = inputValue.substring(0, 40);
    }

    var email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    
    
    // Verificar si el valor contiene algún número
    if (!email.test(inputValue)) {
        console.log(e.target)
        // Si contiene números, aplicar estilo al borde (por ejemplo, cambiar a borde rojo)
        e.target.classList.remove('border-success');
        e.target.classList.add('border-danger');

        botonSiguiente.setAttribute('disabled', '' )

        e.target.parentElement.querySelector('label').textContent = 'El correo electrónico no es válido';
		return false;

    } else {
        // Si no contiene números, quitar cualquier estilo existente
        e.target.classList.remove('border-danger');
        e.target.classList.add('border-success');

        botonSiguiente.removeAttribute('disabled')

        e.target.parentElement.querySelector('label').textContent = 'El correo electrónico es válido';
		return true;
        
    }

    
});


// email.addEventListener('keydown', (e) => {
//     if ((e.keyCode >= 57 && e.keyCode <= 48)) e.preventDefault();
// });


telefono.addEventListener('blur', (e) => {
    const inputValue = e.target.value;
    
    // Verificar si el valor contiene algún número
    if (!isNaN(inputValue)) {
        console.log(e.target)
        // Si contiene números, aplicar estilo al borde (por ejemplo, cambiar a borde rojo)
        e.target.classList.remove('border-success');
        e.target.classList.add('border-danger');
        mensajeError.style.color = 'red';

        botonSiguiente.setAttribute('disabled', '' )

    } else {
        // Si no contiene números, quitar cualquier estilo existente
        e.target.classList.remove('border-danger');
        e.target.classList.add('border-success');

        botonSiguiente.removeAttribute('disabled')
        
    }

    console.log('Aqui funciona')
});

telefono.addEventListener('keydown', (e) => {
    if (( e.keyCode >= 48 && e.keyCode <= 57)) e.preventDefault()//asi solo  me deja ingresar letras no numeros y con el signo de ! solo numeros
})
