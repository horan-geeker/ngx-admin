import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SmartTableService {

  data: any;

  constructor(httpClient: HttpClient) {
    httpClient.get('/api/hosts').subscribe((data) => this.data = data);
  }

  getData() {
    return this.data;
  }
}
