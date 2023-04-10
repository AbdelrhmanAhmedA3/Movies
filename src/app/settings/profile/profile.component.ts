import { Component } from '@angular/core';
import { ShareDataService } from 'src/app/shareData/share-data.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(public shareDataService:ShareDataService){}
}
