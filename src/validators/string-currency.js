import isCurrency from 'validator/lib/isCurrency'

export default function stringCurrency (str, options) {
  return isCurrency(str, options)
}
