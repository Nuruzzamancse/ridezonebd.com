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

  arrObj:string[] = new Array(0);



  getCart(){

  }

  constructor(
    private authServie: AuthService,
    private router: Router

  ) {

  }

  ngOnInit() {
    this.myProductArray = JSON.parse(localStorage.getItem('myProductCart'));



    for(let i=0;i<this.myProductArray.length;i++) {
      this.sum = this.sum + parseInt(this.myProductArray[i].myProduct.price) * parseInt(this.myProductArray[i].myProductCount);
      this.arrObj.push(this.myProductArray[i].myProduct._id);
    }

    console.log(this.arrObj);
  }

  continueShopping(){
    if(this.authServie.loggedIn()) {
      this.router.navigate(['/checkout'])
      let User = {
        wishList:this.arrObj
      }

      this.authServie.UpdateProfile(localStorage.getItem('loginId'),User)
        .subscribe(response=>{
          console.log('Here in update');
          console.log(response.data.name);
        });

    }
    else
      this.router.navigate(['/login']);
  }



}
