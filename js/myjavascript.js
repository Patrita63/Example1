"use strict";

// alert("Ciao Patrizio :)");
const PWD = "Paperino01";
const USERNAME = "p.tardiolobonifazi@vivasoft.it";

// funzione che gestisce la login
function login()
{
	// alert("click on login button");
	var inputusername = document.getElementById("username");
	var inputpwd = document.getElementById("password");
	var inputconfirmpwd = document.getElementById("confirmpassword");
	
	if (inputusername.value.length <= 4)
	{
		// Scrivere un messaggio per dare all'utente delle informazioni
		// + nella pagina html aggiungere un div con id opportuno
		// + qua sotto usare document.getElementById con l'id del div
		// + scrivere nel div 
		// + gestire la visibilità del div corretto
		
		var msg = "Il campo <strong>username</strong> deve avere almeno 5 caratteri";
		manageDivInfo(msg);
		
		return;
	}
	
	if (inputpwd.value.length <= 8)
	{
		// Scrivere un messaggio per dare all'utente delle informazioni
		// - nella pagina html aggiungere un div con id opportuno
		// - qua sotto usare document.getElementById con l'id del div
		// - scrivere nel div 
		// - gestire la visibilità del div corretto
		
		manageDivInfo("Il campo <strong> password </strong> deve avere almeno 9 caratteri");
		
		return;
	}
	
	if (inputconfirmpwd.value.length <= 8)
	{
		// Scrivere un messaggio per dare all'utente delle informazioni
		// - nella pagina html aggiungere un div con id opportuno
		// - qua sotto usare document.getElementById con l'id del div
		// - scrivere nel div 
		// - gestire la visibilità del div corretto
		
		manageDivInfo("Il campo <strong> confirm password  </strong> deve avere almeno 9 caratteri");
		
		return;
	}
	
	if (inputpwd.value === inputconfirmpwd.value) {
		hiddenDivInfo();
		// + verificare username e password
		// + Redirect to HomePage.html solo se 
		//   p.tardiolobonifazi@vivasof.it.......................Paperino01
		// + nella pagina HomePage.html voglio che ci sia scritto: Benvenuto <username>
		//   passare un parametro da una pagina ad un' altra, utilizzeremo querystring

		
		var password = inputpwd.value;
		var usernamelogin = inputusername.value;

		if(password === PWD && usernamelogin === USERNAME) {
			// alert("OK");
			// window.open('file:///C:/Enaip07-10-2024/HTML-CSS/Example1/HomePage.html', '_blank');
			var today = new Date().toISOString();
			
			console.log(today);
			var urlPath = 'file:///C:/Enaip07-10-2024/HTML-CSS/Example1/HomePage.html?usr=' + usernamelogin + "&d=" + today;
			console.log('urlPath: ' + urlPath);
			window.open(urlPath, '_self');
			// window.open('https://www.w3schools.com', '_blank');
		}


	} else
	{
		manageDivInfo("I campi <strong> password e confirm password </strong> non corrispondono");
	}
}


function manageDivInfo(message) {
	var divInfo = document.getElementById("divInfo");
	divInfo.style.visibility = 'hidden';
	divInfo.innerHTML = message; 
	divInfo.style.visibility = 'visible';
}

function hiddenDivInfo() {
	var divInfo = document.getElementById("divInfo");
	divInfo.style.visibility = 'hidden';
}

function showDivInfo() {
	var divInfo = document.getElementById("divInfo");
	divInfo.style.visibility = 'visible';
}


function getQueryParameter(){
	const urlParams = new URLSearchParams(window.location.search);
	const usrParam = urlParams.get('usr');
	const dParam = urlParams.get('d');

	var divWelcome = document.getElementById("welcome");
	divWelcome.innerHTML = "Benvenuto " + usrParam + " ! " + dParam;
}

function manageOperazione(tipoOperazione){
	var divResult = document.getElementById("divResult");

	switch(tipoOperazione) {
		case "SOMMA":
		  	// code block
		  	let inputaddendo1 = document.getElementById("addendo1");
		  	let inputaddendo2 = document.getElementById("addendo2");

			let resultSomma = somma(Number(inputaddendo1.value), Number(inputaddendo2.value));

			
			divResult.innerHTML = "La somma di " + inputaddendo1.value + " + " + inputaddendo2.value + " è uguale a " + resultSomma;
		  break;
		case "SOTTRAZIONE":
		  // code block
		  break;
		case "MOLTIPLICAZIONE":
		  // code block
		  break;
		case "DIVISIONE":
		  // code block
		  break;
		default:
		  // code block
		divResult.innerHTML = "L' operazione " + tipoOperazione + " al momento non è gestita.";
	}
}

function somma(addendo1, addendo2) {
	let sum = addendo1 + addendo2;
	return sum;
}

function sottrazione(addendo1, addendo2) {
	let result = addendo1 - addendo2;
	return result;
}

function prodotto(numero1, numero2) {
	let prod = numero1 * numero2;
	return prod;
}

function divisione(numeratore, denominatore) {
	let result = numeratore / denominatore;
	return result;
}