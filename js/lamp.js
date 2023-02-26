function Change_Canvas_Color(CanvasId) {
	let canvas = document.getElementById(CanvasId);
	let context = canvas.getContext("2d");
	let red, green, blue;
	
	// Zahlen für RGB-Werte generieren lassen 	
	red   = Math.round(Math.random() * 100);
    green = Math.round(Math.random() * 100);
    blue  = Math.round(Math.random() * 100);
		
	// String für RGB Ausgabe zusammen frickeln
	context.fillStyle = "rgb(" + red + "," + green + "," + blue + ")"
	
	// Parameter .fillRect(x, y, width, height)
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function load_lamp() {
    let canvas2 = document.getElementById("lamp")
    let context2 = canvas2.getContext("2d");  
    let logo = new Image();
    
    logo.src="./img/logo.png";
    
    logo.onload = function(){
    	context2.drawImage(logo,0,0,640,640);	
	}
}