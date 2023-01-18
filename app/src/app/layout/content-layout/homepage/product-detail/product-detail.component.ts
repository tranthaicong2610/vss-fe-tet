import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  imageIndex: number =1;
  product!: Product;
  constructor(){

  }
  ngOnInit(): void {


  }
}
