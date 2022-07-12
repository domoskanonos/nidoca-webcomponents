# nidoca-form-login

## Properties

| Property        | Attribute       | Type                      | Default              |
|-----------------|-----------------|---------------------------|----------------------|
| `buttonLabel`   | `buttonLabel`   | `string`                  | "Anmelden"           |
| `formComponent` |                 | `NidocaForm \| undefined` |                      |
| `label`         | `label`         | `string`                  | "Anmeldung"          |
| `passwordLabel` | `passwordLabel` | `string`                  | "Passwort"           |
| `theme`         | `theme`         | `string \| undefined`     | "transparent"        |
| `usernameLabel` | `usernameLabel` | `string`                  | "Benutzername/Email" |

## Events

| Event                      | Type                                |
|----------------------------|-------------------------------------|
| `nidoca-form-login-submit` | `CustomEvent<NidocaFormOutputData>` |
