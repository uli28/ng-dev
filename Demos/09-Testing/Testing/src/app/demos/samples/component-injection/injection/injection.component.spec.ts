import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { foodDeleteResult, foodLoadData } from '../../foodService/food.mocks';
import { FoodService } from '../../service-http-injection/food.service';
import { InjectionComponent } from './injection.component';
import { By } from '@angular/platform-browser';
import { foodDeleteItem } from '../../foodService/food.mocks';

describe('InjectionComponent', () => {
  let component: InjectionComponent;
  let fixture: ComponentFixture<InjectionComponent>;
  let el: DebugElement;
  let mockFS: any;

  beforeEach(async () => {
    mockFS = jasmine.createSpyObj(['getItems', 'deleteItem']);
    mockFS.getItems.and.returnValue(of(foodLoadData));
    mockFS.deleteItem.and.returnValue(of(foodDeleteResult));

    await TestBed.configureTestingModule({
      declarations: [InjectionComponent],
      imports: [CommonModule, HttpClientTestingModule],
      providers: [{ provide: FoodService, useValue: mockFS }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(InjectionComponent);
    fixture.detectChanges();
    el = fixture.debugElement;
    component = fixture.componentInstance;
  });

  it('should create', () => {
    let comp = el.nativeElement.outerHTML;
    console.log(comp);
    expect(component).toBeTruthy();
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
});
