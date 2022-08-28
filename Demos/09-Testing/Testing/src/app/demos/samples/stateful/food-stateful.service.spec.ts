import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { skip } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  foodAddedItem,
  foodAddItem,
  foodDeleteItem,
  foodLoadData,
} from '../foodService/food.mocks';
import { FoodItem } from '../foodService/food.model';
import { FoodServiceStateful } from './food-stateful.service';

describe('Stateful Service', () => {
  let fs: FoodServiceStateful;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FoodServiceStateful, HttpClientTestingModule],
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
    const req = controller.expectOne(`${environment.api}food`);
    expect(req.request.method).toEqual('GET');
    // flushing down mock data
    req.flush(foodLoadData);
  });

  it('should create food in an array', () => {
    fs.addFood(foodAddItem as FoodItem);
    // test if a specific url has been called using POST
    const req = controller.expectOne(`${environment.api}food`);
    expect(req.request.method).toEqual('POST');

    // flushing down mock data
    req.flush(foodAddedItem);

    //test the expectation using subscibe
    fs.getAllFood().subscribe((food) => {
      expect(food.length).toBe(1);
    });
  });

  it('should delete food in an array', () => {
    fs.getAllFood()
      .pipe(skip(1))
      .subscribe((data) => {
        // several data tests
        expect(data).toBeTruthy();
        expect(data.length).toBe(4);
      });

    // test if a specific url has been called using GET
    const req = controller.expectOne(`${environment.api}food`);
    expect(req.request.method).toEqual('GET');
    // flushing down mock data
    req.flush(foodLoadData);

    fs.deleteFood(foodDeleteItem);

    const reqDelete = controller.expectOne(
      `${environment.api}food/${foodDeleteItem.id}`
    );
    expect(reqDelete.request.method).toEqual('DELETE');
    // flushing down mock data
    reqDelete.flush(foodLoadData);
  });
});
