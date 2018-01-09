var first = document.getElementById('message');
var second = document.getElementById('result');

var charLimit = 180;

first.onkeyup = function () {

	second.innerHTML = charLimit - this.value.length;

	if (second.innerHTML < 0) {

		second.style.color = 'red';

	} else {

		second.style.color = '';

	}


}