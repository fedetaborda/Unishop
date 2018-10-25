import { Producto } from './producto';

export class Cart {

    constructor(
        public productos: Producto[],
        public direccion: string,
        public pago: string,
        public idCompra: string,
        public subTotal: string
    ) { }

}