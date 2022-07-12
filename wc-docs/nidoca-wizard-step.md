# nidoca-wizard-step

## Properties

| Property      | Attribute     | Type                           | Default |
|---------------|---------------|--------------------------------|---------|
| `first`       |               | `boolean`                      | false   |
| `icon`        | `icon`        | `string`                       | ""      |
| `index`       |               | `number \| undefined`          |         |
| `isLast`      | `isLast`      | `boolean`                      | false   |
| `primaryText` | `primaryText` | `string`                       | ""      |
| `state`       | `state`       | `WizardStepState \| undefined` |         |

## Methods

| Method        | Type       |
|---------------|------------|
| `stepClicked` | `(): void` |

## Events

| Event                              | Type                  |
|------------------------------------|-----------------------|
| `nidoca-event-wizard-step-clicked` | `CustomEvent<number>` |
