import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Introe2eComponent } from './introe2e.component';

describe('Introe2eComponent', () => {
  let component: Introe2eComponent;
  let fixture: ComponentFixture<Introe2eComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Introe2eComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Introe2eComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
