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
  // signal leichtgewichtiger und einfacher zu arbeiten
  // verwendet wie observables ebenso subscriptions mit {{v}} async
  // change detection rerendering
  injector = inject(Injector)

  netAmount = signal<number>(0);
  // short form getter aufrufen myString() im template
  myString = signal('Hello World')
  topic = signal<Topic>({ name: 'Angular Signals', likes: 0 });

  // kein writeable signal, nur lesbar
  tax = signal(0.2).asReadonly();
  // computed: signal dass sich aus anderen signals zusammensetzt
  grossAmount = computed(() => this.netAmount() * (1 + this.tax()));

  constructor() {
    // function die getriggert wird, wenn sich value ändert
    // im template automatisch
    effect(() => {
      console.log('totalAmount changed', this.netAmount());
      console.log('grossAmount changed', this.grossAmount());
    });
  }

  logLikes() {
    effect(() => {
      console.log('there was a like', this.topic());
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
