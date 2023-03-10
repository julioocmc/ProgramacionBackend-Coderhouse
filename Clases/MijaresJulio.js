class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName () {
        return `${this.nombre} ${this.apellido}` 
    }
    addMascota (mascota) {
        this.mascotas.push (mascota)
    }
    countMascotas () {
        return this.mascotas.length
    }
    addBook (nombre, autor) {
        this.libros.push ({"titulo": nombre , "escritor" : autor})
    }
    getBookNames () {
        return this.libros.map (libros => libros.titulo)
    }
    getBookAuthor (){
        return this.libros.map (libros => libros.escritor)
    }
}

const persona1 = new Usuario ("Carlos", "Rivero", [{titulo: "Oliver Twist", escritor: "Charles Dickens"}] , ["Perro, Gato, Oso"])

console.log (persona1.getFullName());
persona1.addMascota ("Serpiente");
console.log (persona1.mascotas) ;
persona1.addBook ("A song of Ice and Fire" , "George R. R. Martin");
console.log (persona1.libros) ;
console.log (persona1.getBookNames()) ;
console.log (persona1.countMascotas()) ;
console.log (persona1.getBookAuthor ()) ;