import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MaterialModule } from '../../material.module';
import { FoodItem } from '../food.model';
import { FoodListComponent } from './food-list.component';
import { foodLoadData } from '../food.mocks';

describe('FoodListComponent', () => {
  let fixture: ComponentFixture<FoodListComponent>;
  let comp: FoodListComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodListComponent],
      imports: [MaterialModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodListComponent);
    comp = fixture.componentInstance;
    comp.food = foodLoadData;
    fixture.detectChanges();
  });

  it('should create to component', () => {
    expect(comp).toBeTruthy();
  });
});
