class Bloque {

	constructor(x, y, margen, color){
		this.x = x + margen;
		this.y = y;
		this.ancho = 40;
		this.alto = 25;
		this.color = color;
	}

	dibujarse(){
		contexto.beginPath();
		contexto.rect(this.x, this.y, this.ancho, this.alto);
		contexto.fillStyle = this.color;
		contexto.fill();
		contexto.closePath();
	}

}


