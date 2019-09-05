import { Persona } from './../../clases/Persona';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mi-formulario',
  templateUrl: 'mi-formulario.component.html',
  styleUrls: ['./mi-formulario.component.css']
})
export class MiFormularioComponent implements OnInit {

public PersonaObjeto: Persona


    public arreglo: Persona[] = new Array();

    showPueblo(event: any): void {
      this.PersonaObjeto = new Persona("","","","","","")
       this.arreglo.push(event.PersonaObjeto);
       console.log(this.arreglo);
    }

constructor() {

  }

  ngOnInit() {
  }

}
