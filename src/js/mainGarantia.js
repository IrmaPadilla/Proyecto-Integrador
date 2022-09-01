import { copyright } from './footer.js';
import { verifyPago } from './pago-completado.js';
import { verifyInfo } from './personal-data-validation.js';
import { cleanAlert } from './cleanAlert.js';

const btnPagar = document.getElementById('pagar');
const btnReg = document.getElementById('reg');
const alertaPago = document.getElementById('alert');
const alertaReg = document.getElementById('alertReg');

cargarListeners();
function cargarListeners() {
	btnPagar.addEventListener('click', e => {
		e.preventDefault();
		verifyPago();
	});
	btnReg.addEventListener('click', e => {
		e.preventDefault();
		verifyInfo();
	});
	alertaPago.addEventListener('mouseleave', cleanAlert);
	alertaReg.addEventListener('mouseleave', cleanAlert);
}

copyright();
