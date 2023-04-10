import { Component } from '@angular/core';
import { ShareDataService } from 'src/app/shareData/share-data.service';
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {
  constructor(public shareDataService:ShareDataService){}
}
