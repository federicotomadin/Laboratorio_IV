import { Injectable } from '@angular/core';
import { Persona, Sexo } from '../clases/persona';
import { prepareSyntheticListenerName } from '@angular/compiler/src/render3/util';


@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private lista: Persona;

  constructor() {
    console.log('Servicio funcionando');
  }

  getLista() {
    return this.lista;
  }

  setLista(lista) {
    this.lista = lista;
  }
}
