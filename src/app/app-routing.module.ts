import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { SiginComponent } from './sigin/sigin.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'HOME',component:HomeComponent, data:{state:'HOME'}},
  {path:'ABOUT',component:AboutComponent, data:{state: 'ABOUT'}},
  {path:'LOGIN',component:LoginComponent,data:{state:'LOGIN'}},
  {path:'MOVIES',component:MoviesComponent,data:{state:'MOVIES'}},
  {path:'PEOPLE',component:PeopleComponent,data:{state:'PEOPLE'}},
  {path:'SIGNIN',component:SiginComponent,data:{state:'SIGNIN'}},
  {path:'TV',component:TvComponent,data:{state:'TV'}},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
