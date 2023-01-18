import { Component, OnInit } from '@angular/core';
import { SuggestedProduct } from 'src/app/model/product';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  suggestedProducts: SuggestedProduct[] = [
    {
      banerimage: 'Baner/Baner_Mobile.png',
      category: {
        id: 0,
        category: 'electronics',
        subcategory: 'mobiles',
      },
    },
    // {
    //   banerimage: 'Baner/Baner_Laptop.png',
    //   category: {
    //     id: 0,
    //     category: 'electronics',
    //     subcategory: 'laptop',
    //   },
    // },
    // {
    //   banerimage: 'Baner/Baner_Chair.png',
    //   category: {
    //     id: 0,
    //     category: 'funiture',
    //     subcategory: 'chairs',
    //   },
    // },
  ];

  constructor() {}
  ngOnInit(): void {}
}
