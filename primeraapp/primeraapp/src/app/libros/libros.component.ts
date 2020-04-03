import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LibroclickedService } from 'libroclicked.service';
@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros: any;
  httpError: boolean;
  constructor(private http: HttpClient, public Libroclicked: LibroclickedService){

  }
  ngOnInit(): void {
    this.cargarLista();
  }

  cargarLista(){
    this.http.get('assets/lista_libros.json').subscribe(
      (respuesta: Response) => {this.libros = respuesta;},
      (respuesta: Response) => {this.httpError = true}
    )
  }

  agregarLibro(_libroVisto){
    this.Libroclicked
  }

}
