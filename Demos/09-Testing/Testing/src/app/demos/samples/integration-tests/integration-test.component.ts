import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../foodService/food.model';

@Component({
  selector: 'app-integration-test',
  templateUrl: './integration-test.component.html',
  styleUrls: ['./integration-test.component.scss'],
})
export class IntegrationTestComponent implements OnInit {
  f: FoodItem = { name: 'Cordon Bleu', rating: 4 } as FoodItem;

  ngOnInit() {}
}
