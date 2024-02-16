# Food App - Routing

In this lab we will add simple routing to the food app.

## Steps Outlined

- Implement Routing for the navbar elements.

### Implement Routing for the navbar elements.

- Add an `about` component using the [Angular CLI](https://angular.io/cli/generate#component-command)

- In `app.component.html` replace `<app-food-container></app-food-container>` with a `<router-outlet></router-outlet>` 

- In `app.routes.ts` add the following routes and use them in app.config.ts: 

    ```typescript
    export const routes: Routes = [
        { path: "", component: HomeComponent },
        { path: "food", component: FoodContainerComponent },
        { path: "about", component: AboutComponent }
    ];
    ```
- Add [RouterLink](https://angular.io/api/router/RouterLink) directives to `navbar.component.html` to enable navigation. Apply a style for the active link - use [this reference](/demos/04-routing/routing-di/src/app/shared//navbar/navbar.component.html) for inspiration.

- Test the routing configuration