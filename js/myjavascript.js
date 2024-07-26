"use strict";

// alert("Ciao Patrizio :)");
const PWD = "Paperino01";
const USERNAME = "p.tardiolobonifazi@vivasoft.it";
const USERNAMELENGTH = 5;
const PASSWORDLENGTH = 8;

// funzione che gestisce la login
function login()
{
	// alert("click on login button");
	var inputusername = document.getElementById("username");
	var inputpwd = document.getElementById("password");
	var inputconfirmpwd = document.getElementById("confirmpassword");
	
	if (inputusername.value.length <= USERNAMELENGTH)
	{
		// Scrivere un messaggio per dare all'utente delle informazioni
		// + nella pagina html aggiungere un div con id opportuno
		// + qua sotto usare document.getElementById con l'id del div
		// + scrivere nel div 
		// + gestire la visibilità del div corretto
		
		var msg = "Il campo <strong>username</strong> deve avere almeno " +  (USERNAMELENGTH + 1 ) + " caratteri";
		manageDivInfo(msg);
		
		return;
	}
	
	if (inputpwd.value.length <= PASSWORDLENGTH)
	{
		// Scrivere un messaggio per dare all'utente delle informazioni
		// - nella pagina html aggiungere un div con id opportuno
		// - qua sotto usare document.getElementById con l'id del div
		// - scrivere nel div 
		// - gestire la visibilità del div corretto
		
		manageDivInfo("Il campo <strong> password </strong> deve avere " +  (PASSWORDLENGTH + 1 ) + " caratteri");
		
		return;
	}
	
	if (inputconfirmpwd.value.length <= PASSWORDLENGTH)
	{
		// Scrivere un messaggio per dare all'utente delle informazioni
		// - nella pagina html aggiungere un div con id opportuno
		// - qua sotto usare document.getElementById con l'id del div
		// - scrivere nel div 
		// - gestire la visibilità del div corretto
		
		manageDivInfo("Il campo <strong> confirm password  </strong> deve avere almeno "  +  (PASSWORDLENGTH + 1 ) + " caratteri");
		
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
			const rooPath = "C:/Enaip07-10-2024/HTML-CSS/Example1/";
			var urlPath = 'file:///' + rooPath + 'HomePage.html?usr=' + usernamelogin + "&d=" + today;
			console.log('urlPath: ' + urlPath);
			window.open(urlPath, '_self');
			// window.open('https://www.w3schools.com', '_blank');
		}


	} else
	{
		manageDivInfo("I campi <strong> password e confirm password </strong> non corrispondono");
	}
}


/* function manageDivInfo(message) {
	var divInfo = document.getElementById("divInfo");
	divInfo.style.visibility = 'hidden';
	divInfo.innerHTML = message; 
	divInfo.style.visibility = 'visible';
	divInfo.style.background = 'white';
	divInfo.style.color = 'red';
	divInfo.style.fontWeight = 'bold';
} */

function manageDivInfo(message) {
	var divInfo = document.getElementsByName("divNameInfo");
	divInfo[0].style.visibility = 'hidden';
	divInfo[0].innerHTML = message; 
	divInfo[0].style.visibility = 'visible';
	divInfo[0].style.background = 'white';
	divInfo[0].style.color = 'red';
	divInfo[0].style.fontWeight = 'bold';
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

	// https://www.aspsnippets.com/Articles/2051/Populate-DropDownList-from-JSON-Array-using-JavaScript/
	PopulateDropDownListProvider();
	/* // Get data from 
	var url = "./resources/providers.json";
	
	$.getJSON(url, function (data) {
		
		$.each(data, function (index, value) {
			$('#selProvider').append('<option value="' + value.Nome + '">' + value.Id + 
	'</option>');
				
		});  
	}); */
}


// https://www.aspsnippets.com/Articles/2051/Populate-DropDownList-from-JSON-Array-using-JavaScript/
function PopulateDropDownListProvider() {
	//Build an array containing Provider records.
	 var providers = [
		 { Id: 1, Name: "Cisco"},
		 { Id: 2, Name: "Amazon"},
		 { Id: 3, Name: "Microsoft"}
	 ];
	
	 var ddlSelectProvider = document.getElementById("selectProvider");
	
	 //Add the Options to the DropDownList.
	 for (var i = 0; i < providers.length; i++) {
		 
		var option = document.createElement("OPTION");

		 //Set Provider Name in Text part.
		 option.innerHTML = providers[i].Name;

		 //Set Provider Id in Value part.
		 option.value = providers[i].Id;

		 //Add the Option element to DropDownList.
		 ddlSelectProvider.options.add(option);
	 }
 }

 function PopulateDropDownListTecnologia() {

	var ddlSelectProvider = document.getElementById("selectProvider");
	var ddlSelectTecnologia = document.getElementById("selectTecnologia");
	var ddlSelectCorso = document.getElementById("selectCorso");
	// 3 == Microsoft - Al momento ho solo questi dati e non ho un web service da chiamare
	if(ddlSelectProvider.options[ddlSelectProvider.selectedIndex].value != 3){
		// Se non ho selezionato Microsoft esco
		ddlSelectTecnologia.style.visibility = 'hidden';
		ddlSelectCorso.style.visibility = 'hidden';
		return;
	 }

	//Build an array containing Microsoft's tecnology records.
	 var tecnologie = [
		 { Id: 1, Name: "Corsi Azure"},
		 { Id: 2, Name: "Corsi MVC"},
		 { Id: 3, Name: "Corsi Power Platform"}
	 ];

	 // Rimuovo tutti gli option meno lo 0 che è "Select a provider"
	 removeOptions(ddlSelectTecnologia);

	 // Rendo visibile ddlSelectTecnologia
	 ddlSelectTecnologia.style.visibility = 'visible';
	
	 //Add the Options to the DropDownList.
	 for (var i = 0; i < tecnologie.length; i++) {
		 
		var option = document.createElement("OPTION");

		 //Set Tecnologia Name in Text part.
		 option.innerHTML = tecnologie[i].Name;

		 //Set Tecnologia Id in Value part.
		 option.value = tecnologie[i].Id;

		 //Add the Option element to DropDownList.
		 ddlSelectTecnologia.options.add(option);
	 }
 }

 function PopulateDropDownListCorso() {
	var ddlSelectTecnologia = document.getElementById("selectTecnologia");
	var ddlSelectCorso = document.getElementById("selectCorso");

	// 1 == Corsi Azure - Al momento ho solo questi dati e non ho un web service da chiamare
	if(ddlSelectTecnologia.options[ddlSelectTecnologia.selectedIndex].value != 1){
		// Se non ho selezionato Corsi Azure esco
		ddlSelectCorso.style.visibility = 'hidden';
		return;
	 }

	//Build an array containing Microsoft's course records.
	 var corsi = [
		 { Id: 1, Name: "AZ-900"},
		 { Id: 2, Name: "AZ-400"},
		 { Id: 3, Name: "AZ-305"}
	 ];

	 // Rimuovo tutti gli option meno lo 0 che è "Select a course"
	 removeOptions(ddlSelectCorso);

	 // Rendo visibile ddlSelectCorso
	 ddlSelectCorso.style.visibility = 'visible';
	
	 //Add the Options to the DropDownList.
	 for (var i = 0; i < corsi.length; i++) {
		 
		var option = document.createElement("OPTION");

		 //Set Tecnologia Name in Text part.
		 option.innerHTML = corsi[i].Name;

		 //Set Tecnologia Id in Value part.
		 option.value = corsi[i].Id;

		 //Add the Option element to DropDownList.
		 ddlSelectCorso.options.add(option);
	 }
 }

 function removeOptions(selectElement) {
	// i > 0 == > Così non rimuovo lo 0 che è "Select an item"
    for (let i = selectElement.options.length - 1; i > 0; i--) {
        selectElement.remove(i);
    }
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