import { Component, Input, OnInit } from '@angular/core';
import { FirebaseAuthService } from 'src/app/fbauth/firebase/firebase-auth.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() img: string = '';
  authEnabled = environment.authEnabled;

  constructor(private auth: FirebaseAuthService) {}

  ngOnInit(): void {}
}
