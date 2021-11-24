# Food App - Base Layout

- Create a new project:

```
ng new food-app
```

Create a food-app base layout:

![food-layout](_images/food-layout.png)

Create the following components using the [Angular CLI](https://angular.io/cli/generate#component-command):

- `home.component.ts`
- `shared/navbar.component.ts`
- `shared/sidemenu.component.ts`

Example:

```
ng g c shared/navbar
```

Start the app:

```
ng s -o
```

- Load the menu items in the navbar using a menu.service that takes its values from `assets/menuItems.json`:

```
["Home", "Food", "Admin"]
```

- Add the required [Angular Modules](https://angular.io/guide/frequent-ngmodules) to be able to use the Angular HttpClient  
- Create the menu.service.ts using [Angular CLI](https://angular.io/cli/generate#service)
- Implement the get-method to load `assets/menuItems.json`
