import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-debounced-search',
  templateUrl: './debounced-search.component.html',
  styleUrls: ['./debounced-search.component.scss'],
})
export class DebouncedSearchComponent implements OnInit {
  constructor() {}

  searchterm: FormControl = new FormControl('');

  ngOnInit() {
    this.searchterm.valueChanges.pipe(debounceTime(750)).subscribe((val) => {
      console.log('Currently your searching debounced for:', val);
    });
  }
}
