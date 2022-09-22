export function getInfo(value) {
	const clientName = document.getElementById('name');
	const purchaseDate = document.getElementById('purchaseDate');
	const email = document.getElementById('emailInput');
	const phone = document.getElementById('telefono');

	const fields = [clientName, purchaseDate, email, phone];

	// const URL = 'http://localhost:8080/api/garantias/';

	let flag = false;

	let regex = /\b[0-9]{10}(?![\w -])\b/;

	if (regex.test(value)) {
		fields.forEach(field => field.removeAttribute('disabled'));
		flag = true;
		fetch(URL, { method: 'get' })
			.then(response => response.json())
			.then(json => completarDatos(json))
			.catch(error => console.log(error));
	} else {
		fields.forEach(field => field.setAttribute('disabled', 'true'));
	}
	const completarDatos = json => {
		clientName.value = json.cliente;
		purchaseDate.value = json.fecha;
		email.value = json.correo;
		phone.value = json.telefono;
	};
	return flag;
}
