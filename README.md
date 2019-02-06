# validate-phone

## Instalation

`yarn add @breadhead/validate-phone`

## Usage

```ts
import { validate } from '@breadhead/validate-phone'

validate('79994955033') // returns { countries: [Country.RU, Country.KZ], valid: true }
validate('7999495503') // returns { countries: [Country.RU, Country.KZ], valid: false }
```