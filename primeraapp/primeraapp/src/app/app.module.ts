import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LibroclickedService } from './libroclicked.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { LibrosComponent } from './libros/libros.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { InicioComponent } from './inicio/inicio.component';
import { Error404Component } from './error404/error404.component';
import { InformacionComponent } from './informacion/informacion.component';

const rutas: Routes = [
  {path: 'listado-libros', component: LibrosComponent},
  {path: 'informacion/:libroId', component: InformacionComponent},
  {path: 'informacion/', redirectTo: '/'},
  {path: '', component: InicioComponent, pathMatch: 'full'},
  {path: '**', component: Error404Component}
];


@NgModule({
  declarations: [
    AppComponent,
    SobreNosotrosComponent,
    LibrosComponent,
    CabeceraComponent,
    InicioComponent,
    Error404Component,
    InformacionComponent  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    HttpClientModule
  ],
  providers: [
    LibroclickedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
