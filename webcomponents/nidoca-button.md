# nidoca-button

## Properties

| Property      | Attribute     | Type               | Default     |
|---------------|---------------|--------------------|-------------|
| `buttonType`  | `buttonType`  | `NidocaButtonType` | "contained" |
| `leadingIcon` | `leadingIcon` | `string`           | ""          |
| `text`        | `text`        | `string`           | ""          |
| `theme`       | `theme`       | `string`           | "primary"   |

## Methods

| Method    | Type       |
|-----------|------------|
| `clicked` | `(): void` |

## Events

| Event                         | Type                |
|-------------------------------|---------------------|
| `nidoca-event-button-clicked` | `CustomEvent<this>` |
