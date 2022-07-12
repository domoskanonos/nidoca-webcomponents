# nidoca-form-change-password

## Properties

| Property                        | Attribute                       | Type                          | Default                                          |
|---------------------------------|---------------------------------|-------------------------------|--------------------------------------------------|
| `buttonLabel`                   | `buttonLabel`                   | `string`                      | "Ändern"                                         |
| `errorMessagePasswordDiffLabel` | `errorMessagePasswordDiffLabel` | `string`                      | "Die Passwörter stimmen nicht überein"           |
| `errorMessageSamePasswordLabel` | `errorMessageSamePasswordLabel` | `string`                      | "Altes und neues Passwort dürfen nicht übereinstimmen." |
| `formComponent`                 |                                 | `NidocaForm \| undefined`     |                                                  |
| `label`                         | `label`                         | `string`                      | "Passwort ändern"                                |
| `newPasswordInputField`         |                                 | `NidocaFormText \| undefined` |                                                  |
| `newPasswordLabel`              | `newPasswordLabel`              | `string`                      | "Neues Passwort"                                 |
| `oldPasswordInputField`         |                                 | `NidocaFormText \| undefined` |                                                  |
| `oldPasswordLabel`              | `oldPasswordLabel`              | `string`                      | "Altes Passwort"                                 |
| `repeatNewPasswordInputField`   |                                 | `NidocaFormText \| undefined` |                                                  |
| `repeatNewPasswordLabel`        | `repeatNewPasswordLabel`        | `string`                      | "Wiederholen"                                    |
| `showErrorMessagePasswordDiff`  |                                 | `boolean`                     | false                                            |
| `showErrorMessageSamePassword`  |                                 | `boolean`                     | false                                            |
| `theme`                         | `theme`                         | `string`                      | "surface"                                        |

## Events

| Event                                | Type                                |
|--------------------------------------|-------------------------------------|
| `nidoca-form-change-password-submit` | `CustomEvent<NidocaFormOutputData>` |
