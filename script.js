// if you want to change something on a DIFFERENT element, you have to call it by name (it's "id")
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp

// "el" stands for the "element" that was just clicked
function allOpaque(el){
	document.getElementById("opaque-pats").classList.add("opaque");
	document.getElementById("opaque-rams").classList.add("opaque");

}

// "el" stands for the "element" that was just clicked
function removeColor(el){
	document.getElementById("pats-column").classList.remove("pats-silver");
	document.getElementById("rams-column").classList.remove("rams-blue");
}

function showTrophy(el){
	document.getElementById("opaque-rams").src = "images/lombardi_trophy.png";
	document.getElementById("mid").src = "images/lombardi_trophy.png";
	document.getElementById("opaque-pats").src = "images/lombardi_trophy.png";
}
