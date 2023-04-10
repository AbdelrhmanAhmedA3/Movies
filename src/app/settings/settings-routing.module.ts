import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PasswordComponent } from './password/password.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [

  {path:'',component:ProfileComponent},
  {path:'password',component:PasswordComponent},
  {path:'privacy',component:PrivacyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
