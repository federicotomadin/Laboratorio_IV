import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pueblo',
  templateUrl: './pueblo.component.html',
  styleUrls: ['./pueblo.component.css']
})
export class PuebloComponent implements OnInit {


  @Input() persona = {
  nombre: 'federico',
   apellido: 'tomadin'
 };


  // tslint:disable-next-line: member-ordering
  @Input() ciudad: string;
  // tslint:disable-next-line: no-input-rename
  @Input('pais') nacionReal: string;

  // Usamos el decorador Output
  @Output() PasameElPueblo = new EventEmitter();

 arreglo: string[];

 constructor() {

  // this.persona.nombre = 'Federico';
  // this.persona.apellido = 'Tomadin';
  // this.nombre = 'nombre del pueblo';
}

  ngOnInit() {  }

lanzar(event: any) {
this.PasameElPueblo.emit({ciudad: this.ciudad, pais: this.nacionReal});
}



}
