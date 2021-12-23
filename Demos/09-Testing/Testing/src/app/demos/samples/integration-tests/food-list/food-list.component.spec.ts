import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { FoodService } from '../../foodService/food.service';
import { RatingPipe } from '../../pipe/rating.pipe';
import { FoodRowComponent } from '../food-row/food-row.component';
import { FoodListComponent } from './food-list.component';
import { deleteServiceResult, foodData } from './food-list.mock.data';

describe('Integration Test:', () => {
  let mockFS: any;
  let comp: FoodListComponent;
  let fixture: ComponentFixture<FoodListComponent>;

  beforeEach(async () => {
    mockFS = jasmine.createSpyObj(['getItems', 'deleteItem']);

    const module = {
      declarations: [FoodListComponent, FoodRowComponent, RatingPipe],
      providers: [{ provide: FoodService, useValue: mockFS }],
      schemas: [NO_ERRORS_SCHEMA],
    };

    TestBed.configureTestingModule(module);
    fixture = TestBed.createComponent(FoodListComponent);
    comp = fixture.componentInstance;

    mockFS.getItems.and.returnValue(of(foodData));
    mockFS.deleteItem.and.returnValue(of(deleteServiceResult));
    fixture.detectChanges();
  });

  it('should render each FoodItem as FoodItemRow', () => {
    const rows = fixture.debugElement.queryAll(By.directive(FoodRowComponent));
    expect(rows.length).toEqual(4);
    expect(rows[0].componentInstance.food.name).toEqual('Pad Thai');
  });

  it('should delete a row', () => {
    comp.deleteFood({ name: 'Cordon Bleu', rating: 2 });
    fixture.detectChanges();
    const rows = fixture.debugElement.queryAll(By.directive(FoodRowComponent));
    expect(rows.length).toEqual(3);
  });
});
