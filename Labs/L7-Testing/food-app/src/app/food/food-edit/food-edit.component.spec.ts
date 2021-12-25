import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MaterialModule } from '../../material.module';
import { FoodItem } from '../food.model';
import { foodLoadData, foodSingleItem } from '../food.mocks';
import { FoodEditComponent } from './food-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FoodListComponent', () => {
  let fixture: ComponentFixture<FoodEditComponent>;
  let comp: FoodEditComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodEditComponent],
      imports: [MaterialModule, ReactiveFormsModule, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodEditComponent);
    comp = fixture.componentInstance;
    comp.food = foodSingleItem;
    fixture.detectChanges();
  });

  it('should create to component', () => {
    expect(comp).toBeTruthy();
  });
});
