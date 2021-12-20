Navigate to folder `\demos\samples\simple-service`

Investigate `simple.service.ts` and `simple.service.spec.ts`

Learn how to interact with a service:

```javascript
it('should add a message when add is called', () => {
    service.add('message1');
    service.add('message2');
    expect(service.messages.length).toBe(2);
    expect(service.messages[1] == 'message2');
});
```