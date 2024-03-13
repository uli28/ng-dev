import { Component, inject } from '@angular/core';
import { IntroComponent } from '../shared/intro/intro.component';
import { FirebaseAuthService } from '../firebase-auth/firebase-auth.service';
import { AsyncPipe } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { environment } from 'src/environments/environment';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [IntroComponent, AsyncPipe, MarkdownModule],
})
export class HomeComponent {
    auth = inject(FirebaseAuthService);
    authEnabled = toSignal(this.auth.isAuthenticated(), { initialValue: false });
    title = environment.title;

    getMarkdown(): string {
        return `${environment.markdownPath}intro.md`;
    }
}
