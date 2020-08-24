function semafor() {
	var boje = document.getElementsByClassName('boje');
		boje[0].style.background = 'red';
		boje[1].style.background = 'gray';
		boje[2].style.background = 'gray';

	function changeToYellow() {
		boje[1].style.background = 'yellow';
	}
	function changeToGreen() {
		boje[0].style.background = 'gray';
		boje[1].style.background = 'gray';
		boje[2].style.background = 'green';
	}

	var yellow = setTimeout(changeToYellow, 3000);
	var green = setTimeout(changeToGreen, 5200);
	var start = setInterval(semafor, 10000);
}

semafor();