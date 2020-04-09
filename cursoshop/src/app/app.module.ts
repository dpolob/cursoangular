import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'; //siempre que se use http para get o post es necesario importarlo aqui
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatefullComponent } from './statefull/statefull.component';
import { StatelessComponent } from './stateless/stateless.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { FormularioreactivoComponent } from './formularioreactivo/formularioreactivo.component';

@NgModule({
  declarations: [
    AppComponent,
    StatefullComponent,
    StatelessComponent,
    ConfirmComponent,
    FormularioreactivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
