import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pueblo',
  templateUrl: './pueblo.component.html',
  styleUrls: ['./pueblo.component.css']
})
export class PuebloComponent implements OnInit {


public persona = {
   nombre: 'federico',
   apellido: 'tomadin'
 };

 public nombre: string;
  // tslint:disable-next-line: member-ordering
  @Input() ciudad: string;
  // tslint:disable-next-line: no-input-rename
  @Input('pais') nacionReal: string;

  // Usamos el decorador Output
  @Output() PasameElPueblo = new EventEmitter();

 arreglo: string[];

 constructor() {

  this.ciudad = 'Reconquista';
  this.nacionReal = 'Argentina';

  this.nombre = 'Pueblo';

  this.persona.nombre = 'Federico';
  this.persona.apellido = 'Tomadin';
  // this.nombre = 'nombre del pueblo';
}

  ngOnInit() {  }

lanzar(event: any) {
this.PasameElPueblo.emit({nombre: this.nombre});
}



}
