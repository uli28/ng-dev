import { Component, Injector, computed, effect, inject, signal } from '@angular/core';
import { Topic } from './topic.model';
import { BorderDirective, CenteredDirective } from '../../../shared/formatting/formatting-directives';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';
@Component({
    selector: 'app-signals-basics',
    templateUrl: './signals-basics.component.html',
    styleUrls: ['./signals-basics.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent, MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatButton, BorderDirective, CenteredDirective]
})
export class SignalsBasicsComponent {
  injector = inject(Injector)

  // explizit vs implizit
  netAmount = signal<number>(0);
  myString = signal('Hello World')
  topic = signal<Topic>({ name: 'Angular Signals', likes: 0 });

  tax = signal(0.2).asReadonly();
  grossAmount = computed(() => this.netAmount() * (1 + this.tax()));

  constructor() {
    // effect geht nur in einem injection context
    effect(() => {
      console.log('totalAmount changed', this.netAmount());
      // nur die signals was im effect verwendet werden sind interessant und triggern den effect - art subscription auf verwendet signals im effect
      console.log('grossAmount changed', this.grossAmount());
    });
  }

  logLikes() {
    effect(() => {
      console.log('there was a like', this.topic());
      // injector - vielleicht nicht mehr notwendig
    }, { injector: this.injector });
  }

  updateAmount() {
    this.netAmount.set(100);
  }

  addAmount() {
    this.netAmount.update(curr => curr + 10);
  }

  likeTopic() {
    this.topic.update(curr => {
      curr.likes++;
      return curr;
    });
  }
}
