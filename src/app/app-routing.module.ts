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
import { MoviesInfoComponent } from './movies-info/movies-info.component';

const routes: Routes = [
  {path:'',redirectTo:'signin',pathMatch:'full'},
  {path:'signin',component:SiginComponent,data:{Animation:'SIGIN'}},
  {path:'login',component:LoginComponent,data:{Animation:'LOGIN'}},
  {path:'moviesInfo/:id/:mediaType',canActivate:[AuthGuard],component:MoviesInfoComponent,data:{Animation:'moviesInfo'}},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent,data:{Animation:'HOME'}},
  {path:'about',canActivate:[AuthGuard],component:AboutComponent,data:{Animation:'ABOUT'}},
  {path:'movies',canActivate:[AuthGuard],component:MoviesComponent,data:{Animation:'MOVIES'}},
  {path:'people',canActivate:[AuthGuard],component:PeopleComponent,data:{Animation:'PEOPLE'}},
  {path:'tv',canActivate:[AuthGuard],component:TvComponent,data:{Animation:'TV'}},
  {path:'settings',canActivate:[AuthGuard],loadChildren:()=> import('./settings/settings.module').then((m)=>m.SettingsModule),data:{Animation:'TV'}},
  {path:'**',component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
