import { AuthService } from './auth.service';

describe('AuthService', () => {
  let as: AuthService;

  beforeEach(() => {
    as = new AuthService();
  });

  it('should be created', () => {
    expect(as).toBeTruthy();
    expect(as.isAuth).toEqual(false);
  });

  it('should indicate the correct login state', () => {
    as.logIn();
    expect(as.isAuth).toEqual(true);
    as.logOff();
    expect(as.isAuth).toEqual(false);
  });
});
