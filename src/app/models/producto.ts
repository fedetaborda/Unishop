export class Producto {

    constructor(
        public nombre: string,
        public costo: Number,
        public cantidad: Number,
        public precio: Number,
        public descripcion: String,
        public categoria: string,
        public estado: boolean,
        public rango: string,
        public marca: string,
        public descuento?: String,
        public precio_desc?: Number,
        public imagen?: File,
        public _id?: String
    ) { }

}
