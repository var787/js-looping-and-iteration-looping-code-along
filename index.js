// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
// 	let i = 0;
// 	while (i < gifts.length) {
//         console.log(`Wrapped ${gifts[i]} and added a bow`);
//         i++
// 	}

// 	return gifts;
// }

function writeCards(name, event) {
	let thankYouMessage = [];
	for (let i = 0; i < name.length; i++) {
		thankYouMessage.push(
			`Thank you, ${name[i]}, for the wonderful ${event} gift!`
		);
	}
	return thankYouMessage;
}

function countDown(num) {
	while (num > 0) {
		console.log(num);
		num -= 1;
	}
	console.log(num);
}
