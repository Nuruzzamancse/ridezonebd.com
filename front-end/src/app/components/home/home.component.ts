import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products : object;


  constructor(
    private productService: ProductService,
    private router: Router
  ) {
    this.products = [];
  }

  ngOnInit() {
    this.productService.getProduct()
      .subscribe( response =>{
        this.products = response.data;
        console.log(this.products);
      })
  }

  cart(cnt,productId,product){
    this.productService.storeUserDatta(cnt,productId,product);

  }

  detailsView(id){
    this.router.navigate([`/details/${id}`])

  }

}
