- Examine registration of `DemoService` in `demos.module.ts`

    ```typescript
    providers: [
        DemoService,
    ],
    ```

- Examine use of `providedIn` in `person.service.ts`   

    ```typescript
    @Injectable({
        providedIn: 'root',
    })
    export class PersonService {
    ```

- Mention that DI can also be used in Standalone Components

- Mention that there are advanced token providers: https://angular.io/guide/dependency-injection-providers