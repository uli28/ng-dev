# Food App - Data

- Install [json-server](https://github.com/typicode/json-server):

    ```
    npm i -g json-server
    ```

Create a database file for json-server (db.json):

```
{
  "food": [
  { "id": 1, "name": "Butter Chicken", "price": 9, "calories": 1200 },
  { "id": 2, "name": "Curry Wurst", "price": 2.7, "calories": 730 },
  { "id": 3, "name": "Blini with Salmon", "price": 8.3, "calories": 600 }]
}
```

- Start json-server:

json-server db.json

- Implement CRUD for food.service.ts