import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialComponent } from './material.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
// Notice manual import of ...Harness
import { HarnessLoader } from '@angular/cdk/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatSliderHarness } from '@angular/material/slider/testing';

describe('MaterialComponent', () => {
  let component: MaterialComponent;
  let fixture: ComponentFixture<MaterialComponent>;
  let loader: HarnessLoader;
  let slider: MatSliderHarness;
  let btnReset: MatButtonHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatSliderModule, MatButtonModule, BrowserAnimationsModule],
      declarations: [MaterialComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    loader = TestbedHarnessEnvironment.loader(fixture);
    slider = await loader.getHarness(
      MatSliderHarness.with({ selector: '#theSlider' })
    );
    btnReset = await loader.getHarness(
      MatButtonHarness.with({ text: 'Reset' })
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should btnReset the slider when btnReset is clicked', async () => {
    await btnReset.click();
    expect(await slider.getValue()).toBe(1);
  });
});
