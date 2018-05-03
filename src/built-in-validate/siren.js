import { isSIREN } from 'siret'
export default function siren(value) {
  if (!value) {
    return false;
  }
  return isSIREN(value)
}
siren.message = "Veuillez entrer un numéro de SIREN valide (9 caractères alpha-numériques)"
