import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeComponent } from '../home/home.component';
import { MoviesComponent } from '../movies/movies.component';
import { TvComponent } from '../tv/tv.component';
import { PeopleComponent } from '../people/people.component';
import { AboutComponent } from '../about/about.component';
import { NetworkComponent } from '../network/network.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { SiginComponent } from '../sigin/sigin.component';
import { LoginComponent } from '../login/login.component';


@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent,
    TvComponent,
    PeopleComponent,
    AboutComponent,
    NetworkComponent,
    NotfoundComponent,
    SiginComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ],

})
export class ComponentModule { }
