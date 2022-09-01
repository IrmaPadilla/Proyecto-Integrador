export function copyright() {
	const copy = document.getElementById('copy');

	copy.innerHTML = '© ' + new Date().getFullYear() + ' SwarmDev';
}
