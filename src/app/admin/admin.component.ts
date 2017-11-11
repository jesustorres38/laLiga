import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public formularioAdd;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    //Verificamos si esta alguien logeado
    this.auth.verificarLog();
    // instanciamos el formulario
    this.formularioAdd = new FormGroup({
      nombre: new FormControl(),
      edad: new FormControl(),
      sexo: new FormControl(),
      origen: new FormControl(),
      nota: new FormControl(),
      foto: new FormControl()
    });
  }

}
