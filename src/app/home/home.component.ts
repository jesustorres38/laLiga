import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public foto;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.auth.verificarLog();
  }

  agregar(event){
    var file = event.target.files[0];
    console.log(file);
    this.auth.agregar(file.name,file);
    
  }

}
