# nidoca-form-combobox

## Properties

| Property       | Attribute      | Type                 | Default   |
|----------------|----------------|----------------------|-----------|
| `errorText`    | `errorText`    | `string`             | ""        |
| `infoText`     | `infoText`     | `string`             | ""        |
| `label`        | `label`        | `string`             | ""        |
| `multiple`     | `multiple`     | `boolean`            | false     |
| `name`         | `name`         | `string`             | ""        |
| `options`      | `options`      | `FormOutputData[]`   | []        |
| `required`     | `required`     | `boolean`            | true      |
| `size`         | `size`         | `number`             | 1         |
| `theme`        | `theme`        | `string`             | "surface" |
| `trailingIcon` | `trailingIcon` | `string`             | ""        |
| `value`        | `value`        | `string \| string[]` | ""        |
| `warningText`  | `warningText`  | `string`             | ""        |

## Methods

| Method          | Type                 |
|-----------------|----------------------|
| `getOutputData` | `(): FormOutputData` |
| `validate`      | `(): boolean`        |
