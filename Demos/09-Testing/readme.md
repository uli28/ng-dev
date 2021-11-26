# Angular Testing

## Extensions

[Test Explorer UI](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-test-explorer)

[Jasmine code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JasmineSnippets)

## Unit Testing

[Jasmine Matchers](https://jasmine.github.io/api/edge/matchers.html)

## Wallaby.js Test Runner

[Wallaby js](https://wallabyjs.com/)

[Wallaby VS Code Extension](https://marketplace.visualstudio.com/items?itemName=WallabyJs.wallaby-vscode)

## Debug Unit Tests

- Set a breakpoint in **app.component.spec.ts** on a line in one of the unit tests.

- Open a terminal at the root folder and run the tests using Angular CLI:

  > **Please note**: Running `npm run test` instead of `ng test` ensures tests are run with the version of @angular/cli specified in package.json.

  ```
  npm run test
  ```

- After the test run, go to the Debug view, select the **'ng test'** configuration, then press F5 or click the green button.

- When a browser opens with the test list, click the link for the test in which you placed the breakpoint. You should then hit the breakpoint:

![angular-test-breakpoint](https://user-images.githubusercontent.com/2836367/27004448-e5134ff8-4dce-11e7-8145-69de0956dd07.png)

### Debug End-to-end Tests

You can also debug your end-to-end tests running in Protractor with VS Code.

1. Start 'Angular Live Development Server' by starting a debug session in VS Code with our **'ng serve'** configuration we created above. Alternatively, and as mentioned above, executing `ng serve` command in terminal will also run the development server but without having VS Code running a debug session for it.

2. Set a breakpoint in **app.e2e-spec.ts** on a line in one of the end-to-end tests.

3. Now go to the Debug view in VS Code, select the **'ng e2e'** configuration, then press F5 or click the green button to run Protractor in a debug session.

Notice: You might need to update the `"protocol"` property to `legacy` if you are using an older version of Node (older than Node 8)
