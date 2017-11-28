import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NbLogoutComponent} from '@nebular/auth';
import {ApiService} from '../../../../services/api.service';

@Component({
  selector: 'ngx-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router) {
  }

  ngOnInit() {
    this.apiService.logout().subscribe(response => {
      if (response['status'] === 0) {
        console.log('logout success');
      }
      console.log(response);
    });
    this.router.navigate(['/auth/login']);
  }

}
