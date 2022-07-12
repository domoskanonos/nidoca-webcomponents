# nidoca-icon-extended

## Properties

| Property      | Attribute     | Type                   | Default          |
|---------------|---------------|------------------------|------------------|
| `clickable`   | `clickable`   | `boolean`              | true             |
| `deactivated` | `deactivated` | `boolean`              | false            |
| `icon`        | `icon`        | `string`               | ""               |
| `shadowType`  | `shadowType`  | `NidocaIconShadowType` | "DEFAULT_SHADOW" |
| `theme`       | `theme`       | `string`               | "primary"        |

## Methods

| Method    | Type                |
|-----------|---------------------|
| `clicked` | `(): Promise<void>` |

## Events

| Event                       | Type                |
|-----------------------------|---------------------|
| `nidoca-event-icon-clicked` | `CustomEvent<this>` |
