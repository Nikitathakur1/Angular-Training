import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  formValue!: FormGroup; 
  sports:string[]=['cricket', 'football','hockey','snooker'];

 

  constructor(private formBuilder:FormBuilder, private api:MyserviceService ) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      fullname:['', [Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
      email:['', [ Validators.required, Validators.email]],
      password:['', [Validators.required,Validators.minLength(6),Validators.maxLength(12),Validators.pattern("^[a-zA-Z0-9_.-]*$")
    ]],
      gender:['', [Validators.required]],
      dateofbirth:[''],
      mobile:['',[Validators.required,Validators.pattern("@^[0-9]{10}$")]],
      skills:[''],

    })
    
  }
   OnSubmit(){
    this.api.postEmployee(this.formValue.value).subscribe();
   }
  

}

