import { Component } from '@angular/core';
import {FormBuilder, Validators , FormGroup, FormControl} from '@angular/forms';

import { Router } from '@angular/router';
import { SiginUp } from "../models/siginUp";
import { ShareDataService } from '../shareData/share-data.service';
@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss'],


})

export class SiginComponent {
  // formDataUser = {} as SiginUp;
  // testmode = 'horizontal'
  formDataUserArray:SiginUp [] = [];
  hide = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!:FormGroup;
  fourthFormGroup!:FormGroup;
  fifthFormGroup!:FormGroup;
  constructor(private _formBuilder: FormBuilder , private roter:Router, private ShareDataService:ShareDataService) {
    this.ShareDataService.data.subscribe({
      next:()=>{
       if ( this.ShareDataService.data.getValue() != null) {
          this.roter.navigate(['/home'])
       }
      }
    })
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
       first_name: ['', Validators.compose(
        [Validators.required,Validators.minLength(3),Validators.maxLength(12), Validators.pattern(/^[A-Z][a-z]/)])]
    });
    this.secondFormGroup = this._formBuilder.group({
      last_name: ['', Validators.compose(
        [Validators.required,Validators.minLength(3),Validators.maxLength(12), Validators.pattern(/^[A-Z][a-z]/)])]
    });
    this.thirdFormGroup = this._formBuilder.group({
      age: ['', Validators.compose(
        [Validators.required,Validators.min(10),
        Validators.pattern(/^(?:-(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)$/)
        ] )]
    });
    this.fourthFormGroup = this._formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,Validators.email,
        Validators.pattern(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)
      ])]
    });
    this.fifthFormGroup = this._formBuilder.group({
      password: ['', Validators.compose([
        Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/)
      ]) ]
    });
  }


  formSubmit(val:FormGroup, fieldName: string){
    const DataObject:any  = {};

    if(val.valid){
      this.formDataUserArray.push(val.value);
       for(let i = 0; i < this.formDataUserArray.length; i++ ) {
      Object.assign(DataObject, this.formDataUserArray[i]);
    };
      localStorage.setItem('formData',JSON.stringify(DataObject));
      console.log(DataObject[Object.keys(DataObject)[4]]);

      if (this.formDataUserArray.length === 5 ) {

        this.roter.navigate(['/login'])
      }else{
        console.log('sorry');

      };
    }else{
      console.log("no");

    };
    // const DataObject  = {};
    // console.log(this.formDataUserArray);
    // for(let i = 0; i < this.formDataUserArray.length; i++ ) {
    //   Object.assign(DataObject, this.formDataUserArray[i]);
    // }
    // switch (fieldName) {
    //   case 'firstName':
    //     this.formDataUser.first_name = val.value.first_name
    //   break;
    //   case 'secondName':
    //     this.formDataUser.last_name = val.value.last_name

    //   break;
    //   case 'age':
    //     this.formDataUser.age = val.value.age

    //   break;
    //   case 'email':
    //     this.formDataUser.email = val.value.email

    //   break;
    //   case 'password':
    //     this.formDataUser.password = val.value.password
        //   localStorage.setItem('formDataUser',JSON.stringify(this.formDataUser));
        //  let x:any = localStorage.getItem('formDataUser')
        //  console.log('formDataUser',JSON.parse(x));

        // break;


        // this.formDataUser.first_name =

      }
      // console.log(this.formDataUser);

}





