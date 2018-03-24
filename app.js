var first = document.getElementById('message');
var second = document.getElementById('result');
var third = document.querySelector('button');

var charLimit = 180;

first.addEventListener('keyup', test, false);

function test() {

	second.innerHTML = charLimit - this.value.length;

	if (second.innerHTML < 0) {

		second.style.color = 'red';
		third.classList.add('disabled');

	} else {

		second.style.color = '';

	}

}