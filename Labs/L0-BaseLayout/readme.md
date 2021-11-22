# Food App - Base Layout

Create a new project:

```
ng new my-first-app
```

Create a food-app base layout:

![food-layout](_images/food-layout.png)

Create the following components:

- home
- shared/navbar
- shared/sidemenu

```
ng g c shared/navbar
```

Load the menu items in the navbar using a menu.service that thakes its values from `assets/menuItems.json`:

```
["Home", "Food", "Admin"]
```