import { provideHttpClient } from '@angular/common/http';
import { DebugElement, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule } from 'ngx-markdown';
import { of } from 'rxjs';
import { FoodRowComponent } from '../food-row/food-row.component';
import { FoodServiceStateful } from '../food-stateful.service';
import { FoodListComponent } from './food-list.component';

const foodData = of([
  { name: 'Pad Thai', rating: 5 },
  { name: 'Butter Chicken', rating: 5 },
  { name: 'Cannelloni', rating: 4 },
  { name: 'Cordon Blue', rating: 2 },
]);

const serviceResult = of([
  { name: 'Pad Thai', rating: 5 },
  { name: 'Butter Chicken', rating: 5 },
  { name: 'Cannelloni', rating: 4 },
]);

const deleteItem = { id: 4, name: 'Cordon Blue', rating: 2 };

describe('Component - Integration Test', () => {
  let fixture: ComponentFixture<FoodListComponent>;
  let comp: FoodListComponent;
  let service: any;

  beforeEach(() => {
    service = jasmine.createSpyObj('HttpClient', ['getFood', 'deleteFood']);
    service.getFood.and.returnValue(foodData);
    service.deleteFood.and.returnValue(of(serviceResult));

    fixture = TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        { provide: FoodServiceStateful, useValue: service }
      ],
    }).createComponent(FoodListComponent);

    fixture = TestBed.createComponent(FoodListComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render each FoodItem as FoodItemRow', () => {
    comp.ngOnInit();
    fixture.detectChanges();
    const rows = fixture.debugElement.queryAll(By.directive(FoodRowComponent));
    expect(rows.length).toEqual(4);
    expect(rows[0].componentInstance.food.name).toEqual('Pad Thai');
  });
});
