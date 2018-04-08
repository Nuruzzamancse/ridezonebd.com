import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products : object;

  constructor(
    private productService: ProductService
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

}
