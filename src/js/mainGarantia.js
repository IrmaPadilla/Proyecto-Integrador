import { verifyPago } from './pago-completado.js';
import { verifyInfo } from './personal-data-validation.js';
import { cleanAlert } from './cleanAlert.js';
import { getInfo } from './getTicket.js';

const toastPagoCompleto = document.getElementById('liveToast');

const extGarantia = document.getElementById('garantiaExt');

const btnPagar = document.getElementById('pagar');
const btnReg = document.getElementById('reg');
const alertaPago = document.getElementById('alert');
const ticketInput = document.getElementById('ticketNumber');
const inputPago = document.getElementById('pagoGarantia');
const formPago = document.getElementById('acordPago');

cargarListeners();

function cargarListeners() {
	extGarantia.addEventListener('input', e => {
		e.preventDefault();
		const opcion = document.getElementById(e.target.id);
		console.log(opcion.id);
		if (opcion.id == 'noGarantia') {
			formPago.classList.add('collapsed');
			formPago.click();
		} else if (formPago.classList.contains('collapsed')) {
			formPago.classList.remove('collapsed');
			formPago.click();
		}
	});

	inputPago.addEventListener('input', () => {
		let ok = verifyPago();
		if (ok) {
			btnPagar.removeAttribute('disabled');
		} else {
			btnPagar.setAttribute('disabled', true);
		}
	});

	btnPagar.addEventListener('click', e => {
		e.preventDefault();
		const toast = new bootstrap.Toast(toastPagoCompleto);
		toast.show();
		btnPagar.setAttribute('disabled', true);
		cleanAlert(alertaPago);
	});

	btnReg.addEventListener('click', e => {
		e.preventDefault();
		verifyInfo();
	});

	ticketInput.addEventListener('input', e => {
		e.preventDefault();
		getInfo(e.target.value);
	});
	// alertaPago.addEventListener('mouseleave', cleanAlert);
	// alertaReg.addEventListener('mouseleave', cleanAlert);
}
