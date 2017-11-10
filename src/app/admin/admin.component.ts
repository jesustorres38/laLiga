import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public email;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.auth.verificarLog();
    this.email = this.auth.email;
  }

}
