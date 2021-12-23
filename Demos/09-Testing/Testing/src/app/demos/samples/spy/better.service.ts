import { Injectable } from '@angular/core';
import { Util } from '../util/util';
import { Message } from './message.model';

@Injectable({
  providedIn: 'root',
})
export class BetterMessageService {
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

  process() {
    this.util
      .processMessages(this.messages.map((m) => m.message))
      .subscribe((mgs) => (this.messages = mgs));
  }
}
