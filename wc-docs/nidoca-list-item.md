# nidoca-list-item

## Properties

| Property        | Attribute       | Type                  | Default |
|-----------------|-----------------|-----------------------|---------|
| `primaryText`   | `primaryText`   | `string`              | ""      |
| `secondaryText` | `secondaryText` | `string`              | ""      |
| `selectable`    | `selectable`    | `boolean`             | false   |
| `selected`      | `selected`      | `boolean`             | false   |
| `theme`         | `theme`         | `string \| undefined` |         |

## Methods

| Method           | Type       |
|------------------|------------|
| `switchSelected` | `(): void` |

## Events

| Event                             | Type                |
|-----------------------------------|---------------------|
| `nidoca-event-list-item-select`   | `CustomEvent<this>` |
| `nidoca-event-list-item-unselect` | `CustomEvent<this>` |
