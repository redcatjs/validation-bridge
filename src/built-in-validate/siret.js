import { isSIRET } from 'siret'
export default function siret(value){
  if (!value) {
    return false;
  }
  return isSIRET(value)
}
siret.message = "Veuillez entrer un numéro de SIRET valide (14 caractères alpha-numériques)"
