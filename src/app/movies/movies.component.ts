import { Component } from '@angular/core';
import { ShareDataService } from '../shareData/share-data.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
constructor(public shareDataService:ShareDataService){}
}
