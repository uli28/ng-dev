import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  constructor() {}

  private loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  getLoading() {
    return this.loading.asObservable();
  }

  setLoading() {
    this.loading.next(true);
  }

  clearLoading() {
    this.loading.next(false);
  }
}
