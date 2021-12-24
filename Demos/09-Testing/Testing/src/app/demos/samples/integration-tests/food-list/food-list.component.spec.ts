import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { FoodServiceStateful } from '../../foodService/food-stateful.service';
import { RatingPipe } from '../../pipe/rating.pipe';
import { FoodRowComponent } from '../food-row/food-row.component';
import { FoodListComponent } from './food-list.component';
import { foodLoadData, foodDeleteResult } from '../../foodService/food.mocks';

describe('Integration Test:', () => {
  let mockFS: any;
  let comp: FoodListComponent;
  let fixture: ComponentFixture<FoodListComponent>;

  beforeEach(async () => {
    mockFS = jasmine.createSpyObj(['getItems', 'deleteItem']);
    mockFS.getItems.and.returnValue(of(foodLoadData));
    mockFS.deleteItem.and.returnValue(of(foodDeleteResult));

    await TestBed.configureTestingModule({
      declarations: [FoodListComponent, FoodRowComponent, RatingPipe],
      providers: [{ provide: FoodServiceStateful, useValue: mockFS }],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(FoodListComponent);
    fixture.detectChanges();
    comp = fixture.componentInstance;
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
    expect(comp.food).toBe(foodLoadData);
  });

  it('should render each FoodItem as FoodItemRow', () => {
    const rows = fixture.debugElement.queryAll(By.directive(FoodRowComponent));
    expect(rows.length).toEqual(4);
    expect(rows[0].componentInstance.food.name).toEqual('Pad Thai');
  });

  it('should delete a row', () => {
    // comp.deleteFood({ name: 'Cordon Bleu', rating: 2 });
    // fixture.detectChanges();
    // const rows = fixture.debugElement.queryAll(By.directive(FoodRowComponent));
    // expect(rows.length).toEqual(3);
  });
});
