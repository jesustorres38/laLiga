import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'; 
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formularioLogin;
  public error;

  constructor(private ruta: Router) {   }

  ngOnInit() {
    this.formularioLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  login(userData){
    return firebase.auth().signInWithEmailAndPassword(userData.email, userData.password)
    .then(res => {
      //si el usuario se logea de forma correcta hace esto sino va al .catch
      console.log(res);
      this.ruta.navigateByUrl('/perros');      
    })
    .catch(error => {
      console.log(error.message);
      this.error = error.message;
});
  }

}
