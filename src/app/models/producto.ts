export class Producto {

    constructor(
        public nombre: string,
        public costo: Number,
        public precio: Number,
        public usuario: string,
        public categoria: string,
        public marca: string,
        public estado: boolean,
        public cant_ventas?: Number,
        public fecha?: Date,
        public _id?: String
    ) { }

}
