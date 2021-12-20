import { Injectable } from '@angular/core';
import { Util } from '../global/util';

@Injectable({
  providedIn: 'root',
})
export class BetterMessageService {
  constructor(private util: Util) {}

  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
    this.util.log(`adding: ${message}`);
  }

  delete(msg: string) {
    this.messages = this.messages.filter((item) => item != msg);
  }

  clear() {
    this.messages = [];
  }
}
