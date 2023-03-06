import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-binding',
  templateUrl: './attr-binding.component.html',
  styleUrls: ['./attr-binding.component.scss'],
})
export class AttrBindingComponent implements OnInit {
  isDisabled = true;
  isHidden = false;

  constructor() {}

  ngOnInit(): void {}

  toggleInput() {
    this.isDisabled = !this.isDisabled;
  }

  hideInput() {
    this.isHidden = !this.isHidden;
  }
}
