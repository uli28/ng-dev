import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DemoItem } from './demo-item.model';

@Injectable({ providedIn: 'root' })
export class DemoService {
  httpClient = inject(HttpClient)

  getDemos(): Observable<DemoItem[]> {
    return this.httpClient.get<DemoItem[]>(`${environment.api}demos`);
  }

  addDemo(item: DemoItem): Observable<DemoItem> {
    return this.httpClient.post<DemoItem>(`${environment.api}demos`, item);
  }

  updateDemo(item: DemoItem): Observable<DemoItem> {
    return this.httpClient.put<DemoItem>(
      `${environment.api}demos/${item.id}`, item
    );
  }

  deleteDemo(id: number): Observable<any> {
    return this.httpClient.delete(`${environment.api}demos/${id}`);
  }
}
