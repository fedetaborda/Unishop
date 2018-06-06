import { Producto } from "./producto";

Producto

export class Cart {

    constructor(
        public productos: Producto[],
        public direccion: string,
        public pago: string,
        public idCompra: string
    ) { }

}