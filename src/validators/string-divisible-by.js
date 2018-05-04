import isDivisibleBy from 'validator/lib/isDivisibleBy'

export default function stringDivisibleBy (str, number) {
  return isDivisibleBy(str, number)
}
