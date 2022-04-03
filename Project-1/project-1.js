const btn_main = document.querySelector('.btn-main');

const days = document.querySelector('.days').innerText;
const hours = document.querySelector('.hours').innerText;
const mins = document.querySelector('.mins').innerText;
const seconds = document.querySelector('.seconds').innerText;

console.log(days, hours, mins, seconds);

btn_main.addEventListener('click', function () {
	window.location = '../index.html';
});
