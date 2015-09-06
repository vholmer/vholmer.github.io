$(document).ready(function() {
	$("#readFile").click(function() {
		alert(window.location.pathname);
		$("#container").load("./text/data.txt");
 	});
});