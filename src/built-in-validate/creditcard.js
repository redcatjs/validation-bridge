import isCreditCard from 'validator/lib/isCreditCard'

export default function creditcard(value) {
  return isCreditCard(value)
}
creditcard.message = "Veuillez entrer un numéro de carte de crédit valide"
