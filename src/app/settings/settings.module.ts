import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { PasswordComponent } from './password/password.component';
import { PrivacyComponent } from './privacy/privacy.component';


@NgModule({
  declarations: [
    ProfileComponent,
    PasswordComponent,
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
