'use strict';

const btn_main = document.querySelector('.btn-main');

btn_main.addEventListener('click', function () {
	window.location = '../index.html';
});

let randomNumber = Math.floor(Math.random() * 20) + 1;

const createNumber = () => {
	randomNumber = Math.floor(Math.random() * 20) + 1;
};

const displayMessage = message => {
	document.querySelector('.message').textContent = message;
};

const checkBtn = document.querySelector('.checkBtn');
const againBtn = document.querySelector('.againBtn');
let score = 20;
let hiscore = 0;

checkBtn.addEventListener('click', () => {
	const input = Number(document.querySelector('.inputValue').value);
	if (!input) {
		displayMessage('⛔️ No number!');
	} else if (input > 20 || input < 1) {
		displayMessage('Hint: Between 1 - 20');
	} else if (input === randomNumber) {
		displayMessage('You have guessed it! 🥳🎉🥳');
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.secretNumber').style.width = '200px';
		document.querySelector('.secretNumber').textContent = randomNumber;
		hiscore = document.querySelector('.score').textContent;
		if (hiscore > document.querySelector('.hiScore').textContent) {
			document.querySelector('.hiScore').textContent = hiscore;
		}
	} else if (input !== randomNumber) {
		if (score > 1) {
			displayMessage(
				input > randomNumber ? 'Hint:  📈 Too high..' : 'Hint: 📉 Too low..'
			);
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			displayMessage('💥 Score 0! Again?');
			document.querySelector('.score').textContent = 0;
			document.querySelector('.secretNumber').textContent = randomNumber;
			document.querySelector('body').style.border = '5px solid red';
			document.querySelector('body').style.backgroundColor = 'rgb(112, 108, 108)';
		}
	}
});

againBtn.addEventListener('click', () => {
	createNumber();
	displayMessage('Start guessing...');
	score = 20;
	document.querySelector('.secretNumber').textContent = '?';
	document.querySelector('.inputValue').value = '';
	document.querySelector('.secretNumber').style.width = '100px';
	document.querySelector('.score').textContent = 20;
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('body').style.border = 'none';
});
