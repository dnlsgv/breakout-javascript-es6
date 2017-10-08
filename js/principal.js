let canvas = document.getElementById('miCanvas');
let contexto = canvas.getContext('2d');

const altura = canvas.height;
const anchura = canvas.width;

let pelotaEnJuego;
let paletaDeControl;

let movimientoDerecha = false;
let movimientoIzquierda = false;

let objetosDeBloque = [];

let cantidadVidas = 3;
let puntos = 0;

let coloresBloques = [
	'#E1545B',
	'#F9B377',
	'#F1EAC6',
	'#7DB4AA',
	'#5E4B51'
];

let cargarObjetos = () => {

	pelotaEnJuego = new Pelota(anchura/2, altura/2, 15, 'black');
	paletaDeControl = new Paleta(100, 15, '#4F6EAD');

	for(let i = 0; i < 5; i++){
		objetosDeBloque[i] = [];
		for(let j = 0; j < 7; j++){
			objetosDeBloque[i].push(new Bloque(j * 50 + 25, 30 * i + 50, 0, coloresBloques[i]));
		}
	}
	
	//pelotaEnJuego.dibujarse();
	//paletaDeControl.dibujarse();

};

let detectarTeclaPulsada = (e) => {
	/*
		Valores de e.keyCode

		d = 100
		D = 68
		a = 97
		A = 65
		console.log(e);
	*/
	let teclaPulsada = e.keyCode;
	if(teclaPulsada === 100 || teclaPulsada === 68){
		movimientoDerecha = true;
	}
	if(teclaPulsada === 97 || teclaPulsada === 65){
		movimientoIzquierda = true;
	}
}

let resetearTeclaPulsada = () => {
	movimientoDerecha = false;
	movimientoIzquierda = false;
};

let dibujarBloques = () => {

	for(let filaBloques of objetosDeBloque){
		for(let bloque of filaBloques){
			if(bloque.mostrar){
				bloque.dibujarse();
			}
			else{
				//Eliminarlo de los objetos bloques
				filaBloques.splice(filaBloques.indexOf(bloque), 1);
				//console.log(objetosDeBloque.length);
			}
		}
	}

};

let detectarColisionEnBloques = () => {
	for(let filaBloques of objetosDeBloque){
		for(let bloque of filaBloques){
			bloque.detectarColision(pelotaEnJuego);
		}
	}
};

let dibujarTexto = () => {
	// contexto.textAlign = 'center';
	contexto.font = '20px sans-serif';
	contexto.fillStyle = 'black';
	contexto.fillText('Vidas   : ' + cantidadVidas, 10, 20);
	contexto.fillText('Puntaje : ' + puntos, 10, 40);
	//contexto.strokeText('Puntaje : ', 200, 200);

};

let dibujar = () => {
	//Limpiar pantalla
	contexto.clearRect(0, 0, anchura, altura);

	dibujarTexto();

	pelotaEnJuego.dibujarse();
	paletaDeControl.dibujarse();

	dibujarBloques();
	detectarColisionEnBloques();

	pelotaEnJuego.detectarColision(anchura, altura, paletaDeControl);
	pelotaEnJuego.moverse();

	paletaDeControl.moverse(movimientoIzquierda, movimientoDerecha);
};


window.addEventListener('load', cargarObjetos);

window.addEventListener('keypress', detectarTeclaPulsada);

window.addEventListener('keyup', resetearTeclaPulsada);


window.setInterval( dibujar, 10);

