import { SimpleMessageService } from './simple.service';

describe('Testing a simple Service: SimpleMessageService', () => {
  let service: SimpleMessageService;

  beforeEach(() => {
    service = new SimpleMessageService();
  });

  it('should have no messages to start', () => {
    expect(service.messages.length).toBe(0);
  });

  it('should add a message when add is called', () => {
    service.add('message1');
    service.add('message2');
    expect(service.messages.length).toBe(2);
    expect(service.messages[1] == 'message2');
  });

  it('should remove all messages when clear is called', () => {
    service.add('message1');
    service.clear();

    expect(service.messages.length).toBe(0);
  });

  it('should delete the correct item', () => {
    service = new SimpleMessageService();
    service.messages = [
      'Hello World',
      'Servas die Buam',
      'Griaß eich die Madln',
    ];
    service.delete('Hello World');

    expect(service.messages.length).toBe(2);
    expect(service.messages).toContain(
      'Servas die Buam',
      'Griaß eich die Madln'
    );
  });
});
