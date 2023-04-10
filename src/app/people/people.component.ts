import { Component } from '@angular/core';
import { ShareDataService } from '../shareData/share-data.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
constructor(public shareDataService:ShareDataService){}
}
