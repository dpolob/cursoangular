import { Component, OnInit, ViewChild } from '@angular/core';
import {Product} from '../interface/producto';
import {Shop} from '../models/shop.model';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-statefull',
  templateUrl: './statefull.component.html',
  styleUrls: ['./statefull.component.css']
})
export class StatefullComponent implements OnInit {



  shopModel: Shop = new Shop();
  boughtItems: Array<Product>;
  total: number;
  @ViewChild(ConfirmComponent, {static: false})
  confirmChild: ConfirmComponent;
  
  constructor() {
    this.boughtItems=[];
    this.total = 0;
   }

  ngOnInit(): void {
  }

  clickItem(_curso){
    this.boughtItems.push(_curso);
  }

  cursoMatriculado(_event: Product){
    this.boughtItems.push(_event);
    this.total=this.total + _event.price;
    this.confirmChild.isDisabled = false;
  }
}
