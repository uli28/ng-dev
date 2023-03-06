- Navigate to `/cypress/integration/` and show UI- / E2E tests with Cypress:
  
  - home.spec.js
  - demo.spec.js
  - skills.spec.js

- Explain the injection of mock data:

```javascript
context('Skills', () => {
  beforeEach(() => {
    cy.intercept("GET",'http://localhost:3000/skills',{fixture: "skills.json"});
```