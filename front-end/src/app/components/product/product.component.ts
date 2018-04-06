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
  description: String;
  picture: String;
  price: String;



  constructor(
    private productService: ProductService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private validateService: ValidateService
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){

    const product = {
      name: this.name,
      picture: this.price,
      description: this.description,
      price: this.price
    }

    this.productService.registerProduct(product).subscribe( data=>{
      if(data.success) {
        console.log(data);
        this.flashMessage.show('Successfully created Product',{cssClass:'alert-success'});
        this.router.navigate(['/login']);
      }
      else {
        this.router.navigate(['/register']);
      }
    })

  }

}
