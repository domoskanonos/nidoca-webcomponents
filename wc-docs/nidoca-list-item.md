# nidoca-list-item

## Properties

| Property        | Attribute       | Type                  | Default |
|-----------------|-----------------|-----------------------|---------|
| `multiSelect`   | `multiSelect`   | `boolean`             | false   |
| `primaryText`   | `primaryText`   | `string`              | ""      |
| `secondaryText` | `secondaryText` | `string`              | ""      |
| `selected`      | `selected`      | `boolean`             | false   |
| `theme`         | `theme`         | `string \| undefined` |         |

## Methods

| Method           | Type       |
|------------------|------------|
| `downAction`     | `(): void` |
| `switchSelected` | `(): void` |
| `upAction`       | `(): void` |

## Events

| Event                             | Type                |
|-----------------------------------|---------------------|
|                                   | `CustomEvent<this>` |
| `nidoca-event-list-item-select`   | `CustomEvent<this>` |
| `nidoca-event-list-item-unselect` | `CustomEvent<this>` |
