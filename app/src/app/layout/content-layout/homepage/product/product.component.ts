import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { product, Product } from 'src/app/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() view: 'grid' | 'list' = 'grid';
  products: product[] = [];

  @Input() product: Product = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    quantity: 0,
    productCategory: {
      id: 1,
      category: '',
      subcategory: '',
    },
    imageName: '',
  };
  constructor(private http :HttpService) {}
  ngOnInit(): void {
    this.http.getProducts().subscribe(
      res => {
        this.products  = res;
      });
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class
  }
}
