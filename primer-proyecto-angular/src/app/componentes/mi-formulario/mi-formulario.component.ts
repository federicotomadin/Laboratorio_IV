import { Persona, Sexo } from './../../clases/Persona';
import { Component, OnInit, Input } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common';
import { PersonasService } from '../../servicios/personas.service';



@Component({
  selector: 'app-mi-formulario',
  templateUrl: 'mi-formulario.component.html',
  styleUrls: ['./mi-formulario.component.css']
})
export class MiFormularioComponent implements OnInit {

public PersonaObjeto: Persona;
public Personas: Persona;

public Persona;


  @Input() arreglo: Persona[] = new Array();
  public mostrar: boolean;


    CargarDatos(event: any): void {
      this.arreglo.push(event.PersonaObjeto);
      this.mostrar = true;
      this._servicio.setLista(this.arreglo);

      console.log(this.arreglo);
    }

constructor(private _servicio: PersonasService) {

//   this.Persona = {
//   nombre: 'Ignacio',
//   apellido: 'Ramirez',
//   sueldo: 15000,
//   licencia: true,
//   edad: 25,
//   sexo: Sexo.hombre,
//   fecha: new Date()
// };

  this.PersonaObjeto = new Persona();
  this.mostrar = true;
  this.Persona = this._servicio.getPersonas();

  }

  ngOnInit() {
  }

}
