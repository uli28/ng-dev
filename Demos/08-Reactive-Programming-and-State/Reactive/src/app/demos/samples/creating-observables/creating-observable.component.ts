import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { from, Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Skill } from '../../../skills/skill.model';

@Component({
  selector: 'app-simple-observable',
  templateUrl: './creating-observable.component.html',
  styleUrls: ['./creating-observable.component.scss'],
})
export class CreatingObservableComponent implements OnInit {
  constructor() {}

  onErr = (err: any) => console.log(err);
  onComplete = () => console.log('complete');

  ngOnInit() {}

  subscribingObservables() {
    let arr = [2, 5, 9, 12, 22];
    let obsArr: Observable<number[]> = of(arr);
    obsArr.subscribe(
      (data: number[]) => console.log('subscribe: ', data),
      this.onErr,
      this.onComplete
    );

    // new subscribe pattern - above pattern deprecated
    // in future release will take only one argument:
    // next handler or observer obj

    const observer = {
      next:
        () =>
        (
          data: number // onNext
        ) =>
          console.log('current number: ', data),
      error: this.onErr,
      complete: this.onComplete,
    };
    of([2, 5, 9, 12, 22]).subscribe(observer);

    // same writte as inline style
    of([2, 5, 9, 12, 22]).subscribe({
      next:
        () =>
        (
          data: number // onNext
        ) =>
          console.log('current number: ', data),
      error: this.onErr,
      complete: this.onComplete,
    });

    let skill: Skill = {
      id: 1,
      name: 'Custom Theme',
      hours: 4,
      completed: true,
    };

    let obsSkill = of(skill);

    obsSkill.subscribe((s) => console.log(s));
  }

  useObsFrom() {
    let arr = [2, 5, 9, 12, 22];
    from(arr).subscribe(
      (data: number) => console.log('from(): ', data),
      this.onErr,
      this.onComplete
    );
  }

  useOf() {
    of([2, 5, 9, 12, 22]).subscribe((data) => console.log('of(): ', data));
  }

  useOfwithSpread() {
    of(...[2, 5, 9, 12, 22]).subscribe((data) => console.log(data));
  }

  // Wraps an Object that uses Callbacks
  // navigator.geolocation.getCurrentPosition(success[, error[, [options]])
  getGeolocation$(): Observable<any> {
    return new Observable((observer) => {
      //original function
      navigator.geolocation.getCurrentPosition(
        (pos: any) => {
          //emite an element in the callback of the callback based function
          observer.next(pos);
          observer.complete();
        },
        (err: any) => {
          observer.error(err);
        }
      );
    });
  }

  // Use the wrapped Callback as observable stream
  wrappingCallbacks() {
    this.getGeolocation$().subscribe((loc) => {
      console.log('current Geolocation:', loc);
    });
  }

  // Use the mock Promise
  usePromiseToObs() {
    const url = 'http://localhost:3000/skills';

    //classic promise pattern
    axios.get(url).then((data) => console.log('received data', data));

    // from casts a promise to an observable so that it can be subscribe
    from(axios(url)).subscribe(
      (data) => console.log('data from axios', data),
      (err) => console.log('err:', err),
      () => console.log('complete')
    );
  }

  useOperator() {
    from([2, 5, 9, 12, 22]) // 5 marbles
      .pipe(
        filter((n) => n > 6),
        map((n) => n * 2)
      )
      .subscribe((data: number) => console.log('useOperator: ', data));
  }
}
