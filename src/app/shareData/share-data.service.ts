import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  data = new BehaviorSubject(null) ;
  darkMode:boolean=false;
  dataNav !:object;
  behaviorDataNav:any = new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient , private Router:Router) {

    if (localStorage.getItem('formData') != null) {
      this.saveUSerData()
    }
  };
  ngOnInit(){

}
  setDarkMode(val: boolean) {
    this.darkMode = val;
  };



saveUSerData(){
  this.data.next(JSON.parse(localStorage.getItem('formData') || '{}' ));
  console.log(this.data);

};
LogOut(){
  localStorage.removeItem('formData');
  this.data.next(null);
  this.Router.navigate(['/LOGIN'])
}

}
