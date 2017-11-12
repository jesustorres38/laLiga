import { FormGroup, FormControl, Validators } from '@angular/forms';
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
      nombre: new FormControl(null, Validators.required),
      edad: new FormControl(null, Validators.required),
      sexo: new FormControl(null, Validators.required),
      origen: new FormControl(null, Validators.required),
      nota: new FormControl(null, Validators.required),
      foto: new FormControl(null)
    });
  }

  add(animalData){
    this.auth.add(animalData);
    this.formularioAdd.reset();
  }

}
