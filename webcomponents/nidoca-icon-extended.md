# nidoca-icon-extended

## Properties

| Property      | Attribute     | Type                   | Default    |
|---------------|---------------|------------------------|------------|
| `clickable`   | `clickable`   | `boolean`              | true       |
| `deactivated` | `deactivated` | `boolean`              | false      |
| `icon`        | `icon`        | `string`               | ""         |
| `shadowType`  | `shadowType`  | `NidocaIconShadowType` | "shadow_1" |
| `theme`       | `theme`       | `string`               | "primary"  |
| `title`       | `title`       | `string`               | ""         |

## Methods

| Method    | Type                |
|-----------|---------------------|
| `clicked` | `(): Promise<void>` |

## Events

| Event                       | Type                |
|-----------------------------|---------------------|
| `nidoca-event-icon-clicked` | `CustomEvent<this>` |
