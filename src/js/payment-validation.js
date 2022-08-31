const cardNumber = document.getElementById('cardNumber');

cardRegex = ' ^4[0-9]{12}(?:[0-9]{3})?$';

if (cardRegex.test(cardNumber.value)) {
	console.log('funciona');
} else {
	console.log('nmms estas bien wey');
}
