Navigate to `component-write.component.spec.ts` and notice the following patterns:

- waitForAsync
- fixture.whenStable().then
- fixture.debugElement.query(By.css('input'));
- el.dispatchEvent(new Event('input'));

