function includeMenu() {
  var elmnt, file, xhttp;
  elmnt =  document.getElementById("menuBar");
  
  /*search for elements with a certain atrribute:*/
   file = elmnt.getAttribute("menu-include-html");
  if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
			if (this.status == 200) {
				elmnt.innerHTML = this.responseText;
				new bootnavbar();//Init the manu after loading
			}
			if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
			/* Remove the attribute, and call this function once more: */
			elmnt.removeAttribute("footer-include-html");
			includeFooter();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
   }
  
}

function includeFooter() {
  var elmnt, file, xhttp;
  elmnt =  document.getElementById("footerBar");
  
  /*search for elements with a certain atrribute:*/
   file = elmnt.getAttribute("footer-include-html");
  if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
			if (this.status == 200) {
				elmnt.innerHTML = this.responseText;
			}
			if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
			/* Remove the attribute, and call this function once more: */
			elmnt.removeAttribute("footer-include-html");
			includeFooter();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
   }  
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

var currentImge = "";
function updatePhoto(sku,title,image1,image2,image3,description,color_variation,foot_traffic,width, length, thickness){
	//alert(image3);
	//Update Modal Copy URL
	currentImage = "http://corelux.com.sg"+image1.substring(1);
	
	//Update Modal Photo
	document.getElementById("productImg1").src=image1;
	document.getElementById("productImg2").src=image2;
	document.getElementById("productImg3").src=image3;
	document.getElementById("productName").innerText=title;
	document.getElementById("productDescription").innerHTML =description;
	
	//Update product-detail-top
	document.getElementById("liColorVariation").childNodes[0].textContent ="Color Variation - " + variationToText(color_variation);
	document.getElementById("divColorVariation").classList.remove("value-*");
	document.getElementById("divColorVariation").classList.add("value-" + color_variation.toString());
	document.getElementById("liFootTraffic").childNodes[0].textContent ="FOOT TRAFFIC - " + variationToText(foot_traffic);
    document.getElementById("divFootTraffic").classList.remove("value-*");
	document.getElementById("divFootTraffic").classList.add("value-" + foot_traffic.toString());
	
	//Update product-detail-bottom
	document.getElementById("spanSKU").textContent = sku;
	document.getElementById("spanWidth").textContent = width+"\"";
	document.getElementById("spanLength").textContent = length+"\"";
	document.getElementById("spanThickness").textContent = thickness;
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

