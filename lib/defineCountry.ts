import { Country } from './Country'
import { CountryCodes } from './CountryCodes'

export const defineCountry = (number: string): Country[] =>
  Object.entries(CountryCodes)
    .filter(([_, codes]) => codes.some(code => number.startsWith(code)))
    .map(([country, _]) => country as Country)
