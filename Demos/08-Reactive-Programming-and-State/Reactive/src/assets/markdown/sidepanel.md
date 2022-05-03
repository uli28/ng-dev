- Start json-server using

```
json-server db.json
```
- Explain Mock-Editor Button on SidePannel and `sidepanel.service.ts`

```typescript
toggleEditor() {
    this.editorDisplayed = !this.editorDisplayed;
    this.eb.triggerCmd(
      this.editorDisplayed
        ? SidebarActions.SHOW_MARKDOWN
        : SidebarActions.HIDE_MARKDOWN
    );
  }
```

- Explain `menu.service.ts` and its responsive behavior when changing screen width. Also mention `navbar.component.ts` and the Hamburger-Menu.

```html
<mat-toolbar color="primary">
  <mat-toolbar-row fxLayoutGap="10px">
    <div fxHide.gt-xs (click)="toggleMenu()" class="clickable" >
         <mat-icon color="accent">menu</mat-icon>
    </div>
```