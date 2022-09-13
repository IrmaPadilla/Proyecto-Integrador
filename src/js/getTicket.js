export function getInfo(value) {
	const clientName = document.getElementById('name');
	const purchaseDate = document.getElementById('purchaseDate');
	const email = document.getElementById('emailInput');
	const phone = document.getElementById('telefono');

	const fields = [clientName, purchaseDate, email, phone];

	let regex = /\b[0-9]{10}(?![\w -])\b/;

	if (regex.test(value)) {
		fields.forEach(field => field.removeAttribute('disabled'));
	} else {
		fields.forEach(field => field.setAttribute('disabled', 'true'));
	}
}
