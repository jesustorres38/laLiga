import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/firestore';

@Injectable()
export class AuthService {

  public estado: boolean = false;
  public email: string = "";
  //para mostrar error al hacer login
  public errorLogIn: string = "";
  //para mostrar la lista de perros
  public animales = [];
  public animalesId = [];
  //para mostrar el perfil en dog-profile
  public animalProfile = {};
  public animalFoto = "";

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

  add(animalData, animalFoto){
    var animal = firebase.firestore().collection("animales");
    animal.add({
        nombre: animalData.nombre,
        edad: animalData.edad,
        sexo: animalData.sexo,
        origen: animalData.origen,
        nota: animalData.nota
    })
    .then( res => {
        console.log("Se agrego a: "+res.id+" a la base de datos");
        firebase.storage().ref('imagenes/'+res.id).put(animalFoto);
    })
    .catch( res => {
        console.error("Ocurrio un error: ", res.message);
    });


    //llamamos a la funcion show para 
    //que se actualice la lista de perros luego de agregar uno nuevo
    this.show();
  } 
  
  show(){
    //reseteamos valores
    this.animalesId = [];
    this.animales = [];
    
    var animales = firebase.firestore().collection("animales").get();
    animales.then(res => {
      // this.animales = this.animales.push(doc.data());
      res.forEach(doc => {
          // console.log(doc.id);
         this.animalesId.push(doc.id);
         this.animales.push(doc.data());
      });
    });
    animales.catch(res => {
      console.log(res.message);
    });
  }

  showAnimal(id){
    this.animalProfile = {};
    this.animalFoto = "";
    //obtenemos los datos del perfil
    var animalProfile = firebase.firestore().collection("animales").doc(id).get();
    animalProfile.then(res => {
      if (res.exists) {
        console.log(res.data());
        this.animalProfile = res.data();
      } else {
        console.log("no existe el perfil en la base de datos");
      }
    });
    animalProfile.catch(function(error) {
      console.log("Error getting document:", error);
    });
    //obtenemos la foto
    var url = firebase.storage().ref('imagenes/'+id).getDownloadURL();
    url.then(res => {
      this.animalFoto = res;
    });
    url.catch(res => {
      this.animalFoto = "./assets/profile-pic.jpg";
      console.log(res.message);
    });
  }

  deleteAnimal(id){
    //borramos los datos del animal
    var deleteAnimal = firebase.firestore().collection("animales").doc(id).delete();
    deleteAnimal.then(res => console.log("animal eliminado correctamente"));
    deleteAnimal.catch(res => console.log(res.message));
    //borramos la foto del animal
    var deleteFoto = firebase.storage().ref('imagenes/'+id).delete();
    deleteFoto.then(res => {
      console.log("se elimino la foto correctamente");
    });
    deleteFoto.catch(res => {
      console.log(res.message);
    });
    //volvemos a mostrar la lista para que se actualice
    this.show();
  }

}