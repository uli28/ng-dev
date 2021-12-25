import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { MaterialModule } from '../../material.module';
import { FoodEditComponent } from '../food-edit/food-edit.component';
import { FoodListComponent } from '../food-list/food-list.component';
import { foodEmptyItem, foodLoadData } from '../food.mocks';
import { FoodService } from '../food.service';
import { FoodContainerComponent } from './food-container.component';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonHarness } from '@angular/material/button/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { FoodItem } from '../food.model';

describe('food-list-container', () => {
  let fs: any;
  let comp: FoodContainerComponent;
  let fixture: ComponentFixture<FoodContainerComponent>;
  let loader: HarnessLoader;
  let btnAdd: MatButtonHarness;

  beforeEach(async () => {
    fs = jasmine.createSpyObj([
      'getFood',
      'deleteFood',
      'addFood',
      'updateFood',
    ]);
    fs.getFood.and.returnValue(of(foodLoadData));

    TestBed.configureTestingModule({
      declarations: [FoodListComponent, FoodEditComponent],
      imports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MatButtonModule,
      ],
      providers: [{ provide: FoodService, useValue: fs }],
    });

    fixture = TestBed.createComponent(FoodContainerComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();

    loader = TestbedHarnessEnvironment.loader(fixture);
    btnAdd = await loader.getHarness(
      MatButtonHarness.with({ text: 'Add Food' })
    );
  });

  it('should render the food-list.component', () => {
    fs.getFood.and.returnValue(of(foodLoadData));
    fixture.detectChanges();
    const fl = fixture.debugElement.queryAll(By.directive(FoodListComponent));
    expect(fl).toBeDefined();
  });

  it('should render the food-edit.component', () => {
    fs.getFood.and.returnValue(of(foodLoadData));
    fixture.detectChanges();
    const fl = fixture.debugElement.queryAll(By.directive(FoodEditComponent));
    expect(fl).toBeDefined();
  });

  it('should add an empty food the add is clicked', async () => {
    await btnAdd.click();
    expect(comp.selected).toEqual(foodEmptyItem);
  });

  it('should delete the food item', () => {
    pending();
  });

  it('should save the food item', () => {
    pending();
  });
});
