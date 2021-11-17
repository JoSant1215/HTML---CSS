const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const password = document.getElementById('password');
const apellido = document.getElementById('apellido');
const direccion = document.getElementById('direccion');
const telefono = document.getElementById('telefono');
const cedula = document.getElementById('cedula');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = nombre.value.trim();
    const apellidoValue = apellido.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const direccionValue = direccion.value.trim();
    const telefonoValue = telefono.value.trim();
    const cedulaValue = cedula.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(nombre, 'Nombre cannot be blank');
	} else {
		setSuccessFor(nombre);
	}
    if(apellidoValue === '') {
		setErrorFor(apellido, 'Apellido cannot be blank');
	} else {
		setSuccessFor(apellido);
	}
    if(cedulaValue === '') {
		setErrorFor(cedula, 'Cedula cannot be blank');
	} else {
		setSuccessFor(cedula);
	}
    if(direccionValue === '') {
		setErrorFor(direccion, 'Direccion cannot be blank');
	} else {
		setSuccessFor(direccion);
	}
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
    if(telefonoValue === '') {
		setErrorFor(telefono, 'Telefono cannot be blank');
	} else {
		setSuccessFor(telefono);
	}

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'input-field error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'input-field success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function isCedu(cedula)
{
    return /^\d{3}-\d{7}-\d{1}$/.test(cedula)

}
function isTele(telefono)
{
    return /^\d{3}-\d{3}-\d{4}$/.test(telefono)

}





// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});