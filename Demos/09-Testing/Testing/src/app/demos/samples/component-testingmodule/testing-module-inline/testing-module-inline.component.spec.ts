import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { foodDeleteItem } from '../../foodService/food.mocks';
import { TestingModuleInlineComponent } from './testing-module-inline.component';

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
    component.deleteFood(foodDeleteItem);
    fixture.detectChanges();
    const divs = el.queryAll(By.css('.hoverclick'));
    expect(divs.length).toBe(3);
  });
});
