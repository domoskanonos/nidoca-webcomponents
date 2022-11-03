# nidoca-search-bar

## Properties

| Property      | Attribute     | Type      | Default   |
|---------------|---------------|-----------|-----------|
| `disabled`    | `disabled`    | `boolean` | false     |
| `placeholder` | `placeholder` | `string`  | ""        |
| `theme`       | `theme`       | `string`  | "surface" |
| `value`       | `value`       | `string`  | ""        |

## Methods

| Method         | Type                |
|----------------|---------------------|
| `clearValue`   | `(): void`          |
| `valueChanged` | `(): Promise<void>` |

## Events

| Event                                   | Type                  |
|-----------------------------------------|-----------------------|
| `nidoca-search-bar-event-value-changed` | `CustomEvent<string>` |
