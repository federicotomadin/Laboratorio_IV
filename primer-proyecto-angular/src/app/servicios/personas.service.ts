import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona, Sexo } from '../clases/persona';
import { prepareSyntheticListenerName } from '@angular/compiler/src/render3/util';


@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private lista: Persona;

  private listaPaises;

  constructor(private http: HttpClient) {
  }

  getPaises() {

    this.listaPaises =  this.http.get('https://restcountries.eu/rest/v2/all');

    return this.listaPaises;
  }

  getLista() {
    return this.lista;
  }

  setLista(lista) {
    this.lista = lista;
  }
}
