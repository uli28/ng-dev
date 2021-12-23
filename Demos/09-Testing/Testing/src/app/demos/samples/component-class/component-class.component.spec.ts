import { ComponentClassComponent } from './component-class.component';

describe('ComponentClassComponent', () => {
  let component: ComponentClassComponent;

  it('should create', () => {
    component = new ComponentClassComponent();
    expect(component).toBeTruthy();
    component.ngOnInit();
    expect(component.title).toBe('Food App');
  });
});
