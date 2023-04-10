import { Component } from '@angular/core';
import { ShareDataService } from '../shareData/share-data.service';
@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent {
constructor(public shareDataService:ShareDataService){}
}
