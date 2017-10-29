import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DogsComponent } from './dogs/dogs.component';
import { DogProfileComponent } from './dog-profile/dog-profile.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
