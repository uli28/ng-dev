import { SimpleClass } from './SimpleClass';

describe('SimpleClass.ts', () => {
  it('contains 12 charactes', () => {
    expect(SimpleClass.sayHelloWorld().length).toEqual(12);
  });

  it("says 'Hello World!", () => {
    expect(SimpleClass.sayHelloWorld()).toEqual('Hello World!');
  });
});
