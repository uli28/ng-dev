import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-pm-child',
  templateUrl: './pm-child.component.html',
  styleUrls: ['./pm-child.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
})
export class PmChildComponent implements OnInit {
  route = inject(ActivatedRoute);
  id: number = 0;
  readonly: boolean = false;

    // wird hier gebunden, wenn im viewport das erste mal initialisiert wird
    // Sub Route wird nicht dauernd neu gerendert
  ngOnInit() {
    //this.useSnapShot();
    // subscribale observable
    this.useParamMap();
  }

  useSnapShot() {
    // Notice bug when using snapshot
    this.id = this.route.snapshot.params['id'];
  }

  useParamMap() {
    // nur in console.log ersichtlich
    this.route.paramMap.subscribe((params) => {
      console.log('paramMap:', params);
    });

    this.route.queryParamMap.subscribe((qpm) => {
      console.log('paramMap:', qpm);
      this.readonly = qpm.get('readonly') === 'true';
    });
  }
}
