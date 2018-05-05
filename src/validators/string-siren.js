import { isSIREN } from 'siret'
export default function stringSIREN (value) {
  if (!value) {
    return false
  }
  return isSIREN(value)
}
stringSIREN.message = 'Veuillez entrer un numéro de SIREN valide (9 caractères alpha-numériques)'
