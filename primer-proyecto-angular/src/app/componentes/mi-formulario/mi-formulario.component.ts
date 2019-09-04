import { Component, OnInit } from '@angular/core';
// import { PuebloComponent } from '../pueblo/pueblo.component';


@Component({
  selector: 'app-mi-formulario',
  templateUrl: 'mi-formulario.component.html',
  styleUrls: ['./mi-formulario.component.css']
})
export class MiFormularioComponent implements OnInit {
  public  ciudad: String;
    public pais = 'Italia';
  
    public arreglo: string[] = new Array();

    showPueblo(event: any): void {
       this.arreglo.push(event.ciudad, " - ", event.pais)
    }

  CargarDatos(){
    this.ciudad = $("#nombre").text()
    this.pais = $("#apellido").text()
  }



constructor() {

  }

  ngOnInit() {
  }

}
