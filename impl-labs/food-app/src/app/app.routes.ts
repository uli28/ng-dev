import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodContainerComponent } from './food/food-container/food-container.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "food", component: FoodContainerComponent },
    { path: "about", component: AboutComponent }
];