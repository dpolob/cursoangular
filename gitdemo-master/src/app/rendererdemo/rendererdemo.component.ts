import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-rendererdemo',
  templateUrl: './rendererdemo.component.html',
  styleUrls: ['./rendererdemo.component.css']
})
export class RendererdemoComponent implements OnInit {

  users: Array<object>;
  clearElement:HTMLElement;

  constructor(private ren:Renderer2) {
    this.users = [
      {nombre: 'David', id: 1},
      {nombre: 'Antonio', id: 1},
      {nombre: 'Sergio', id: 1}

    ];
  }

  ngOnInit(): void {
  }
  activeMethod(elemen:HTMLElement){
    if (this.clearElement) {
      this.ren.removeClass(this.clearElement, 'miclase')
    }
    this.ren.addClass(elemen, 'miclase');
    this.ren.setAttribute(elemen, "data-select", "true")

    let nuevoElemento = this.ren.createElement("span");
    this.ren.setProperty(nuevoElemento, "innerHTML", "✅");
    this.ren.appendChild(elemen, nuevoElemento);
    this.clearElement = elemen;
  }

}
