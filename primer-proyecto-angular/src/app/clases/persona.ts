
export class Persona {
 nombre: string;
 apellido: string;
 sueldo: number;
 licencia: boolean;
 edad: number;
 sexo: Sexo;
 fecha: Date;

 constructor() {

 }

}

export enum Sexo {
  hombre = 1,
  mujer = 2,
  otro = 3
}
