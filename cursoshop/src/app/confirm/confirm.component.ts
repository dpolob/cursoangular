import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  isDisabled: boolean;
  showModal: boolean;
  showBlock: string;
  
  
  constructor() { 
  }

  ngOnInit(): void {
    this.isDisabled=true;
    this.showModal = false;   
  }

  botonPulsado(){
    this.showModal=true;
    this.showBlock="block";
  }
  

}
