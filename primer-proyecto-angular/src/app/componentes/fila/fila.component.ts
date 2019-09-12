import { Component, OnInit, Input } from '@angular/core';
import { Persona, Sexo } from '../../clases/Persona';
import { PersonasService } from '../../servicios/personas.service';


@Component({
  selector: '[app-fila]',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.css']
})
export class FilaComponent implements OnInit {

@Input() item: any;
lista;

  constructor(private _servicio: PersonasService) {

   }

  ngOnInit() {

    this.lista = this._servicio.getLista();
    console.log(this._servicio);
  }

}
