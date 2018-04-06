import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import { AuthGaurd} from "./gaurds/auth.gaurd";

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent, canActivate: [AuthGaurd]},
  {path:'profile',component:ProfileComponent, canActivate: [AuthGaurd] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
