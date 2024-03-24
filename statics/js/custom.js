window.onload = function() {
	function getTheme(isClick) {
		let result = document.querySelector("html").getAttribute("data-theme");
		if (isClick) {
			result = result == 'light' ? 'dark' : 'light';
		}
		return result;
	}

	const body = document.body;
	body.setAttribute('data-mdb-theme', getTheme(false));
	document.getElementById('darkmode').addEventListener('click', function(event) {
		body.setAttribute('data-mdb-theme', getTheme(true));
	});
}