const productos = [
    {
        codigo: "AJ2345",
        nombre: "Producto 1",
        precio: 1000,
        imprimirdatos:function(){
            const texto = `<p>Codigo: ${this.codigo}</p>
            <p>Nombre: ${this.nombre}</p>
            <p>Precio: ${this.precio}</p>`
            return texto;
        }
    },
    {
        codigo: "AJ2346",
        nombre: "Producto 2",
        precio: 2000,
        imprimirdatos:function(){
            const texto = `<p>Codigo: ${this.codigo}</p>
            <p>Nombre: ${this.nombre}</p>
            <p>Precio: ${this.precio}</p>`
            return texto;
        }
    },
    {
        codigo: "AJ2347",
        nombre: "Producto 3",
        precio: 3000,
        imprimirdatos:function(){
            const texto = `<p>Codigo: ${this.codigo}</p>
            <p>Nombre: ${this.nombre}</p>
            <p>Precio: ${this.precio}</p>`
            return texto;
        }
    }
]

const pantalla = document.getElementById("pantalla");

for(let i=0; i<productos.length; i++){
    const imprimirdatos = productos[i].imprimirdatos()
    pantalla.innerHTML += imprimirdatos;
}


