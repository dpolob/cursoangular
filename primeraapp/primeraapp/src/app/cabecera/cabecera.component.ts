import { Component, OnInit } from '@angular/core';
import { LibrosClickedService} from 'libroclicked.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(public librosvisto: LibrosClickedService) { }

  ngOnInit(): void {
  }

}
