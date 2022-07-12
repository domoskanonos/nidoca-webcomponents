# nidoca-form

## Properties

| Property       | Attribute      | Type      | Default |
|----------------|----------------|-----------|---------|
| `autocomplete` | `autocomplete` | `boolean` | true    |

## Methods

| Method             | Type                                             |
|--------------------|--------------------------------------------------|
| `getInputElements` | `(slotElement: HTMLSlotElement \| undefined): NidocaFormAbstractInputElement[]` |
| `getOutputData`    | `(): NidocaFormOutputData`                       |
| `validate`         | `(): boolean`                                    |

## Events

| Event                           | Type                                |
|---------------------------------|-------------------------------------|
| `nidoca-form-validation-failed` | `CustomEvent<NidocaFormOutputData>` |
