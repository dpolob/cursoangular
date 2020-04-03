import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent implements OnInit {
  colorLocal: string;
  constructor() { }

  ngOnInit(): void {
  }
  numeroRandom: number = Math.floor(Math.random() * 10);

  generarRandom(): string {
    return Math.floor(Math.random()*16777215).toString(16);
  }

  color(){
    this.colorLocal = '#' + this.generarRandom();
    return this.colorLocal;
  }
}
