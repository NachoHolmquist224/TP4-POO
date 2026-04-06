const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    color: "Rojo",
    puertas: 4,

    encender: function(){
        console.log(this)
        const texto = `<p class="lead">El auto ${this.marca} ${this.modelo} se encendió 🚗</p>`
        console.log("Auto encendido");
        return texto;
    },
    apagar: function(){
        const texto = `<p class="lead">El auto ${this.marca} ${this.modelo} se apagó 🛑</p>`
        console.log("El auto se apagó");
        return texto;
    },
}

const encender = auto.encender();
const apagar = auto.apagar();
const pantalla = document.getElementById("pantalla");
pantalla.innerHTML = encender;
pantalla.innerHTML += apagar;