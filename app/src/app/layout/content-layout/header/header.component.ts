import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navigationList } from 'src/app/model/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cartItems: number = 0;
  navigationList: navigationList[] = [
    {
      category: 'electronics',
      subcategories: ['mobiles', 'laptops'],
    },
    {
      category: 'funiture',
      subcategories: ['chairs', 'tables'],
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout() {
    localStorage.removeItem('csrf');
    this.router.navigate([`login`]);
  }
}
