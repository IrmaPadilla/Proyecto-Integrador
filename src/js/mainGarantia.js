import { copyright } from './footer';
import { verifyPago } from './pago-completado';

const btnPagar = document.getElementById('pagar');
cargarListeners();
function cargarListeners() {
	btnPagar.addEventListener('click', e => {
		e.preventDefault();
		verifyPago();
	});
}

copyright();
