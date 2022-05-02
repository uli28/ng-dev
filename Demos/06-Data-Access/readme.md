# Data Access

[.NET Core CLI Reference](https://docs.microsoft.com/en-us/dotnet/core/tools/)

[Visual Studio Code REST Client](https://github.com/Huachao/vscode-restclient/blob/master/README.md)

[Json-Server](https://github.com/typicode/json-server)

## REST Client

Common Visual Studio Code Settings for REST Client

```json
"rest-client.defaultHeaders": {
    "User-Agent": "vscode-restclient"
},
"rest-client.excludeHostsForProxy": ["localhost"],
"rest-client.environmentVariables": {
    "$shared": {},
    "dev": {
        "tenantId": "d92b247e-90e0-4469-a129-...",
        "clientId": "b9865fd5-e515-478c-8ad1-...",
        "clientSecret": "sXVBcOw2_iLE....",
        "scope": "https%3A%2F%2Fgraph.microsoft.com%2F.default"
    }
},
```