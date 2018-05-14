// validatable
import not from './validators/not'
import isArray from './validators/is-array'
import isString from './validators/is-string'
import arrayIn from './validators/array-in'
import arrayEveryIn from './validators/array-every-in'
import arraySomeIn from './validators/array-some-in'
import absence from './validators/absence'
import arrayLength from './validators/array-length'
import BSONObjectID from './validators/bson-object-id'
import numberSize from './validators/number-size'
import presence from './validators/presence'
import required from './validators/required'
import stringBase64 from './validators/string-base64'
import stringDate from './validators/string-date'
import stringEmail from './validators/string-email'
import stringExclusion from './validators/string-exclusion'
import stringFQDN from './validators/string-fqdn'
import stringHexColor from './validators/string-hex-color'
import stringHexadecimal from './validators/string-hexadecimal'
import stringInclusion from './validators/string-inclusion'
import stringJSON from './validators/string-json'
import stringLength from './validators/string-length'
import stringLowercase from './validators/string-lowercase'
import stringMatch from './validators/string-match'
import stringUppercase from './validators/string-uppercase'
import stringUUID from './validators/string-uuid'
import stringETHAddress from './validators/string-eth-address'

// validator
import stringAlpha from './validators/string-alpha'
import stringAlphanumeric from './validators/string-alphanumeric'
import stringAscii from './validators/string-ascii'
import stringBoolean from './validators/string-boolean'
import stringByteLength from './validators/string-byte-length'
import stringCreditCard from './validators/string-credit-card'
import stringCurrency from './validators/string-currency'
import stringDataURI from './validators/string-data-uri'
import stringDateAfter from './validators/string-date-after'
import stringDateBefore from './validators/string-date-before'
import stringDecimal from './validators/string-decimal'
import stringDivisibleBy from './validators/string-divisible-by'
import stringEmpty from './validators/string-empty'
import stringEquals from './validators/string-equals'
import stringFloat from './validators/string-float'
import stringFullWidth from './validators/string-full-width'
import stringHalfWith from './validators/string-half-width'
import stringHash from './validators/string-hash'
import stringIn from './validators/string-in'
import stringInt from './validators/string-int'
import stringIp from './validators/string-ip'
import stringISBN from './validators/string-isbn'
import stringISIN from './validators/string-isin'
import stringISO8601 from './validators/string-iso8601'
import stringISO31661Alpha2 from './validators/string-iso31661alpha2'
import stringISO31661Alpha3 from './validators/string-iso31661alpha3'
import stringISRC from './validators/string-isrc'
import stringISSN from './validators/string-issn'
import stringLatLong from './validators/string-lat-long'
import stringMACAddress from './validators/string-macaddress'
import stringMatches from './validators/string-matches'
import stringMD5 from './validators/string-md5'
import stringMimeType from './validators/string-mime-type'
import stringMobilePhone from './validators/string-mobile-phone'
import stringMongoId from './validators/string-mongo-id'
import stringMultiByte from './validators/string-multibyte'
import stringNumeric from './validators/string-numeric'
import stringPort from './validators/string-port'
import stringPostalCode from './validators/string-postal-code'
import stringRFC3339 from './validators/string-rfc3339'
import stringSurrogatePair from './validators/string-surrogate-pair'
import stringURL from './validators/string-url'
import stringVariableWidth from './validators/string-variable-width'
import stringWhitelisted from './validators/string-whitelisted'

// others
import stringSIRET from './validators/string-siret'
import stringSIREN from './validators/string-siren'
import ENUM from './validators/enum'
import mysql from './validators/mysql'

export default {

  not,
  isArray,
  isString,
  arrayIn,
  arrayEveryIn,
  arraySomeIn,
  absence,
  arrayLength,
  BSONObjectID,
  numberSize,
  presence,
  required,
  stringBase64,
  stringDate,
  stringEmail,
  stringExclusion,
  stringFQDN,
  stringHexColor,
  stringHexadecimal,
  stringInclusion,
  stringJSON,
  stringLength,
  stringLowercase,
  stringMatch,
  stringUppercase,
  stringUUID,
  stringETHAddress,

  stringAlpha,
  stringAlphanumeric,
  stringAscii,
  stringBoolean,
  stringByteLength,
  stringCreditCard,
  stringCurrency,
  stringDataURI,
  stringDateAfter,
  stringDateBefore,
  stringDecimal,
  stringDivisibleBy,
  stringEmpty,
  stringEquals,
  stringFloat,
  stringFullWidth,
  stringHalfWith,
  stringHash,
  stringIn,
  stringInt,
  stringIp,
  stringISBN,
  stringISIN,
  stringISO8601,
  stringISO31661Alpha2,
  stringISO31661Alpha3,
  stringISRC,
  stringISSN,
  stringLatLong,
  stringMACAddress,
  stringMatches,
  stringMD5,
  stringMimeType,
  stringMobilePhone,
  stringMongoId,
  stringMultiByte,
  stringNumeric,
  stringPort,
  stringPostalCode,
  stringRFC3339,
  stringSurrogatePair,
  stringURL,
  stringVariableWidth,
  stringWhitelisted,

  stringSIRET,
  stringSIREN,
  ENUM,
  mysql
}
