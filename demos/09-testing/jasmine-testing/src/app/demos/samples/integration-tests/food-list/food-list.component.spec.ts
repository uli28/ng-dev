import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { MaterialModule } from '../../../../material.module';
import { foodDeleteItem, foodLoadData } from '../../foodService/food.mocks';
import { FoodService } from '../../foodService/food.service';
import { RatingPipe } from '../../pipe/rating.pipe';
import { FoodRowComponent } from '../food-row/food-row.component';
import { FoodListComponent } from './food-list.component';

describe('Integration Test: FoodList', () => {
  let fs: any;
  let comp: FoodListComponent;
  let fixture: ComponentFixture<FoodListComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    fs = jasmine.createSpyObj(['getAllFood', 'deleteFood']);
    fs.getAllFood.and.returnValue(of(foodLoadData));

    await TestBed.configureTestingModule({
      declarations: [FoodListComponent, FoodRowComponent, RatingPipe],
      imports: [MaterialModule, RouterTestingModule, HttpClientTestingModule],
      providers: [{ provide: FoodService, useValue: fs }],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodListComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should behave...', () => {
    expect(comp).toBeTruthy();
  });

  it('should render each FoodItem as FoodItemRow', () => {
    const rows = fixture.debugElement.queryAll(By.directive(FoodRowComponent));
    expect(rows.length).toEqual(4);
    expect(rows[0].componentInstance.food.name).toEqual('Pad Thai');
  });

  it('should delete a row and have the correct count', () => {
    fs.deleteFood.and.returnValue(of({}));
    comp.deleteFood(foodDeleteItem);
    fixture.detectChanges();

    //print out the component html
    console.log(de.nativeElement.outerHTML);

    const rows = de.queryAll(By.directive(FoodRowComponent));
    expect(rows.length).toEqual(3);
  });
});
