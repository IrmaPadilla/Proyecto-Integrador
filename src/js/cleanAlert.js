export function cleanAlert(e) {
	// document.getElementById(e.target.id).setAttribute('class', '');
	// document.getElementById(e.target.id).innerHTML = '';
	setTimeout(() => {
		e.setAttribute('class', '');
		e.innerHTML = '';
	}, 1500);
}
