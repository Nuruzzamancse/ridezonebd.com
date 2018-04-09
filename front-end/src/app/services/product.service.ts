import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";

@Injectable()
export class ProductService {

  productCartSize = 0;
  myProductArray: any = [];

  constructor(
    private http: Http
  ) { }

  getProductCartSize() {
    return this.productCartSize;
  }

  registerProduct(product){

    let headers = new Headers();

    headers.append('Content-type','application/json');

    return this.http.post('http://localhost:3000/product',product,{headers: headers})
      .map(res => res.json())

  }

  getProduct(){

    let headers = new Headers();

    headers.append('Content-type','application/json');

    return this.http.get('http://localhost:3000/product',{headers: headers})
      .map(res => res.json())

  }



  storeUserDatta(paramcnt, userId, product){

    console.log(product);

    let cnt2 = localStorage.getItem('cnt');

    this.myProductArray = JSON.parse(localStorage.getItem('myProductCart'));

    if (this.myProductArray == null) {
      console.log('My product cart array is null.' );
      this.myProductArray = [];
    }

    //
    // console.log('type of  cnt2: ' + typeof cnt2 + ' and val: ' + cnt2);
    // console.log('type of  paramcnt: ' + typeof paramcnt + ' and val: ' + paramcnt);

    if (cnt2 == null) {
      // console.log('cnt2 is null.');
      cnt2 = '0';
    }

    let productExistence = false;
    let productIndex;

    console.log('My Product Cart array length: ' + this.myProductArray.length);

    for (let index=0; index<this.myProductArray.length; index++) {
      let myProductInfo = this.myProductArray[index];
      console.log(myProductInfo);
      console.log();
      let myProduct = myProductInfo.myProduct;
      let myProductCount = myProductInfo.myProductCount;

      if (myProduct._id == product._id) {
        console.log('My Product exists');
        productExistence = true;
        console.log(this.myProductArray[index].myProductCount);
        this.myProductArray[index].myProductCount = this.myProductArray[index].myProductCount + 1;
        break;
      }
    }

    if (productExistence == false) {
      let myProductInfo: any = {};
      myProductInfo.myProduct = product;
      myProductInfo.myProductCount = 1;
      this.myProductArray.push(myProductInfo);
    }

    localStorage.setItem('myProductCart', JSON.stringify(this.myProductArray));

    let myPreviousCount = parseInt(cnt2);
    // console.log('After parsing: ' + myPreviousCount);

    cnt2 = (myPreviousCount + 1).toString();

    this.productCartSize = (myPreviousCount + 1);

    // console.log('After add: '  + paramcnt + ' get:  ' + cnt2);


    localStorage.setItem('cnt', cnt2);



    //console.log(user);

    //localStorage.setItem('user',JSON.stringify(user));

  }

  loadToken(){
    return localStorage.getItem('cnt');
  }


}
