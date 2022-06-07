import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveTypedComponent } from './reactive-typed.component';

describe('ReactiveTypedComponent', () => {
  let component: ReactiveTypedComponent;
  let fixture: ComponentFixture<ReactiveTypedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveTypedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveTypedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
