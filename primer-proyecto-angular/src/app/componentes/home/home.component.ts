import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  texto:string

  constructor() { }

  ngOnInit() {
  }

  hacerMayuscula(){

    this.texto = this.texto.toUpperCase()

  }

  hacerMinuscula()
  {
    this.texto = this.texto.toLowerCase()
  }

}
