# nidoca-form-text

## Properties

| Property       | Attribute      | Type                  | Default   |
|----------------|----------------|-----------------------|-----------|
| `checked`      | `checked`      | `boolean`             | false     |
| `disabled`     | `disabled`     | `boolean`             | false     |
| `errorText`    | `errorText`    | `string`              | ""        |
| `infoText`     | `infoText`     | `string`              | ""        |
| `label`        | `label`        | `string`              | ""        |
| `max`          | `max`          | `number \| undefined` |           |
| `maxlength`    | `maxlength`    | `number \| undefined` |           |
| `min`          | `min`          | `number \| undefined` |           |
| `minlength`    | `minlength`    | `number \| undefined` |           |
| `name`         | `name`         | `string`              | ""        |
| `pattern`      | `pattern`      | `string \| undefined` |           |
| `placeholder`  | `placeholder`  | `string`              | ""        |
| `required`     | `required`     | `boolean`             | false     |
| `size`         | `size`         | `number \| undefined` |           |
| `step`         | `step`         | `number \| undefined` |           |
| `theme`        | `theme`        | `string`              | "surface" |
| `trailingIcon` | `trailingIcon` | `string`              | ""        |
| `type`         | `type`         | `string`              | "text"    |
| `value`        | `value`        | `string`              | ""        |
| `warningText`  | `warningText`  | `string`              | ""        |

## Methods

| Method          | Type                 |
|-----------------|----------------------|
| `getOutputData` | `(): FormOutputData` |
| `validate`      | `(): boolean`        |
