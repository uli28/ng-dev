import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { FoodListComponent } from '../food-list/food-list.component';
import { FoodService } from '../food.service';

describe('Integration Test:', () => {
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
  let fixture: ComponentFixture<FoodListComponent>;

  beforeEach(() => {
    mockFS = jasmine.createSpyObj(['getFood', 'deleteFood']);

    const module = {
      declarations: [FoodListComponent],
      providers: [{ provide: FoodService, useValue: mockFS }],
      schemas: [NO_ERRORS_SCHEMA],
    };

    TestBed.configureTestingModule(module);
    fixture = TestBed.createComponent(FoodListComponent);
  });

  it('should render each FoodItem as FoodItemRow', () => {
    mockFS.getItems.and.returnValue(of(foodData));
    mockFS.deleteItem.and.returnValue(of(serviceResult));
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.directive(FoodListComponent));
    expect(rows.length).toEqual(1);
    // expect(rows[0].componentInstance.food.name).toEqual('Pad Thai');
  });
});
