import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { orderDetail } from 'src/app/model/orderDetail';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent {

  orders: orderDetail[] = [];
  constructor(private http: HttpService, private router: Router){

  }
  ngOnInit( ) {
    this.http.getOrderDetail(1).subscribe(
      res => {
        this.orders  = res;
        
      });
  }

}
