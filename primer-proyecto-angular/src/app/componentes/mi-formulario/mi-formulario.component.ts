import { Persona, Sexo } from './../../clases/Persona';
import { Component, OnInit, Input } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common';
import { PersonasService } from '../../servicios/personas.service'


@Component({
  selector: 'app-mi-formulario',
  templateUrl: 'mi-formulario.component.html',
  styleUrls: ['./mi-formulario.component.css']
})
export class MiFormularioComponent implements OnInit {

public PersonaObjeto: Persona;
public Persona: Persona;

// Persona: Persona = {
//   nombre: 'Ignacio',
//   apellido: 'Ramirez',
//   sueldo: 15000,
//   licencia: true,
//   edad: 25,
//   sexo: Sexo.hombre,
//   fecha: new Date()
// };

  @Input() arreglo: Persona[] = new Array();
  public mostrar: boolean;


    showPueblo(event: any): void {
      this.arreglo.push(event.PersonaObjeto);
      this.mostrar = true;

      console.log(this.arreglo);
    }

constructor(private _servicio: PersonasService) {

  this.PersonaObjeto = new Persona();
  this.mostrar = true;
  this.Persona = _servicio.obtenerPersona();

  }

  ngOnInit() {
  }

}
