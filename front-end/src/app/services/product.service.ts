import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";

@Injectable()
export class ProductService {

  productCartSize = 0;

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



  storeUserDatta(paramcnt, userId, user){

    let cnt2 = localStorage.getItem('cnt');
    //
    // console.log('type of  cnt2: ' + typeof cnt2 + ' and val: ' + cnt2);
    // console.log('type of  paramcnt: ' + typeof paramcnt + ' and val: ' + paramcnt);

    if (cnt2 == null) {
      // console.log('cnt2 is null.');
      cnt2 = '0';
    }


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
