import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/servicios/personas.service';


@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

listaPaises: any;

  constructor(private servicio: PersonasService) {



   }

  ngOnInit() {

  this.servicio.getPaises()
  .subscribe( (data: any) => {
    this.listaPaises = data;
    console.log(data);
  }, (data: any) => console.log(data) );


  }

}
