import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FoodRowComponent } from '../integration-tests/food-row/food-row.component';
import { AuthService } from './auth.service';
import { MockAuthService } from './auth.service.mock';
import { UseMockComponent } from './use-mock.component';

describe('UseMockComponent with MockAuth Service', () => {
  const ms = new MockAuthService();
  let comp: UseMockComponent;
  let fixture: ComponentFixture<UseMockComponent>;

  beforeEach(() => {
    comp = new UseMockComponent(ms);
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });
  it('should return Authenticated true', () => {
    expect(comp.loggedIn).toBe(true);
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [UseMockComponent],
      providers: [{ provide: AuthService, useValue: ms }],
    }).compileComponents();

    fixture = TestBed.createComponent(UseMockComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have the correct login state on the Template', () => {
    expect(fixture.nativeElement.querySelector('#auth').textContent).toContain(
      'true'
    );
  });
});
