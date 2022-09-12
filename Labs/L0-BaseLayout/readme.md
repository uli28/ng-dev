# Create a base Angular App with Layout

Make sure you have [Visual Studio Code](https://code.visualstudio.com/download), [Node 14.x](https://nodejs.org/download/release/v14.18.2/) and the lasted [Angular CLI](https://angular.io/cli) installed:

```
npm i -g @angular/cli
```

>Note: If you have problems execution scripts in PowerShell run: `Set-ExecutionPolicy bypass`. To check existing installations use: `node --version` and `npm list -g --depth 0`

Also install the [Angular Language Service - Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template).

Create an Angular App with the following layout containing the following components:

- home
- shared/sidemenu
- shared/navbar

![layout](_images/food-layout.png)

Load the menu items in the navbar using a menu.service that thakes its values from `assets/menu-items.json`:

```json
[
    {
        "title": "Home",
        "url": "/"
    },
    {
        "title": "Food",
        "url": "/food"
    },
    {
        "title": "About",
        "url": "/about"
    }
]
```

A solution is provided in the folder `food-app`.

## Step-by-Step Guide:

Create Angular Project using the [Angular CLI](https://angular.io/cli/new):

```
ng new food-app-l0 --routing true --style scss 
cd food-app-l0
```

>Note: Add routing to the project as it will be used later on. Choose scss as your prefered style schematic. You could change this later on in `angular.json`:

```json
"@schematics/angular:component": {
          "style": "scss"
}
```

Delete the default content of `app.component.html` and start the dev server:

```
ng s -o
```

>Note: Typically dev server is running while you are working. You can split your terminal to execute other CLI commands

![terminal](_images/terminal.png)

Add the components:

```
ng g c home
ng g c shared/sidemenu
ng g c shared/navbar
```

Notice the automatic declarations in `app.module.ts` because you have used Angular CLI: 

```typescript
@NgModule({
  declarations: [
    ...
    NavbarComponent,
    SidemenuComponent,
    HomeComponent
  ],
```

Import the css-reset from [http://meyerweb.com](https://meyerweb.com/eric/tools/css/reset/) to `styles.scss`

Add the following content to `app.component.html`:

```html
<div>
  <div class="navbar">
    <app-navbar></app-navbar>
  </div>
  <div class="mainrow">
    <div class="sidebar">
      <app-sidemenu></app-sidemenu>
    </div>
    <div class="main">
      <app-home></app-home>
    </div>
  </div>
</div>
```

Add the following styles to `app.component.scss`:

```css
.navbar{
  background-color: lavender;
  height: 150px
}

.sidebar{
  background-color: yellow;
  min-width: 200px;
  padding: 1rem;
}

.main{
  background-color: whitesmoke;
  width: calc(100vw - 200px);
  padding: 1rem;
}

.mainrow{
  display: flex;
  flex-direction: row;
  height: calc(100vh - 150px);
}
```

Add the menu service:

```
ng g s shared/navbar/navbar
```

Add `assets/menu-items.json`:

```json
[
    {
        "title": "Home",
        "url": "/"
    },
    {
        "title": "Food",
        "url": "/food"
    },
    {
        "title": "About",
        "url": "/about"
    }
]
```

Add `HttpClientModule` and `CommonModule` from [Frequently used Angular Modules](https://angular.io/guide/frequent-ngmodules) to `app.module.ts`:

```typescript
import { HttpClientModule } from "@angular/common/http";
...
 imports: [
    ...
    HttpClientModule
```

Inject Angular HttpClient in the constructor of `navbar.service.ts` and load `assets/menu-items.json`:

```typescript
constructor(private httpClient: HttpClient) {}

getItems() {
    return this.httpClient.get<NavItem[]>("assets/menu-items.json");
  }
```

Inject navbar.service in `navbar.component.ts` and get the menu items:

```typescript
constructor(private ns: NavbarService) {}

navItems: NavItem[] = [];

ngOnInit() {
  this.ns.getItems().subscribe(data => {
    this.navItems = data;
  });
}
```

Render the menu items in `navbar.component.html`:

```html
<div class="menu">
  <div class="menuItem" *ngFor="let item of navItems">{{ item.title }}</div>
</div>
```

Style `navbar.component.scss`:

```css
.menu{
    display: flex; 
    width: 100%;
    flex-direction: row;
    padding: 1rem;


}

.menuItem{
    margin-right: 0.5rem;
    
    &:hover{
        text-decoration: underline;
        cursor: pointer;
    }
}
```