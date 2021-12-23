// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ComponentInjectionComponent } from './component-injection.component';
// import { FoodItem } from '../service-http-injection/food.model';
// import { of } from 'rxjs';
// import { FoodService } from '../service-http-injection/food.service';
// import { HttpClientTestingModule } from '@angular/common/http/testing';

// describe('ComponentInjectionComponent', () => {
//   let component: ComponentInjectionComponent;
//   let fixture: ComponentFixture<ComponentInjectionComponent>;

//   let mockFS: any;

//   const foodData: FoodItem[] = [
//     { name: 'Pad Thai', rating: 5 },
//     { name: 'Butter Chicken', rating: 5 },
//     { name: 'Cannelloni', rating: 4 },
//     { name: 'Cordon Bleu', rating: 2 },
//   ];

//   const serviceResult = [
//     { name: 'Pad Thai', rating: 5 },
//     { name: 'Butter Chicken', rating: 5 },
//     { name: 'Cannelloni', rating: 4 },
//   ];

//   const deleteItem = { name: 'Cordon Bleu', rating: 2 };

//   beforeEach(() => {
//     mockFS = jasmine.createSpyObj(['getItems', 'deleteItem']);
//     mockFS.getItems.and.returnValue(of(foodData));
//     mockFS.deleteItem.and.returnValue(of(serviceResult));

//     TestBed.configureTestingModule({
//       declarations: [ComponentInjectionComponent],
//       imports: [HttpClientTestingModule],
//       providers: [{ provide: FoodService, useValue: mockFS }],
//     });
//     fixture = TestBed.createComponent(ComponentInjectionComponent);
//     component = fixture.componentInstance;
//   });

//   it('should create the component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should render 4 rows by default', () => {
//     fixture.detectChanges();
//     let divs: HTMLElement[] = fixture.nativeElement.querySelector('div');
//     expect(divs.length).toBe(4);
//   });

//   it('removes the item from the list', () => {
//     // component.food = foodData;
//     // component.deleteFood(deleteItem);
//     // expect(component.food.length).toBe(3);
//     // expect(mockFS.deleteItem).toHaveBeenCalledWith({
//     //   name: 'Cordon Bleu',
//     //   rating: 2,
//     // });
//   });
// });
