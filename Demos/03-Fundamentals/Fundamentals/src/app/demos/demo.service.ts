import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DemoItem } from './demo-item';

@Injectable()
export class DemoService {
  constructor(private httpClient: HttpClient) {}

  getItems() {
    return this.httpClient.get<DemoItem[]>('/assets/demos.json');
  }
}
