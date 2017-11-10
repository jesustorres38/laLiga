//Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Main component
import { AppComponent } from './app.component';

//Components of the web
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DogsComponent } from './dogs/dogs.component';
import { DogProfileComponent } from './dog-profile/dog-profile.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';

//Firebase Connection
import { AuthService } from './auth.service';
import * as firebase from 'firebase'; 
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCz8_mPHqlxnBrxTNfW2aIpaFAn8U1Sgm8",
  authDomain: "laliga-b0222.firebaseapp.com",
  databaseURL: "https://laliga-b0222.firebaseio.com",
  projectId: "laliga-b0222",
  storageBucket: "laliga-b0222.appspot.com",
  messagingSenderId: "554339149815"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
    LoginComponent,
    DogsComponent,
    DogProfileComponent,
    ContactComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'inicio', component: HomeComponent },
      {path:'navbar', component: NavbarComponent},
      {path:'contacto', component: ContactComponent},
      {path:'perros', component: DogsComponent},
      {path:'perros/:id', component: DogProfileComponent},
      {path:'login', component: LoginComponent},
      {path:'administrar', component: AdminComponent},
      {path:'', redirectTo:'inicio', pathMatch: 'full' },
      {path:'**', component: NotFoundComponent}
    ])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
