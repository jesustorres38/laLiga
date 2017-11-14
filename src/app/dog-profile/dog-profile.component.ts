import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dog-profile',
  templateUrl: './dog-profile.component.html',
  styleUrls: ['./dog-profile.component.css']
})
export class DogProfileComponent implements OnInit {

  constructor(public auth: AuthService, public ruta: ActivatedRoute) { }

  ngOnInit() {
    this.auth.showAnimal(this.ruta.snapshot.params['id']);
  }

}
