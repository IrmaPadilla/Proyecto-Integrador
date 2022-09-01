export function verifyPago() {
	const alerta = document.getElementById('alert');
	const cardNumber = document.getElementById('cardNumber');
	const cardName = document.getElementById('cardName');
	const cardExpiration = document.getElementById('cardExpiration');
	if (cardNumber.value && cardName.value && cardExpiration.value) {
		alerta.innerHTML =
			'Pago completado <iconify-icon icon="flat-color-icons:ok"></iconify-icon>';
		alerta.setAttribute(
			'class',
			'bg-success rounded text-white mt-5 py-3 text-center'
		);
	} else {
		alerta.innerHTML =
			'Por favor complete sus datos <iconify-icon icon="bxs:error" style="color: orange;"></iconify-icon>';
		alerta.setAttribute(
			'class',
			'bg-danger rounded text-white mt-5 py-3 text-center'
		);
	}
}
