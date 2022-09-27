import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  @ViewChild('register') registerTemplate!: TemplateRef<any>;
  @ViewChild('login') loginTemplate!: TemplateRef<any>;
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() img: string = '';
  authEnabled = environment.authEnabled;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  logIn() {
    this.dialog.open(this.loginTemplate, { width: '350px' });
  }

  registerUser() {
    this.dialog.open(this.registerTemplate, { width: '350px' });
  }
}
