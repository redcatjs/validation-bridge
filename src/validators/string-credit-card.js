import isCreditCard from 'validator/lib/isCreditCard'

export default function stringCreditCard(value) {
  return isCreditCard(value)
}
stringCreditCard.message = "Veuillez entrer un numéro de carte de crédit valide"
