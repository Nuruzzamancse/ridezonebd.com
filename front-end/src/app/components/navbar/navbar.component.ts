import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cart: String;




  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    public productService: ProductService
  ) {
    this.cart = this.productService.loadToken();
  }



  ngOnInit() {

  }

  onLogoutClick(){

    this.authService.logout();

    this.flashMessage.show('Your are successfully logged out!', {cssClass: 'alert-success'});

    this.router.navigate(['/login']);
    return false;

  }

}
