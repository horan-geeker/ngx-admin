import {Component} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';

import {SmartTableService} from '../../../@core/data/smart-table.service';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartTableComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      hostname: {
        title: 'Host Name',
        type: 'string',
      },
      domain: {
        title: 'Domain',
        type: 'string',
      },
      ip: {
        title: 'Host IP',
        type: 'string',
      },
      country: {
        title: 'Country',
        type: 'string',
      },
      city: {
        title: 'City',
        type: 'string',
      },
      hack_method: {
        title: 'Hack Method',
        type: 'string',
      },
      level: {
        title: 'Level',
        type: 'string',
      },
      hacked_at: {
        title: 'Hacked at',
        type: 'string',
      },
    },
  };

  hosts = {};
  source: LocalDataSource = new LocalDataSource();

  constructor(private apiService: ApiService) {
    this.apiService.hosts().subscribe(response => {
      if (response['status'] === 0) {
        this.source.load(response['data']);
      }
    });
    // this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete this one?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event): void {
    console.log(event);
    this.apiService.saveHost(event.newData).subscribe(response => {
      if (response['status'] === 0) {
        event.confirm.resolve();
      } else {
        console.log(response);
        event.confirm.reject();
      }
    });
  }
}
