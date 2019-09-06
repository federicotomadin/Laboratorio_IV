import { Component, OnInit } from '@angular/core';
import { Persona, Sexo } from './../../clases/Persona';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  public PersonaObjeto: Persona;


  constructor() {

    this.PersonaObjeto = new Persona();

   }

  ngOnInit() {
  }

}
