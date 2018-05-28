export class Usuario {

    constructor(
        public nombre: string,
        public apellido: string,
        public email: string,
        public password: string,
        public fecha?: Date,
        public img?: string,
        public role?: string,
        public google?: boolean,
        public telefono?: string,
        public _id?: string
    ) { }

}
