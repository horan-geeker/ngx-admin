import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApiService {

  private apiUrlPrefix = 'http://api.ngx-admin.dev';
  private apiUrl = {
    login: this.apiUrlPrefix + '/login',
    logout: this.apiUrlPrefix + '/logout',
    userinfo: this.apiUrlPrefix + '/userinfo',
    hosts: this.apiUrlPrefix + '/hosts',
    saveHost: this.apiUrlPrefix + '/hosts',
  };

  constructor(private httpClient: HttpClient) {
  }

  get(url) {
    return this.httpClient.get(url, {withCredentials: true});
  }

  post(url, data = null) {
    return this.httpClient.post(url, data, {withCredentials: true});
  }

  login(user: any) {
    return this.post(this.apiUrl.login, user);
  }

  userInfo() {
    return this.get(this.apiUrl.userinfo);
  }

  logout() {
    return this.post(this.apiUrl.logout);
  }

  hosts() {
    return this.get(this.apiUrl.hosts);
  }

  saveHost(data: any) {
    return this.post(this.apiUrl.saveHost, data);
  }
}
