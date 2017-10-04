let canvas = document.getElementById('miCanvas');
let contexto = canvas.getContext('2d');

const altura = canvas.height;
const anchura = canvas.width;

let pelotaEnJuego;
let paletaDeControl;

let movimientoDerecha = false;
let movimientoIzquierda = false;

let objetosDeBloque = [];

let cargarObjetos = () => {

	pelotaEnJuego = new Pelota(anchura/2, altura/2, 15, '#5C547F');
	paletaDeControl = new Paleta(100, 15, '#3EABCD');

	for(let i = 0; i < 7; i++){
		objetosDeBloque.push(new Bloque(i * 50 + 25, 100, 0, '#FF4B68'));
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

	for(let bloque of objetosDeBloque){
		if(bloque.mostrar){
			bloque.dibujarse();
		}
		else{
			//Eliminarlo de los objetos bloques
			 objetosDeBloque.splice(objetosDeBloque.indexOf(bloque), 1);
			 console.log(objetosDeBloque.length);
		}
	}

};

let detectarColisionEnBloques = () => {
	for(let bloque of objetosDeBloque){
		bloque.detectarColision(pelotaEnJuego);
	}
};

let dibujar = () => {
	//Limpiar pantalla
	contexto.clearRect(0, 0, anchura, altura);
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

