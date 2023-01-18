import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { user } from 'src/app/model/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],

})
export class ListComponent {

  constructor(private http: HttpService, private router: Router) { }

  users: user[] = [];

  ngOnInit(): void {
    this.http.getUsers().subscribe(
      res => {
        this.users = res;
      });
  }

  delete(id: number) {
    this.http.deleteUser(id).subscribe(
      res => {
        this.http.getUsers().subscribe(
          res => {
            this.users = res;
          });
      }
    );

  }
  edit(user: user) {
    this.router.navigate([`user/${user.id}`])
  }
  create() {
    this.router.navigate([`user/create`])
  }




}
