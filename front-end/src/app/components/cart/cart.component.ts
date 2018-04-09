import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  myProductArray : any [];

  sum : number = 0;

  getCart(){

  }

  constructor(
    private authServie: AuthService,
    private router: Router

  ) { }

  ngOnInit() {
    this.myProductArray = JSON.parse(localStorage.getItem('myProductCart'));

    for(let i=0;i<this.myProductArray.length;i++)
    this.sum = this.sum + parseInt(this.myProductArray[i].myProduct.price)*parseInt(this.myProductArray[i].myProductCount);
  }

  continueShopping(){
    if(this.authServie.loggedIn())
      this.router.navigate(['/dashboard'])
    else
      this.router.navigate(['/login']);
  }



}
