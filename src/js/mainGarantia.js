import { copyright } from './footer.js';
import { verifyPago } from './pago-completado.js';
import { verifyInfo } from './personal-data-validation.js';
import { cleanAlert } from './cleanAlert.js';

const toastPagoCompleto = document.getElementById('liveToast');

const btnPagar = document.getElementById('pagar');
const btnReg = document.getElementById('reg');
const alertaPago = document.getElementById('alert');
const alertaReg = document.getElementById('alertReg');
const inputPago = document.getElementById('pagoGarantia');

cargarListeners();

function cargarListeners() {
	inputPago.addEventListener('input', () => {
		let ok = verifyPago();
		if (ok) {
			btnPagar.removeAttribute('disabled');
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

	// alertaPago.addEventListener('mouseleave', cleanAlert);
	// alertaReg.addEventListener('mouseleave', cleanAlert);
}

copyright();
