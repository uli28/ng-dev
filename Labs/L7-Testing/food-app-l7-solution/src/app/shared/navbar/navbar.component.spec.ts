import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { MaterialModule } from '../../material.module';
import { MenuService } from '../menu/menu.service';
import { NavbarComponent } from './navbar.component';
import { menuItems } from './navbar.mocks';
import { NavbarService } from './navbar.service';

describe('navbar.component', () => {
  let navservice: any;
  let comp: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    navservice = jasmine.createSpyObj(['getItems']);
    navservice.getItems.and.returnValue(of(menuItems));

    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [HttpClientTestingModule, MaterialModule],
      providers: [
        MenuService,
        { provide: NavbarService, useValue: navservice },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    comp = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('should render 3 nav items', () => {
    const divs = el.queryAll(By.css('.navItem'));
    expect(divs.length).toBe(3);
  });
});
