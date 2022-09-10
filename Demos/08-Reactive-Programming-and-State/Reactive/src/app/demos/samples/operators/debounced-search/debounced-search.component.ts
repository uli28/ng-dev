import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-debounced-search',
  templateUrl: './debounced-search.component.html',
  styleUrls: ['./debounced-search.component.scss'],
})
export class DebouncedSearchComponent implements OnInit {
  constructor() {}

  subsSearchterms: Subscription;

  searchterm = new FormControl<string | null>('');

  ngOnInit() {
    this.subsSearchterms = this.searchterm.valueChanges
      .pipe(debounceTime(750))
      .subscribe((val) => {
        console.log('Currently your searching debounced for:', val);
      });
  }

  ngOnDestroy() {
    this.subsSearchterms.unsubscribe();
  }
}
