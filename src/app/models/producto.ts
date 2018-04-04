export class Producto {

    constructor(
        public nombre: string,
        public costo: Number,
        public precio: Number,
        public descripcion: String,
        public descuento: String,
        public precio_desc: Number,
        public categoria: string,
        public estado: boolean,
        public marca: string,
        public _id?: String
    ) { }

}
