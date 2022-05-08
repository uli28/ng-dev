import { Injectable } from '@angular/core';
import { Message } from './message.model';
import { Util } from '../simple-tests/util';

@Injectable({
  providedIn: 'root',
})
export class MessageServiceWithInjection {
  constructor(private util: Util) {}

  messages: Message[] = [];

  add(message: Message) {
    this.messages.push(message);
    this.util.log(`adding: ${message}`);
  }

  delete(message: string) {
    this.messages = this.messages.filter((item) => item.message != message);
  }

  clear() {
    this.messages = [];
  }
}
