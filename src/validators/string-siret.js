import { isSIRET } from 'siret'
export default function stringSIRET(value){
  if (!value) {
    return false
  }
  return isSIRET(value)
}
stringSIRET.message = "Veuillez entrer un numéro de SIRET valide (14 caractères alpha-numériques)"
