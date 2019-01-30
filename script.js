
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

let nbr = 0;
let trollWidth = document.querySelector("#troll").clientWidth;
let trollHeight = document.querySelector("#troll").clientHeight;

document.querySelector("#troll").addEventListener("mouseover", () => {
	let btn = document.querySelector("#troll");
	
	btn.style.left = Math.floor((Math.random() * (trollWidth + 500)) ) + "px";
	btn.style.top = Math.floor((Math.random() * (trollHeight + 300)) ) + "px";
	
	if(nbr === 5){
		document.querySelector("#troll").innerHTML = "Can you even click?";
	}
	if(nbr === 6){
		document.querySelector("#troll").innerHTML = "Brah..";
	}
	if(nbr === 7){
		document.querySelector("#troll").innerHTML = "It hurts to watch...";
	}	
	if(nbr === 8){
		document.querySelector("#troll").innerHTML = "I can't look at this anymore";
	}	
	if(nbr === 9){
		document.querySelector('#troll').innerHTML = "Ok i'll stop this time";
	}
	if(nbr === 10){
		document.querySelector('#troll').innerHTML = "Yoink"; 
		nbr = 0;
	}
	nbr ++;
});

