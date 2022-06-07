export class Person {
  age: number = 0;
  name: string = '';
  wealth?: string;
  // state?: WorkLifeBalance;
  state?: 'HappySheep' | 'Unsatisfied' | 'ReadyForRevolution';
  lastname?: string;
  gender: string;
  married?: boolean;
  imgUrl?: string;
  email?: string;
  address?: Address;
}

export class Address {
  street: string = '';
  city: string = '';
  postalCode: string = '';
}

export const wealthOptValues = ['poor', 'rich', 'middle_class'];
