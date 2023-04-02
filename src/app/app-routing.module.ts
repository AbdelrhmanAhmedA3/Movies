import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { SiginComponent } from "./sigin/SiginComponent";
import { TvComponent } from './tv/tv.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'SIGNIN',pathMatch:'full'},
  {path:'SIGNIN',component:SiginComponent,data:{Animation:'SIGIN'}},
  {path:'LOGIN',component:LoginComponent,data:{Animation:'LOGIN'}},
  {path:'HOME',canActivate:[AuthGuard],component:HomeComponent,data:{Animation:'HOME'}},
  {path:'ABOUT',canActivate:[AuthGuard],component:AboutComponent,data:{Animation:'ABOUT'}},
  {path:'MOVIES',canActivate:[AuthGuard],component:MoviesComponent,data:{Animation:'MOVIES'}},
  {path:'PEOPLE',canActivate:[AuthGuard],component:PeopleComponent,data:{Animation:'PEOPLE'}},
  {path:'TV',canActivate:[AuthGuard],component:TvComponent,data:{Animation:'TV'}},
  {path:'**',component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
