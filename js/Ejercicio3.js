const rectangulo = {
    alto : prompt("Ingrese el alto del rectángulo:"),
    ancho : prompt("Ingrese el ancho del rectángulo:"),
    calcularArea: function(){
        return this.alto * this.ancho;
    },
    calcularPerimetro: function(){
        return (this.alto * 2) + (this.ancho * 2);
    }
}

const perimetro = rectangulo.calcularPerimetro();
const area = rectangulo.calcularArea();

const pantalla = document.getElementById("pantalla");
pantalla.innerHTML = `<p class="lead">El área del rectángulo es: ${area}</p>`;
pantalla.innerHTML += `<p class="lead">El perímetro del rectángulo es: ${perimetro}</p>`;