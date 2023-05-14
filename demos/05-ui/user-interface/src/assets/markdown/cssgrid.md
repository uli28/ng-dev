- Examine the layout of this component. It is using nested CSS Grid:

- Examins `app.component.html`. It is using CSS Grid areas:

  ```html
  <div class="grid">
    <div class="gdNavbar"><app-navbar></app-navbar></div>
    <div class="gdMainrow"><router-outlet></router-outlet></div>
  </div>
  ```

  ```css
  .grid {
    display: grid;
    grid-template-rows: 80px auto;
    grid-template-columns: auto;
    grid-template-areas: 
      "navbar"
      "mainrow";
    height: 100vh;
    margin: 0 var(--gap-medium);
  }
  ```

- Examine `demo-container.component.html` which is using areas in combination with media queries
