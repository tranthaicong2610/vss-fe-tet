import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { order } from 'src/app/model/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  orders: order[] = [];
  constructor(private http: HttpService, private router: Router){

  }
  ngOnInit( ) {
    this.http.getOrders().subscribe(
      res => {
        this.orders  = res;
        
      });
  }
  orderDetail(){
    this.router.navigate(["/order-detail"]);
  }
}
