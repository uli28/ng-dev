import { FoodItem } from './food.model';

// load data
export const foodLoadData: FoodItem[] = [
  { id: 1, name: 'Pad Thai', rating: 5 },
  { id: 2, name: 'Butter Chicken', rating: 5 },
  { id: 3, name: 'Cannelloni', rating: 4 },
  { id: 4, name: 'Cordon Bleu', rating: 2 },
];

export const foodQueryItem = { id: 2, name: 'Butter Chicken', rating: 5 };

// Add
export const foodAddItem = { name: 'Gulasch', rating: 2 };
export const foodAddedItem = { id: 5, name: 'Gulasch', rating: 2 };

// Delete
export const foodDeleteItem = { id: 4, name: 'Cordon Bleu', rating: 2 };

export const foodDeleteResult = [
  { id: 1, name: 'Pad Thai', rating: 5 },
  { id: 2, name: 'Butter Chicken', rating: 5 },
  { id: 3, name: 'Cannelloni', rating: 4 },
];
