import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from './../../clases/Persona';

@Component({
  selector: 'app-pueblo',
  templateUrl: './pueblo.component.html',
  styleUrls: ['./pueblo.component.css']
})
export class PuebloComponent implements OnInit {


  @Input() persona: Persona;

  @Input() nombre: string;
  @Input() apellido: string;
  @Input() sueldo: string;
  @Input() licencia: string;
  @Input() edad: string;
  @Input() sexo: string;

  // Usamos el decorador Output
  @Output() PasameElPueblo = new EventEmitter();

 arreglo: string[];

 constructor() {

}

  ngOnInit() {  }

lanzar(event: any) {
this.PasameElPueblo.emit({persona: this.persona});
}



}
