import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInjectionComponent } from './component-injection.component';
import { FoodItem } from '../service-http-injection/food.model';
import { of } from 'rxjs';

describe('ComponentInjectionComponent', () => {
  let component: ComponentInjectionComponent;
  let fixture: ComponentFixture<ComponentInjectionComponent>;

  let mockFS: any;

  const foodData: FoodItem[] = [
    { name: 'Pad Thai', rating: 5 },
    { name: 'Butter Chicken', rating: 5 },
    { name: 'Cannelloni', rating: 4 },
    { name: 'Cordon Bleu', rating: 2 },
  ];

  const serviceResult = [
    { name: 'Pad Thai', rating: 5 },
    { name: 'Butter Chicken', rating: 5 },
    { name: 'Cannelloni', rating: 4 },
  ];

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ ComponentInjectionComponent ]
  //   })
  //   .compileComponents();
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ComponentInjectionComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  beforeEach(() => {
    mockFS = jasmine.createSpyObj(['getItems', 'deleteItem']);
    mockFS.getItems.and.returnValue(of(foodData));
    mockFS.deleteItem.and.returnValue(of(serviceResult));
    component = new ComponentInjectionComponent(mockFS);
  });

  it('removes the item from the list', () => {
    component.food = foodData;

    component.deleteFood(foodData[2]);
    expect(component.food.length).toBe(3);
    expect(mockFS.deleteItem).toHaveBeenCalledWith(foodData[2]);
  });
});
