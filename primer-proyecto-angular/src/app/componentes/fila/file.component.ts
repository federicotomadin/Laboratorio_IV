import { Component, OnInit, Input } from '@angular/core';
import { Persona, Sexo } from '../../clases/Persona';
import { PersonasService } from '../../servicios/personas.service';


@Component({
  selector: '[app-file]',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

@Input() item: any;
lista;

  constructor(private _servicio: PersonasService) {
   }

  ngOnInit() {

    this.lista = this._servicio.getLista();
    console.log(this._servicio.getLista());
  }

}
