import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent {
  firstFormGroup!:FormGroup
  
  constructor(private formBuilder:FormBuilder, private api:MyserviceService ) { }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      fullname:['', [Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
      email:['', [ Validators.required, Validators.email]],
      fathername:['', [Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
      mothername:['',[Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
      gender:['', [Validators.required]],
      dateofbirth:[''],
      mobile:['',[Validators.required,Validators.pattern("@^[0-9]{10}$")]],
      bankaccountnumber:['',[Validators.required,,Validators.pattern("@^[0-9]{10}$")]],  
    bankname:['',[Validators.required]],
    ifsccode:['',[Validators.required]],
    internetbanking:[''],
    mobilebanking:[''],
    presentaddress:[''],
    permanentaddress:[''],
    
    })
    
  }
   OnSubmit(){
    this.api.stepperData(this.firstFormGroup.value).subscribe();
   }
}

