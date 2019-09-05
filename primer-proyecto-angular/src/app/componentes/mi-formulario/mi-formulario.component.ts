import { Persona } from './../../clases/Persona';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mi-formulario',
  templateUrl: 'mi-formulario.component.html',
  styleUrls: ['./mi-formulario.component.css']
})
export class MiFormularioComponent implements OnInit {


  public  nombre: string;
    public apellido: string;

    public arreglo: Persona[] = new Array();

    showPueblo(event: any): void {
       this.arreglo.push(new Persona(event.nombre, event.apellido, event.sueldo, event.licencia, event.edad, event.sexo));
       console.log(this.arreglo);
    }

constructor() {

  }

  ngOnInit() {
  }

}
