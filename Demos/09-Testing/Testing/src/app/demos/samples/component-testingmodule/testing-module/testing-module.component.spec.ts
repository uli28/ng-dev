import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { foodAddItem, foodDeleteItem } from '../../foodService/food.mocks';
import { FoodItem } from '../../foodService/food.model';
import { TestingModuleComponent } from './testing-module.component';

describe('TestingModuleComponent', () => {
  let component: TestingModuleComponent;
  let fixture: ComponentFixture<TestingModuleComponent>;
  let el: DebugElement;

  //notice async which is an Angular Testing tool
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestingModuleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestingModuleComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  // Notice: Assignment here would also be possible
  // beforeEach(() => {
  //   fixture = TestBed.createComponent(TestingModuleComponent);
  //   component = fixture.componentInstance;
  //   el = fixture.debugElement;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
    console.log(component);
    let html = fixture.nativeElement.OuterHtml;
    console.log(html);
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

  it('should render 5 rows after add', () => {
    let add = foodAddItem as FoodItem;
    component.addFood(add);
    fixture.detectChanges();
    const divs = el.queryAll(By.css('.hoverclick'));
    expect(divs.length).toBe(5);
  });
});
