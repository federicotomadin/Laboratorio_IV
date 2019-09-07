import { Component, OnInit, Input } from '@angular/core';
import { Persona, Sexo } from './../../clases/Persona';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
PersonaObjeto: Persona;

@Input() arreglo: Persona[] = new Array();

  constructor() {

   }

  ngOnInit() {
  }

}
