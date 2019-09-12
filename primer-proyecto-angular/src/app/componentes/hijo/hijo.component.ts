import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from './../../clases/Persona';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() PersonaObjeto: Persona;
  @Output() CargarDatosHijo = new EventEmitter();

  constructor() {
   }

  ngOnInit() {
  }

  lanzar(event: any) {
    this.CargarDatosHijo.emit({PersonaObjeto: this.PersonaObjeto});

}
}
