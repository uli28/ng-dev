import { FoodServiceStateful } from './food-stateful.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  foodAddedItem,
  foodAddItem,
  foodDeleteItem,
  foodLoadData,
  foodQueryItem,
} from '../foodService/food.mocks';
import { FoodItem } from './food.model';
import { environment } from 'src/environments/environment';
import { StatefulComponent } from './stateful/stateful.component';
import { skip } from 'rxjs';

describe('Stateful Service', () => {
  let fs: FoodServiceStateful;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatefulComponent],
      imports: [HttpClientTestingModule],
      providers: [FoodServiceStateful],
    });
    fs = TestBed.inject(FoodServiceStateful);
    controller = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should return the initial load data', () => {
    // notice: skip(1) is used because the first marble is the initialization value -> []
    fs.getAllFood()
      .pipe(skip(1))
      .subscribe((data) => {
        // several data tests
        expect(data).toBeTruthy();
        expect(data.length).toBe(4);
      });

    // test if a specific url has been called using GET
    const url = `${environment.api}food`;
    const req = controller.expectOne(url);
    expect(req.request.method).toEqual('GET');
    // flushing down mock data
    req.flush(foodLoadData);
  });

  it('should create food in an array', () => {
    fs.addFood(foodAddItem as FoodItem);

    // test if a specific url has been called using POST
    const url = `${environment.api}food`;
    const req = controller.expectOne(url);
    expect(req.request.method).toEqual('POST');
    // flushing down mock data
    req.flush(foodAddedItem);
  });

  it('should delete food in an array', () => {
    fs.deleteFood(foodDeleteItem as FoodItem);

    // test if a specific url has been called using POST
    const url = `${environment.api}food/${foodDeleteItem.id}`;
    const req = controller.expectOne(url);
    expect(req.request.method).toEqual('DELETE');
    // flushing down mock data
    req.flush(foodAddedItem);
  });
});
