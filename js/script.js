function changeIframeSrc(newSrc) {
  document.getElementById("coreFrame").src = newSrc;
}

var showEN = true;
function switchDisplay() {
	if (showEN){
		var elsEN = document.getElementsByClassName("displayEN");
		Array.prototype.forEach.call(elsEN, function(el) {
			// Do stuff here
			//console.log(el.tagName);
			el.style.display = "none";
		});
		var elsCN = document.getElementsByClassName("displayCN");
		Array.prototype.forEach.call(elsCN, function(el) {
			// Do stuff here
			//console.log(el.tagName);
			el.style.display = "block";
		});
		showEN = false;
	}else{
		var elsCN = document.getElementsByClassName("displayCN");
		Array.prototype.forEach.call(elsCN, function(el) {
			// Do stuff here
			//console.log(el.tagName);
			el.style.display = "none";
		});
		var elsEN = document.getElementsByClassName("displayEN");
			Array.prototype.forEach.call(elsEN, function(el) {
			// Do stuff here
			//console.log(el.tagName);
			el.style.display = "block";
		});
		showEN = true;
	}
}

function variationToText(variation) {
	if (variation <= 2) {
		return "LOW";
	} else if (variation >= 4) {
		return "HIGH";
	} else {
		return "MODERATE";
	}
}

