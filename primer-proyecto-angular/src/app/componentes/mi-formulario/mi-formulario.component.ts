import { Component, OnInit } from '@angular/core';
// import { PuebloComponent } from '../pueblo/pueblo.component';


@Component({
  selector: 'app-mi-formulario',
  templateUrl: 'mi-formulario.component.html',
  styleUrls: ['./mi-formulario.component.css']
})
export class MiFormularioComponent implements OnInit {
  public ciudad = 'Milano';
    public pais = 'Italia';

    public arreglo: any[];
    showPueblo(event): void {
       this.arreglo.push(event.nombre);
       alert('se cargo' + event.nombre + 'en el array');


    }


constructor() {

  }

  ngOnInit() {
  }

}
