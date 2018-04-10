import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { RouterModule, Routes} from "@angular/router";
import {Http, HttpModule} from "@angular/http";
import { FileUploadModule } from "ng2-file-upload";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { ValidateService} from "./services/validate.service";
import { FlashMessagesService} from "angular2-flash-messages";
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthService} from "./services/auth.service";
import { AuthGaurd} from "./gaurds/auth.gaurd";
import { ProductComponent } from './components/product/product.component';
import {ProductService} from "./services/product.service";
import { FileService } from './services/file.service';
import { PhotoUploadComponent } from './components/photo-upload/photo-upload.component';
import { HttpClient } from '@angular/common/http';
import { CartComponent } from './components/cart/cart.component';
import {AdminGaurd} from "./gaurds/admin.gaurd";
import { DetailsComponent } from './components/details/details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    ProductComponent,
    PhotoUploadComponent,
    CartComponent,
    DetailsComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,

    FileUploadModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [ValidateService,
    FlashMessagesService,
    AuthService,
    AuthGaurd,
    ProductService,
    FileService,
    AdminGaurd


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
