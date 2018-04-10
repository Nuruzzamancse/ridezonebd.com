import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:any;

  product: Object;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');

  }

  ngOnInit() {
    this.productService.getSingleProduct(this.id).subscribe(response=>{
      this.product = response.data;

      //console.log(this.product);
    })
  }

  cart(cnt,productId,product){
    this.productService.storeUserDatta(cnt,productId,product);

  }

}
