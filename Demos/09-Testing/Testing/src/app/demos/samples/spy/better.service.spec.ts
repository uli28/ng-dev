import { BetterMessageService } from './better.service';

describe('Testing a simple Service: SimpleMessageService', () => {
  let service: BetterMessageService;
  let util: any;

  beforeEach(() => {
    util = jasmine.createSpyObj('Util', ['log']);
    service = new BetterMessageService(util);
  });

  it('should have no messages to start', () => {
    expect(service.messages.length).toBe(0);
  });

  it('should add a message when add is called', () => {
    service.add('Hello Jürgen');
    service.add('Hi Mike');
    expect(service.messages.length).toBe(2);
    expect(service.messages[1] == 'Hi Mike');
    // Spy allows to get metadata about methods
    expect(util.log).toHaveBeenCalledTimes(2);
  });

  it('should remove all messages when clear is called', () => {
    service.add('message1');
    service.clear();
    expect(service.messages.length).toBe(0);
  });

  it('should delete the correct item', () => {
    // service = new BetterMessageService();
    service.messages = ['Hello World', 'Hi Mike', 'Hello Jürgen'];
    service.delete('Hello World');

    expect(service.messages.length).toBe(2);
    expect(service.messages).toContain('Hi Mike', 'Hello Jürgen');
  });
});
