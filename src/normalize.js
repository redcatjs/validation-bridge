import siret from './normalizers/siret'
import siren from './normalizers/siren'

// validator
import blacklist from 'validator/lib/blacklist'
import escape from 'validator/lib/escape'
import unescape from 'validator/lib/unescape'
import ltrim from 'validator/lib/ltrim'
import normalizeEmail from 'validator/lib/normalizeEmail'
import rtrim from 'validator/lib/rtrim'
import stripLow from 'validator/lib/stripLow'
import toBoolean from 'validator/lib/toBoolean'
import toDate from 'validator/lib/toDate'
import toFloat from 'validator/lib/toFloat'
import toInt from 'validator/lib/toInt'
import trim from 'validator/lib/trim'
import whitelist from 'validator/lib/whitelist'

// xss-filters
import {
  uriInHTMLData, uriInHTMLComment, uriInSingleQuotedAttr, uriInDoubleQuotedAttr, uriInUnQuotedAttr,
  uriPathInHTMLData, uriPathInHTMLComment, uriPathInSingleQuotedAttr, uriPathInDoubleQuotedAttr, uriPathInUnQuotedAttr,
  uriQueryInHTMLData, uriQueryInHTMLComment, uriQueryInSingleQuotedAttr, uriQueryInDoubleQuotedAttr, uriQueryInUnQuotedAttr,
  uriComponentInHTMLData, uriComponentInHTMLComment, uriComponentInSingleQuotedAttr, uriComponentInDoubleQuotedAttr, uriComponentInUnQuotedAttr,
  uriFragmentInHTMLData, uriFragmentInHTMLComment, uriFragmentInSingleQuotedAttr, uriFragmentInDoubleQuotedAttr, uriFragmentInUnQuotedAttr
} from 'xss-filters'

// dompurify
import { sanitize as DOMPurify } from 'dompurify'

export default {
  siret,
  siren,

  blacklist,
  escape,
  unescape,
  ltrim,
  normalizeEmail,
  rtrim,
  stripLow,
  toBoolean,
  toDate,
  toFloat,
  toInt,
  whitelist,
  trim,

  uriInHTMLData,
  uriInHTMLComment,
  uriInSingleQuotedAttr,
  uriInDoubleQuotedAttr,
  uriInUnQuotedAttr,
  uriPathInHTMLData,
  uriPathInHTMLComment,
  uriPathInSingleQuotedAttr,
  uriPathInDoubleQuotedAttr,
  uriPathInUnQuotedAttr,
  uriQueryInHTMLData,
  uriQueryInHTMLComment,
  uriQueryInSingleQuotedAttr,
  uriQueryInDoubleQuotedAttr,
  uriQueryInUnQuotedAttr,
  uriComponentInHTMLData,
  uriComponentInHTMLComment,
  uriComponentInSingleQuotedAttr,
  uriComponentInDoubleQuotedAttr,
  uriComponentInUnQuotedAttr,
  uriFragmentInHTMLData,
  uriFragmentInHTMLComment,
  uriFragmentInSingleQuotedAttr,
  uriFragmentInDoubleQuotedAttr,
  uriFragmentInUnQuotedAttr,

  DOMPurify
}
