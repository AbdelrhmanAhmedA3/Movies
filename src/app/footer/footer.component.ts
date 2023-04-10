import { Component } from '@angular/core';
import { ShareDataService } from '../shareData/share-data.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
constructor(public shareDataService:ShareDataService){}
}
