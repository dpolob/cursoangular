import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import {ValidateUrl} from '../validators/url.validator';

@Component({
  selector: 'app-formularioreactivo',
  templateUrl: './formularioreactivo.component.html',
  styleUrls: ['./formularioreactivo.component.css']
})
export class FormularioreactivoComponent implements OnInit {
  formulario: FormGroup;
  Pattern ='[a-zA-Z ]*'
  constructor(private formbuilder: FormBuilder){

  }
  ngOnInit(): void {
    this.formulario = this.formbuilder.group({
      user: ["usuario", [Validators.required, Validators.minLength(3), Validators.pattern(this.Pattern), ValidateUrl()]],
      password: ["", Validators.required]});
  }

}
