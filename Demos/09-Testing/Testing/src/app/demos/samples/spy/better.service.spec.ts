import { of } from 'rxjs';
import { BetterMessageService } from './better.service';
import { original, processed } from '../global/util.mock';

describe('Testing a simple Service: SimpleMessageService', () => {
  let service: BetterMessageService;
  let util: any;

  beforeEach(() => {
    util = jasmine.createSpyObj('Util', [
      'log',
      'validate',
      'greet',
      'processMessages',
    ]);
    service = new BetterMessageService(util);
  });

  it('should have no messages to start', () => {
    expect(service.messages.length).toBe(0);
  });

  it('should add a message when add is called', () => {
    service.add({ message: 'Hallo Jürgen' });
    service.add({ message: 'Hi Mike' });
    expect(service.messages.length).toBe(2);
    expect(service.messages[1].message == 'Hi Mike');
    // Spy allows to get metadata about methods
    expect(util.log).toHaveBeenCalledTimes(2);
  });

  it('should remove all messages when clear is called', () => {
    service.add({ message: 'Szia Krisztina' });
    service.clear();
    expect(service.messages.length).toBe(0);
  });

  it('should delete the correct item', () => {
    // service = new BetterMessageService();
    service.messages = [
      { message: 'Szia Krisztina' },
      { message: 'Hola Alessandra' },
    ];
    service.delete('Szia Krisztina');

    expect(service.messages.length).toBe(1);
    expect(service.messages).toContain({ message: 'Hola Alessandra' });
  });

  it('should be able to process messages', () => {
    service.messages = original;
    util.processMessages.and.returnValue(of(processed));
    service.process();
    expect(util.processMessages).toHaveBeenCalledTimes(1);
    expect(service.messages).toBe(processed);
  });
});
