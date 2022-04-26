# Food App - Routing

- Implement Routing for the navbar elements.
    - Add a `home.component.ts` using the [Angular CLI](https://angular.io/cli/generate#component-command)
    - Add an `about.component.ts`
    - Implement `app-routing.module.ts` and add the following routes: 

        ```
        { path: "", component: HomeComponent },
        { path: "food", component: FoodContainerComponent },
        { path: "about", component: AboutComponent },
        ```
    - Add [RouterLink](https://angular.io/api/router/RouterLink) directives to `navbar.component.html` to enable navigation

- Refactor `app/food` to be a lazy loaded module in `app-routing.module.ts`
    - Add a [feature module](https://angular.io/guide/feature-modules) using the [Angular CLI](https://angular.io/cli/generate#module-command) and 
    use the Code Splitting Pattern 

        ```
        ng g module [NAME] --route [ROUTE] --module [PARENT-MODULE]
        ```

    - Add the FormsModule to `food.module.ts`

    - Move the three food components to the declarations of the new feature module, remove them from `app.module.ts`

        ```javascript
        @NgModule({
            declarations: [FoodContainerComponent, FoodListComponent, FoodEditComponent],
        ```    
    - Update `food-routing.module.ts`:

        ```
        { path: '', component: FoodContainerComponent }
        ```
