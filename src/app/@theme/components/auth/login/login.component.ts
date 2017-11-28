import {Component, OnInit} from '@angular/core';
import {NbLoginComponent} from '@nebular/auth';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../../../../services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  showMessages: any;
  errors: string[];
  messages: string[];
  public user = {};

  constructor(private apiService: ApiService, private router: Router) {
  }

  ngOnInit() {

  }

  login() {
    this.apiService.login(this.user).subscribe(response => {
      if (response['status'] === 0) {
        this.user = response['data'];
        this.router.navigate(['/']);
      } else {
        this.showMessages = response['message'];
      }
    });
  }
}
