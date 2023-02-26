function Privat_Preis(){
	let seiten, bilder, seitenkosten, bilderkosten, layout, host, domain, kosten, monate; 

	seiten = document.getElementById("Privat_Seiten").value;
	bilder = document.getElementById("Privat_Bilder").value;

	if (seiten == "") {seiten = 0;}
	if (bilder == "") {bilder = 0;}
 
	seitenkosten = parseInt(seiten) * 5;
	bilderkosten = parseInt(bilder) * 20;

	if (document.getElementById("Privat_Vorlage").checked == true) {layout = 20;}
	if (document.getElementById("Privat_Individuelle").checked == true) {layout = 200;}
	if (document.getElementById("Privat_Responsiv").checked == true) {layout = 400;}

	if (document.getElementById("Privat_Hosting").checked == true) {host = 20;} 
	else {host = 0;}
	if (document.getElementById("Privat_Domain").checked == true) {domain = 2;}
	else {domain = 0;}

	kosten = seitenkosten + bilderkosten + layout + host + domain;
	document.getElementById("Privat_Ausgabe1").innerHTML = "Kosten: " + kosten + "&euro;";

	monate = host + domain;
	document.getElementById("Privat_Ausgabe2").innerHTML = "Im Monat: " + monate + "&euro;"; 
}

function Vorlage(){
	document.getElementById("Privat_Individuelle").checked = false;
	document.getElementById("Privat_Responsiv").checked = false;
}

function Individuelle(){
	document.getElementById("Privat_Vorlage").checked = false;
	document.getElementById("Privat_Responsiv").checked = false;
}

function Responsiv(){
	document.getElementById("Privat_Individuelle").checked = false;
	document.getElementById("Privat_Vorlage").checked = false;
}

function Privat_Neu(){
	document.getElementById("Privat_Seiten").value = "";
	document.getElementById("Privat_Bilder").value = "";
	document.getElementById("Privat_Vorlage").checked = false;
	document.getElementById("Privat_Individuelle").checked = false;
	document.getElementById("Privat_Responsiv").checked = false;
	document.getElementById("Privat_Hosting").checked = false;
	document.getElementById("Privat_Domain").checked = false;
	document.getElementById("Privat_Ausgabe1").innerHTML = "";
	document.getElementById("Privat_Ausgabe2").innerHTML = "";
}

//------------------------------------------------------------------------------------------------------------------

function Pro_Preis() {
	let seiten, bilder, seitenkosten, bilderkosten, layout, host, domain, analyse, suche, cms, crossBrowser, kosten, monate;

	seiten = document.getElementById("Pro_Seiten").value;
	bilder = document.getElementById("Pro_Bilder").value;

	if (seiten == "") {seiten = 0;}
	if (bilder == "") {bilder = 0;}

	seitenkosten = parseInt(seiten) * 10;
	bilderkosten = parseInt(bilder) * 30;

	if (document.getElementById("Pro_Individuelle").checked == true) {layout = 200;}
	if (document.getElementById("Pro_Responsiv").checked == true) {layout = 400;}

	if (document.getElementById("Pro_Hosting").checked == true) {host = 30;} 
	else {host = 0;}
	if (document.getElementById("Pro_Domain").checked == true) {domain = 2;} 
	else {domain = 0;}
	if (document.getElementById("Pro_Analyse").checked == true) {analyse = 200;} 
	else {analyse = 0;}
	if (document.getElementById("Suche").checked == true) {suche = 200;} 
	else {suche = 0;}
	if (document.getElementById("CMS").checked == true) {cms = 200;} 
	else {cms = 0;}
	if (document.getElementById("Cross-Browser-Kompatibilit").checked == true) {crossBrowser= 50;} 
	else {crossBrowser = 0;}

	kosten = seitenkosten + bilderkosten + layout + host + domain + analyse + suche + cms + crossBrowser;
	document.getElementById("Pro_Ausgabe1").innerHTML = "Kosten: " + kosten + " &euro;";

	monate = host + domain;
	document.getElementById("Pro_Ausgabe2").innerHTML = "Im Monat: " + monate + " &euro;";
}

function Pro_Individuelle(){
	document.getElementById("Pro_Responsiv").checked = false;
}

function Pro_Responsiv(){
	document.getElementById("Pro_Individuelle").checked = false;
}

function Pro_Neu(){
	document.getElementById("Pro_Seiten").value = "";
	document.getElementById("Pro_Bilder").value = "";
	document.getElementById("Pro_Individuelle").checked = false;
	document.getElementById("Pro_Responsiv").checked = false;
	document.getElementById("Pro_Hosting").checked = false;
	document.getElementById("Pro_Domain").checked = false;
	document.getElementById("Pro_Analyse").checked = false;
	document.getElementById("Suche").checked = false;
	document.getElementById("CMS").checked = false;
	document.getElementById("Cross-Browser-Kompatibilit").checked = false;
	document.getElementById("Pro_Ausgabe1").innerHTML = "";
	document.getElementById("Pro_Ausgabe2").innerHTML = "";
}

//-----------------------------------------------------------------------------------------------------------------

function Business_Preis(){
	let seiten, bilder, seitenkosten, bilderkosten, host, domain, analyse, viedeo, lexikon, sprache, sprachkosten, social, kosten, monate;
	const LAYOUT = 500, SUCHE = 300, CMS = 300, CROSSBROWSER = 150;

	seiten = document.getElementById("Business_Seiten").value;
	bilder = document.getElementById("Business_Bilder").value;

	if (seiten == "") {seiten = 0;}
	if (bilder == "") {bilder = 0;}

	seitenkosten = parseInt(seiten) * 15;
	bilderkosten = parseInt(bilder) * 40;

	if (document.getElementById("Business_Hosting").checked == true) {host = 150;} 
	else {host = 0;}
	if (document.getElementById("Business_Domain").checked == true) {domain = 10;} 
	else {domain = 0;}
	if (document.getElementById("Business_Analyse").checked == true) {analyse = 250;} 
	else {analyse = 0;}

	if (document.getElementById("Business_Viedeo").checked == true) {viedeo = 20;} 
	else {viedeo = 0;}
	if (document.getElementById("Business_Lexikon").checked == true) {lexikon = 20;} 
	else {lexikon = 0;}

	sprache = document.getElementById("Business_Fremdsprache").value;
	if (sprache == "" ) {sprache = 0;}
	sprachkosten = parseInt(sprache) * 400;

	if (document.getElementById("Business_Social").checked == true) {social = 100;} 
	else {social = 0;}

	kosten = seitenkosten + bilderkosten + LAYOUT + host + domain + analyse + SUCHE + CMS + viedeo + lexikon + CROSSBROWSER + sprachkosten + social;
	document.getElementById("Business_Ausgabe1").innerHTML = "Kosten: " + kosten + " &euro;";

	monate = host + domain + social;
	document.getElementById("Business_Ausgabe2").innerHTML = "Im Monat " + monate + " &euro;";
}

function Business_Neu(){
	document.getElementById("Business_Seiten").value = "";
	document.getElementById("Business_Bilder").value = "";
	document.getElementById("Business_Hosting").checked = false;
	document.getElementById("Business_Domain").checked = false;
	document.getElementById("Business_Analyse").checked = false;
	document.getElementById("Business_Viedeo").checked = false;
	document.getElementById("Business_Lexikon").checked = false;
	document.getElementById("Business_Fremdsprache").value = "";
	document.getElementById("Business_Social").checked = false;
	document.getElementById("Business_Ausgabe1").innerHTML = "";
	document.getElementById("Business_Ausgabe2").innerHTML = "";
}

//-----------------------------------------------------------------------------------------------------------------------------------

function Enterprise_Preis(){
	let seiten, bilder, seitenkosten, bilderkosten, host, domain, analyse,  sprache, sprachkosten, youtube, kosten, monate;
	const LAYOUT = 500, SUCHE = 300 , CMS = 350, CROSSBROWSER = 150, SOCIAL = 150;

	seiten = document.getElementById("Enterprise_Seiten").value;
	bilder = document.getElementById("Enterprise_Bilder").value;

	if (seiten == "") {seiten = 0;}
	if (bilder == "") {bilder = 0;}

	seitenkosten = parseInt(seiten) * 15;
	bilderkosten = parseInt(bilder) * 50;

	if (document.getElementById("Enterprise_Hosting").checked == true) {host = 200;} 
	else {host = 0;}
	if (document.getElementById("Enterprise_Domain").checked == true) {domain = 20;} 
	else {domain = 0;}
	if (document.getElementById("Enterprise_Analyse").checked == true) {analyse = 250;} 
	else {analyse = 0;}

	sprache = document.getElementById("Enterprise_Fremdsprache").value;
	if (sprache == "" ) {sprache = 0;}
	sprachkosten = parseInt(sprache) * 400;
	
	if (document.getElementById("Enterprise_Youtube").checked == true) {youtube = 1200;} 
	else {youtube = 0;}

	kosten = seitenkosten + bilderkosten + LAYOUT + host + domain + analyse + SUCHE + CMS + CROSSBROWSER + sprachkosten + SOCIAL + youtube;
	document.getElementById("Enterprise_Ausgabe1").innerHTML = "Kosten: " + kosten + " &euro;";

	monate = host + domain + SOCIAL + youtube;
	document.getElementById("Enterprise_Ausgabe2").innerHTML = "Im Monat: " + monate + " &euro;";
}

function Enterprise_Neu(){
	document.getElementById("Enterprise_Seiten").value = "";
	document.getElementById("Enterprise_Bilder").value = "";
	document.getElementById("Enterprise_Hosting").checked = false;
	document.getElementById("Enterprise_Domain").checked = false;
	document.getElementById("Enterprise_Analyse").checked = false;
	document.getElementById("Enterprise_Fremdsprache").value = "";
	document.getElementById("Enterprise_Youtube").checked = false;
	document.getElementById("Enterprise_Ausgabe1").innerHTML = "";
	document.getElementById("Enterprise_Ausgabe2").innerHTML = "";
}