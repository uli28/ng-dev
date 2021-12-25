import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MenuService } from './shared/menu/menu.service';
import { of } from 'rxjs';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

describe('AppComponent', () => {
  let ms: any;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let visible = of(true);
  let pos = of('side');

  beforeEach(async () => {
    ms = jasmine.createSpyObj(['sideNavVisible', 'sideNavPosition']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModule, BrowserAnimationsModule],
      declarations: [AppComponent, NavbarComponent, SidebarComponent],
      providers: [{ provide: MenuService, useValue: ms }],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Food App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Food App');
  });

  it('should return the correct style for the sidenav container spacing', () => {
    // ms.sideNavVisible.and.returnValue(visible);
    // ms.sideNavPosition.and.returnValue(pos);
    // // fixture.detectChanges();
    // expect(comp.getWorbenchStyle())
  });
});
