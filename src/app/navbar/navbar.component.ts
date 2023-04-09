import { Component, Input } from '@angular/core';
import {NameC , methodLink} from './name-c'
import { slideInAnimation } from "./router-animation";
import { ShareDataService } from "../shareData/share-data.service";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations:  [ slideInAnimation]
})
export class NavbarComponent   {
  darkMode=false;
  hideLinksNav=false;
  constructor(public shareDataService:ShareDataService){}
  ngOnInit(){
    this.shareDataService.data.subscribe(
      {
        next:()=>{
          if (this.shareDataService.data.getValue() != null) {
            this.hideLinksNav = true;
          }else{
            this.hideLinksNav = false;
          }
        }
      }
    )
  }
  nameC: NameC[]=
  [
    {name:'home'},
    {name:'movies'},
    {name:'tv'},
    {name:'people'},
    {name:'about'},
  ];
  hrefIcon:methodLink[]=
  [
    {href:'https://www.linkedin.com/in/abdelrhman-ahmed-fathi-b6048a21a',nameIcon:'fa-brands fa-linkedin-in',title:'linkedin'},
    {href:'https://github.com/AbdelrhmanAhmedA3',nameIcon:'fa-brands fa-github',title:'github'},
    {href:'https://www.facebook.com/profile.php?id=100072190332412',nameIcon:'fa-brands fa-facebook',title:'facebook'},
    {href:'https://www.instagram.com/abdulrahmanahmed9696/',nameIcon:'fa-brands fa-instagram',title:'instagram'}
  ]
  changeColor(){

    this.darkMode = !this.darkMode;
    this.shareDataService.setDarkMode(this.darkMode);
  }
  hide(){
    this.hideLinksNav = false
  }
}
