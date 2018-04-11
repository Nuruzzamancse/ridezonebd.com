import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../model/product";
import {Category} from "../../model/category";

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  product: Product;
  category: Category[];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.product = new Product();
    this.category = [];
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

  //console.log(id);
    this.productService.getSingleProduct(id).subscribe(response=>{
      this.product = response.data;
      console.log(this.product);
    })

    this.productService.getCategory()
      .subscribe(response=>{
        this.category = response.data;
      })

    console.log(this.product);
  }

  update(id){
    this.productService.updateProduct(id,this.product)
      .subscribe(response=>{
        console.log(response)
      })
    this.router.navigate(['/']);

  }

}
