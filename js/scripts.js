function hideContent(d) {
	if(d.length < 1) { return; }
	document.getElementById(d).style.display = "none";
}

function showContent(d) {
	if(d.length < 1) { return; }
	document.getElementById(d).style.display = "block";
	targeted_div = d;
}

function reverseContentDisplay(d) {
	if(d.length < 1) { return; }
	if(document.getElementById(d).style.display == "none") { document.getElementById(d).style.display = "block"; }
	else { document.getElementById(d).style.display = "none"; }
}

