$(document).ready (function() {
	for(var i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			$("body").append("fizz buzz");
		} else if (i % 5 ===0) {
			$("body").append("buzz");
		} else if (i % 3 === 0) {
			$("body").append("fizz");
		} else {
			$("body").append(i);
		}
		$("body").append("<br>");
	}
});
