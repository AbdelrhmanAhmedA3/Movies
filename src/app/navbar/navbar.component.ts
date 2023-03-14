import { Component } from '@angular/core';
import {NameC} from './name-c'
import  {trigger, transition, useAnimation}  from  "@angular/animations";
import  {rotateCubeToLeft , rotateRoomToLeft ,rotateRoomToRight}  from  "ngx-router-animations";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations:  [
    trigger('rotateCubeToLeft',  [ transition('* => *', useAnimation(rotateRoomToLeft))])
    ]
})
export class NavbarComponent {
  nameC: NameC[]=
  [
    {name:'HOME'},
    {name:'MOVIES'},
    {name:'TV'},
    {name:'PEOPLE'},
    {name:'ABOUT'},
  ];
  getState(outlet:any):any  {
		return outlet.activatedRouteData.state;
	}
}
