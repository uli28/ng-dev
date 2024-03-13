import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-take-until-destroyed',
  templateUrl: './take-until-destroyed.component.html',
  styleUrls: ['./take-until-destroyed.component.scss']
})
export class TakeUntilDestroyedComponent {
  // vergleich mit react hook
  destroyRef = inject(DestroyRef);
  name = new FormControl('Giro the Spanish Greyhound', [Validators.required, Validators.minLength(3)], []);
  postal = new FormControl('3544', [Validators.minLength(4)]);
  city = new FormControl<string>('Idolsberg', [Validators.maxLength(15)]);

  ngOnInit() {
    // hier muss man auch unsubscriben. deklarativ muss man nicht unsubscriben
    // takeUntilDestroyed kümmert sich um das unsubscriben
    // Zie sollte deklaratives arbeiten sein ohne subscriben ist besser - geht manchmal nicht anders
    this.name.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) =>
      console.log('Form values changed', data)
    );
    this.name.statusChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) =>
      console.log('Form status changed', data)
    );
    this.postal.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) =>
      console.log('Form values changed', data)
    );
    this.city.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) =>
      console.log('Form values changed', data)
    );
  }
}
