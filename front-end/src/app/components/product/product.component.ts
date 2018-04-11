import { Component, OnInit } from '@angular/core';
import { ProductService} from "../../services/product.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {ValidateService} from "../../services/validate.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  name: String;
  code: String;
  description: String;
  picture: String;
  price: String;
  category: String;
  Category: object;
  avl: String;





  constructor(
    private productService: ProductService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private validateService: ValidateService
  ) {
      this.Category = [];
  }

  ngOnInit() {

    this.productService.getCategory()
      .subscribe( response=>{


          this.Category = response.data;




      })

  }

  onRegisterSubmit(){

    const product = {
      name: this.name,
      code: this.code,
      category: this.category,
      description: this.description,
      price: this.price,
      avl: this.avl
    }

    console.log(this.category);

    this.productService.registerProduct(product).subscribe( response=>{
      if(response.success) {
        console.log(response.data._id);
        let id = response.data._id
        this.flashMessage.show('Successfully created Product',{cssClass:'alert-success'});
        this.router.navigate([`/photo/${id}`]);
      }
      else {
        this.router.navigate(['/product']);
      }
    })

  }

}
