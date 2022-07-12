# nidoca-form-textarea

## Properties

| Property      | Attribute     | Type      | Default   |
|---------------|---------------|-----------|-----------|
| `disabled`    | `disabled`    | `boolean` | false     |
| `errorText`   | `errorText`   | `string`  | ""        |
| `infoText`    | `infoText`    | `string`  | ""        |
| `label`       | `label`       | `string`  | ""        |
| `name`        | `name`        | `string`  | ""        |
| `placeholder` | `placeholder` | `string`  | ""        |
| `required`    | `required`    | `boolean` | false     |
| `rows`        | `rows`        | `number`  | 5         |
| `theme`       | `theme`       | `string`  | "surface" |
| `value`       | `value`       | `string`  | ""        |
| `warningText` | `warningText` | `string`  | ""        |

## Methods

| Method          | Type                 |
|-----------------|----------------------|
| `getOutputData` | `(): FormOutputData` |
| `validate`      | `(): boolean`        |
