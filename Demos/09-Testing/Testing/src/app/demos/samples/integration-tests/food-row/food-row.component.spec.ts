import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MaterialModule } from '../../../../material.module';
import { FoodItem } from '../../foodService/food.model';
import { RatingPipe } from '../../pipe/rating.pipe';
import { FoodRowComponent } from './food-row.component';

describe('Food Row Integration Test', () => {
  let fixture: ComponentFixture<FoodRowComponent>;
  let comp: FoodRowComponent;
  let food = {
    name: 'Pad Thai',
    rating: 5,
  } as FoodItem;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodRowComponent, RatingPipe],
      imports: [MaterialModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodRowComponent);
    comp = fixture.componentInstance;
    comp.food = food;
    fixture.detectChanges();
  });

  it('should create to component', () => {
    expect(comp).toBeTruthy();
  });

  it('should have the correct food item', () => {
    expect(fixture.componentInstance.food.name).toEqual('Pad Thai');
  });

  it('should render the correct text when input is changed', () => {
    comp.food = {
      name: 'Pad Krapao',
      rating: 1,
    } as FoodItem;
    fixture.detectChanges();
    expect(fixture.componentInstance.food.name).toEqual('Pad Krapao');
  });

  it('should render the food name', () => {
    expect(
      fixture.nativeElement.querySelector('#itemName').textContent
    ).toContain('Pad Thai');

    expect(
      fixture.debugElement.query(By.css('#itemName')).nativeElement.textContent
    ).toContain('Pad Thai');
  });

  it('should trigger delete when clicked', () => {
    const deleteSpy = spyOn(comp.onDelete, 'emit');
    fixture.nativeElement.querySelector('#divDelete').click();
    expect(deleteSpy).toHaveBeenCalled();
  });
});
