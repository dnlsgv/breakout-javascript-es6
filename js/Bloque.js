class Bloque {

	constructor(x, y, margen, color){
		this.x = x + margen;
		this.y = y;
		this.ancho = 50;
		this.alto = 20;
		this.color = color;
		this.mostrar = true;
	}

	dibujarse(){
		contexto.beginPath();
		contexto.strokeStyle = '#5A3555';
		contexto.rect(this.x, this.y, this.ancho, this.alto);
		contexto.fillStyle = this.color;
		contexto.fill();
		contexto.strokeRect(this.x, this.y, this.ancho, this.alto);
		contexto.closePath();
	}

	detectarColision(Pelota){
		if(Pelota.x > this.x && Pelota.x < this.x + this.ancho && Pelota.y > this.y && Pelota.y < this.y + this.alto){
			this.mostrar = false;
			//Desplazamiento para abajo
			Pelota.desplazamientoY*=-1;
			Pelota.color = this.color;
			puntos++;
		}
	}

}


