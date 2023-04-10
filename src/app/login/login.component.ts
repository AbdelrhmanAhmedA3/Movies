import { Component , Output, EventEmitter} from '@angular/core';
import {FormBuilder, Validators , FormGroup, FormControl} from '@angular/forms';
import{ShareDataService} from'../shareData/share-data.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  DataObject:any  = {};
   hide = false;
   formDataUserArray:any=[];
  data: any ;
  fourthFormGroup!:FormGroup;
  fifthFormGroup!:FormGroup;
  constructor(private _formBuilder: FormBuilder , public shareData:ShareDataService , private router:Router) {
    this.shareData.data.subscribe(
      {
        next:()=>{
          if (this.shareData.data.getValue() != null) {
              this.router.navigate(['/home'])
          }
        }
      }
    )
  }
  ngOnInit(){
    this. data =    JSON.parse(localStorage.getItem('formData') || '{}' )

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

  // const DataObject:any  = {};

  if(val.valid){
    this.formDataUserArray.push(val.value);
       for(let i = 0; i < this.formDataUserArray.length; i++ ) {
      Object.assign(this.DataObject, this.formDataUserArray[i]);
    };

    if (this.DataObject[Object.keys(this.DataObject)[0]] === this.data[Object.keys(this.data)[3]] &&
        this.DataObject[Object.keys(this.DataObject)[1]] === this.data[Object.keys(this.data)[4]]) {
      this.shareData.saveUSerData();
      this.router.navigate(['/home'])

    }else{

    }
  }


  // if(val.value.email === this.email && val.value.password == this.password){

  // }else{

  // }

}

}
