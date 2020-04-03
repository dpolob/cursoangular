import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  miamarillo: string = 'yellow';
  colorLocal: string ;
  constructor() { }

  ngOnInit(): void {
  }


}
