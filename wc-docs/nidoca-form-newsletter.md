# nidoca-form-newsletter

## Properties

| Property        | Attribute     | Type                      | Default              |
|-----------------|---------------|---------------------------|----------------------|
| `buttonLabel`   | `buttonLabel` | `string`                  | "Registrieren"       |
| `emailLabel`    | `emailLabel`  | `string`                  | "Deine Emailadresse" |
| `formComponent` |               | `NidocaForm \| undefined` |                      |
| `label`         | `label`       | `string`                  | "Newsletter"         |
| `theme`         | `theme`       | `string \| undefined`     | "primary"            |

## Events

| Event                           | Type                                |
|---------------------------------|-------------------------------------|
| `nidoca-form-newsletter-submit` | `CustomEvent<NidocaFormOutputData>` |
