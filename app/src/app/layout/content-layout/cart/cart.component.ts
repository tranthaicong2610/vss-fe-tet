import { Component } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { CartProduct, product } from 'src/app/model/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  {

  products: product[] = [];
  cartProduct:CartProduct[] = [];
  constructor(private http: HttpService) { }
  ngOnInit() {
    // console.log(this.http.carts);
    for(let item of this.http.carts){
      // console.log(item);
      
      this.http.getProductDetail(item[0]).subscribe(
        res => {
          res
          // console.log(res);
          
          this.products.push(res);
        });
    }
    // console.log(this.products.length);
    
    // for(let item of this.products){
    //   console.log(item);
      
    // }
    console.log(this.products);
    
    
    
  }
  

}
