class Pelota {

	constructor(x, y, radio, color, desplazamientoX, desplazamientoY){
		this.x = x;
		this.y = y;
		this.radio = radio;
		this.color = color;
		this.desplazamientoX = +1.5;
		this.desplazamientoY = +1.5;
	}

	dibujarse(){
		contexto.beginPath();
		contexto.arc(this.x, this.y, this.radio, 0, Math.PI*2);
		contexto.fillStyle = this.color;
		contexto.fill();
		contexto.closePath();
	}

	moverse(){
		this.x = this.x + this.desplazamientoX;
		this.y = this.y + this.desplazamientoY
	}

	detectarColision(anchoCanvas, altoCanvas){

		//Colisiones en los bordes izquierdo y derecho
		if(this.x + this.radio >= anchoCanvas){
			console.log('SE SALIO, UPS!');
			this.desplazamientoX*=-1;
		}
		if(this.x - this.radio <= 0){
			this.desplazamientoX*=-1;
		}

		//Colision en los bordes superior e inferior

		if(this.y + this.radio >= altoCanvas){
			console.log('Colision abajo');
			this.desplazamientoY*=-1;
		}

		if(this.y - this.radio <= 0){
			console.log('Colision arriba');
			this.desplazamientoY*=-1;
		}

	}

}

