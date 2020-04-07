import { Component, OnInit } from '@angular/core';
import {Product} from '../interface/producto';
import {Shop} from '../models/shop.model';

@Component({
  selector: 'app-statefull',
  templateUrl: './statefull.component.html',
  styleUrls: ['./statefull.component.css']
})
export class StatefullComponent implements OnInit {

  shopModel: Shop = new Shop();
  boughtItems: Array<Product>;
  
  constructor() {
    this.boughtItems=[];
   }

  ngOnInit(): void {
  }

  clickItem(_curso){
    this.boughtItems.push(_curso);
  }
}
