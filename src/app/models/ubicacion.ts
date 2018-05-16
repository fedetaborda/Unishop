export class Ubicacion {

    constructor(
        public direccion: string,
        public altura: number,
        public ubicacion_tipo: string,
        public entre_calles: string,
        public telefono: string,
        public piso?: string
    ) { }

}