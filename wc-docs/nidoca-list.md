# nidoca-list

## Properties

| Property      | Attribute     | Type                  | Default |
|---------------|---------------|-----------------------|---------|
| `multiSelect` | `multiSelect` | `boolean`             | false   |
| `theme`       | `theme`       | `string \| undefined` |         |

## Methods

| Method               | Type                   |
|----------------------|------------------------|
| `getItems`           | `(): NidocaListItem[]` |
| `getSelectedIndexes` | `(): number[]`         |
| `getSelectedItems`   | `(): NidocaListItem[]` |
| `selectAll`          | `(): void`             |
| `unselectAll`        | `(): void`             |
