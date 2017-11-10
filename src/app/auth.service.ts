import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  public estado = false;
  public email;

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
