import { Component, inject } from '@angular/core';
import { IntroComponent } from '../shared/intro/intro.component';
import { FirebaseAuthService } from '../firebase-auth/firebase-auth.service';
import { AsyncPipe } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [IntroComponent, AsyncPipe, MarkdownModule],
})
export class HomeComponent {
    auth = inject(FirebaseAuthService);
    authEnabled = this.auth.isAuthenticated();
    title = environment.title;

    getMarkdown(): string {
        return `${environment.markdownPath}intro.md`;
    }
}