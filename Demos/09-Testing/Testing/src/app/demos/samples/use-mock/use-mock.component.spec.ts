import { MockAuthService } from './auth.service.mock';
import { UseMockComponent } from './use-mock.component';

describe('UseMockComponent', () => {
  let component: UseMockComponent;

  const mockservice = new MockAuthService();

  beforeEach(() => {
    component = new UseMockComponent(mockservice);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return Authenticated true', () => {
    expect(component.loggedIn).toBe(true);
  });
});
