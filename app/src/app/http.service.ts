import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { order } from './model/order';
import { orderDetail } from './model/orderDetail';
import { cart, product } from './model/product';
import { user } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  carts: any = []
  check: boolean = true;
  cartProducts: any = [];
  constructor(private http: HttpClient) { }

  private httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  protected options = {
    headers: this.httpHeaders
  };

  login(username: string, password: string) {
    let payload = { username: username, password: password };
    return this.http.post<any>(`http://localhost:8080/login`, payload, this.options);
  }


  getProducts() {
    return this.http.get<product[]>(`http://localhost:8080/product/`)
  }
  getProductDetail(id: any) {
    return this.http.get<product>(`http://localhost:8080/product/` + id);
  }

  getUsers() {
    return this.http.get<user[]>(`http://localhost:8080/user/`);
  }
  getOrders() {
    return this.http.get<order[]>(`http://localhost:8080/order`);
  }

  getOrderDetail(id : any) {
    return this.http.get<orderDetail[]>(`http://localhost:8080/order/`+id);
  }

  addToCart(cart: any) {
    // console.log(cart ,"service");
    // this.carts = cart
    this.check = true;
    for (let item of this.carts) {
      if (item[0] == cart[0]) {
        this.check = false;
        item[1]++;
      }
    }
    if (this.check == true) {
      this.carts.push(cart);
    }

  }

  getUser(id: number) {
    let url = `http://localhost:8080/user/${id}`;
    return this.http.get<user>(url);
  }

  saveUser(user: user) {
    return this.http.post<user>(`http://localhost:8080/user`, user, this.options);
  }

  deleteUser(id: number) {
    return this.http.delete<number>(`http://localhost:8080/user/${id}`);
  }


}
