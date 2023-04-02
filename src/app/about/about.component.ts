import { Component } from '@angular/core';
import {ShareDataService}from '../shareData/share-data.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
constructor(public shareDataService:ShareDataService){}

}

