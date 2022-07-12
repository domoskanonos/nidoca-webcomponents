# nidoca-app

## Properties

| Property           | Attribute  | Type                         | Default |
|--------------------|------------|------------------------------|---------|
| `contentComponent` |            | `HTMLElement \| undefined`   |         |
| `loggedIn`         | `loggedIn` | `boolean`                    | false   |
| `root`             | `root`     | `PageReference \| undefined` |         |
| `route`            | `route`    | `string \| undefined`        |         |

## Events

| Event                     | Type                  |
|---------------------------|-----------------------|
| `nidoca-event-app-login`  | `CustomEvent<any>`    |
| `nidoca-event-app-logout` | `CustomEvent<this>`   |
| `nidoca-event-app-route`  | `CustomEvent<string>` |
