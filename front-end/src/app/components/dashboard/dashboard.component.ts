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
        //console.log(this.singleUser);

      })

    this.authService.getProfile().subscribe(response=>{
      this.users = response.data;
    })






    // console.log(this.arrObj);


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
