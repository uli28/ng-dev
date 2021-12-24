import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import {
  foodDeleteItem,
  foodDeleteResult,
  foodLoadData,
} from '../../foodService/food.mocks';
import { FoodService } from '../../foodService/food.service';
import { InjectionComponent } from './injection.component';

describe('InjectionComponent', () => {
  let component: InjectionComponent;
  let fixture: ComponentFixture<InjectionComponent>;
  let el: DebugElement;
  let mockFS: any;

  beforeEach(async () => {
    mockFS = jasmine.createSpyObj(['getAllFood', 'deleteFood']);
    mockFS.getAllFood.and.returnValue(of(foodLoadData));
    mockFS.deleteFood.and.returnValue(of(foodDeleteResult));

    await TestBed.configureTestingModule({
      declarations: [InjectionComponent],
      imports: [CommonModule, HttpClientTestingModule],
      providers: [{ provide: FoodService, useValue: mockFS }],
    }).compileComponents();
    fixture = TestBed.createComponent(InjectionComponent);
    fixture.detectChanges();
    el = fixture.debugElement;
    component = fixture.componentInstance;
  });

  it('should create', () => {
    mockFS.getAllFood.and.returnValue(of(foodLoadData));
    let comp = el.nativeElement.outerHTML;
    console.log(comp);
    expect(component).toBeTruthy();
  });

  it(
    'should render 4 rows by default',
    waitForAsync(() => {
      mockFS.getAllFood.and.returnValue(of(foodLoadData));
      component.ngOnInit();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const divs = el.queryAll(By.css('.hoverclick'));
        expect(divs.length).toBe(4);
      });
    })
  );

  it(
    'should render 3 rows after delete',
    waitForAsync(() => {
      component.deleteFood(foodDeleteItem);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const divs = el.queryAll(By.css('.hoverclick'));
        expect(divs.length).toBe(3);
      });
    })
  );
});
