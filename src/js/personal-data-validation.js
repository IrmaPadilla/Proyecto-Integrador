const clientName = document.getElementById('name');
const ticketNumber = document.getElementById('ticketNumber');
const purchaseDate = document.getElementById('purchaseDate');
const category = document.getElementById('categoria');
const email = document.getElementById('email');
const phone = document.getElementById('telefono');
const alertaReg = document.getElementById('alertReg');

const btnReg = document.getElementById('reg');
btnReg.addEventListener('click', e => {
	e.preventDefault();
	verifyInfo();
});

alertaReg.addEventListener('mouseleave', cleanAlert);

function cleanAlert() {
	alertaReg.innerHTML = '';
	alertaReg.setAttribute('class', '');
}

function verifyInfo() {
	if (
		clientName.value &&
		ticketNumber.value &&
		purchaseDate.value &&
		category.value &&
		email.value &&
		phone.value
	) {
		alertaReg.innerHTML =
			'Producto registrado exitosamente <iconify-icon icon="flat-color-icons:ok"></iconify-icon>';
		alertaReg.setAttribute(
			'class',
			'bg-success rounded text-white mt-5 py-3 text-center'
		);
	} else {
		alertaReg.innerHTML =
			'Por favor complete sus datos <iconify-icon icon="bxs:error" style="color: orange;"></iconify-icon>';
		alertaReg.setAttribute(
			'class',
			'bg-danger rounded text-white mt-5 py-3 text-center'
		);
	}
}
