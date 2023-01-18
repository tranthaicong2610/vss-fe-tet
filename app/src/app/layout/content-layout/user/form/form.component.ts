import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { user } from 'src/app/model/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  constructor(private route: ActivatedRoute, private http: HttpService, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.http.getUser(Number(id)).subscribe(
        res => {
          this.user = res;
        });
    }
  }

  user: user = {} as user

  back() {
    this.router.navigate([`user`])
  }
  save(user: user) {
    this.http.saveUser(user).subscribe(
      res => {
        this.router.navigate([`user`])
      });
  }
}
