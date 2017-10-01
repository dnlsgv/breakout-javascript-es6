let canvas = document.getElementById('miCanvas');
let contexto = canvas.getContext('2d');

const altura = canvas.height;
const anchura = canvas.width;

let pelotaEnJuego;

let cargarObjetos = () => {

	pelotaEnJuego = new Pelota(anchura/2, altura/2, 25, 'blue');
	pelotaEnJuego.dibujarse();
};

let dibujar = () => {
	//Limpiar pantalla
	contexto.clearRect(0, 0, anchura, altura);
	pelotaEnJuego.dibujarse();
	pelotaEnJuego.detectarColision(anchura, altura);
	pelotaEnJuego.moverse();
};


window.addEventListener('load', cargarObjetos);

window.setInterval( dibujar, 10);

