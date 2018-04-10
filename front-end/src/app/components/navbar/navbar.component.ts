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

  isAdmin: number = 0;

  product:any;

  search: String;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    public productService: ProductService
  ) {


    this.cart = this.productService.loadToken();
    if(localStorage.getItem('isAdmin')=="true")
      this.isAdmin =1;
        console.log(this.isAdmin);
  }



  ngOnInit() {
    this.productService.getProduct()
      .subscribe(resposnse=>{
          this.product = resposnse.data;
      })
  }

  onLogoutClick(){

    this.authService.logout();

    this.flashMessage.show('Your are successfully logged out!', {cssClass: 'alert-success'});

    this.router.navigate(['/login']);
    return false;

  }

  onSearchSubmit(){

      for(let i=0;i<this.product.length;i++)
        if(this.product[i].name == this.search){
            this.router.navigate([`/details/${this.product[i]._id}`])
         // console.log(this.product[i].name);
        }

  }

}
