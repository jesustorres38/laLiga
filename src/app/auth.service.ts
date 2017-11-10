import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  public estado: boolean = false;
  public email: string = "";
  public errorLogIn: string = "";

  constructor(public ruta: Router) { }

  verificarLog(){
    var user = firebase.auth().currentUser;
    if (user) {
        console.log("si hay alguien");
        this.email = user.email;
        this.estado = true;
    }else {
        console.log("no hay nadie");
        this.estado = false;
    }
  }

  logIn(userData){
    var user = firebase.auth().signInWithEmailAndPassword(userData.email, userData.password);
    user.then(res => {
      console.log("Bienvenido "+res.email);
      this.ruta.navigateByUrl('/administrar'); 
    });
    user.catch(res => {
      this.errorLogIn = res.message;
    });
  }

  logOut(){
    var user = firebase.auth().signOut();
    if(user){
      console.log("el usuario salio");
      this.estado = false;
    }else{
      console.log("un error ocurrio al cerrar sesion");
      this.estado=true;
    }
  }

}
