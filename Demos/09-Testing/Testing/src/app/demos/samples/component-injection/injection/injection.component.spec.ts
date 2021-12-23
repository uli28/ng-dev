import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FoodItem } from '../../service-http-injection/food.model';
import { FoodService } from '../../service-http-injection/food.service';
import { InjectionComponent } from './injection.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('InjectionComponent', () => {
  let component: InjectionComponent;
  let fixture: ComponentFixture<InjectionComponent>;
  let el: DebugElement;

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

  const deleteItem = { name: 'Cordon Bleu', rating: 2 };

  beforeEach(async () => {
    mockFS = jasmine.createSpyObj(['getItems', 'deleteItem']);
    mockFS.getItems.and.returnValue(of(foodData));
    mockFS.deleteItem.and.returnValue(of(serviceResult));

    await TestBed.configureTestingModule({
      declarations: [InjectionComponent],
      imports: [HttpClientTestingModule],
      providers: [{ provide: FoodService, useValue: mockFS }],
    }).compileComponents();

    fixture = TestBed.createComponent(InjectionComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    // expect(component.food).toBe(foodData);
  });

  // it('should render 4 rows by default', () => {
  //   const divs = el.queryAll(By.css('.hoverclick'));
  //   expect(divs.length).toBe(4);
  // });

  // it('should render 3 rows after delete', () => {
  //   let del: FoodItem = { name: 'Cordon Bleu', rating: 2 };
  //   component.deleteFood(del);
  //   fixture.detectChanges();
  //   const divs = el.queryAll(By.css('.hoverclick'));
  //   expect(divs.length).toBe(3);
  // });
});
