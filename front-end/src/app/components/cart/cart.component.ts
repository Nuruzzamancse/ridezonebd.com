import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  myProductArray : any [];

  getCart(){

  }

  constructor() { }

  ngOnInit() {
    this.myProductArray = JSON.parse(localStorage.getItem('myProductCart'));

    console.log(this.myProductArray);
  }

}
