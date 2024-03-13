import { Component, EventEmitter, Input, Output, SimpleChanges, inject } from '@angular/core';
import { FoodItem } from '../food.model';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-food-edit',
  standalone: true,
  imports: [ReactiveFormsModule, MatCardModule, MatFormField, MatButtonModule, MatInputModule],
  templateUrl: './food-edit.component.html',
  styleUrl: './food-edit.component.scss'
})
export class FoodEditComponent {
  @Input({ required: true }) food: FoodItem = new FoodItem();
  @Output() onFoodSave: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();
  formsBuilder = inject(FormBuilder)
  foodForm = this.formsBuilder.group({
    id: [this.food.id],
    name: [this.food.name,
    {
      required: true,
      validators: [Validators.required, Validators.minLength(3)]
    }
    ],
    price: [this.food.price, { validators: [Validators.required, this.validatePrice] }],
    calories: [this.food.calories]
  });

  ngOnChanges(changes: SimpleChanges): void {
    this.foodForm.patchValue(changes["food"].currentValue);
    console.log("receiving data on input:", changes["food"]);
  }

  saveFood(foodForm: any) {
    if (this.food) {
      this.onFoodSave.emit(foodForm.value as FoodItem);
    }
  }

  validatePrice(control: FormControl): { [s: string]: boolean } | null {
    if (control.value < 0) {
      return { priceError: true };
    }
    return null;
  }
}