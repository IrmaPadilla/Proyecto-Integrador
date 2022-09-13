export function copyrightDate() {
	const year = new Date();
	const copyright = document.querySelector('#copyright');
	const copyrightDateShow = document.createElement('p');
	copyrightDateShow.classList.add(
		'fs-2',
		'text-white',
		'fw-bold',
		'text-center'
	);
	copyrightDateShow.innerHTML += `
      Copyright ${year.getFullYear()}
    `;
	copyright.appendChild(copyrightDateShow);
}
