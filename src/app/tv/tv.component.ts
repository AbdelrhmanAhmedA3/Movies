import { Component } from '@angular/core';
import { ShareDataService } from '../shareData/share-data.service';
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent {
  constructor (public shareDataService:ShareDataService){}
}
