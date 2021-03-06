// validatable
import not from './validators/not'

import isScalar from './validators/is-scalar'
import isObject from './validators/is-object'
import isArray from './validators/is-array'
import isInteger from './validators/is-integer'
import isString from './validators/is-string'
import isBool from './validators/is-bool'
import isBoolInt from './validators/is-bool-int'

import arrayEvery from './validators/array-every'
import arrayEveryAsync from './validators/array-every-async'
import arraySome from './validators/array-some'
import arraySomeAsync from './validators/array-some-async'
import arrayIn from './validators/array-in'
import arrayEveryIn from './validators/array-every-in'
import arraySomeIn from './validators/array-some-in'

import objectEveryValue from './validators/object-every-value'
import objectEveryValueAsync from './validators/object-every-value-async'
import objectEveryKey from './validators/object-every-key'
import objectEveryKeyAsync from './validators/object-every-key-async'
import objectEveryEntry from './validators/object-every-entry'
import objectEveryEntryAsync from './validators/object-every-entry-async'

import objectSomeValue from './validators/object-some-value'
import objectSomeValueAsync from './validators/object-some-value-async'
import objectSomeKey from './validators/object-some-key'
import objectSomeKeyAsync from './validators/object-some-key-async'
import objectSomeEntry from './validators/object-some-entry'
import objectSomeEntryAsync from './validators/object-some-entry-async'

import objectEveryKeyAsyncIn from './validators/object-every-key-async-in'
import objectEveryKeyIn from './validators/object-every-key-in'
import objectEveryValueAsyncIn from './validators/object-every-value-async-in'
import objectEveryValueIn from './validators/object-every-value-in'
import objectSomeKeyAsyncIn from './validators/object-some-key-async-in'
import objectSomeKeyIn from './validators/object-some-key-in'
import objectSomeValueAsyncIn from './validators/object-some-value-async-in'
import objectSomeValueIn from './validators/object-some-value-in'

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

  isScalar,
  isObject,
  isArray,
  isInteger,
  isString,
  isBool,
  isBoolInt,

  arrayEvery,
  arrayEveryAsync,
  arraySome,
  arraySomeAsync,
  arrayIn,
  arrayEveryIn,
  arraySomeIn,

  objectEveryValue,
  objectEveryValueAsync,
  objectEveryKey,
  objectEveryKeyAsync,
  objectEveryEntry,
  objectEveryEntryAsync,
  objectSomeValue,
  objectSomeValueAsync,
  objectSomeKey,
  objectSomeKeyAsync,
  objectSomeEntry,
  objectSomeEntryAsync,

  objectEveryKeyAsyncIn,
  objectEveryKeyIn,
  objectEveryValueAsyncIn,
  objectEveryValueIn,
  objectSomeKeyAsyncIn,
  objectSomeKeyIn,
  objectSomeValueAsyncIn,
  objectSomeValueIn,

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
