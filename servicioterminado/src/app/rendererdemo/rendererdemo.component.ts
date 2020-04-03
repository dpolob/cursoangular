import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-rendererdemo',
  templateUrl: './rendererdemo.component.html',
  styleUrls: ['./rendererdemo.component.css']
})
export class RendererdemoComponent implements OnInit {
  users: Array<object>;
  clearelement: HTMLElement;


  constructor(private ren:Renderer2) {
    this.users=[
      {nombre: 'David', id: 1},
      {nombre: 'Diego', id: 2},
      {nombre: 'Antonio', id: 3}];

  
    }

    activeMethod(element: HTMLElement){
      if (this.clearelement){
        this.ren.removeClass(this.clearelement, "miclase");
      }
      this.ren.addClass(element, "miclase");
      this.ren.setAttribute(element, "data-select", "true");
      let nuevoELemento = this.ren.createElement("span");
      this.ren.setProperty(nuevoELemento, "innerHTML", "****");
      this.ren.appendChild(element, nuevoELemento);
      this.clearelement = element;
    }

  ngOnInit(): void {
  }

}
