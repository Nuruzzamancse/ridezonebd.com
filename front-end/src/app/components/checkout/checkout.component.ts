import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';

import { NgForm } from '@angular/forms';
import { StripeService} from "../../common/stripe.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {ProductService} from "../../services/product.service";


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  arrObj:string[] = new Array(0);

  myProductArray : any [];

  productList: any[];

  constructor(
    private cd: ChangeDetectorRef,
    private stripeService: StripeService,
    private authServie: AuthService,
    private router: Router,
    private productService: ProductService
  ) { }

  @ViewChild('cardInfo') cardInfo: ElementRef;

  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;

  ngOnInit() {
    this.myProductArray = JSON.parse(localStorage.getItem('myProductCart'));


    this.productService.getProduct()
      .subscribe(respnse=>{
        this.productList = respnse.data;
        console.log(this.productList);
      })

    if(this.myProductArray)
    for(let i=0;i<this.myProductArray.length;i++) {
      // this.sum = this.sum + parseInt(this.myProductArray[i].myProduct.price) * parseInt(this.myProductArray[i].myProductCount);
      this.arrObj.push(this.myProductArray[i].myProduct._id);
    }


  }

  shop(){
    console.log('in shop');

    if(this.authServie.loggedIn()) {

      //this.router.navigate(['/checkout'])
      let User = {
        buyList: this.arrObj,
        wishList: null
      }


      // if(this.myProductArray)
      //   for(let i=0;i<this.myProductArray.length;i++) {
      //     // this.sum = this.sum + parseInt(this.myProductArray[i].myProduct.price) * parseInt(this.myProductArray[i].myProductCount);
      //     this.arrObj.push(this.myProductArray[i].myProduct._id);
      //
      //     for(let j=0; j<this.productList.length;j++){
      //       if(this.productList[j].product._id==this.myProductArray[i].myProduct._id){
      //         this.productList[j].product.avl = this.productList[j].product.avl - this.myProductArray[i].myProductCount;
      //           //this.productService.updateProduct(this.productList[j].product._id,this.productList[j].product);
      //           console.log(this.productList[j].product.name + ' = ' + this.productList[j].product.name);
      //       }
      //     }
      //   }

      //localStorage.setItem('myProductCart',null);


      localStorage.setItem('myProductCart',null);
      localStorage.setItem('cnt',JSON.stringify(0));


      this.authServie.UpdateProfile(localStorage.getItem('loginId'),User)
        .subscribe(response=>{
          console.log('Here in update bal');
          console.log(response.data.name);
          console.log('Buy List' +response.data.buyList);
          console.log('Wish List' +response.data.wishList);

        });

    }
    else
      this.router.navigate(['/login']);

  }

  ngAfterViewInit() {
    this.card = elements.create('card');
    this.card.mount(this.cardInfo.nativeElement);

    this.card.addEventListener('change', this.cardHandler);
  }

  ngOnDestroy() {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }

  onChange({ error }) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }

  async onSubmit(form: NgForm) {
    const { token, error } = await stripe.createToken(this.card);

    if (error) {
      console.log('Something is wrong:', error);
    } else {
      console.log('Success!', token);
      this.stripeService.confirmPayment('test@mymail.com', token)
        .subscribe((response) => {

          console.log(response);

        });
      // ...send the token to the your backend to process the charge
    }
  }
}


