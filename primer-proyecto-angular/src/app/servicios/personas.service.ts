import { Injectable } from '@angular/core';
import { Persona, Sexo } from '../clases/persona';


@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  Persona: Persona;  

  constructor() { 
    console.log('Servicio funcionando');
  }

  obtenerPersona(){
    return  this.Persona = {
      nombre: 'Ignacio',
      apellido: 'Ramirez',
      sueldo: 15000,
      licencia: true,
      edad: 25,
      sexo: Sexo.hombre,
      fecha: new Date()
    };
  }
}
