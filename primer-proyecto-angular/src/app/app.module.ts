import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { PersonasService } from './servicios/personas.service';

// import { AppComponent } from './src/componentes/home/app-home';

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
import { FileComponent } from './Componentes/file/file.component';
import { TransformPipe } from './pipes/transform.pipe';


const routes: Routes = [
  { path: 'home', component: HomeComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MiFormularioComponent,
    HijoComponent,
    FileComponent,
    TransformPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
