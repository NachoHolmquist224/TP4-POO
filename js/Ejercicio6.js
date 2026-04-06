const isbn1 = prompt("Ingrese el ISBN del libro 1:");
const titulo1 = prompt("Ingrese el título del libro 1:");
const autor1 = prompt("Ingrese el autor del libro 1:");
const paginas1 = parseInt(prompt("Ingrese la cantidad de páginas del libro 1:"));
const isbn2 = prompt("Ingrese el ISBN del libro 2:");
const titulo2 = prompt("Ingrese el título del libro 2:");
const autor2 = prompt("Ingrese el autor del libro 2:");
const paginas2 = parseInt(prompt("Ingrese la cantidad de páginas del libro 2:"));

const libros = [
    {
        isbn: isbn1,
        titulo: titulo1,
        autor: autor1,
        paginas: paginas1,
        mostrarLibro: function() {
            console.log(`El libro "${this.titulo}" con ISBN ${this.isbn} fue escrito por ${this.autor} y tiene ${this.paginas} páginas.`);
        }
    },
    {
        isbn: isbn2,
        titulo: titulo2,
        autor: autor2,
        paginas: paginas2,
        mostrarLibro: function() {
            console.log(`El libro "${this.titulo}" con ISBN ${this.isbn} fue escrito por ${this.autor} y tiene ${this.paginas} páginas.`);
        }
    },
]

console.log(libros[0].mostrarLibro());
console.log(libros[1].mostrarLibro());

if (libros[0].paginas > libros[1].paginas) {
    console.log(`El libro "${libros[0].titulo}" tiene más páginas que el libro "${libros[1].titulo}".`);
} 
else if (libros[0].paginas < libros[1].paginas) {
    console.log(`El libro "${libros[1].titulo}" tiene más páginas que el libro "${libros[0].titulo}".`);
} 
else {
    console.log(`Los libros "${libros[0].titulo}" y "${libros[1].titulo}" tienen la misma cantidad de páginas.`);
}