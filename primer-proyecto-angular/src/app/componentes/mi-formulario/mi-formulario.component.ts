import { Persona, Sexo } from './../../clases/Persona';
import { Component, OnInit } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common';


@Component({
  selector: 'app-mi-formulario',
  templateUrl: 'mi-formulario.component.html',
  styleUrls: ['./mi-formulario.component.css']
})
export class MiFormularioComponent implements OnInit {

public PersonaObjeto: Persona;

Persona: Persona = {
  nombre: 'Ignacio',
  apellido: 'Ramirez',
  sueldo: 15000,
  licencia: true,
  edad: 25,
  sexo: Sexo.hombre,
  fecha: new Date()
};

    public arreglo: Persona[] = new Array();

    showPueblo(event: any): void {
      this.arreglo.push(event.PersonaObjeto);
      console.log(this.arreglo);
    }

constructor() {

  this.PersonaObjeto = new Persona();

  }

  ngOnInit() {
  }

}
