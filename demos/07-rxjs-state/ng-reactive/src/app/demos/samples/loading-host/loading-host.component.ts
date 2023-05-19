import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-loading-host',
  templateUrl: './loading-host.component.html',
  styleUrls: ['./loading-host.component.scss'],
})
export class LoadingHostComponent implements OnInit {
  constructor(private client: HttpClient) { }

  ngOnInit(): void { }

  doLoad() {
    this.client.get(`${environment.api}vouchers`).subscribe((data) => console.log(data));
  }
}
