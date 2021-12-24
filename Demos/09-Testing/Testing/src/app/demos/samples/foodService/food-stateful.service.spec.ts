import { FoodServiceStateful } from './food-stateful.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { foodAddItem } from './food.mocks';
import { FoodItem } from './food.model';

describe('FoodService', () => {
  let service: FoodServiceStateful;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FoodServiceStateful],
    });

    service = TestBed.inject(FoodServiceStateful);
  });

  it('should create food in an array', (done) => {
    const item = foodAddItem as FoodItem;
    service.addItem(item);
    service.getItems().subscribe((data) => {
      expect(data.length).toEqual(1);
      done();
    });
  });

  it('should return the correct amount of items', (done) => {
    const g = foodAddItem as FoodItem;
    service.addItem(g);
    const f = { name: 'Panierter Kabeljau', rating: 3 } as FoodItem;
    service.addItem(f);
    service.getItems().subscribe((data) => {
      expect(data.length).toEqual(2);
      done();
    });
  });

  it('should have the correct nbr of items after delete', (done) => {
    const g = foodAddItem as FoodItem;
    service.addItem(g);
    const f = { name: 'Panierter Kabeljau', rating: 3 } as FoodItem;
    service.addItem(f);
    service.deleteItem(g);

    service.getItems().subscribe((data) => {
      expect(data.length).toEqual(1);
      done();
    });

    service.getItems().subscribe((data) => {
      expect(data).toEqual([
        { name: 'Panierter Kabeljau', rating: 3 } as FoodItem,
      ]);
      done();
    });
  });
});
