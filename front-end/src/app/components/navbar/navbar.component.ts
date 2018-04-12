import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {ProductService} from "../../services/product.service";

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import { MatFormFieldControl} from "@angular/material";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cart: String;

  isAdmin: number = 0;

  product:any[];

  search: String;
  value: string;



  //Material Design

  myControl: FormControl = new FormControl();

  options = [

  ];
  myOption;

  filteredOptions: Observable<string[]>;



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

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );

    this.productService.getProduct()
      .subscribe(resposnse=>{
          this.product = resposnse.data;
          this.product.forEach(pd => {
            this.options.push(pd.name);
          });
      })



  }

  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  onLogoutClick(){

    this.authService.logout();

    this.flashMessage.show('Your are successfully logged out!', {cssClass: 'alert-success'});

    this.router.navigate(['/login']);
    return false;

  }


  onChangeOption(e) {

    for(let product of this.product){
      if(product.name == this.myControl.value)
        this.router.navigate([`/details/${product._id}`])

    }
    console.log(this.myControl.value);
  }

}
