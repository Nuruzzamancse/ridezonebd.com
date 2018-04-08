import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";

@Injectable()
export class ProductService {

  constructor(
    private http: Http
  ) { }

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




}
