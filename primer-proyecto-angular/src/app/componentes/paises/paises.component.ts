import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/servicios/personas.service';


@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

listaPaises;

  constructor(private servicio: PersonasService) {



   }

  ngOnInit() {

  this.servicio.getPaises()
  .suscribe(data => {
    this.listaPaises = data;
    console.log(data);
  }, data => console.log(data) );


  }

}
