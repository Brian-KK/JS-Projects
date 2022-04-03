const btn_main = document.querySelector('.btn-main');

const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const mins = document.querySelector('.mins');
const seconds = document.querySelector('.seconds');

const inputDate = '1 jan 2023';

const countdown = function () {
	const targetDate = new Date(inputDate);
	const currentDate = new Date();

	let toGoInSec = (targetDate - currentDate) / 1000;
	let day = Math.floor(toGoInSec / 3600 / 24);
	let hour = Math.floor((toGoInSec / 3600) % 24);
	let min = Math.floor((toGoInSec / 60) % 60);
	let sec = Math.floor(toGoInSec % 60);

	days.innerText = formatTime(day);
	hours.innerText = formatTime(hour);
	mins.innerText = formatTime(min);
	seconds.innerText = formatTime(sec);
};

const formatTime = function (time) {
	return time < 10 ? `0${time}` : time;
};

setInterval(() => {
	countdown();
}, 1000);

btn_main.addEventListener('click', function () {
	window.location = '../index.html';
});
