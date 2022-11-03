# nidoca-list

## Properties

| Property      | Attribute     | Type      | Default   |
|---------------|---------------|-----------|-----------|
| `multiselect` | `multiselect` | `boolean` | false     |
| `theme`       | `theme`       | `string`  | "surface" |

## Methods

| Method               | Type                   |
|----------------------|------------------------|
| `getItems`           | `(): NidocaListItem[]` |
| `getSelectedIndexes` | `(): number[]`         |
| `getSelectedItems`   | `(): NidocaListItem[]` |
| `selectAll`          | `(): void`             |
| `unselectAll`        | `(): void`             |
