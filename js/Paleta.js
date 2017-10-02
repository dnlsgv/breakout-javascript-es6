class Paleta {

	constructor(ancho, alto, color){
		this.x = (anchura/2) - (ancho/2);
		this.y = altura - alto;
		this.ancho = ancho;
		this.alto = alto;
		this.color = color;
	}

	dibujarse(){
		contexto.beginPath();
		contexto.rect(this.x, this.y, this.ancho, this.alto);
		contexto.fillStyle = this.color;
		contexto.fill();
		contexto.closePath();
	}

	moverse(izquierda, derecha){
		if(izquierda && this.x >= 0){
			this.x-=2.5;
		}
		else{
			if(derecha && (this.x + this.ancho) <= anchura ){
				this.x+=2.5;
			}
		}
	}

}


