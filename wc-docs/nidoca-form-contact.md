# nidoca-form-contact

## Properties

| Property        | Attribute      | Type                      | Default           |
|-----------------|----------------|---------------------------|-------------------|
| `buttonLabel`   | `buttonLabel`  | `string`                  | "Senden"          |
| `emailLabel`    | `emailLabel`   | `string`                  | "Deine Email"     |
| `formComponent` |                | `NidocaForm \| undefined` |                   |
| `label`         | `label`        | `string`                  | "Deine Nachricht" |
| `messageLabel`  | `messageLabel` | `string`                  | "Deine Nachricht" |
| `nameLabel`     | `nameLabel`    | `string`                  | "Dein Name"       |
| `theme`         | `theme`        | `string \| undefined`     | "primary"         |
| `titleLabel`    | `titleLabel`   | `string`                  | "Betreff"         |

## Events

| Event                        | Type                                |
|------------------------------|-------------------------------------|
| `nidoca-form-contact-submit` | `CustomEvent<NidocaFormOutputData>` |
