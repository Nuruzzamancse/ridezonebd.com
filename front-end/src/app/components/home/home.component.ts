import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products : any = [];

  isAdmin:any;

  constructor(
    private productService: ProductService,
    private router: Router
  ) {
    this.products = [];
    if(localStorage.getItem('isAdmin')=="true")
      this.isAdmin =1;
    console.log(this.isAdmin);
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

  editProduct(id){
    this.router.navigate([`/edit/${id}`])
  }

  // deleteProduct(product){
  //   console.log('delete working');
  //   this.productService.deleteProduct(product._id).subscribe(resoponse=>{
  //     console.log(resoponse);
  //     let productIndex = this.products.indexOf(product);
  //     let myProducts = this.products;
  //     myProducts.slice(productIndex, 1);
  //     this.products = myProducts;
  //   });
  //   // this.router.navigate(['/']);
  // }

  delFunc(prod){
    this.products.splice(this.products.indexOf(prod), 1);
    this.productService.deleteProduct(prod._id).subscribe(respnse=>{

    });
  }

}
