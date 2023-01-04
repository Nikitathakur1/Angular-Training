import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component';


const routes: Routes = [{ path: 'form-component', component:LoginformComponent}, { path: 'loginform-component', component: LoginformComponent }

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
