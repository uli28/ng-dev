import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TestingModuleInlineComponent } from './testing-module-inline.component';
import { FoodItem } from '../../service-http-injection/food.model';

describe('TestingModuleInlineComponent', () => {
  let component: TestingModuleInlineComponent;
  let fixture: ComponentFixture<TestingModuleInlineComponent>;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestingModuleInlineComponent],
    });
    fixture = TestBed.createComponent(TestingModuleInlineComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 4 rows by default', () => {
    const divs = el.queryAll(By.css('.hoverclick'));
    expect(divs.length).toBe(4);
  });

  it('should render 3 rows after delete', () => {
    let del: FoodItem = { name: 'Cordon Bleu', rating: 2 };
    component.deleteFood(del);
    fixture.detectChanges();
    const divs = el.queryAll(By.css('.hoverclick'));
    expect(divs.length).toBe(3);
  });
});
