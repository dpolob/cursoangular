import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {Product} from '../interface/producto';
import {Shop} from '../models/shop.model';
import { ConfirmComponent } from '../confirm/confirm.component';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-statefull',
  templateUrl: './statefull.component.html',
  styleUrls: ['./statefull.component.css']
})
export class StatefullComponent implements OnInit, OnDestroy {


  errorHttp: boolean;
  shopModel: any; //todas la petciones http vienen en json
  boughtItems: Array<Product>;
  total: number;

  @ViewChild(ConfirmComponent, {static: false})
  confirmChild: ConfirmComponent;
  
  private shopSubcription: Subscription;

  constructor(private http: HttpClient) {
    this.boughtItems=[];
    this.total = 0;
    this.shopModel = {shopItems : []};
   }
  
   ngOnInit(): void {
    this.shopSubcription = this.http.get('assets/json/cursos.json').subscribe(
      (respuesta: Response) => {this.shopModel.shopItems = respuesta;},
      (respuesta: Response) => {this.errorHttp = true;}
    );
  }

  ngOnDestroy() {
    this.shopSubcription.unsubscribe();
  }
  clickItem(_curso){
    this.boughtItems.push(_curso);
  }

  cursoMatriculado(_event: Product){
    this.boughtItems.push(_event);
    this.total=this.total + _event.price;
    this.confirmChild.isDisabled = false;
  }

  onKeyboard(_event){
    console.log(_event);
  }
}
