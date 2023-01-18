import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/model/product';

@Component({
  selector: 'app-suggested-product',
  templateUrl: './suggested-product.component.html',
  styleUrls: ['./suggested-product.component.css']
})
export class SuggestedProductComponent implements OnInit  {
  @Input() category: Category = {
    id: 0,
    category: '',
    subcategory: '',
  };

  @Input() count: number = 3;
  constructor() {}

  ngOnInit(): void {}
}
