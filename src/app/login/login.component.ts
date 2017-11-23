import { AuthService } from './../auth.service';
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

  constructor(public auth: AuthService) {     }

  ngOnInit() {
    this.auth.errorLogIn = "";
    this.formularioLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }
}