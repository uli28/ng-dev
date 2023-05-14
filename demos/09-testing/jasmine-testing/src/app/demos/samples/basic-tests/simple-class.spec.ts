import { SimpleClass } from './simple-class';

describe('Class - Hello world Test', () => {
  it('contains 12 charactes', () => {
    debugger;
    expect(SimpleClass.sayHelloWorld().length).toEqual(12)
  });

  it('says Hello World!', () =>
    expect(SimpleClass.sayHelloWorld()).toEqual('Hello World!'));
});







DirectiveComponent,
  SimpleServiceComponent,
  TestPipeComponent,
  RatingPipe,
  PhonenumberPipe,
  FoodRowComponent,
  FoodListComponent,
  MaterialComponent,
  ComponentClassComponent,
  ComponentInjectionComponent,
  UseSpyComponent,
  UseMockComponent,
  CypressComponent
