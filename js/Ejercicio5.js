const nombre = prompt("Ingrese su nombre:");
const apellido = prompt("Ingrese su apellido:");
const edad = parseInt(prompt("Ingrese su edad:"));
const dni = prompt("Ingrese su DNI:");
const sexo = prompt("Ingrese su sexo (H/M):").toLowerCase();
const peso = parseFloat(prompt("Ingrese su peso en kg:"));
const altura = parseFloat(prompt("Ingrese su altura en metros:"));
const añonacimiento = parseInt(prompt("Ingrese su año de nacimiento:"));

const persona = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    dni: dni,
    sexo: sexo,
    peso: peso,
    altura: altura,
    añonacimiento: añonacimiento,
    mostrarGeneracion: function(){
        if(this.añonacimiento >= 2025 && this.añonacimiento <= 2039){
            console.log(`${this.nombre} ${this.apellido} pertenece a la generación Beta.`);
        }
        else if(this.añonacimiento >= 2011 && this.añonacimiento <= 2024){
            console.log(`${this.nombre} ${this.apellido} pertenece a la generación Alfa.`);
        }
        else if(this.añonacimiento >= 1994 && this.añonacimiento <= 2010){
            console.log(`${this.nombre} ${this.apellido} pertenece a la generación Z.`);
        }
        else if(this.añonacimiento >= 1981 && this.añonacimiento <= 1993){
            console.log(`${this.nombre} ${this.apellido} pertenece a la generación Y (Millennials).`);
        }
        else if(this.añonacimiento >= 1969 && this.añonacimiento <= 1980){
            console.log(`${this.nombre} ${this.apellido} pertenece a la generación X.`);
        }
        else if(this.añonacimiento >= 1949 && this.añonacimiento <= 1968){
            console.log(`${this.nombre} ${this.apellido} pertenece a la generación Baby Boom.`);
        }
        else if(this.añonacimiento >= 1930 && this.añonacimiento <= 1948){
            console.log(`${this.nombre} ${this.apellido} pertenece a la generación Silent Generation.`);
        }
        else{
            console.log(`${this.nombre} ${this.apellido} no pertenece a ninguna generación definida.`);
        }
    },
    esMayorDeEdad: function(){
        if(this.edad >= 18){
            console.log(`${this.nombre} ${this.apellido} es mayor de edad.`);
        }
        else{
            console.log(`${this.nombre} ${this.apellido} es menor de edad.`);
        }
    },
    mostrarDatos: function(){
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellido: ${this.apellido}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`DNI: ${this.dni}`);
        console.log(`Sexo: ${this.sexo}`);
        console.log(`Peso: ${this.peso} kg`);
        console.log(`Altura: ${this.altura} m`);
        console.log(`Año de Nacimiento: ${this.añonacimiento}`);
    },
    generardni: function(){
        const numerodni = Math.floor(Math.random() * 100000000);
        this.dni = numerodni;
        console.log(`DNI generado para ${this.nombre} ${this.apellido}: ${this.dni}`);
    },
}

persona.mostrarGeneracion();
persona.esMayorDeEdad();
persona.mostrarDatos();
persona.generardni();