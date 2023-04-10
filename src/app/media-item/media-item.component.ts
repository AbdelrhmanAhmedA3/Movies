import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.scss']
})
export class MediaItemComponent {
  constructor(private matDaialog:MatDialog){}
@Input() item:any;
openDialog(data:any){

  this.matDaialog.open(MediaItemComponent)
}
}
