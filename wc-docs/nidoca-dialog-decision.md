# nidoca-dialog-decision

## Properties

| Property         | Attribute        | Type      | Default           |
|------------------|------------------|-----------|-------------------|
| `description`    | `description`    | `string`  | "Entscheide dich" |
| `labelButtonNo`  | `labelButtonNo`  | `string`  | "Nein"            |
| `labelButtonYes` | `labelButtonYes` | `string`  | "Ja"              |
| `show`           | `show`           | `boolean` | false             |
| `title`          | `title`          | `string`  | "Ja oder Nein ?"  |

## Events

| Event                        | Type                |
|------------------------------|---------------------|
| `nidoca-dialog-decision-no`  | `CustomEvent<this>` |
| `nidoca-dialog-decision-yes` | `CustomEvent<this>` |
