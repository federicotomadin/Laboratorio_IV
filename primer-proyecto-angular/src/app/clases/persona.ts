
export class Persona {
 nombre: string;
 apellido: string;
 sueldo: number;
 licencia: boolean;
 edad: number;
 sexo: Sexo;

 constructor(nombre, apellido, sueldo, licencia, edad, sexo) {
   this.nombre = nombre;
   this.apellido = apellido;
   this.sueldo = sueldo;
   this.licencia = licencia;
   this.edad = edad;
   this.sexo = sexo;
 }

}

enum Sexo{
  hombre = 1,
  mujer = 2,
  otro = 3
}
