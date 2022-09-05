export function verifyPago() {
	const alerta = document.getElementById('alert');
	const cardNumber = document.getElementById('cardNumber');
	const cardName = document.getElementById('cardName');
	const cardExpiration = document.getElementById('cardExpiration');

	const valores = [cardNumber.value, cardName.value, cardExpiration.value];
	let flag = valores.some(v => v == '');
	if (!flag) {
		alerta.innerHTML =
			'<div class="spinner-border text-psgblue" role="status"><span class="visually-hidden">Loading...</span></div>';
		setTimeout(() => {
			alerta.setAttribute(
				'class',
				'bg-transparent rounded text-dark mt-2 py-1 text-center'
			);
			alerta.innerHTML =
				'Datos validados correctamente <iconify-icon icon="flat-color-icons:ok"></iconify-icon>';
		}, 2500);
	} else {
		alerta.setAttribute(
			'class',
			'bg-transparent rounded text-dark mt-2 py-1 text-center'
		);
		alerta.innerHTML =
			'Por favor complete sus datos <iconify-icon icon="bxs:error" style="color: orange;"></iconify-icon>';
	}
	return !flag;
}
