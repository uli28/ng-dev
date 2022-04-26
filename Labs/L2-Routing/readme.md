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
    - Add [RouterLinks](https://angular.io/api/router/RouterLink) to `navbar.component.html` to enable navigation

- Refactore food to be a lazy loaded module
    - Add a [feature module](https://angular.io/guide/feature-modules) using the [Angular CLI](https://angular.io/cli/generate#module-command)
    - Move the food components to the new feature module, remove them from `app.module.ts`
    - Lazy load `food.module.ts` in `app.module.ts`

    