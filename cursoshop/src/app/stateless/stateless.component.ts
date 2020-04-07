import { Component, OnInit, Input} from '@angular/core';
import { Product } from '../interface/producto';

@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css']
})
export class StatelessComponent implements OnInit {

  @Input () producto: Product;
  public matricula: string;
  private disable: boolean;

  constructor() { }

  ngOnInit(): void {
    this.matricula="Matricularse";
  }

  isdisabled(){
    return(this.disable);
  }
  matricularse(){
    this.disable=true;
    this.matricula="Ya esta matriculado";
  }
}
