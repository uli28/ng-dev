import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from 'src/app/shared/markdown-renderer/markdown-renderer.component';
import { FoodItem } from '../food.model';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodRowComponent } from './food-row/food-row.component';

@Component({
  selector: 'app-component-nested',
  standalone: true,
  imports: [
    MarkdownRendererComponent,
    MatCardModule,
    FoodRowComponent,
    FoodListComponent,
  ],
  templateUrl: './component-nested.component.html',
  styleUrl: './component-nested.component.scss'
})
export class ComponentNestedComponent {
  food: FoodItem = { id: 99, name: 'Cordon Blue', rating: 4 };
}
