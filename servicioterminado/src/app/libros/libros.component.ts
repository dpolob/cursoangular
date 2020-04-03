import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LibroclickedService } from '../libroclicked.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros: any;
  errorHttp: boolean;


  constructor(private http: HttpClient, public Libroclicked: LibroclickedService) {

 }


  ngOnInit(): void {
    this.cargarLista();
  }

  cargarLista() {
    this.http.get('assets/lista-libros.json').subscribe(
     (respuesta: Response) => {this.libros = respuesta;},
     (respuesta: Response) => {this.errorHttp = true}
    )

  }

  agregarLibro(_libroVisto) {
    this.Libroclicked.libroVisto(_libroVisto);
  }

}
