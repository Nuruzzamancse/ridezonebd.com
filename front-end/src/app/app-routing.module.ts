import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import { AuthGaurd} from "./gaurds/auth.gaurd";
import { ProductComponent} from "./components/product/product.component";
import { PhotoUploadComponent } from "./components/photo-upload/photo-upload.component";
import {CartComponent} from "./components/cart/cart.component";
import {AdminGaurd} from "./gaurds/admin.gaurd";
import {DetailsComponent} from "./components/details/details.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {EditproductComponent} from "./components/editproduct/editproduct.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {EditprofileComponent} from "./components/editprofile/editprofile.component";
import {AutocompleteFilterExampleComponent} from "./components/autocomplete-filter-example/autocomplete-filter-example.component";

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent, canActivate: [AdminGaurd]},
  {path:'profile',component:ProfileComponent, canActivate: [AuthGaurd] },
  {path:'product',component:ProductComponent,canActivate: [AdminGaurd]},
  {path:'photo/:id',component:PhotoUploadComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'cart', component: CartComponent},
  {path:'checkout', component: CheckoutComponent, canActivate: [AuthGaurd]},
  {path:'edit/:id', component: EditproductComponent, canActivate: [AdminGaurd]},
  {path:'editprofile/:id', component:EditprofileComponent, canActivate: [AuthGaurd]},
  {path:'auto', component:AutocompleteFilterExampleComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
