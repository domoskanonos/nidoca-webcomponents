# nidoca-icon

## Properties

| Property      | Attribute     | Type      | Default |
|---------------|---------------|-----------|---------|
| `clickable`   | `clickable`   | `boolean` | true    |
| `deactivated` | `deactivated` | `boolean` | false   |
| `icon`        | `icon`        | `string`  | ""      |
| `primaryText` | `primaryText` | `string`  | ""      |

## Methods

| Method    | Type                |
|-----------|---------------------|
| `clicked` | `(): Promise<void>` |

## Events

| Event                       | Type                |
|-----------------------------|---------------------|
| `nidoca-event-icon-clicked` | `CustomEvent<this>` |
