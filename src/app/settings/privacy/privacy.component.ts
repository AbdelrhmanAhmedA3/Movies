import { Component } from '@angular/core';
import { ShareDataService } from 'src/app/shareData/share-data.service';
@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent {
constructor(public shareDataService:ShareDataService){}
}
