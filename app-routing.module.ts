import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StepperComponent } from './stepper/stepper.component';

const routes: Routes = [{ path: 'form-component', component: HomeComponent }, { path: 'login-component', component: LoginComponent },{
  path: 'Home', component: HomeComponent}, {path:'stepper-component', component:StepperComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
