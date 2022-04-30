import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Person } from './person';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private httpClient: HttpClient) {}

  getPersons(): Observable<Person[]> {
    return this.httpClient
      .get<Person[]>(environment.personUrl)
      .pipe(delay(2000));
  }
}
