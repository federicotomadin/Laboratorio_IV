import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';


import { PersonasService } from './servicios/personas.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { MiFormularioComponent } from './componentes/mi-formulario/mi-formulario.component';
import { HijoComponent } from './componentes/hijo/hijo.component';
import { FilaComponent } from './componentes/fila/fila.component';
import { TransformPipe } from './pipes/transform.pipe';
import { PaisesComponent } from './componentes/paises/paises.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MiFormularioComponent,
    HijoComponent,
    FilaComponent,
    TransformPipe,
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
