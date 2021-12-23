import { FoodItem } from '../service-http-injection/food.model';

// load data
export const foodLoadData: FoodItem[] = [
  { name: 'Pad Thai', rating: 5 },
  { name: 'Butter Chicken', rating: 5 },
  { name: 'Cannelloni', rating: 4 },
  { name: 'Cordon Bleu', rating: 2 },
];

// Add
export const foodAddItem = { name: 'Gulasch', rating: 2 };

// Delete
export const foodDeleteItem = { name: 'Cordon Bleu', rating: 2 };

export const foodDeleteResult = [
  { name: 'Pad Thai', rating: 5 },
  { name: 'Butter Chicken', rating: 5 },
  { name: 'Cannelloni', rating: 4 },
];
