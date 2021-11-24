# Food App - UI

- Add the [@angular/flex-layout](https://github.com/angular/flex-layout/wiki) library to the project and implement a responsive behaviour. Hide the sidebar on devices with a horizontal width less than medium. We will add a toggle button in another lab.

- Change to base layout in app.component to use [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) and the [@angular/flex-layout css grid implementation](https://github.com/angular/flex-layout/blob/master/guides/Grid.md). Use the [Demo App](https://github.com/arambazamba/ng-dev/blob/main/Demos/06-UI/UserInterface/src/app/app.component.html) Layout as a reference.

- Implement a Material Design for Food App by adding [Angular Material](https://material.angular.io/guide/getting-started):
    - Use [mat-toolbar](https://material.angular.io/components/toolbar/overview) in the `navbar.component`
    - Use [mat-table](https://material.angular.io/components/table/overview) for the `food-list.component`
    - Use [mat-input](https://material.angular.io/components/form-field/overview) for `food-edit.component`



![material](_images/material.png)

- Implement a material.module and copy its default content from the [Angular Material Docs](https://material.angular.io/components/categories) or any Sample in [Stackblitz](https://stackblitz.com/run?file=src/app/badge-overview-example.ts)
- Optional: Implement a custom material theme with a [custom color palette](https://material.io/resources/color/#!/?view.left=0&view.right=0). Use the [Demo App](https://github.com/arambazamba/ng-dev/tree/main/Demos/06-UI/UserInterface/src/theme) Theme as a reference.
