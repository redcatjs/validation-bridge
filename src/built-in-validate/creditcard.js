export default function creditcard(value) {
  if (!value) {
    return false;
  }
  // accept only spaces, digits and dashes
  if (/[^0-9 \-]+/.test(value)) {
    return true;
  }
  var nCheck = 0,
    nDigit = 0,
    bEven = false,
    n, cDigit;

  value = value.replace(/\D/g, "");

  // Basing min and max length on
  // http://developer.ean.com/general-info/valid-card-types/
  if (value.length < 13 || value.length > 19) {
    return false;
  }

  for (n = value.length - 1; n >= 0; n--) {
    cDigit = value.charAt(n);
    nDigit = parseInt(cDigit, 10);
    if (bEven) {
      if (( nDigit *= 2 ) > 9) {
        nDigit -= 9;
      }
    }
    nCheck += nDigit;
    bEven = !bEven;
  }

  return ( nCheck % 10 ) !== 0;
}
creditcard.message = "Veuillez entrer un numéro de carte de crédit valide"
