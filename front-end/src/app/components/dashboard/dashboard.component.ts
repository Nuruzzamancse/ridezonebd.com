import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  singleUser:any;

  product: object [];

  user: string;

  users: any;

  show:any;
  myObj: any = [];

  buyObj = [];

  arrObj:object[] = new Array(0);


  constructor(
    private authService: AuthService,
    private productService: ProductService
  ) {
    this.singleUser = [];
    this.product = [];
    this.users = [];
    this.show = 0;
  }

  ngOnInit() {
    this.authService.getSiingleProfile(localStorage.getItem('loginId'))
      .subscribe(response=>{
        this.singleUser = response.data.wishList;
        this.user =  response.data.name;

      })

    this.authService.getProfile().subscribe(response=>{
      this.users = response.data;

      for (let user of this.users) {
        let cnt = 1;
        let userWishListsId = user.wishList;
        if(userWishListsId!=null)
        for (let productId of userWishListsId) {
          this.productService.getSingleProduct(productId).subscribe(response=>{
            let dummyObj:any = {};

            //if(cnt==1)
              dummyObj.name = user.name;
            dummyObj.product = response.data;
            console.log(dummyObj);
            this.buyObj.push(dummyObj);
            console.log('-------===========----------')
            console.log(this.buyObj);
            cnt++;
          })

        }
        console.log('-----------------');

        let cnt2 = 1;

        let userBuyList = user.buyList;

        for (let productId of userBuyList) {
          this.productService.getSingleProduct(productId).subscribe(response=>{
            let dummyObj:any = {};

           // if(cnt2==1)
              dummyObj.name = user.name;
            dummyObj.product = response.data;
            console.log(dummyObj);
            this.myObj.push(dummyObj);
            console.log('Fucking Here')
            console.log(this.myObj);
            cnt2++;
          })

        }







      }

    });



  }


  getData(){

    this.show=1;
    console.log(this.singleUser);

    for(let i=0;i<this.singleUser.length;i++)
    this.productService.getSingleProduct(this.singleUser[i]).subscribe(response=>{
        this.arrObj.push(response.data);
        console.log(response.data);
      })



  }

}
