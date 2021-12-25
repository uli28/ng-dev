import { FoodItem } from './food.model';

// load data
export const foodLoadData: FoodItem[] = [
  { id: 1, name: 'Pad Thai', price: 5, calories: 500 },
  { id: 2, name: 'Butter Chicken', price: 5, calories: 500 },
  { id: 3, name: 'Cannelloni', price: 4, calories: 500 },
  { id: 4, name: 'Cordon Bleu', price: 2, calories: 500 },
];

export const foodQueryItem = {
  id: 2,
  name: 'Butter Chicken',
  price: 5,
  calories: 500,
};

// Add
export const foodAddItem = { name: 'Gulasch', price: 2, calories: 500 };
export const foodAddedItem = {
  id: 5,
  name: 'Gulasch',
  price: 2,
  calories: 500,
};

// Update
export const foodUpdateItem = {
  id: 5,
  name: 'Gulyas',
  price: 2,
  calories: 500,
};
export const foodUpdatedItem = {
  id: 5,
  name: 'Gulyas',
  price: 2,
  calories: 500,
};

// Delete
export const foodDeleteItem = {
  id: 4,
  name: 'Cordon Bleu',
  price: 2,
  calories: 500,
};

export const foodDeleteResult = [
  { id: 1, name: 'Pad Thai', price: 5, calories: 500 },
  { id: 2, name: 'Butter Chicken', price: 5, calories: 500 },
  { id: 3, name: 'Cannelloni', price: 4, calories: 500 },
];
