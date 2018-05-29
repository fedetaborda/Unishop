export class Producto {

    constructor(
        public nombre: string,
        public costo: number,
        public precio: number,
        public descripcion: String,
        public categoria: string,
        public estado: boolean,
        public rango: string,
        public marca: string,
        public descuento?: String,
        public precio_desc?: number,
        public imagen?: File,
        public cantidad?: number,
        public _id?: String
    ) { }

}
