# nidoca-list-item

## Properties

| Property        | Attribute       | Type      | Default     |
|-----------------|-----------------|-----------|-------------|
| `primaryText`   | `primaryText`   | `string`  | ""          |
| `secondaryText` | `secondaryText` | `string`  | ""          |
| `selected`      | `selected`      | `boolean` | false       |
| `theme`         | `theme`         | `string`  | "secondary" |

## Methods

| Method           | Type       |
|------------------|------------|
| `switchSelected` | `(): void` |

## Events

| Event                            | Type                   |
|----------------------------------|------------------------|
| `nidoca-event-list-item-clicked` | `CustomEvent<boolean>` |
