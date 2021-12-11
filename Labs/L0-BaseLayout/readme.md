# Create a base Angular App with Layout

Create an Angular App with the following layout containing thw following components:

- home.ts
- shared/sidemenu.ts
- shared/navbar.ts

![layout](_images/food-layout.png)

Load the menu items in the navbar using a menu.service that thakes its values from `assets/menuItems.json`:

```json
["Home", "Food", "Admin"]
```

## Step-by-Step Guide:

Create Angular Project:

```
ng new food-app-l0
cd food-app-l0
```

Add the components:

```
ng g c home
ng g c shared/sidemenu
ng g c shared/navbar
```

Add the following content to `app.component.html`:

```html
<div class="navbar">
  <app-navbar></app-navbar>
</div>
<div class="mainrow">
  <div class="sidemenu">
    <app-sidemenu></app-sidemenu>
  </div>
  <div class="home">
    <app-home></app-home>
  </div>
</div>
```

Add the following styles to `app.component.scss`:

```css
.navbar {
  background-color: lightblue;
  height: 10vh;
}

.sidemenu {
  background-color: lightgray;
  width: 20vw;
}

.home {
  background-color: yellow;
  width: 80vw;
}

.mainrow {
  display: flex;
  flex-direction: row;
  height: 90vh;
}
```

Add the menu service:

```
ng g s shared/menu
```

Add `assets/menuItems.json`:

```json
["Home", "Food", "Admin"]
```

Add `HttpClientModule` to `app.module.ts`:

```typescript
import { HttpClientModule } from "@angular/common/http";
...
 imports: [
    ...
    HttpClientModule
```

Inject Angular HttpClient in the constructor of `menu.service.ts` and load `assets/menuItems.json`:

```typescript
constructor(private httpClient: HttpClient) {}

getMenuItems(): Observable<string[]> {
    return this.httpClient.get<string[]>("environment.apiUrl");
}
```

Inject menu.service in `navbar.component.ts` and get the menu items:

```typescript
constructor(private ms: MenuService) {}

navItems: string[];

ngOnInit() {
  this.ms.getMenuItems().subscribe(data => {
    this.navItems = data;
  });
}
```

Render the menu items in `navbar.component.html`:

```html
<div class="menu">
  <div class="menuItem" *ngFor="let item of navItems">{{ item }}</div>
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
}
```