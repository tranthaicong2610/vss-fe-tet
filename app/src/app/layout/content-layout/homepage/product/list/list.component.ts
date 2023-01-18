import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { cart, product } from 'src/app/model/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  carts:cart[] = [];
  cart:any = {}
  constructor(private http: HttpService, private router: Router) { }

  products: product[] = [];
  product:any = {};

  ngOnInit() {
    this.http.getProducts().subscribe(
      res => {
        this.products  = res;
      });
  }
  addProduct(product:any){
    this.cart.id = product.id;
    this.cart.quantity = 1;
    // console.log(product);
    this.carts = [product.id,1] ;
    this.http.addToCart([product.id,1]);
    // console.log(this.carts);
    // console.log(this.http.carts.length);
    console.log(this.http.carts);

    this.http.getProductDetail(product.id).subscribe(
      res => {
        this.product = res;
        console.log(this.product);
        
      });
    
    // this.http.functionCartProduct();
  }
}
