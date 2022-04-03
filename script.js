const container = document.querySelector('.container');

container.addEventListener('click', function (e) {
	let target = +e.target.innerText;
	if (target) {
		window.location = `Project-${target}/project-${target}.html`;
	}
});
