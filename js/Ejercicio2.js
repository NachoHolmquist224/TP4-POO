const cuenta = {
    titular: "Alex",
    saldo: 0,

    ingresar: function (cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad;
            console.log(`Se han ingresado $${cantidad}. Saldo actual: $${this.saldo}`);
        } else {
            console.log("La cantidad a ingresar debe ser mayor que cero.");
        }
    },
    retirar: function (cantidad) {
        if (cantidad > 0) {
            if (cantidad <= this.saldo) {
                this.saldo -= cantidad;
                console.log(`Se han retirado $${cantidad}. Saldo actual: $${this.saldo}`);
            } else {
                console.log("No hay suficiente saldo para retirar esa cantidad.");
            }
        } else {
            console.log("La cantidad a retirar debe ser mayor que cero.");
        }
    },
    informar: function () {
        console.log(`El saldo actual de ${this.titular} es de $${this.saldo}`);
    }
}


do{
    const res = prompt("Ingrese una opcion: 1-Ingresar dinero, 2-Retirar dinero, 3-Informar saldo");
    switch (res) {
    case "1":
        const cantidadIngresar = parseFloat(prompt("Ingrese la cantidad a ingresar:"));
        cuenta.ingresar(cantidadIngresar);
        break;
    case "2":
        const cantidadRetirar = parseFloat(prompt("Ingrese la cantidad a retirar:"));
        cuenta.retirar(cantidadRetirar);
        break;
    case "3":
        cuenta.informar();
        break;
    default:
        console.log("Opcion no valida");
        break;
}
} 
while(confirm("¿Desea realizar otra operación?"))