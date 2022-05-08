import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { By } from '@angular/platform-browser';
import { foodAddItem, foodDeleteItem } from '../../foodService/food.mocks';
import { FoodItem } from '../../foodService/food.model';
import { TestingModuleComponent } from './testing-module.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('TestingModuleComponent', () => {
  let component: TestingModuleComponent;
  let fixture: ComponentFixture<TestingModuleComponent>;
  let el: DebugElement;

  // Notice the use of 'async' which is an Angular Testing tool
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestingModuleComponent],
      imports: [
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        NoopAnimationsModule,
      ],
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
