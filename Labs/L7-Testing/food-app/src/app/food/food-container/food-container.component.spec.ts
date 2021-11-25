import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { MaterialModule } from '../../material.module';
import { FoodEditComponent } from '../food-edit/food-edit.component';
import { FoodListComponent } from '../food-list/food-list.component';
import { FoodService } from '../food.service';
import { FoodContainerComponent } from './food-container.component';

describe('food-list-container', () => {
  let mockFS;
  const foodData = [
    { id: 1, name: 'Butter Chicken', price: 9, calories: 1200 },
    { id: 2, name: 'Curry Wurst', price: 2.7, calories: 730 },
    { id: 3, name: 'Blini with Salmon', price: 8.3, calories: 600 },
  ];
  const serviceResult = [
    { name: 'Pad Thai', rating: 5 },
    { name: 'Butter Chicken', rating: 5 },
  ];
  let component: FoodContainerComponent;
  let fixture: ComponentFixture<FoodContainerComponent>;

  beforeEach(() => {
    mockFS = jasmine.createSpyObj([
      'getFood',
      'deleteFood',
      'addFood',
      'updateFood',
    ]);

    const module = {
      declarations: [FoodListComponent, FoodEditComponent],
      import: [MaterialModule, FormsModule, ReactiveFormsModule, CommonModule],
      providers: [{ provide: FoodService, useValue: mockFS }],
    };

    TestBed.configureTestingModule(module);
    fixture = TestBed.createComponent(FoodContainerComponent);
    component = fixture.componentInstance;
  });

  it('should render the food-list.component', () => {
    mockFS.getFood.and.returnValue(of(foodData));
    fixture.detectChanges();

    const fl = fixture.debugElement.queryAll(By.directive(FoodListComponent));
    expect(fl).toBeDefined();
  });

  it('should render the food-edit.component', () => {
    mockFS.getFood.and.returnValue(of(foodData));
    fixture.detectChanges();

    const fl = fixture.debugElement.queryAll(By.directive(FoodEditComponent));
    expect(fl).toBeDefined();
  });
});
