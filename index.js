"use strict";
const path$1 = require("path");
const node_fs = require("node:fs");
const path = require("node:path");
const require$$1 = require("buffer");
const require$$0 = require("crypto-js");
const electron = require("electron");
const main = require("electron-conf/main");
const yaml = require("yaml");
require("date-fns/format");
const devUtils = require("./chunks/devUtils-Br2-xF04.js");
const utils = require("@electron-toolkit/utils");
const console$1 = require("./chunks/console-DQswa1lO.js");
const rxjs = require("rxjs");
const fs = require("fs");
const dateFns = require("date-fns");
const require$$0$1 = require("events");
const node_worker_threads = require("node:worker_threads");
const cuid2 = require("@paralleldrive/cuid2");
const fetch$1 = require("node-fetch");
const Vibrant = require("node-vibrant");
const Sentry = require("@sentry/electron/main");
const node_os = require("node:os");
const sass = require("sass");
const discordRpc = require("@xhayper/discord-rpc");
const helpers = require("@poppinss/utils/build/helpers");
const crypto = require("crypto");
const require$$0$4 = require("url");
const require$$1$1 = require("util");
const require$$0$3 = require("stream");
const require$$4 = require("http");
const require$$1$4 = require("https");
const require$$0$2 = require("dns");
const require$$2 = require("os");
const require$$1$2 = require("zlib");
const require$$0$5 = require("http2");
const require$$1$3 = require("tls");
const require$$0$6 = require("net");
const xosms = require("xosms");
const thenby = require("thenby");
const electronUpdater = require("electron-updater");
const semver = require("semver");
function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const Sentry__namespace = /* @__PURE__ */ _interopNamespaceDefault(Sentry);
const charMap = JSON.parse(
  `{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E'","Ը":"Y'","Թ":"T'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C'","Կ":"K","Հ":"H","Ձ":"D'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P'","Ք":"Q'","Օ":"O''","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"'","’":"'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}`
);
const locales = JSON.parse(
  '{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}'
);
function slugify(string, options = {}) {
  options = typeof options === "string" ? { replacement: options } : options || {};
  var locale = locales[options.locale] || {};
  var replacement = options.replacement === void 0 ? "-" : options.replacement;
  var trim = options.trim === void 0 ? true : options.trim;
  var slug = string.normalize().split("").reduce(function(result, ch) {
    var appendChar = locale[ch];
    if (appendChar === void 0) appendChar = charMap[ch];
    if (appendChar === void 0) appendChar = ch;
    if (appendChar === replacement) appendChar = " ";
    return result + appendChar.replace(options.remove || /[^\w\s$*_+~.()'"!\-:@]+/g, "");
  }, "");
  if (options.strict) {
    slug = slug.replace(/[^A-Za-z0-9\s]/g, "");
  }
  if (trim) {
    slug = slug.trim();
  }
  slug = slug.replace(/\s+/g, replacement);
  if (options.lower) {
    slug = slug.toLowerCase();
  }
  return slug;
}
class Base64 {
  encode(data, encoding) {
    if (typeof data === "string") {
      return require$$1.Buffer.from(data, encoding).toString("base64");
    }
    return require$$1.Buffer.from(data).toString("base64");
  }
  decode(encoded, encoding = "utf8", strict = false) {
    if (require$$1.Buffer.isBuffer(encoded)) {
      return encoded.toString(encoding);
    }
    const decoded = require$$1.Buffer.from(encoded, "base64").toString(encoding);
    const isInvalid = this.encode(decoded, encoding) !== encoded;
    if (strict && isInvalid) {
      throw new Error("Cannot decode malformed value");
    }
    return isInvalid ? null : decoded;
  }
  urlEncode(data, encoding) {
    const encoded = typeof data === "string" ? this.encode(data, encoding) : this.encode(data);
    return encoded.replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
  }
  urlDecode(encoded, encoding = "utf8", strict = false) {
    if (require$$1.Buffer.isBuffer(encoded)) {
      return encoded.toString(encoding);
    }
    const decoded = require$$1.Buffer.from(encoded, "base64").toString(encoding);
    const isInvalid = this.urlEncode(decoded, encoding) !== encoded;
    if (strict && isInvalid) {
      throw new Error("Cannot urlDecode malformed value");
    }
    return isInvalid ? null : decoded;
  }
}
const base64 = new Base64();
function generateRandom(size) {
  const bits = (size + 1) * 6;
  const buffer = require$$1.Buffer.from(require$$0.lib.WordArray.random(Math.ceil(bits / 8)).toString(require$$0.enc.Hex), "hex");
  return base64.urlEncode(buffer).slice(0, size);
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var secureJsonParse = { exports: {} };
var hasRequiredSecureJsonParse;
function requireSecureJsonParse() {
  if (hasRequiredSecureJsonParse) return secureJsonParse.exports;
  hasRequiredSecureJsonParse = 1;
  const hasBuffer = typeof Buffer !== "undefined";
  const suspectProtoRx = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/;
  const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
  function _parse(text, reviver, options) {
    if (options == null) {
      if (reviver !== null && typeof reviver === "object") {
        options = reviver;
        reviver = void 0;
      }
    }
    if (hasBuffer && Buffer.isBuffer(text)) {
      text = text.toString();
    }
    if (text && text.charCodeAt(0) === 65279) {
      text = text.slice(1);
    }
    const obj = JSON.parse(text, reviver);
    if (obj === null || typeof obj !== "object") {
      return obj;
    }
    const protoAction = options && options.protoAction || "error";
    const constructorAction = options && options.constructorAction || "error";
    if (protoAction === "ignore" && constructorAction === "ignore") {
      return obj;
    }
    if (protoAction !== "ignore" && constructorAction !== "ignore") {
      if (suspectProtoRx.test(text) === false && suspectConstructorRx.test(text) === false) {
        return obj;
      }
    } else if (protoAction !== "ignore" && constructorAction === "ignore") {
      if (suspectProtoRx.test(text) === false) {
        return obj;
      }
    } else {
      if (suspectConstructorRx.test(text) === false) {
        return obj;
      }
    }
    return filter(obj, { protoAction, constructorAction, safe: options && options.safe });
  }
  function filter(obj, { protoAction = "error", constructorAction = "error", safe } = {}) {
    let next = [obj];
    while (next.length) {
      const nodes = next;
      next = [];
      for (const node of nodes) {
        if (protoAction !== "ignore" && Object.prototype.hasOwnProperty.call(node, "__proto__")) {
          if (safe === true) {
            return null;
          } else if (protoAction === "error") {
            throw new SyntaxError("Object contains forbidden prototype property");
          }
          delete node.__proto__;
        }
        if (constructorAction !== "ignore" && Object.prototype.hasOwnProperty.call(node, "constructor") && Object.prototype.hasOwnProperty.call(node.constructor, "prototype")) {
          if (safe === true) {
            return null;
          } else if (constructorAction === "error") {
            throw new SyntaxError("Object contains forbidden prototype property");
          }
          delete node.constructor;
        }
        for (const key in node) {
          const value = node[key];
          if (value && typeof value === "object") {
            next.push(value);
          }
        }
      }
    }
    return obj;
  }
  function parse(text, reviver, options) {
    const stackTraceLimit = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return _parse(text, reviver, options);
    } finally {
      Error.stackTraceLimit = stackTraceLimit;
    }
  }
  function safeParse(text, reviver) {
    const stackTraceLimit = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return _parse(text, reviver, { safe: true });
    } catch (_e) {
      return null;
    } finally {
      Error.stackTraceLimit = stackTraceLimit;
    }
  }
  secureJsonParse.exports = parse;
  secureJsonParse.exports.default = parse;
  secureJsonParse.exports.parse = parse;
  secureJsonParse.exports.safeParse = safeParse;
  secureJsonParse.exports.scan = filter;
  return secureJsonParse.exports;
}
var safeStableStringify = { exports: {} };
var hasRequiredSafeStableStringify;
function requireSafeStableStringify() {
  if (hasRequiredSafeStableStringify) return safeStableStringify.exports;
  hasRequiredSafeStableStringify = 1;
  (function(module2, exports2) {
    const { hasOwnProperty: hasOwnProperty2 } = Object.prototype;
    const stringify = configure();
    stringify.configure = configure;
    stringify.stringify = stringify;
    stringify.default = stringify;
    exports2.stringify = stringify;
    exports2.configure = configure;
    module2.exports = stringify;
    const strEscapeSequencesRegExp = /[\u0000-\u001f\u0022\u005c\ud800-\udfff]/;
    function strEscape(str) {
      if (str.length < 5e3 && !strEscapeSequencesRegExp.test(str)) {
        return `"${str}"`;
      }
      return JSON.stringify(str);
    }
    function sort(array, comparator) {
      if (array.length > 200 || comparator) {
        return array.sort(comparator);
      }
      for (let i = 1; i < array.length; i++) {
        const currentValue = array[i];
        let position = i;
        while (position !== 0 && array[position - 1] > currentValue) {
          array[position] = array[position - 1];
          position--;
        }
        array[position] = currentValue;
      }
      return array;
    }
    const typedArrayPrototypeGetSymbolToStringTag = Object.getOwnPropertyDescriptor(
      Object.getPrototypeOf(
        Object.getPrototypeOf(
          new Int8Array()
        )
      ),
      Symbol.toStringTag
    ).get;
    function isTypedArrayWithEntries(value) {
      return typedArrayPrototypeGetSymbolToStringTag.call(value) !== void 0 && value.length !== 0;
    }
    function stringifyTypedArray(array, separator, maximumBreadth) {
      if (array.length < maximumBreadth) {
        maximumBreadth = array.length;
      }
      const whitespace = separator === "," ? "" : " ";
      let res = `"0":${whitespace}${array[0]}`;
      for (let i = 1; i < maximumBreadth; i++) {
        res += `${separator}"${i}":${whitespace}${array[i]}`;
      }
      return res;
    }
    function getCircularValueOption(options) {
      if (hasOwnProperty2.call(options, "circularValue")) {
        const circularValue = options.circularValue;
        if (typeof circularValue === "string") {
          return `"${circularValue}"`;
        }
        if (circularValue == null) {
          return circularValue;
        }
        if (circularValue === Error || circularValue === TypeError) {
          return {
            toString() {
              throw new TypeError("Converting circular structure to JSON");
            }
          };
        }
        throw new TypeError('The "circularValue" argument must be of type string or the value null or undefined');
      }
      return '"[Circular]"';
    }
    function getDeterministicOption(options) {
      let value;
      if (hasOwnProperty2.call(options, "deterministic")) {
        value = options.deterministic;
        if (typeof value !== "boolean" && typeof value !== "function") {
          throw new TypeError('The "deterministic" argument must be of type boolean or comparator function');
        }
      }
      return value === void 0 ? true : value;
    }
    function getBooleanOption(options, key) {
      let value;
      if (hasOwnProperty2.call(options, key)) {
        value = options[key];
        if (typeof value !== "boolean") {
          throw new TypeError(`The "${key}" argument must be of type boolean`);
        }
      }
      return value === void 0 ? true : value;
    }
    function getPositiveIntegerOption(options, key) {
      let value;
      if (hasOwnProperty2.call(options, key)) {
        value = options[key];
        if (typeof value !== "number") {
          throw new TypeError(`The "${key}" argument must be of type number`);
        }
        if (!Number.isInteger(value)) {
          throw new TypeError(`The "${key}" argument must be an integer`);
        }
        if (value < 1) {
          throw new RangeError(`The "${key}" argument must be >= 1`);
        }
      }
      return value === void 0 ? Infinity : value;
    }
    function getItemCount(number) {
      if (number === 1) {
        return "1 item";
      }
      return `${number} items`;
    }
    function getUniqueReplacerSet(replacerArray) {
      const replacerSet = /* @__PURE__ */ new Set();
      for (const value of replacerArray) {
        if (typeof value === "string" || typeof value === "number") {
          replacerSet.add(String(value));
        }
      }
      return replacerSet;
    }
    function getStrictOption(options) {
      if (hasOwnProperty2.call(options, "strict")) {
        const value = options.strict;
        if (typeof value !== "boolean") {
          throw new TypeError('The "strict" argument must be of type boolean');
        }
        if (value) {
          return (value2) => {
            let message = `Object can not safely be stringified. Received type ${typeof value2}`;
            if (typeof value2 !== "function") message += ` (${value2.toString()})`;
            throw new Error(message);
          };
        }
      }
    }
    function configure(options) {
      options = { ...options };
      const fail = getStrictOption(options);
      if (fail) {
        if (options.bigint === void 0) {
          options.bigint = false;
        }
        if (!("circularValue" in options)) {
          options.circularValue = Error;
        }
      }
      const circularValue = getCircularValueOption(options);
      const bigint = getBooleanOption(options, "bigint");
      const deterministic = getDeterministicOption(options);
      const comparator = typeof deterministic === "function" ? deterministic : void 0;
      const maximumDepth = getPositiveIntegerOption(options, "maximumDepth");
      const maximumBreadth = getPositiveIntegerOption(options, "maximumBreadth");
      function stringifyFnReplacer(key, parent, stack, replacer, spacer, indentation) {
        let value = parent[key];
        if (typeof value === "object" && value !== null && typeof value.toJSON === "function") {
          value = value.toJSON(key);
        }
        value = replacer.call(parent, key, value);
        switch (typeof value) {
          case "string":
            return strEscape(value);
          case "object": {
            if (value === null) {
              return "null";
            }
            if (stack.indexOf(value) !== -1) {
              return circularValue;
            }
            let res = "";
            let join = ",";
            const originalIndentation = indentation;
            if (Array.isArray(value)) {
              if (value.length === 0) {
                return "[]";
              }
              if (maximumDepth < stack.length + 1) {
                return '"[Array]"';
              }
              stack.push(value);
              if (spacer !== "") {
                indentation += spacer;
                res += `
${indentation}`;
                join = `,
${indentation}`;
              }
              const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
              let i = 0;
              for (; i < maximumValuesToStringify - 1; i++) {
                const tmp2 = stringifyFnReplacer(String(i), value, stack, replacer, spacer, indentation);
                res += tmp2 !== void 0 ? tmp2 : "null";
                res += join;
              }
              const tmp = stringifyFnReplacer(String(i), value, stack, replacer, spacer, indentation);
              res += tmp !== void 0 ? tmp : "null";
              if (value.length - 1 > maximumBreadth) {
                const removedKeys = value.length - maximumBreadth - 1;
                res += `${join}"... ${getItemCount(removedKeys)} not stringified"`;
              }
              if (spacer !== "") {
                res += `
${originalIndentation}`;
              }
              stack.pop();
              return `[${res}]`;
            }
            let keys2 = Object.keys(value);
            const keyLength = keys2.length;
            if (keyLength === 0) {
              return "{}";
            }
            if (maximumDepth < stack.length + 1) {
              return '"[Object]"';
            }
            let whitespace = "";
            let separator = "";
            if (spacer !== "") {
              indentation += spacer;
              join = `,
${indentation}`;
              whitespace = " ";
            }
            const maximumPropertiesToStringify = Math.min(keyLength, maximumBreadth);
            if (deterministic && !isTypedArrayWithEntries(value)) {
              keys2 = sort(keys2, comparator);
            }
            stack.push(value);
            for (let i = 0; i < maximumPropertiesToStringify; i++) {
              const key2 = keys2[i];
              const tmp = stringifyFnReplacer(key2, value, stack, replacer, spacer, indentation);
              if (tmp !== void 0) {
                res += `${separator}${strEscape(key2)}:${whitespace}${tmp}`;
                separator = join;
              }
            }
            if (keyLength > maximumBreadth) {
              const removedKeys = keyLength - maximumBreadth;
              res += `${separator}"...":${whitespace}"${getItemCount(removedKeys)} not stringified"`;
              separator = join;
            }
            if (spacer !== "" && separator.length > 1) {
              res = `
${indentation}${res}
${originalIndentation}`;
            }
            stack.pop();
            return `{${res}}`;
          }
          case "number":
            return isFinite(value) ? String(value) : fail ? fail(value) : "null";
          case "boolean":
            return value === true ? "true" : "false";
          case "undefined":
            return void 0;
          case "bigint":
            if (bigint) {
              return String(value);
            }
          // fallthrough
          default:
            return fail ? fail(value) : void 0;
        }
      }
      function stringifyArrayReplacer(key, value, stack, replacer, spacer, indentation) {
        if (typeof value === "object" && value !== null && typeof value.toJSON === "function") {
          value = value.toJSON(key);
        }
        switch (typeof value) {
          case "string":
            return strEscape(value);
          case "object": {
            if (value === null) {
              return "null";
            }
            if (stack.indexOf(value) !== -1) {
              return circularValue;
            }
            const originalIndentation = indentation;
            let res = "";
            let join = ",";
            if (Array.isArray(value)) {
              if (value.length === 0) {
                return "[]";
              }
              if (maximumDepth < stack.length + 1) {
                return '"[Array]"';
              }
              stack.push(value);
              if (spacer !== "") {
                indentation += spacer;
                res += `
${indentation}`;
                join = `,
${indentation}`;
              }
              const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
              let i = 0;
              for (; i < maximumValuesToStringify - 1; i++) {
                const tmp2 = stringifyArrayReplacer(String(i), value[i], stack, replacer, spacer, indentation);
                res += tmp2 !== void 0 ? tmp2 : "null";
                res += join;
              }
              const tmp = stringifyArrayReplacer(String(i), value[i], stack, replacer, spacer, indentation);
              res += tmp !== void 0 ? tmp : "null";
              if (value.length - 1 > maximumBreadth) {
                const removedKeys = value.length - maximumBreadth - 1;
                res += `${join}"... ${getItemCount(removedKeys)} not stringified"`;
              }
              if (spacer !== "") {
                res += `
${originalIndentation}`;
              }
              stack.pop();
              return `[${res}]`;
            }
            stack.push(value);
            let whitespace = "";
            if (spacer !== "") {
              indentation += spacer;
              join = `,
${indentation}`;
              whitespace = " ";
            }
            let separator = "";
            for (const key2 of replacer) {
              const tmp = stringifyArrayReplacer(key2, value[key2], stack, replacer, spacer, indentation);
              if (tmp !== void 0) {
                res += `${separator}${strEscape(key2)}:${whitespace}${tmp}`;
                separator = join;
              }
            }
            if (spacer !== "" && separator.length > 1) {
              res = `
${indentation}${res}
${originalIndentation}`;
            }
            stack.pop();
            return `{${res}}`;
          }
          case "number":
            return isFinite(value) ? String(value) : fail ? fail(value) : "null";
          case "boolean":
            return value === true ? "true" : "false";
          case "undefined":
            return void 0;
          case "bigint":
            if (bigint) {
              return String(value);
            }
          // fallthrough
          default:
            return fail ? fail(value) : void 0;
        }
      }
      function stringifyIndent(key, value, stack, spacer, indentation) {
        switch (typeof value) {
          case "string":
            return strEscape(value);
          case "object": {
            if (value === null) {
              return "null";
            }
            if (typeof value.toJSON === "function") {
              value = value.toJSON(key);
              if (typeof value !== "object") {
                return stringifyIndent(key, value, stack, spacer, indentation);
              }
              if (value === null) {
                return "null";
              }
            }
            if (stack.indexOf(value) !== -1) {
              return circularValue;
            }
            const originalIndentation = indentation;
            if (Array.isArray(value)) {
              if (value.length === 0) {
                return "[]";
              }
              if (maximumDepth < stack.length + 1) {
                return '"[Array]"';
              }
              stack.push(value);
              indentation += spacer;
              let res2 = `
${indentation}`;
              const join2 = `,
${indentation}`;
              const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
              let i = 0;
              for (; i < maximumValuesToStringify - 1; i++) {
                const tmp2 = stringifyIndent(String(i), value[i], stack, spacer, indentation);
                res2 += tmp2 !== void 0 ? tmp2 : "null";
                res2 += join2;
              }
              const tmp = stringifyIndent(String(i), value[i], stack, spacer, indentation);
              res2 += tmp !== void 0 ? tmp : "null";
              if (value.length - 1 > maximumBreadth) {
                const removedKeys = value.length - maximumBreadth - 1;
                res2 += `${join2}"... ${getItemCount(removedKeys)} not stringified"`;
              }
              res2 += `
${originalIndentation}`;
              stack.pop();
              return `[${res2}]`;
            }
            let keys2 = Object.keys(value);
            const keyLength = keys2.length;
            if (keyLength === 0) {
              return "{}";
            }
            if (maximumDepth < stack.length + 1) {
              return '"[Object]"';
            }
            indentation += spacer;
            const join = `,
${indentation}`;
            let res = "";
            let separator = "";
            let maximumPropertiesToStringify = Math.min(keyLength, maximumBreadth);
            if (isTypedArrayWithEntries(value)) {
              res += stringifyTypedArray(value, join, maximumBreadth);
              keys2 = keys2.slice(value.length);
              maximumPropertiesToStringify -= value.length;
              separator = join;
            }
            if (deterministic) {
              keys2 = sort(keys2, comparator);
            }
            stack.push(value);
            for (let i = 0; i < maximumPropertiesToStringify; i++) {
              const key2 = keys2[i];
              const tmp = stringifyIndent(key2, value[key2], stack, spacer, indentation);
              if (tmp !== void 0) {
                res += `${separator}${strEscape(key2)}: ${tmp}`;
                separator = join;
              }
            }
            if (keyLength > maximumBreadth) {
              const removedKeys = keyLength - maximumBreadth;
              res += `${separator}"...": "${getItemCount(removedKeys)} not stringified"`;
              separator = join;
            }
            if (separator !== "") {
              res = `
${indentation}${res}
${originalIndentation}`;
            }
            stack.pop();
            return `{${res}}`;
          }
          case "number":
            return isFinite(value) ? String(value) : fail ? fail(value) : "null";
          case "boolean":
            return value === true ? "true" : "false";
          case "undefined":
            return void 0;
          case "bigint":
            if (bigint) {
              return String(value);
            }
          // fallthrough
          default:
            return fail ? fail(value) : void 0;
        }
      }
      function stringifySimple(key, value, stack) {
        switch (typeof value) {
          case "string":
            return strEscape(value);
          case "object": {
            if (value === null) {
              return "null";
            }
            if (typeof value.toJSON === "function") {
              value = value.toJSON(key);
              if (typeof value !== "object") {
                return stringifySimple(key, value, stack);
              }
              if (value === null) {
                return "null";
              }
            }
            if (stack.indexOf(value) !== -1) {
              return circularValue;
            }
            let res = "";
            const hasLength = value.length !== void 0;
            if (hasLength && Array.isArray(value)) {
              if (value.length === 0) {
                return "[]";
              }
              if (maximumDepth < stack.length + 1) {
                return '"[Array]"';
              }
              stack.push(value);
              const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
              let i = 0;
              for (; i < maximumValuesToStringify - 1; i++) {
                const tmp2 = stringifySimple(String(i), value[i], stack);
                res += tmp2 !== void 0 ? tmp2 : "null";
                res += ",";
              }
              const tmp = stringifySimple(String(i), value[i], stack);
              res += tmp !== void 0 ? tmp : "null";
              if (value.length - 1 > maximumBreadth) {
                const removedKeys = value.length - maximumBreadth - 1;
                res += `,"... ${getItemCount(removedKeys)} not stringified"`;
              }
              stack.pop();
              return `[${res}]`;
            }
            let keys2 = Object.keys(value);
            const keyLength = keys2.length;
            if (keyLength === 0) {
              return "{}";
            }
            if (maximumDepth < stack.length + 1) {
              return '"[Object]"';
            }
            let separator = "";
            let maximumPropertiesToStringify = Math.min(keyLength, maximumBreadth);
            if (hasLength && isTypedArrayWithEntries(value)) {
              res += stringifyTypedArray(value, ",", maximumBreadth);
              keys2 = keys2.slice(value.length);
              maximumPropertiesToStringify -= value.length;
              separator = ",";
            }
            if (deterministic) {
              keys2 = sort(keys2, comparator);
            }
            stack.push(value);
            for (let i = 0; i < maximumPropertiesToStringify; i++) {
              const key2 = keys2[i];
              const tmp = stringifySimple(key2, value[key2], stack);
              if (tmp !== void 0) {
                res += `${separator}${strEscape(key2)}:${tmp}`;
                separator = ",";
              }
            }
            if (keyLength > maximumBreadth) {
              const removedKeys = keyLength - maximumBreadth;
              res += `${separator}"...":"${getItemCount(removedKeys)} not stringified"`;
            }
            stack.pop();
            return `{${res}}`;
          }
          case "number":
            return isFinite(value) ? String(value) : fail ? fail(value) : "null";
          case "boolean":
            return value === true ? "true" : "false";
          case "undefined":
            return void 0;
          case "bigint":
            if (bigint) {
              return String(value);
            }
          // fallthrough
          default:
            return fail ? fail(value) : void 0;
        }
      }
      function stringify2(value, replacer, space) {
        if (arguments.length > 1) {
          let spacer = "";
          if (typeof space === "number") {
            spacer = " ".repeat(Math.min(space, 10));
          } else if (typeof space === "string") {
            spacer = space.slice(0, 10);
          }
          if (replacer != null) {
            if (typeof replacer === "function") {
              return stringifyFnReplacer("", { "": value }, [], replacer, spacer, "");
            }
            if (Array.isArray(replacer)) {
              return stringifyArrayReplacer("", value, [], getUniqueReplacerSet(replacer), spacer, "");
            }
          }
          if (spacer.length !== 0) {
            return stringifyIndent("", value, [], spacer, "");
          }
        }
        return stringifySimple("", value, []);
      }
      return stringify2;
    }
  })(safeStableStringify, safeStableStringify.exports);
  return safeStableStringify.exports;
}
var dist$1 = {};
var hasRequiredDist$1;
function requireDist$1() {
  if (hasRequiredDist$1) return dist$1;
  hasRequiredDist$1 = 1;
  var RGX = /^(-?(?:\d+)?\.?\d+) *(m(?:illiseconds?|s(?:ecs?)?))?(s(?:ec(?:onds?|s)?)?)?(m(?:in(?:utes?|s)?)?)?(h(?:ours?|rs?)?)?(d(?:ays?)?)?(w(?:eeks?|ks?)?)?(y(?:ears?|rs?)?)?$/, SEC = 1e3, MIN = SEC * 60, HOUR = MIN * 60, DAY = HOUR * 24, YEAR = DAY * 365.25;
  function parse(val) {
    var num, arr = val.toLowerCase().match(RGX);
    if (arr != null && (num = parseFloat(arr[1]))) {
      if (arr[3] != null) return num * SEC;
      if (arr[4] != null) return num * MIN;
      if (arr[5] != null) return num * HOUR;
      if (arr[6] != null) return num * DAY;
      if (arr[7] != null) return num * DAY * 7;
      if (arr[8] != null) return num * YEAR;
      return num;
    }
  }
  function fmt(val, pfx, str, long) {
    var num = (val | 0) === val ? val : ~~(val + 0.5);
    return pfx + num + (long ? " " + str + (num != 1 ? "s" : "") : str[0]);
  }
  function format(num, long) {
    var pfx = num < 0 ? "-" : "", abs = num < 0 ? -num : num;
    if (abs < SEC) return num + (long ? " ms" : "ms");
    if (abs < MIN) return fmt(abs / SEC, pfx, "second", long);
    if (abs < HOUR) return fmt(abs / MIN, pfx, "minute", long);
    if (abs < DAY) return fmt(abs / HOUR, pfx, "hour", long);
    if (abs < YEAR) return fmt(abs / DAY, pfx, "day", long);
    return fmt(abs / YEAR, pfx, "year", long);
  }
  dist$1.format = format;
  dist$1.parse = parse;
  return dist$1;
}
var encryption_js;
var hasRequiredEncryption_js;
function requireEncryption_js() {
  if (hasRequiredEncryption_js) return encryption_js;
  hasRequiredEncryption_js = 1;
  var __defProp2 = Object.defineProperty;
  var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp2(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
  var src_exports = {};
  __export(src_exports, {
    default: () => src_default
  });
  encryption_js = __toCommonJS(src_exports);
  var import_crypto_js4 = require$$0;
  var import_buffer = require$$1;
  var Base642 = class {
    encode(data, encoding) {
      if (typeof data === "string") {
        return import_buffer.Buffer.from(data, encoding).toString("base64");
      }
      return import_buffer.Buffer.from(data).toString("base64");
    }
    decode(encoded, encoding = "utf8", strict = false) {
      if (import_buffer.Buffer.isBuffer(encoded)) {
        return encoded.toString(encoding);
      }
      const decoded = import_buffer.Buffer.from(encoded, "base64").toString(encoding);
      const isInvalid = this.encode(decoded, encoding) !== encoded;
      if (strict && isInvalid) {
        throw new Error("Cannot decode malformed value");
      }
      return isInvalid ? null : decoded;
    }
    urlEncode(data, encoding) {
      const encoded = typeof data === "string" ? this.encode(data, encoding) : this.encode(data);
      return encoded.replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
    }
    urlDecode(encoded, encoding = "utf8", strict = false) {
      if (import_buffer.Buffer.isBuffer(encoded)) {
        return encoded.toString(encoding);
      }
      const decoded = import_buffer.Buffer.from(encoded, "base64").toString(encoding);
      const isInvalid = this.urlEncode(decoded, encoding) !== encoded;
      if (strict && isInvalid) {
        throw new Error("Cannot urlDecode malformed value");
      }
      return isInvalid ? null : decoded;
    }
  };
  var base642 = new Base642();
  var Exception = class extends Error {
    constructor(message, options) {
      super(message, options);
      const ErrorConstructor = this.constructor;
      this.name = ErrorConstructor.name;
      this.message = message || ErrorConstructor.message || "";
      this.status = options?.status || ErrorConstructor.status || 500;
      const code = options?.code || ErrorConstructor.code;
      if (code !== void 0) {
        this.code = code;
      }
      const help = ErrorConstructor.help;
      if (help !== void 0) {
        this.help = help;
      }
    }
    get [Symbol.toStringTag]() {
      return this.constructor.name;
    }
    toString() {
      if (this.code) {
        return `${this.name} [${this.code}]: ${this.message}`;
      }
      return `${this.name}: ${this.message}`;
    }
  };
  var exceptions = {
    E_MISSING_APP_KEY: { message: "Invalid App Secret", status: 500, code: "E_INVALID_APP_KEY" },
    E_INSECURE_APP_KEY: { message: "Insecure App Secret", status: 500, code: "E_INSECURE_APP_KEY" }
  };
  var AppKeyException = class extends Exception {
    static missingAppKey() {
      const details = exceptions["E_MISSING_APP_KEY"];
      const error = new this(details.message, details);
      return error;
    }
    static insecureAppKey() {
      const details = exceptions["E_INSECURE_APP_KEY"];
      const error = new this(details.message, details);
      return error;
    }
  };
  var import_crypto_js = require$$0;
  function timingSafeEqual(a, b) {
    if (!Buffer.isBuffer(a)) {
      throw new TypeError("First argument must be a buffer");
    }
    if (!Buffer.isBuffer(b)) {
      throw new TypeError("Second argument must be a buffer");
    }
    if (a.length !== b.length) {
      return false;
    }
    var len = a.length;
    var out = 0;
    var i = -1;
    while (++i < len) {
      out |= a[i] ^ b[i];
    }
    return out === 0;
  }
  function safeEqual(trustedValue, userInput) {
    return timingSafeEqual(Buffer.from(trustedValue), Buffer.from(userInput));
  }
  var Hmac = class {
    constructor(key) {
      this.key = key;
    }
    /**
     * Generate the hmac
     */
    generate(value) {
      return (0, import_crypto_js.SHA256)(value, { key: this.key }).toString(import_crypto_js.enc.Base64url);
    }
    /**
     * Compare raw value against an existing hmac
     */
    compare(value, existingHmac) {
      return safeEqual(this.generate(value), existingHmac);
    }
  };
  var import_secure_json_parse = requireSecureJsonParse();
  function safeParse(jsonString, reviver) {
    return (0, import_secure_json_parse.parse)(jsonString, reviver, {
      protoAction: "remove",
      constructorAction: "remove"
    });
  }
  var import_safe_stable_stringify = requireSafeStableStringify();
  var stringify = (0, import_safe_stable_stringify.configure)({
    bigint: false,
    circularValue: void 0,
    deterministic: false
  });
  function jsonStringifyReplacer(replacer) {
    return function(key, value) {
      const val = replacer ? replacer.call(this, key, value) : value;
      if (typeof val === "bigint") {
        return val.toString();
      }
      return val;
    };
  }
  function safeStringify(value, replacer, space) {
    return stringify(value, jsonStringifyReplacer(replacer), space);
  }
  var json = {
    safeParse,
    safeStringify
  };
  var json_default = json;
  var import_ms = requireDist$1();
  var milliseconds_default = {
    format(milliseconds, long) {
      return (0, import_ms.format)(milliseconds, long);
    },
    /**
     * Parse time expression string to milliseconds. The number value
     * is returned as it is, considering it is already in milliseconds
     */
    parse(duration) {
      if (typeof duration === "number") {
        return duration;
      }
      const milliseconds = (0, import_ms.parse)(duration);
      if (milliseconds === void 0) {
        throw new Error(`Invalid duration expression "${duration}"`);
      }
      return milliseconds;
    }
  };
  var MessageBuilder = class {
    #getExpiryDate(expiresIn) {
      if (!expiresIn) {
        return void 0;
      }
      const expiryMs = milliseconds_default.parse(expiresIn);
      return new Date(Date.now() + expiryMs);
    }
    /**
     * Returns a boolean telling, if message has been expired or not
     */
    #isExpired(message) {
      if (!message.expiryDate) {
        return false;
      }
      const expiryDate = new Date(message.expiryDate);
      return Number.isNaN(expiryDate.getTime()) || expiryDate < /* @__PURE__ */ new Date();
    }
    /**
     * Builds a message by encoding expiry date and purpose inside it.
     */
    build(message, expiresIn, purpose) {
      const expiryDate = this.#getExpiryDate(expiresIn);
      return json_default.safeStringify({ message, purpose, expiryDate });
    }
    /**
     * Verifies the message for expiry and purpose.
     */
    verify(message, purpose) {
      const parsed = json_default.safeParse(message);
      if (typeof parsed !== "object" || !parsed) {
        return null;
      }
      if (!parsed.message) {
        return null;
      }
      if (parsed.purpose !== purpose) {
        return null;
      }
      if (this.#isExpired(parsed)) {
        return null;
      }
      return parsed.message;
    }
  };
  var import_buffer2 = require$$1;
  var import_crypto_js2 = require$$0;
  function generateRandom2(size) {
    const bits = (size + 1) * 6;
    const buffer = import_buffer2.Buffer.from(import_crypto_js2.lib.WordArray.random(Math.ceil(bits / 8)).toString(import_crypto_js2.enc.Hex), "hex");
    return base642.urlEncode(buffer).slice(0, size);
  }
  var import_crypto_js3 = require$$0;
  var MessageVerifier = class {
    constructor(secret) {
      this.secret = secret;
      this.cryptoKey = Buffer.from((0, import_crypto_js3.SHA256)(this.secret).toString(import_crypto_js3.enc.Base64), "base64");
      this.separator = ".";
    }
    /**
     * Signs a value with the secret key. The signed value is not encrypted, but just
     * signed for avoiding tampering to the original message.
     *
     * Any `JSON.stringify` valid value is accepted by this method.
     */
    sign(value, expiresAt, purpose) {
      if (value === null || value === void 0) {
        throw new Exception('"MessageVerifier.sign" cannot sign null or undefined values');
      }
      const encoded = base642.urlEncode(new MessageBuilder().build(value, expiresAt, purpose));
      return `${encoded}${this.separator}${new Hmac(this.cryptoKey).generate(encoded)}`;
    }
    /**
     * Unsign a previously signed value with an optional purpose
     */
    unsign(value, purpose) {
      if (typeof value !== "string") {
        throw new Exception('"MessageVerifier.unsign" expects a string value');
      }
      const [encoded, hash] = value.split(this.separator);
      if (!encoded || !hash) {
        return null;
      }
      const decoded = base642.urlDecode(encoded);
      if (!decoded) {
        return null;
      }
      const isValid = new Hmac(this.cryptoKey).compare(encoded, hash);
      return isValid ? new MessageBuilder().verify(decoded, purpose) : null;
    }
  };
  var Encryption2 = class {
    constructor(options) {
      this.options = options;
      this.separator = ".";
      this.base64 = base642;
      this.validateSecret();
      this.algorithm = options.algorithm || "aes-256-cbc";
      this.cryptoKey = (0, import_crypto_js4.SHA256)(this.options.secret);
      this.verifier = new MessageVerifier(this.options.secret);
    }
    /**
     * Validates the app secret
     */
    validateSecret() {
      if (typeof this.options.secret !== "string") {
        throw AppKeyException.missingAppKey();
      }
      if (this.options.secret.length < 16) {
        throw AppKeyException.insecureAppKey();
      }
    }
    /**
     * Encrypt value with optional expiration and purpose
     */
    encrypt(value, expiresAt, purpose) {
      const ivString = generateRandom2(16);
      const iv = import_crypto_js4.lib.WordArray.create(Buffer.from(ivString, "utf8"));
      const cipher = import_crypto_js4.algo.AES.createEncryptor(this.cryptoKey, { iv });
      const encodedValue = new MessageBuilder().build(value, expiresAt, purpose);
      const encrypted = Buffer.concat(
        [cipher.process(import_crypto_js4.lib.WordArray.create(Buffer.from(encodedValue, "utf8"))), cipher.finalize()].map((d) => {
          d.clamp();
          return Buffer.from(d.toString(import_crypto_js4.enc.Hex), "hex");
        })
      );
      const result = `${this.base64.urlEncode(encrypted)}${this.separator}${iv.toString(import_crypto_js4.enc.Base64url)}`;
      return `${result}${this.separator}${new Hmac(Buffer.from(this.cryptoKey.toString(import_crypto_js4.enc.Hex), "hex")).generate(
        result
      )}`;
    }
    /**
     * Decrypt value and verify it against a purpose
     */
    decrypt(value, purpose) {
      if (typeof value !== "string") {
        throw new Exception('"Encryption.decrypt" expects a string value');
      }
      const [encryptedEncoded, ivEncoded, hash] = value.split(this.separator);
      if (!encryptedEncoded || !ivEncoded || !hash) {
        return null;
      }
      const encrypted = this.base64.urlDecode(encryptedEncoded, "base64");
      if (!encrypted) {
        return null;
      }
      const iv = this.base64.urlDecode(ivEncoded);
      if (!iv) {
        return null;
      }
      const isValidHmac = new Hmac(Buffer.from(this.cryptoKey.toString(import_crypto_js4.enc.Hex), "hex")).compare(
        `${encryptedEncoded}${this.separator}${ivEncoded}`,
        hash
      );
      if (!isValidHmac) {
        return null;
      }
      const ivWord = import_crypto_js4.lib.WordArray.create(Buffer.from(iv, "utf8"));
      try {
        const decipher = import_crypto_js4.algo.AES.createDecryptor(this.cryptoKey, { iv: ivWord });
        const decrypted = decipher.process(import_crypto_js4.lib.WordArray.create(Buffer.from(encrypted, "base64"))).toString(import_crypto_js4.enc.Utf8) + decipher.finalize().toString(import_crypto_js4.enc.Utf8);
        const parsed = new MessageBuilder().verify(decrypted, purpose);
        return parsed;
      } catch (error) {
        return null;
      }
    }
  };
  var src_default = Encryption2;
  return encryption_js;
}
var encryption_jsExports = requireEncryption_js();
const Encryption = /* @__PURE__ */ getDefaultExportFromCjs(encryption_jsExports);
const slugifyOptions = {
  lower: true,
  replacement: "_",
  trim: true,
  remove: /[*+~.()'"!:@]/g
};
const getStoreUserData = () => electron.app.getPath("userData");
if (!node_fs.statSync(getStoreUserData(), { throwIfNoEntry: false })) node_fs.mkdirSync(getStoreUserData(), { recursive: true });
const createYmlStore = (name, options = {}) => new main.Conf({
  ext: ".yml",
  ...options,
  serializer: {
    read(raw) {
      return yaml.parse(raw);
    },
    write(value) {
      return yaml.stringify(value);
    }
  },
  name
});
const createEncryptedStore = (name, options = {}) => {
  const encryptionKeyPath = path.join(getStoreUserData(), slugify(name, slugifyOptions) + ".key");
  const enc = new Encryption({ secret: base64.encode(name) });
  if (!node_fs.existsSync(encryptionKeyPath)) node_fs.writeFileSync(encryptionKeyPath, enc.encrypt({ name, secret: generateRandom(32) }));
  const encryptionKey = node_fs.readFileSync(encryptionKeyPath).toString("utf8");
  const payload = enc.decrypt(encryptionKey);
  if (!payload || name !== payload?.name) throw new Error("Invalid encryption key");
  if (!payload.secret) throw new Error("Invalid encryption secret");
  const storeEncryptor = new Encryption({ secret: payload.secret });
  return new main.Conf({
    ext: ".ytm",
    ...options,
    serializer: {
      read(raw) {
        return storeEncryptor.decrypt(raw);
      },
      write(value) {
        return storeEncryptor.encrypt(value);
      }
    },
    name
  });
};
const appIconPath = path$1.join(__dirname, "./chunks/favicon-Dt6mytzk.ico");
function fromMainEvent(win, eventName) {
  function addHandler(handler) {
    win.on(eventName, handler);
  }
  function removeHandler(handler) {
    win.off(eventName, handler);
  }
  return rxjs.fromEventPattern(addHandler, removeHandler);
}
const cssLogger = console$1.createLogger("webContentUtils");
const cssWindowIdMap = {};
async function rootWindowInjectCustomCss({ webContents }, css) {
  const wid = String(webContents.id);
  if (cssWindowIdMap[wid]) await rootWindowClearCustomCss({ webContents });
  try {
    cssWindowIdMap[wid] = await webContents.insertCSS(css);
    return true;
  } catch (error) {
    cssLogger.error(`Failed to inject CSS: ${error?.message || "Unknown error"}`);
    return false;
  }
}
async function rootWindowClearCustomCss({ webContents }) {
  const wid = String(webContents.id);
  if (!cssWindowIdMap[wid]) return false;
  try {
    await webContents.removeInsertedCSS(cssWindowIdMap[wid]);
    delete cssWindowIdMap[wid];
    cssLogger.debug(`CSS cleared for ${wid}`);
    return true;
  } catch (error) {
    cssLogger.error(`Failed to clear CSS: ${error?.message || "Unknown error"}`);
    return false;
  }
}
function lockSizeToParent(win, options = { resize: "both" }) {
  return (view) => {
    const lockSides = options?.resize ?? "both";
    const handleResize = (_ev) => {
      const { width, height } = win.getContentBounds();
      const { x, y, width: viewWidth, height: viewHeight } = view.getBounds();
      const newWidth = width - x;
      const newHeight = height - y;
      view.setBounds({
        x,
        y,
        ...lockSides !== "width" ? { height: newHeight } : { height: viewHeight },
        ...lockSides !== "height" ? { width: newWidth } : { width: viewWidth }
      });
    };
    const handleStates = () => {
      return handleResize();
    };
    win.on("show", handleStates);
    win.on("will-resize", handleResize);
    win.on("maximize", handleStates);
    win.on("unmaximize", handleStates);
    win.once("close", () => {
      win.off("show", handleStates);
      win.off("will-resize", handleResize);
      win.off("maximize", handleStates);
      win.off("unmaximize", handleStates);
    });
  };
}
function getWindowState(win) {
  if (!win || win.isDestroyed()) return null;
  const { maximizable, minimizable, movable, fullScreen, fullScreenable, menuBarVisible, id, resizable, title, closable, autoHideMenuBar } = win;
  return {
    id,
    maximized: win.isMaximized(),
    minimized: win.isMinimized(),
    alwaysOnTop: win.isAlwaysOnTop(),
    closable,
    maximizable,
    minimizable,
    movable,
    resizable,
    menuBarVisible,
    simpleFullscreen: utils.platform.isMacOS && win.isSimpleFullScreen(),
    autoHideMenuBar,
    fullScreen,
    fullScreenable,
    title,
    platform: utils.platform,
    ...win.getBounds()
  };
}
function getWindowStateFromContext({ main: win, views: { youtubeView } } = {}) {
  if (!win || win.isDestroyed()) return null;
  const historyEntry = youtubeView && youtubeView.webContents.navigationHistory.getEntryAtIndex(youtubeView.webContents.navigationHistory.getActiveIndex());
  return {
    ...getWindowState(win),
    ...win.getBounds(),
    navigation: historyEntry && new URL(historyEntry.url).hostname === devUtils.defaultUri.hostname && {
      canGoBack: youtubeView.webContents.navigationHistory.canGoBack(),
      index: youtubeView.webContents.navigationHistory.getActiveIndex()
    }
  };
}
const manualSyncEmitter = new rxjs.Subject();
const handleManualPushLog = console$1.createLogger("manualSyncEmitter.push");
const pushWindowStates = (contentsId) => manualSyncEmitter.next(contentsId);
function syncWindowStateToWebContents(win) {
  let hidden = false;
  return (view) => {
    const handles = {};
    const handleManualPush = (contentsId) => {
      handleManualPushLog.debug({ contentsId }, `pushing window state update for ${view.getTitle()}`);
      if (!contentsId) return handleStates();
      if (!view || view.isDestroyed() || view.id !== contentsId) return;
      return handleStates();
    };
    const handleStates = () => {
      if (hidden) return;
      const state = getWindowState(win);
      if (!state) view.send("windowState", state);
      else
        view.send(
          "windowState",
          Object.assign({}, state, {
            navigation: {
              canGoBack: view.navigationHistory.canGoBack(),
              index: view.navigationHistory.getActiveIndex()
            }
          })
        );
    };
    const subs = [];
    subs.push(
      ...["unmaximize", "maximize", "blur", "focus", "minimize", "show", "restore"].map(
        (d) => fromMainEvent(win, d).pipe(rxjs.tap(() => hidden = false)).subscribe(handleStates)
      ),
      ...["will-resize", "will-move"].map((d) => fromMainEvent(win, d).pipe(rxjs.debounceTime(50)).subscribe(handleStates)),
      fromMainEvent(win, "hide").subscribe(() => hidden = true),
      fromMainEvent(win.webContents, "did-navigate-in-page").subscribe(handleStates),
      fromMainEvent(win.webContents, "will-navigate").subscribe(handleStates),
      manualSyncEmitter.subscribe(handleManualPush)
    );
    if (utils.platform.isMacOS) {
      subs.push(...["enter-full-screen", "leave-full-screen"].map((d) => fromMainEvent(win, d).pipe(rxjs.delay(50)).subscribe(handleStates)));
    }
    win.once("close", () => {
      Object.entries(handles).forEach(([k, h]) => {
        h.forEach((handle) => win.off(k, handle));
      });
      subs.forEach((s) => !s.closed && s.unsubscribe());
    });
    return () => handleStates();
  };
}
function callWindowListeners(win, eventName, ...args) {
  return win.listeners(eventName).forEach((caller) => caller(null, ...args));
}
function getWindowFromContents(win) {
  return electron.BrowserWindow.fromWebContents(win);
}
const loadUrlOfWindow = (win, page) => {
  const hashPath = page?.replace(/^(\#?\/?)/, "#/") || "#/";
  if (utils.is.dev && process.env["ELECTRON_RENDERER_URL"]) {
    return win.loadURL(process.env["ELECTRON_RENDERER_URL"].replace(/\/?$/, hashPath));
  } else {
    const indexPath = path$1.join(__dirname, "../renderer/index.html");
    return win.loadFile(indexPath, { hash: hashPath });
  }
};
const loadUrlOfWebContents = (win, path2) => {
  const hashPath = path2?.replace(/^(\#?\/?)/, "#/") || "#/";
  if (utils.is.dev && process.env["ELECTRON_RENDERER_URL"]) {
    return win.loadURL(process.env["ELECTRON_RENDERER_URL"].replace(/\/?$/, hashPath));
  } else {
    const indexPath = path$1.join(__dirname, "../renderer/index.html");
    return win.loadFile(indexPath, { hash: hashPath });
  }
};
async function createAppWindow(appOptions) {
  let { parent, path: path2, minHeight, minWidth, maxHeight, maxWidth, height, width, top, showTaskBar, minimizeable, maximizeable, show } = appOptions ?? {};
  if (!path2) path2 = "/";
  const win = new electron.BrowserWindow({
    width: width ?? 800,
    height: height ?? 600,
    minWidth: minWidth ?? 800,
    minHeight: minHeight ?? 480,
    maxWidth,
    maxHeight,
    show: show ?? true,
    minimizable: minimizeable === true,
    maximizable: maximizeable === true,
    backgroundColor: "#000000",
    fullscreenable: !maxWidth && !maxWidth,
    icon: appIconPath,
    frame: false,
    parent,
    modal: parent && top === true,
    skipTaskbar: showTaskBar === false,
    darkTheme: true,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false,
      preload: path$1.join(__dirname, "../preload/api.js")
    }
  });
  await loadUrlOfWindow(win, path2);
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith("http")) {
      electron.shell.openExternal(url);
    }
    return { action: "deny" };
  });
  syncWindowStateToWebContents(win)(win.webContents);
  return win;
}
async function wrapWindowHandler(win, windowName, { width: defaultWidth, height: defaultHeight }) {
  const key = "window-state";
  const name = `window-state-${windowName}`;
  const store2 = createYmlStore(name);
  const defaultSize = {
    width: defaultWidth,
    height: defaultHeight
  };
  let state = null;
  const restore = () => store2.get(key, defaultSize);
  const getCurrentPosition = () => {
    const [x, y] = win.getPosition();
    const [width, height] = win.getSize();
    return {
      x,
      y,
      width,
      height,
      maximized: win.isMaximized()
    };
  };
  const windowWithinBounds = (windowState, bounds) => {
    return windowState.x >= bounds.x && windowState.y >= bounds.y && windowState.x + windowState.width <= bounds.x + bounds.width && windowState.y + windowState.height <= bounds.y + bounds.height;
  };
  const resetToDefaults = () => {
    const bounds = electron.screen.getPrimaryDisplay().bounds;
    return Object.assign({}, defaultSize, {
      x: (bounds.width - defaultSize.width) / 2,
      y: (bounds.height - defaultSize.height) / 2
    });
  };
  const ensureVisibleOnSomeDisplay = (windowState) => {
    const visible = electron.screen.getAllDisplays().some((display) => {
      return windowWithinBounds(windowState, display.bounds);
    });
    if (!visible) {
      return resetToDefaults();
    }
    return windowState;
  };
  const saveState = () => {
    if (!win.isMinimized() && !win.isMaximized()) {
      state = Object.assign({}, state, getCurrentPosition());
    }
    store2.set(key, state);
  };
  state = ensureVisibleOnSomeDisplay(restore());
  win.on("close", saveState);
  return { state, saveState };
}
async function onWindowLoad(win, callback, options = { once: false }) {
  if (!win.webContents.isLoading()) return await Promise.resolve(callback());
  if (options.once) return win.webContents.once("did-finish-load", () => callback());
  else return win.webContents.on("did-finish-load", () => callback());
}
async function waitMs(ms) {
  return await new Promise((resolve) => setTimeout(resolve, ms));
}
async function ipcPromise(view, channel, ...args) {
  let _timeout;
  view.webContents.send(channel, ...args);
  return await new Promise((resolve, reject) => {
    const responseChannelName = channel + "/response";
    const handler = (_ev, data) => {
      electron.ipcMain.off(responseChannelName, handler);
      if (_timeout) clearTimeout(_timeout);
      resolve(data);
    };
    electron.ipcMain.on(responseChannelName, handler);
    _timeout = setTimeout(() => {
      electron.ipcMain.off(responseChannelName, handler);
      reject(new Error("IPC Promise timeout."));
    }, 1e4);
  });
}
let isInitialized = false;
const fsLogger = (() => {
  const logDir = path$1.join(electron.app.getPath("userData"), "logs");
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }
  const logFile = path$1.join(logDir, `app_${dateFns.format(/* @__PURE__ */ new Date(), "yyyy-MM-dd_HH-mm-ss")}.log`);
  const writeStream = fs.createWriteStream(logFile, {
    flags: "w+",
    // append and create if doesn't exist
    highWaterMark: 64 * 1024,
    // 64KB buffer size
    encoding: "utf8"
  });
  process.on("SIGINT", () => writeStream.end());
  process.on("SIGTERM", () => writeStream.end());
  process.on("SIGQUIT", () => writeStream.end());
  process.on("SIGBREAK", () => writeStream.end());
  process.on("uncaughtException", (err) => {
    writeStream.write(`[uncaughtException]: ${err.message}
${err.stack}
`);
  });
  process.on("unhandledRejection", (reason, promise) => {
    writeStream.write(`[unhandledRejection]: ${reason}
${promise}
`);
  });
  const allowedLevels = [console$1.LogLevel.Error, console$1.LogLevel.Warning];
  return (source2, level, objects = []) => {
    if (!allowedLevels.includes(level)) return;
    writeStream.write(`[${source2}][${level}]: ${[objects].flat().join(" ") ?? ""}
`, () => {
      if (writeStream.writableEnded) {
        writeStream.end();
      }
    });
  };
})();
function initializeCustomElectronEnvironment() {
  if (isInitialized) {
    console$1.logger.error("app is already initializing");
    electron.app.quit();
    process.exit(0);
  }
  process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "true";
  if (!process.env.DEBUG) {
    console$1.Logger.enableProductionMode();
    console$1.Logger.outputs.push(fsLogger);
  }
  process.env.NODE_ENV = "production";
  electron.WebContentsView.prototype.invoke = function(channel, data) {
    return ipcPromise(this, channel, data);
  };
  isInitialized = true;
}
class ElectronEmitter extends require$$0$1 {
  constructor() {
    super();
  }
  on(type, listener) {
    super.on(type, listener);
    electron.ipcMain.on(type, listener);
    return this;
  }
  once(type, listener) {
    super.once(type, listener);
    electron.ipcMain.once(type, listener);
    return this;
  }
  emit(type, ...args) {
    const validEmit = super.emit(type, ...args);
    const validIpcEmit = electron.ipcMain.emit(type, ...args);
    return validEmit && validIpcEmit;
  }
  emitServer(type, ...args) {
    const validEmit = super.emit(type, ...args);
    return validEmit;
  }
  onServer(type, listener) {
    super.on(type, listener);
    return this;
  }
  handle = (type, listener) => {
    return electron.ipcMain.handle(type, listener);
  };
}
const serverMain = new ElectronEmitter();
const API_ROUTES = {
  TRACK_CURRENT: "api/track",
  TRACK_CURRENT_STATE: "api/track/state",
  TRACK_LIKE: "api/track/like",
  TRACK_DISLIKE: "api/track/dislike",
  TRACK_ACCENT: "api/track/accent",
  TRACK_CONTROL_NEXT: "api/track/next",
  TRACK_CONTROL_PREV: "api/track/prev",
  TRACK_CONTROL_FORWARD: "api/track/forward",
  TRACK_CONTROL_BACKWARD: "api/track/backward",
  TRACK_CONTROL_PLAY: "api/track/play",
  TRACK_CONTROL_SEEK: "api/track/seek",
  TRACK_CONTROL_PAUSE: "api/track/pause",
  TRACK_CONTROL_TOGGLE_PLAY: "api/track/toggle-play-state",
  TRACK_CONTROL_REPEAT: "api/track/repeat",
  TRACK_CONTROL_SHUFFLE: "api/track/shuffle",
  TRACK_SOCKET: "api/socket"
};
const IPC_EVENT_NAMES = {
  SERVER_SETTINGS_CHANGE: "settingsProvider.change",
  TRACK_TITLE_CHANGE: "track:title",
  TRACK_CHANGE: "track:change",
  TRACK_PLAYSTATE: "track:play-state",
  TRACK_CONTROL: "track:control",
  APP_UPDATE: "app.update",
  APP_UPDATE_CHECKING: "app.updateChecking",
  APP_UPDATE_PROGRESS: "app.updateProgress",
  APP_UPDATE_DOWNLOADED: "app.updateDownloaded",
  LAST_FM_AUTHORIZE: "lastfm.authorize",
  LAST_FM_STATUS: "lastfm.status",
  LAST_FM_PROFILE: "lastfm.profile",
  LAST_FM_TOGGLE: "lastfm.toggle",
  LAST_FM_SUBMIT_STATE: "lastfm.stateObserver",
  ...API_ROUTES
};
const workerModuleId = path$1.join(__dirname, "./chunks/worker-context-BZQmM64G.js");
class WorkerAgent {
  worker;
  constructor(operationModuleIdOrWorker, logToConsole = false) {
    if (operationModuleIdOrWorker instanceof node_worker_threads.Worker) {
      this.worker = operationModuleIdOrWorker;
      return;
    }
    const workerData = {
      operationModuleId: operationModuleIdOrWorker,
      logToConsole
    };
    const workerOptions = {
      workerData
    };
    this.worker = new node_worker_threads.Worker(workerModuleId, workerOptions);
  }
  runOperation(input) {
    const message = {
      type: "operationInput",
      value: input
    };
    this.worker.postMessage(message);
  }
  requestExit() {
    const message = { type: "end" };
    this.worker.postMessage(message);
  }
  on(event, callback) {
    return this.registerEventListener(this.worker.on, event, callback);
  }
  once(event, callback) {
    return this.registerEventListener(this.worker.once, event, callback);
  }
  registerEventListener(workerEventSubscriptionMethod, agentEvent, callback) {
    switch (agentEvent) {
      case "result":
        this.registerResultListener(workerEventSubscriptionMethod, callback);
        break;
      case "exit":
      case "error":
        workerEventSubscriptionMethod.call(this.worker, agentEvent, callback);
        break;
    }
    return this;
  }
  registerResultListener(workerSubscriptionMethod, callback) {
    workerSubscriptionMethod.call(this.worker, "message", (message) => {
      switch (message.type) {
        case "operationOutput":
          return callback(null, message.value);
        case "error":
          return callback(new Error(message.formattedError), null);
      }
    });
  }
}
const apiWorkerModuleId = path$1.join(__dirname, "./chunks/worker-CCTNrV6J.js");
const agent$1 = () => new WorkerAgent(apiWorkerModuleId);
const createApiWorker = async (api, parent) => {
  let worker = agent$1();
  if (parent) parent.on("close", () => worker.requestExit());
  const apiMap = {
    "api/routes": api.getRoutes,
    [API_ROUTES.TRACK_CONTROL_NEXT]: api.nextTrack,
    [API_ROUTES.TRACK_CONTROL_PREV]: api.prevTrack,
    [API_ROUTES.TRACK_CONTROL_BACKWARD]: api.backwardTrack,
    [API_ROUTES.TRACK_CONTROL_FORWARD]: api.forwardTrack,
    [API_ROUTES.TRACK_ACCENT]: api.getTrackAccent,
    [API_ROUTES.TRACK_CONTROL_PAUSE]: api.pauseTrack,
    [API_ROUTES.TRACK_CONTROL_PLAY]: api.playTrack,
    [API_ROUTES.TRACK_CONTROL_TOGGLE_PLAY]: api.toggleTrackPlayback,
    [API_ROUTES.TRACK_CONTROL_SEEK]: api.seekTrack,
    [API_ROUTES.TRACK_CURRENT]: api.getTrackInformation,
    [API_ROUTES.TRACK_CURRENT_STATE]: api.getTrackState,
    [API_ROUTES.TRACK_LIKE]: api.postTrackLike,
    [API_ROUTES.TRACK_DISLIKE]: api.postTrackDisLike
  };
  worker.on("result", (err, out) => {
    if (err) return console$1.logger.error(err);
    if (!out || typeof out !== "object" || !out.name) return;
    Promise.resolve(apiMap[out.name]?.bind(api, ...[out.data].flat())()).then((result) => {
      return Promise.resolve(worker?.runOperation({ name: "event", data: [out.id, result] }) ?? null);
    });
  });
  return new class {
    constructor() {
    }
    send(name, ...args) {
      worker.runOperation({ name, data: args });
    }
    async initialize(settings) {
      return await this.invoke("initialize", {
        config: { ...settings },
        routes: Object.keys(apiMap)
      });
    }
    async invoke(name, ...args) {
      return await new Promise((resolve, reject) => {
        worker.once("result", (err, data) => {
          if (err) reject(err);
          else resolve(data);
        });
        worker.runOperation({ name, data: args });
      });
    }
    async destroy() {
      if (!worker) return;
      worker.runOperation({ name: "destroy" });
      worker.requestExit();
      worker = null;
    }
  }();
};
function parseJson(value) {
  if (typeof value !== "string") {
    return null;
  }
  try {
    return JSON.parse(value);
  } catch (ex) {
    console.error(ex);
    return null;
  }
}
function stringifyJson(value) {
  return JSON.stringify(value);
}
function createSendHandler(view, event, options = {}) {
  return (...requestArgs) => new Promise((resolve, reject) => {
    const requestId = cuid2.createId();
    const handleResponse = (ev, requestIdFromClient, ...responsePayload) => {
      if (requestIdFromClient !== requestId) return;
      if (responsePayload[1] === "error") destroyPromise(new Error(responsePayload[2] ?? "Unknown error"));
      destroyPromise();
      resolve(responsePayload);
    };
    electron.ipcMain.on(`${event}/response.${requestId}`, handleResponse);
    view.webContents.send(event, {
      requestId,
      payload: requestArgs
    });
    const timeout = setTimeout(() => {
      destroyPromise(new Error(`Request timed out after ${options.timeout ?? 1e4}ms`));
    }, options.timeout ?? 1e4);
    const destroyPromise = (err) => {
      electron.ipcMain.off(`${event}/response.${requestId}`, handleResponse);
      clearTimeout(timeout);
      if (err) reject(err);
    };
    console$1.logger.debug("Sent plugin command event", event, requestId, requestArgs);
    return destroyPromise;
  });
}
class BaseProvider {
  constructor(name, displayName = name) {
    this.name = name;
    this.displayName = displayName;
    this._loggerInstance = console$1.createLogger("services").child(this.name);
  }
  __type = "service_provider";
  _providers = {};
  _loggerInstance;
  _views;
  get logger() {
    return this._loggerInstance;
  }
  log(...args) {
    return this._loggerInstance.debug(stringifyJson([...args]));
  }
  get views() {
    return this._views.views;
  }
  get windowContext() {
    return this._views;
  }
  async _ytmReady(retryCount = 0) {
    if (!this.views.youtubeView) return false;
    if (this.views.youtubeView.webContents.isDestroyed()) return false;
    if (this.views.youtubeView.webContents.isCrashed()) return false;
    if (this.views.youtubeView.webContents.isLoading()) await new Promise((resolve) => this.views.youtubeView.webContents.on("did-finish-load", resolve));
    const isReady = await this.views.youtubeView.webContents.executeJavaScript(`(window && window.isYTMLoaded && window.isYTMLoaded() && window.domUtils.playerApi().isReady())`);
    this.logger.debug("YTM ready:", isReady, { retryCount });
    if (!isReady && retryCount > 20) throw new Error("YTM was not able to initialize");
    if (!isReady) return await waitMs(500).then(() => this._ytmReady(retryCount + 1));
    return isReady;
  }
  async executeCommand(command, ...args) {
    return await createSendHandler(this.views.youtubeView, `plugins:${this.name}:cmd:${command}`)(...args);
  }
  async isYtmReady() {
    return await this._ytmReady(0);
  }
  getName() {
    return this.name;
  }
  getDisplayName() {
    return this.displayName;
  }
  __registerProviders(p) {
    this._providers = p.reduce((l, r) => ({ ...l, [r.getName()]: r }), {});
  }
  __registerWindows(views = {}) {
    this._views = views;
  }
  getProvider(name) {
    return this._providers[name];
  }
  queryProvider() {
    return Object.values(this._providers);
  }
}
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function("return this")();
var Symbol$1 = root.Symbol;
var objectProto$b = Object.prototype;
var hasOwnProperty$8 = objectProto$b.hasOwnProperty;
var nativeObjectToString$1 = objectProto$b.toString;
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$8.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$a = Object.prototype;
var nativeObjectToString = objectProto$a.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var symbolTag$2 = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag$2;
}
function arrayMap(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var isArray = Array.isArray;
var symbolProto$1 = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto$1 ? symbolProto$1.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray(value)) {
    return arrayMap(value, baseToString) + "";
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -Infinity ? "-0" : result;
}
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root["__core-js_shared__"];
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$9 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString.call(hasOwnProperty$7).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var WeakMap$1 = getNative(root, "WeakMap");
var objectCreate = Object.create;
var baseCreate = /* @__PURE__ */ function() {
  function object() {
  }
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
function copyArray(source2, array) {
  var index = -1, length = source2.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source2[index];
  }
  return array;
}
var defineProperty = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
function arrayEach(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty) {
    defineProperty(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var objectProto$8 = Object.prototype;
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$6.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
function copyObject(source2, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = void 0;
    if (newValue === void 0) {
      newValue = source2[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
var objectProto$7 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$7;
  return value === proto;
}
function baseTimes(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var argsTag$2 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$2;
}
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;
var isArguments = baseIsArguments(/* @__PURE__ */ function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$5.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
function stubFalse() {
  return false;
}
var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
var Buffer$2 = moduleExports$2 ? root.Buffer : void 0;
var nativeIsBuffer = Buffer$2 ? Buffer$2.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", errorTag$1 = "[object Error]", funcTag$1 = "[object Function]", mapTag$4 = "[object Map]", numberTag$2 = "[object Number]", objectTag$2 = "[object Object]", regexpTag$2 = "[object RegExp]", setTag$4 = "[object Set]", stringTag$2 = "[object String]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$3 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$2] = typedArrayTags[boolTag$2] = typedArrayTags[dataViewTag$3] = typedArrayTags[dateTag$2] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$4] = typedArrayTags[numberTag$2] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$2] = typedArrayTags[setTag$4] = typedArrayTags[stringTag$2] = typedArrayTags[weakMapTag$2] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var freeProcess = moduleExports$1 && freeGlobal.process;
var nodeUtil = function() {
  try {
    var types2 = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
    if (types2) {
      return types2;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
}();
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if (hasOwnProperty$4.call(value, key) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var nativeKeys = overArg(Object.keys, Object);
var objectProto$4 = Object.prototype;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$3.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var nativeCreate = getNative(Object, "create");
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
var objectProto$3 = Object.prototype;
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED$1 ? void 0 : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : void 0;
}
var objectProto$2 = Object.prototype;
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== void 0 : hasOwnProperty$1.call(data, key);
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
  return this;
}
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  return index < 0 ? void 0 : data[index][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
var Map$1 = getNative(root, "Map");
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$1 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function mapCacheDelete(key) {
  var result = getMapData(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var FUNC_ERROR_TEXT$1 = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
function toString(value) {
  return value == null ? "" : baseToString(value);
}
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}
function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -Infinity ? "-0" : result;
}
function baseGet(object, path2) {
  path2 = castPath(path2, object);
  var index = 0, length = path2.length;
  while (object != null && index < length) {
    object = object[toKey(path2[index++])];
  }
  return index && index == length ? object : void 0;
}
function get(object, path2, defaultValue) {
  var result = object == null ? void 0 : baseGet(object, path2);
  return result === void 0 ? defaultValue : result;
}
function arrayPush(array, values) {
  var index = -1, length = values.length, offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
var getPrototype = overArg(Object.getPrototypeOf, Object);
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== void 0) {
      number = number <= upper ? number : upper;
    }
    if (lower !== void 0) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}
function clamp(number, lower, upper) {
  if (upper === void 0) {
    upper = lower;
    lower = void 0;
  }
  if (upper !== void 0) {
    upper = toNumber(upper);
    upper = upper === upper ? upper : 0;
  }
  if (lower !== void 0) {
    lower = toNumber(lower);
    lower = lower === lower ? lower : 0;
  }
  return baseClamp(toNumber(number), lower, upper);
}
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
function stackGet(key) {
  return this.__data__.get(key);
}
function stackHas(key) {
  return this.__data__.has(key);
}
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
function baseAssign(object, source2) {
  return object && copyObject(source2, keys(source2), object);
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer$1 = moduleExports ? root.Buffer : void 0, allocUnsafe = Buffer$1 ? Buffer$1.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
function arrayFilter(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
function stubArray() {
  return [];
}
var objectProto$1 = Object.prototype;
var propertyIsEnumerable = objectProto$1.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
function copySymbols(source2, object) {
  return copyObject(source2, getSymbols(source2), object);
}
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}
var DataView = getNative(root, "DataView");
var Promise$1 = getNative(root, "Promise");
var Set$1 = getNative(root, "Set");
var mapTag$3 = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag$3 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
var dataViewTag$2 = "[object DataView]";
var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap$1);
var getTag = baseGetTag;
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag$2 || Map$1 && getTag(new Map$1()) != mapTag$3 || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag$3 || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag$1) {
  getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$2;
        case mapCtorString:
          return mapTag$3;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$3;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result;
  };
}
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function initCloneArray(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var Uint8Array = root.Uint8Array;
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}
function cloneDataView(dataView, isDeep) {
  var buffer = dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var reFlags = /\w*$/;
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer = typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object);
    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object);
    case dataViewTag$1:
      return cloneDataView(object);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object);
    case mapTag$2:
      return new Ctor();
    case numberTag$1:
    case stringTag$1:
      return new Ctor(object);
    case regexpTag$1:
      return cloneRegExp(object);
    case setTag$2:
      return new Ctor();
    case symbolTag$1:
      return cloneSymbol(object);
  }
}
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}
var mapTag$1 = "[object Map]";
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag$1;
}
var nodeIsMap = nodeUtil && nodeUtil.isMap;
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
var setTag$1 = "[object Set]";
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag$1;
}
var nodeIsSet = nodeUtil && nodeUtil.isSet;
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result;
  if (result !== void 0) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer(value)) {
      return cloneBuffer(value);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFunc ? {} : initCloneObject(value);
      {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = getAllKeys;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var CLONE_SYMBOLS_FLAG = 4;
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}
var now = function() {
  return root.Date.now();
};
var FUNC_ERROR_TEXT = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
const classIpcStoreSymbol = Symbol("__ipcEvents");
function IpcContext(IpcContextBase) {
  return class extends IpcContextBase {
    get __registeredIpcEvents() {
      return this[Object.getOwnPropertySymbols(this)[0]]?.values?.();
    }
    constructor(...args) {
      super(...args);
      const symbols = IpcContextBase.prototype[classIpcStoreSymbol];
      if (symbols) {
        symbols.forEach(({ name, type, options }, method) => {
          const log2 = console$1.createLogger("IPC").child(`${name}:ipc.${type ?? "on"}`);
          const func = (...args2) => {
            if (options?.debug) log2.debug(`hit, payload size: ${new Blob([stringifyJson(args2 ?? null)]).size} bytes`);
            if (typeof this[method] === "function" && (options && options.filter && typeof options.filter === "function" ? options.filter(args2[0], ...args2.slice(1)) : true)) {
              return type === "handle" ? Promise.resolve(this[method](...args2)) : this[method](...args2);
            }
            return Promise.resolve(null);
          };
          serverMain[type === "once" ? "once" : type === "handle" ? "handle" : "on"](name, options && options.debounce ? debounce(func, options.debounce) : func);
        });
      }
    }
  };
}
function IpcOn(event, options) {
  return function(target, propertyKey, _descriptor) {
    target[classIpcStoreSymbol] = target[classIpcStoreSymbol] || /* @__PURE__ */ new Map();
    target[classIpcStoreSymbol].set(propertyKey, {
      name: event,
      options
    });
  };
}
function IpcHandle(event, options) {
  return function(target, propertyKey, _descriptor) {
    target[classIpcStoreSymbol] = target[classIpcStoreSymbol] || /* @__PURE__ */ new Map();
    target[classIpcStoreSymbol].set(propertyKey, {
      name: event,
      type: "handle",
      options
    });
  };
}
var __defProp$e = Object.defineProperty;
var __getOwnPropDesc$g = Object.getOwnPropertyDescriptor;
var __decorateClass$g = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$g(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$e(target, key, result);
  return result;
};
let ApiProvider = class extends BaseProvider {
  constructor(_app) {
    super("api");
    this._app = _app;
  }
  _thread;
  _currentPallete = null;
  async AfterInit() {
    if (this._thread) {
      await this._thread.destroy();
      this._thread = void 0;
    }
    const config = this.settingsProvider;
    if (!config?.instance?.api?.enabled) {
      this.logger.debug("API is disabled in settings");
      return;
    }
    this._thread = await createApiWorker(this, this.windowContext.main);
    const tpid = await this._thread.initialize(this.settingsProvider.instance);
    this.logger.debug("API worker initialized with pid:", tpid);
  }
  get app() {
    return this._app;
  }
  get isInitialized() {
    return !!this._thread;
  }
  sendMessage(...args) {
    return this._thread?.invoke("socket", ...args);
  }
  get settingsProvider() {
    return this.getProvider("settings");
  }
  get trackProvider() {
    return this.getProvider("track");
  }
  async __onApiEnabled(key, value) {
    if (!value) {
      if (this._thread) {
        await this._thread.destroy();
        this._thread = void 0;
      }
    } else {
      await this.AfterInit();
    }
  }
  async getRoutes() {
    return Object.values(API_ROUTES).map((x) => x.replace(/^\/?api\//, ""));
  }
  async getTrackInformation() {
    return this.getProvider("track")?.trackData;
  }
  async getTrackAccent() {
    const track = await this.getTrackInformation();
    if (!track?.video?.thumbnail?.thumbnails?.[0]?.url) return null;
    const videoId = track.video.videoId;
    if (this._currentPallete?.id === videoId) return this._currentPallete.color;
    const color = await fetch$1(track.video.thumbnail.thumbnails[0].url).then((th) => th.buffer()).then((file) => Vibrant.from(file)).then((clr) => clr.getPalette()).then((clr) => clr.Vibrant?.hex).catch((err) => {
      this.logger.error("Error extracting accent color:", err);
      return null;
    });
    if (color) this._currentPallete = { id: videoId, color };
    return color;
  }
  async postTrackLike(_ev, like) {
    const doLike = (await this.trackProvider.currentSongLikeState())?.[0] === like;
    if (!doLike) {
      return this.views.youtubeView.webContents.executeJavaScript(`document.querySelector("#like-button-renderer #button-shape-like.like button").click()`).then(() => this.trackProvider.currentSongLikeState()).catch((error) => {
        this.logger.error("Error toggling like state:", error);
        return [false];
      }).then(([isLiked]) => {
        this.trackProvider.setTrackState((state) => {
          state.liked = isLiked;
        });
        return isLiked;
      });
    }
    return null;
  }
  async postTrackDisLike(_ev, like) {
    const likeState = (await this.trackProvider.currentSongLikeState())?.[1] === like;
    if (!likeState) {
      return this.views.youtubeView.webContents.executeJavaScript(`document.querySelector("#like-button-renderer #button-shape-dislike.dislike button").click()`).then(() => this.trackProvider.currentSongLikeState()).catch((error) => {
        this.logger.error("Error toggling dislike state:", error);
        return [false, false];
      }).then(([, _likeState]) => {
        this.trackProvider.setTrackState((state) => {
          state.disliked = _likeState;
        });
        return _likeState;
      });
    }
    return null;
  }
  async getTrackState() {
    return this.getProvider("track")?.trackState;
  }
  async nextTrack() {
    return await this.windowContext.sendTrackControl("next");
  }
  async repeatTrack() {
    return await this.windowContext.sendTrackControl("repeat");
  }
  async shuffleTrack() {
    return await this.windowContext.sendTrackControl("shuffle");
  }
  async forwardTrack(_ev, data) {
    const { time } = data ?? {};
    if (typeof time === "number" && time !== 0) {
      this.views.youtubeView.webContents.send("track:seek", { time });
    }
  }
  async seekTrack(_ev, data) {
    const { time, type } = data || {};
    if (typeof time !== "number") return;
    this.views.youtubeView.webContents.send("track:seek", {
      time,
      type
    });
  }
  async backwardTrack(_ev, data) {
    const { time } = data ?? {};
    if (typeof time === "number" && time !== 0) {
      this.views.youtubeView.webContents.send("track:seek", { time: -time });
    }
  }
  async prevTrack() {
    return await this.windowContext.sendTrackControl("prev");
  }
  async playTrack() {
    return await this.windowContext.sendTrackControl("play").then(({ data: { isPlaying, time } }) => {
      electron.ipcMain.emit(IPC_EVENT_NAMES.TRACK_PLAYSTATE, null, isPlaying, time);
      return { isPlaying, time };
    });
  }
  async pauseTrack() {
    return await this.windowContext.sendTrackControl("pause").then(({ data: { isPlaying, time } }) => {
      electron.ipcMain.emit(IPC_EVENT_NAMES.TRACK_PLAYSTATE, null, isPlaying, time);
      return { isPlaying, time };
    });
  }
  async toggleTrackPlayback() {
    return await this.windowContext.sendTrackControl("toggle").then(({ data: { isPlaying, time } }) => {
      electron.ipcMain.emit(IPC_EVENT_NAMES.TRACK_PLAYSTATE, null, isPlaying, time);
      return { isPlaying, time };
    });
  }
};
__decorateClass$g([
  IpcOn("settingsProvider.change", {
    filter: (key) => key === "api.enabled",
    debounce: 1e3
  })
], ApiProvider.prototype, "__onApiEnabled", 1);
__decorateClass$g([
  IpcHandle("api/routes")
], ApiProvider.prototype, "getRoutes", 1);
__decorateClass$g([
  IpcHandle(API_ROUTES.TRACK_CURRENT)
], ApiProvider.prototype, "getTrackInformation", 1);
__decorateClass$g([
  IpcHandle(API_ROUTES.TRACK_ACCENT)
], ApiProvider.prototype, "getTrackAccent", 1);
__decorateClass$g([
  IpcHandle(API_ROUTES.TRACK_LIKE)
], ApiProvider.prototype, "postTrackLike", 1);
__decorateClass$g([
  IpcHandle(API_ROUTES.TRACK_DISLIKE)
], ApiProvider.prototype, "postTrackDisLike", 1);
__decorateClass$g([
  IpcHandle(API_ROUTES.TRACK_CURRENT_STATE)
], ApiProvider.prototype, "getTrackState", 1);
__decorateClass$g([
  IpcHandle(API_ROUTES.TRACK_CONTROL_NEXT)
], ApiProvider.prototype, "nextTrack", 1);
__decorateClass$g([
  IpcHandle(API_ROUTES.TRACK_CONTROL_REPEAT)
], ApiProvider.prototype, "repeatTrack", 1);
__decorateClass$g([
  IpcHandle(API_ROUTES.TRACK_CONTROL_SHUFFLE)
], ApiProvider.prototype, "shuffleTrack", 1);
__decorateClass$g([
  IpcHandle(API_ROUTES.TRACK_CONTROL_FORWARD)
], ApiProvider.prototype, "forwardTrack", 1);
__decorateClass$g([
  IpcHandle(API_ROUTES.TRACK_CONTROL_SEEK)
], ApiProvider.prototype, "seekTrack", 1);
__decorateClass$g([
  IpcHandle(API_ROUTES.TRACK_CONTROL_BACKWARD)
], ApiProvider.prototype, "backwardTrack", 1);
__decorateClass$g([
  IpcHandle(API_ROUTES.TRACK_CONTROL_PREV)
], ApiProvider.prototype, "prevTrack", 1);
__decorateClass$g([
  IpcHandle(API_ROUTES.TRACK_CONTROL_PLAY)
], ApiProvider.prototype, "playTrack", 1);
__decorateClass$g([
  IpcHandle(API_ROUTES.TRACK_CONTROL_PAUSE)
], ApiProvider.prototype, "pauseTrack", 1);
__decorateClass$g([
  IpcHandle(API_ROUTES.TRACK_CONTROL_TOGGLE_PLAY)
], ApiProvider.prototype, "toggleTrackPlayback", 1);
ApiProvider = __decorateClass$g([
  IpcContext
], ApiProvider);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get default() {
    return ApiProvider;
  }
}, Symbol.toStringTag, { value: "Module" }));
let enabledReporting = true;
const sentryLog = console$1.logger.child("Sentry");
const setSentryEnabled = (enable) => {
  if (enabledReporting !== enable) enabledReporting = enable;
  if (!enable) sentryLog.warn("Sentry has been disabled");
  else sentryLog.warn("Sentry has been enabled");
};
if (Sentry__namespace && !Sentry__namespace.isInitialized) {
  try {
    Sentry__namespace.init({
      dsn: "https://ff9d8b8584d84dc2bd465a1ded29afbb@sentry.venipa.net/1",
      enabled: true,
      onFatalError(error) {
        if (enabledReporting) sentryLog.error(error);
      },
      beforeSend: (ev) => {
        if (!enabledReporting) return null;
        return ev;
      }
    });
  } catch {
    sentryLog.warn("Sentry has failed to initialize, server may not be reachable.");
  } finally {
    sentryLog.info("Sentry has been initialized");
  }
} else if (!Sentry__namespace || !Sentry__namespace.isInitialized) sentryLog.warn("Sentry is not enabled");
var __defProp$d = Object.defineProperty;
var __getOwnPropDesc$f = Object.getOwnPropertyDescriptor;
var __decorateClass$f = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$f(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$d(target, key, result);
  return result;
};
const STATE_PAUSE_TIME = 3e5;
let AppProvider = class extends BaseProvider {
  constructor(_app) {
    super("app");
    this._app = _app;
  }
  appLock = false;
  get app() {
    return this._app;
  }
  async BeforeStart() {
    if (process.platform !== "darwin") {
      this.appLock = this._app.requestSingleInstanceLock();
      if (!this.appLock) {
        this.app.exit();
      } else {
        this.app.on("second-instance", () => {
          const wnd = this.windowContext.main;
          if (!wnd) return;
          if (wnd.isMinimized()) wnd.restore();
          if (!wnd.isVisible()) {
            wnd.show();
            wnd.setSkipTaskbar(false);
          }
          wnd.focus();
        });
      }
    }
  }
  async AfterInit() {
    this._app.on("browser-window-focus", this.windowFocus.bind(this));
    this._app.on("browser-window-blur", this.windowBlur.bind(this));
  }
  _blurTimestamp = null;
  _blurAfkHandle;
  get isPlaying() {
    return !!this.getProvider("track")?.playing;
  }
  get discord() {
    return this.getProvider("discord");
  }
  windowBlur() {
    if (this.isPlaying) return;
    this._blurTimestamp = /* @__PURE__ */ new Date();
    this._blurAfkHandle = setTimeout(() => {
      if (this.isPlaying) {
        this._blurTimestamp = /* @__PURE__ */ new Date();
        this.windowFocus();
        return;
      }
      this.discord.disable();
    }, STATE_PAUSE_TIME);
  }
  windowFocus() {
    if (!this._blurTimestamp) return;
    const isAway = Date.now() - this._blurTimestamp.getTime() > STATE_PAUSE_TIME;
    if (!isAway) return;
    this._blurTimestamp = null;
    clearTimeout(this._blurAfkHandle);
    this._blurAfkHandle = null;
    if (this.discord.settingsEnabled) this.discord.enable();
  }
  __toggleSentryLogging(_key, value) {
    if (value) {
      setSentryEnabled(true);
    } else {
      setSentryEnabled(false);
    }
  }
  async __settingsWindowOpen(ev) {
    let settingsWindow = this.views.settingsWindow;
    try {
      if (!settingsWindow || settingsWindow.isDestroyed()) {
        settingsWindow = await createAppWindow({
          parent: this.windowContext.main,
          minimizeable: false
        });
        settingsWindow.on("close", () => {
          this.windowContext.main.show();
        });
        this.windowContext.views.settingsWindow = settingsWindow;
      } else {
        settingsWindow.show();
      }
    } catch (err) {
      this.logger.error(err);
    }
  }
  __onSubWindowOpen(_ev, windowName) {
    if (!windowName) {
      return;
    }
    const evName = "subwindow.show/" + windowName;
    if (serverMain.eventNames().includes(evName)) serverMain.emitServer("subwindow.show/" + windowName, _ev);
  }
  async handleIsWin11() {
    return node_os.version()?.toLowerCase().startsWith("windows 11");
  }
  __onSubWindowClose(_ev, windowName) {
    if (!windowName) {
      const wnd = electron.BrowserWindow.fromWebContents(_ev.sender);
      wnd?.close?.();
      return;
    }
    const evName = "subwindow.close/" + windowName;
    if (serverMain.eventNames().includes(evName)) serverMain.emit("subwindow.close/" + windowName, _ev);
  }
};
__decorateClass$f([
  IpcOn("settingsProvider.change", {
    filter: (key) => key === "app.enableStatisticsAndErrorTracing",
    debounce: 1e4
  })
], AppProvider.prototype, "__toggleSentryLogging", 1);
__decorateClass$f([
  IpcOn("subwindow.show/settingsWindow")
], AppProvider.prototype, "__settingsWindowOpen", 1);
__decorateClass$f([
  IpcOn("subwindow.show")
], AppProvider.prototype, "__onSubWindowOpen", 1);
__decorateClass$f([
  IpcHandle("app.isWin11")
], AppProvider.prototype, "handleIsWin11", 1);
__decorateClass$f([
  IpcOn("subwindow.close")
], AppProvider.prototype, "__onSubWindowClose", 1);
AppProvider = __decorateClass$f([
  IpcContext
], AppProvider);
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get default() {
    return AppProvider;
  }
}, Symbol.toStringTag, { value: "Module" }));
var lodash$1 = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var lodash = lodash$1.exports;
var hasRequiredLodash;
function requireLodash() {
  if (hasRequiredLodash) return lodash$1.exports;
  hasRequiredLodash = 1;
  (function(module2, exports2) {
    (function() {
      var undefined$1;
      var VERSION = "4.17.21";
      var LARGE_ARRAY_SIZE2 = 200;
      var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT2 = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
      var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
      var MAX_MEMOIZE_SIZE2 = 500;
      var PLACEHOLDER = "__lodash_placeholder__";
      var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG2 = 4;
      var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
      var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
      var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
      var HOT_COUNT = 800, HOT_SPAN = 16;
      var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
      var INFINITY = 1 / 0, MAX_SAFE_INTEGER2 = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN2 = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var wrapFlags = [
        ["ary", WRAP_ARY_FLAG],
        ["bind", WRAP_BIND_FLAG],
        ["bindKey", WRAP_BIND_KEY_FLAG],
        ["curry", WRAP_CURRY_FLAG],
        ["curryRight", WRAP_CURRY_RIGHT_FLAG],
        ["flip", WRAP_FLIP_FLAG],
        ["partial", WRAP_PARTIAL_FLAG],
        ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
        ["rearg", WRAP_REARG_FLAG]
      ];
      var argsTag2 = "[object Arguments]", arrayTag2 = "[object Array]", asyncTag2 = "[object AsyncFunction]", boolTag2 = "[object Boolean]", dateTag2 = "[object Date]", domExcTag = "[object DOMException]", errorTag2 = "[object Error]", funcTag2 = "[object Function]", genTag2 = "[object GeneratorFunction]", mapTag2 = "[object Map]", numberTag2 = "[object Number]", nullTag2 = "[object Null]", objectTag2 = "[object Object]", promiseTag2 = "[object Promise]", proxyTag2 = "[object Proxy]", regexpTag2 = "[object RegExp]", setTag2 = "[object Set]", stringTag2 = "[object String]", symbolTag2 = "[object Symbol]", undefinedTag2 = "[object Undefined]", weakMapTag2 = "[object WeakMap]", weakSetTag = "[object WeakSet]";
      var arrayBufferTag2 = "[object ArrayBuffer]", dataViewTag2 = "[object DataView]", float32Tag2 = "[object Float32Array]", float64Tag2 = "[object Float64Array]", int8Tag2 = "[object Int8Array]", int16Tag2 = "[object Int16Array]", int32Tag2 = "[object Int32Array]", uint8Tag2 = "[object Uint8Array]", uint8ClampedTag2 = "[object Uint8ClampedArray]", uint16Tag2 = "[object Uint16Array]", uint32Tag2 = "[object Uint32Array]";
      var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp2 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp2 = /^\w*$/, rePropName2 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar2 = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar2.source);
      var reTrimStart2 = /^\s+/;
      var reWhitespace2 = /\s/;
      var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
      var reEscapeChar2 = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags2 = /\w*$/;
      var reIsBadHex2 = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary2 = /^0b[01]+$/i;
      var reIsHostCtor2 = /^\[object .+?Constructor\]$/;
      var reIsOctal2 = /^0o[0-7]+$/i;
      var reIsUint2 = /^(?:0|[1-9]\d*)$/;
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['’]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
      var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reApos = RegExp(rsApos, "g");
      var reComboMark = RegExp(rsCombo, "g");
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      var reUnicodeWord = RegExp([
        rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
        rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
        rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
        rsUpper + "+" + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
      ].join("|"), "g");
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ];
      var templateCounter = -1;
      var typedArrayTags2 = {};
      typedArrayTags2[float32Tag2] = typedArrayTags2[float64Tag2] = typedArrayTags2[int8Tag2] = typedArrayTags2[int16Tag2] = typedArrayTags2[int32Tag2] = typedArrayTags2[uint8Tag2] = typedArrayTags2[uint8ClampedTag2] = typedArrayTags2[uint16Tag2] = typedArrayTags2[uint32Tag2] = true;
      typedArrayTags2[argsTag2] = typedArrayTags2[arrayTag2] = typedArrayTags2[arrayBufferTag2] = typedArrayTags2[boolTag2] = typedArrayTags2[dataViewTag2] = typedArrayTags2[dateTag2] = typedArrayTags2[errorTag2] = typedArrayTags2[funcTag2] = typedArrayTags2[mapTag2] = typedArrayTags2[numberTag2] = typedArrayTags2[objectTag2] = typedArrayTags2[regexpTag2] = typedArrayTags2[setTag2] = typedArrayTags2[stringTag2] = typedArrayTags2[weakMapTag2] = false;
      var cloneableTags2 = {};
      cloneableTags2[argsTag2] = cloneableTags2[arrayTag2] = cloneableTags2[arrayBufferTag2] = cloneableTags2[dataViewTag2] = cloneableTags2[boolTag2] = cloneableTags2[dateTag2] = cloneableTags2[float32Tag2] = cloneableTags2[float64Tag2] = cloneableTags2[int8Tag2] = cloneableTags2[int16Tag2] = cloneableTags2[int32Tag2] = cloneableTags2[mapTag2] = cloneableTags2[numberTag2] = cloneableTags2[objectTag2] = cloneableTags2[regexpTag2] = cloneableTags2[setTag2] = cloneableTags2[stringTag2] = cloneableTags2[symbolTag2] = cloneableTags2[uint8Tag2] = cloneableTags2[uint8ClampedTag2] = cloneableTags2[uint16Tag2] = cloneableTags2[uint32Tag2] = true;
      cloneableTags2[errorTag2] = cloneableTags2[funcTag2] = cloneableTags2[weakMapTag2] = false;
      var deburredLetters = {
        // Latin-1 Supplement block.
        "À": "A",
        "Á": "A",
        "Â": "A",
        "Ã": "A",
        "Ä": "A",
        "Å": "A",
        "à": "a",
        "á": "a",
        "â": "a",
        "ã": "a",
        "ä": "a",
        "å": "a",
        "Ç": "C",
        "ç": "c",
        "Ð": "D",
        "ð": "d",
        "È": "E",
        "É": "E",
        "Ê": "E",
        "Ë": "E",
        "è": "e",
        "é": "e",
        "ê": "e",
        "ë": "e",
        "Ì": "I",
        "Í": "I",
        "Î": "I",
        "Ï": "I",
        "ì": "i",
        "í": "i",
        "î": "i",
        "ï": "i",
        "Ñ": "N",
        "ñ": "n",
        "Ò": "O",
        "Ó": "O",
        "Ô": "O",
        "Õ": "O",
        "Ö": "O",
        "Ø": "O",
        "ò": "o",
        "ó": "o",
        "ô": "o",
        "õ": "o",
        "ö": "o",
        "ø": "o",
        "Ù": "U",
        "Ú": "U",
        "Û": "U",
        "Ü": "U",
        "ù": "u",
        "ú": "u",
        "û": "u",
        "ü": "u",
        "Ý": "Y",
        "ý": "y",
        "ÿ": "y",
        "Æ": "Ae",
        "æ": "ae",
        "Þ": "Th",
        "þ": "th",
        "ß": "ss",
        // Latin Extended-A block.
        "Ā": "A",
        "Ă": "A",
        "Ą": "A",
        "ā": "a",
        "ă": "a",
        "ą": "a",
        "Ć": "C",
        "Ĉ": "C",
        "Ċ": "C",
        "Č": "C",
        "ć": "c",
        "ĉ": "c",
        "ċ": "c",
        "č": "c",
        "Ď": "D",
        "Đ": "D",
        "ď": "d",
        "đ": "d",
        "Ē": "E",
        "Ĕ": "E",
        "Ė": "E",
        "Ę": "E",
        "Ě": "E",
        "ē": "e",
        "ĕ": "e",
        "ė": "e",
        "ę": "e",
        "ě": "e",
        "Ĝ": "G",
        "Ğ": "G",
        "Ġ": "G",
        "Ģ": "G",
        "ĝ": "g",
        "ğ": "g",
        "ġ": "g",
        "ģ": "g",
        "Ĥ": "H",
        "Ħ": "H",
        "ĥ": "h",
        "ħ": "h",
        "Ĩ": "I",
        "Ī": "I",
        "Ĭ": "I",
        "Į": "I",
        "İ": "I",
        "ĩ": "i",
        "ī": "i",
        "ĭ": "i",
        "į": "i",
        "ı": "i",
        "Ĵ": "J",
        "ĵ": "j",
        "Ķ": "K",
        "ķ": "k",
        "ĸ": "k",
        "Ĺ": "L",
        "Ļ": "L",
        "Ľ": "L",
        "Ŀ": "L",
        "Ł": "L",
        "ĺ": "l",
        "ļ": "l",
        "ľ": "l",
        "ŀ": "l",
        "ł": "l",
        "Ń": "N",
        "Ņ": "N",
        "Ň": "N",
        "Ŋ": "N",
        "ń": "n",
        "ņ": "n",
        "ň": "n",
        "ŋ": "n",
        "Ō": "O",
        "Ŏ": "O",
        "Ő": "O",
        "ō": "o",
        "ŏ": "o",
        "ő": "o",
        "Ŕ": "R",
        "Ŗ": "R",
        "Ř": "R",
        "ŕ": "r",
        "ŗ": "r",
        "ř": "r",
        "Ś": "S",
        "Ŝ": "S",
        "Ş": "S",
        "Š": "S",
        "ś": "s",
        "ŝ": "s",
        "ş": "s",
        "š": "s",
        "Ţ": "T",
        "Ť": "T",
        "Ŧ": "T",
        "ţ": "t",
        "ť": "t",
        "ŧ": "t",
        "Ũ": "U",
        "Ū": "U",
        "Ŭ": "U",
        "Ů": "U",
        "Ű": "U",
        "Ų": "U",
        "ũ": "u",
        "ū": "u",
        "ŭ": "u",
        "ů": "u",
        "ű": "u",
        "ų": "u",
        "Ŵ": "W",
        "ŵ": "w",
        "Ŷ": "Y",
        "ŷ": "y",
        "Ÿ": "Y",
        "Ź": "Z",
        "Ż": "Z",
        "Ž": "Z",
        "ź": "z",
        "ż": "z",
        "ž": "z",
        "Ĳ": "IJ",
        "ĳ": "ij",
        "Œ": "Oe",
        "œ": "oe",
        "ŉ": "'n",
        "ſ": "s"
      };
      var htmlEscapes = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };
      var htmlUnescapes = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      };
      var stringEscapes = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var freeParseFloat = parseFloat, freeParseInt2 = parseInt;
      var freeGlobal2 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
      var freeSelf2 = typeof self == "object" && self && self.Object === Object && self;
      var root2 = freeGlobal2 || freeSelf2 || Function("return this")();
      var freeExports2 = exports2 && !exports2.nodeType && exports2;
      var freeModule2 = freeExports2 && true && module2 && !module2.nodeType && module2;
      var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
      var freeProcess2 = moduleExports2 && freeGlobal2.process;
      var nodeUtil2 = function() {
        try {
          var types2 = freeModule2 && freeModule2.require && freeModule2.require("util").types;
          if (types2) {
            return types2;
          }
          return freeProcess2 && freeProcess2.binding && freeProcess2.binding("util");
        } catch (e) {
        }
      }();
      var nodeIsArrayBuffer = nodeUtil2 && nodeUtil2.isArrayBuffer, nodeIsDate = nodeUtil2 && nodeUtil2.isDate, nodeIsMap2 = nodeUtil2 && nodeUtil2.isMap, nodeIsRegExp = nodeUtil2 && nodeUtil2.isRegExp, nodeIsSet2 = nodeUtil2 && nodeUtil2.isSet, nodeIsTypedArray2 = nodeUtil2 && nodeUtil2.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          var value = array[index];
          setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
      }
      function arrayEach2(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEachRight(array, iteratee) {
        var length = array == null ? 0 : array.length;
        while (length--) {
          if (iteratee(array[length], length, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEvery(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (!predicate(array[index], index, array)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter2(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
      }
      function arrayIncludesWith(array, value, comparator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (comparator(value, array[index])) {
            return true;
          }
        }
        return false;
      }
      function arrayMap2(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      function arrayPush2(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
      }
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      var asciiSize = baseProperty("length");
      function asciiToArray(string) {
        return string.split("");
      }
      function asciiWords(string) {
        return string.match(reAsciiWord) || [];
      }
      function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function(value, key, collection2) {
          if (predicate(value, key, collection2)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
      }
      function baseIndexOfWith(array, value, fromIndex, comparator) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (comparator(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function baseIsNaN(value) {
        return value !== value;
      }
      function baseMean(array, iteratee) {
        var length = array == null ? 0 : array.length;
        return length ? baseSum(array, iteratee) / length : NAN2;
      }
      function baseProperty(key) {
        return function(object) {
          return object == null ? undefined$1 : object[key];
        };
      }
      function basePropertyOf(object) {
        return function(key) {
          return object == null ? undefined$1 : object[key];
        };
      }
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
        });
        return accumulator;
      }
      function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while (length--) {
          array[length] = array[length].value;
        }
        return array;
      }
      function baseSum(array, iteratee) {
        var result, index = -1, length = array.length;
        while (++index < length) {
          var current = iteratee(array[index]);
          if (current !== undefined$1) {
            result = result === undefined$1 ? current : result + current;
          }
        }
        return result;
      }
      function baseTimes2(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseToPairs(object, props) {
        return arrayMap2(props, function(key) {
          return [key, object[key]];
        });
      }
      function baseTrim2(string) {
        return string ? string.slice(0, trimmedEndIndex2(string) + 1).replace(reTrimStart2, "") : string;
      }
      function baseUnary2(func) {
        return function(value) {
          return func(value);
        };
      }
      function baseValues(object, props) {
        return arrayMap2(props, function(key) {
          return object[key];
        });
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1, length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function countHolders(array, placeholder) {
        var length = array.length, result = 0;
        while (length--) {
          if (array[length] === placeholder) {
            ++result;
          }
        }
        return result;
      }
      var deburrLetter = basePropertyOf(deburredLetters);
      var escapeHtmlChar = basePropertyOf(htmlEscapes);
      function escapeStringChar(chr) {
        return "\\" + stringEscapes[chr];
      }
      function getValue2(object, key) {
        return object == null ? undefined$1 : object[key];
      }
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
      }
      function iteratorToArray(iterator) {
        var data, result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function overArg2(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      function replaceHolders(array, placeholder) {
        var index = -1, length = array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (value === placeholder || value === PLACEHOLDER) {
            array[index] = PLACEHOLDER;
            result[resIndex++] = index;
          }
        }
        return result;
      }
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      function setToPairs(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = [value, value];
        });
        return result;
      }
      function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function strictLastIndexOf(array, value, fromIndex) {
        var index = fromIndex + 1;
        while (index--) {
          if (array[index] === value) {
            return index;
          }
        }
        return index;
      }
      function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
      }
      function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
      }
      function trimmedEndIndex2(string) {
        var index = string.length;
        while (index-- && reWhitespace2.test(string.charAt(index))) {
        }
        return index;
      }
      var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
      function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
          ++result;
        }
        return result;
      }
      function unicodeToArray(string) {
        return string.match(reUnicode) || [];
      }
      function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
      }
      var runInContext = function runInContext2(context) {
        context = context == null ? root2 : _.defaults(root2.Object(), context, _.pick(root2, contextProps));
        var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
        var arrayProto2 = Array2.prototype, funcProto2 = Function2.prototype, objectProto2 = Object2.prototype;
        var coreJsData2 = context["__core-js_shared__"];
        var funcToString2 = funcProto2.toString;
        var hasOwnProperty2 = objectProto2.hasOwnProperty;
        var idCounter = 0;
        var maskSrcKey2 = function() {
          var uid = /[^.]+$/.exec(coreJsData2 && coreJsData2.keys && coreJsData2.keys.IE_PROTO || "");
          return uid ? "Symbol(src)_1." + uid : "";
        }();
        var nativeObjectToString2 = objectProto2.toString;
        var objectCtorString = funcToString2.call(Object2);
        var oldDash = root2._;
        var reIsNative2 = RegExp2(
          "^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        );
        var Buffer2 = moduleExports2 ? context.Buffer : undefined$1, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe2 = Buffer2 ? Buffer2.allocUnsafe : undefined$1, getPrototype2 = overArg2(Object2.getPrototypeOf, Object2), objectCreate2 = Object2.create, propertyIsEnumerable2 = objectProto2.propertyIsEnumerable, splice2 = arrayProto2.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined$1, symIterator = Symbol2 ? Symbol2.iterator : undefined$1, symToStringTag2 = Symbol2 ? Symbol2.toStringTag : undefined$1;
        var defineProperty2 = function() {
          try {
            var func = getNative2(Object2, "defineProperty");
            func({}, "", {});
            return func;
          } catch (e) {
          }
        }();
        var ctxClearTimeout = context.clearTimeout !== root2.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root2.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root2.setTimeout && context.setTimeout;
        var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols2 = Object2.getOwnPropertySymbols, nativeIsBuffer2 = Buffer2 ? Buffer2.isBuffer : undefined$1, nativeIsFinite = context.isFinite, nativeJoin = arrayProto2.join, nativeKeys2 = overArg2(Object2.keys, Object2), nativeMax2 = Math2.max, nativeMin2 = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto2.reverse;
        var DataView2 = getNative2(context, "DataView"), Map2 = getNative2(context, "Map"), Promise2 = getNative2(context, "Promise"), Set2 = getNative2(context, "Set"), WeakMap2 = getNative2(context, "WeakMap"), nativeCreate2 = getNative2(Object2, "create");
        var metaMap = WeakMap2 && new WeakMap2();
        var realNames = {};
        var dataViewCtorString2 = toSource2(DataView2), mapCtorString2 = toSource2(Map2), promiseCtorString2 = toSource2(Promise2), setCtorString2 = toSource2(Set2), weakMapCtorString2 = toSource2(WeakMap2);
        var symbolProto2 = Symbol2 ? Symbol2.prototype : undefined$1, symbolValueOf2 = symbolProto2 ? symbolProto2.valueOf : undefined$1, symbolToString2 = symbolProto2 ? symbolProto2.toString : undefined$1;
        function lodash2(value) {
          if (isObjectLike2(value) && !isArray2(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty2.call(value, "__wrapped__")) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        var baseCreate2 = /* @__PURE__ */ function() {
          function object() {
          }
          return function(proto) {
            if (!isObject2(proto)) {
              return {};
            }
            if (objectCreate2) {
              return objectCreate2(proto);
            }
            object.prototype = proto;
            var result2 = new object();
            object.prototype = undefined$1;
            return result2;
          };
        }();
        function baseLodash() {
        }
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined$1;
        }
        lodash2.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "escape": reEscape,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "evaluate": reEvaluate,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "interpolate": reInterpolate,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          "variable": "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          "imports": {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            "_": lodash2
          }
        };
        lodash2.prototype = baseLodash.prototype;
        lodash2.prototype.constructor = lodash2;
        LodashWrapper.prototype = baseCreate2(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        function lazyClone() {
          var result2 = new LazyWrapper(this.__wrapped__);
          result2.__actions__ = copyArray2(this.__actions__);
          result2.__dir__ = this.__dir__;
          result2.__filtered__ = this.__filtered__;
          result2.__iteratees__ = copyArray2(this.__iteratees__);
          result2.__takeCount__ = this.__takeCount__;
          result2.__views__ = copyArray2(this.__views__);
          return result2;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result2 = new LazyWrapper(this);
            result2.__dir__ = -1;
            result2.__filtered__ = true;
          } else {
            result2 = this.clone();
            result2.__dir__ *= -1;
          }
          return result2;
        }
        function lazyValue() {
          var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray2(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin2(length, this.__takeCount__);
          if (!isArr || !isRight && arrLength == length && takeCount == length) {
            return baseWrapperValue(array, this.__actions__);
          }
          var result2 = [];
          outer:
            while (length-- && resIndex < takeCount) {
              index += dir;
              var iterIndex = -1, value = array[index];
              while (++iterIndex < iterLength) {
                var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
                if (type == LAZY_MAP_FLAG) {
                  value = computed;
                } else if (!computed) {
                  if (type == LAZY_FILTER_FLAG) {
                    continue outer;
                  } else {
                    break outer;
                  }
                }
              }
              result2[resIndex++] = value;
            }
          return result2;
        }
        LazyWrapper.prototype = baseCreate2(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash2(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function hashClear2() {
          this.__data__ = nativeCreate2 ? nativeCreate2(null) : {};
          this.size = 0;
        }
        function hashDelete2(key) {
          var result2 = this.has(key) && delete this.__data__[key];
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function hashGet2(key) {
          var data = this.__data__;
          if (nativeCreate2) {
            var result2 = data[key];
            return result2 === HASH_UNDEFINED2 ? undefined$1 : result2;
          }
          return hasOwnProperty2.call(data, key) ? data[key] : undefined$1;
        }
        function hashHas2(key) {
          var data = this.__data__;
          return nativeCreate2 ? data[key] !== undefined$1 : hasOwnProperty2.call(data, key);
        }
        function hashSet2(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate2 && value === undefined$1 ? HASH_UNDEFINED2 : value;
          return this;
        }
        Hash2.prototype.clear = hashClear2;
        Hash2.prototype["delete"] = hashDelete2;
        Hash2.prototype.get = hashGet2;
        Hash2.prototype.has = hashHas2;
        Hash2.prototype.set = hashSet2;
        function ListCache2(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function listCacheClear2() {
          this.__data__ = [];
          this.size = 0;
        }
        function listCacheDelete2(key) {
          var data = this.__data__, index = assocIndexOf2(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice2.call(data, index, 1);
          }
          --this.size;
          return true;
        }
        function listCacheGet2(key) {
          var data = this.__data__, index = assocIndexOf2(data, key);
          return index < 0 ? undefined$1 : data[index][1];
        }
        function listCacheHas2(key) {
          return assocIndexOf2(this.__data__, key) > -1;
        }
        function listCacheSet2(key, value) {
          var data = this.__data__, index = assocIndexOf2(data, key);
          if (index < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        ListCache2.prototype.clear = listCacheClear2;
        ListCache2.prototype["delete"] = listCacheDelete2;
        ListCache2.prototype.get = listCacheGet2;
        ListCache2.prototype.has = listCacheHas2;
        ListCache2.prototype.set = listCacheSet2;
        function MapCache2(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function mapCacheClear2() {
          this.size = 0;
          this.__data__ = {
            "hash": new Hash2(),
            "map": new (Map2 || ListCache2)(),
            "string": new Hash2()
          };
        }
        function mapCacheDelete2(key) {
          var result2 = getMapData2(this, key)["delete"](key);
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function mapCacheGet2(key) {
          return getMapData2(this, key).get(key);
        }
        function mapCacheHas2(key) {
          return getMapData2(this, key).has(key);
        }
        function mapCacheSet2(key, value) {
          var data = getMapData2(this, key), size2 = data.size;
          data.set(key, value);
          this.size += data.size == size2 ? 0 : 1;
          return this;
        }
        MapCache2.prototype.clear = mapCacheClear2;
        MapCache2.prototype["delete"] = mapCacheDelete2;
        MapCache2.prototype.get = mapCacheGet2;
        MapCache2.prototype.has = mapCacheHas2;
        MapCache2.prototype.set = mapCacheSet2;
        function SetCache(values2) {
          var index = -1, length = values2 == null ? 0 : values2.length;
          this.__data__ = new MapCache2();
          while (++index < length) {
            this.add(values2[index]);
          }
        }
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED2);
          return this;
        }
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack2(entries) {
          var data = this.__data__ = new ListCache2(entries);
          this.size = data.size;
        }
        function stackClear2() {
          this.__data__ = new ListCache2();
          this.size = 0;
        }
        function stackDelete2(key) {
          var data = this.__data__, result2 = data["delete"](key);
          this.size = data.size;
          return result2;
        }
        function stackGet2(key) {
          return this.__data__.get(key);
        }
        function stackHas2(key) {
          return this.__data__.has(key);
        }
        function stackSet2(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache2) {
            var pairs = data.__data__;
            if (!Map2 || pairs.length < LARGE_ARRAY_SIZE2 - 1) {
              pairs.push([key, value]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache2(pairs);
          }
          data.set(key, value);
          this.size = data.size;
          return this;
        }
        Stack2.prototype.clear = stackClear2;
        Stack2.prototype["delete"] = stackDelete2;
        Stack2.prototype.get = stackGet2;
        Stack2.prototype.has = stackHas2;
        Stack2.prototype.set = stackSet2;
        function arrayLikeKeys2(value, inherited) {
          var isArr = isArray2(value), isArg = !isArr && isArguments2(value), isBuff = !isArr && !isArg && isBuffer2(value), isType = !isArr && !isArg && !isBuff && isTypedArray2(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes2(value.length, String2) : [], length = result2.length;
          for (var key in value) {
            if ((inherited || hasOwnProperty2.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
            (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
            isIndex2(key, length)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function arraySample(array) {
          var length = array.length;
          return length ? array[baseRandom(0, length - 1)] : undefined$1;
        }
        function arraySampleSize(array, n) {
          return shuffleSelf(copyArray2(array), baseClamp2(n, 0, array.length));
        }
        function arrayShuffle(array) {
          return shuffleSelf(copyArray2(array));
        }
        function assignMergeValue(object, key, value) {
          if (value !== undefined$1 && !eq2(object[key], value) || value === undefined$1 && !(key in object)) {
            baseAssignValue2(object, key, value);
          }
        }
        function assignValue2(object, key, value) {
          var objValue = object[key];
          if (!(hasOwnProperty2.call(object, key) && eq2(objValue, value)) || value === undefined$1 && !(key in object)) {
            baseAssignValue2(object, key, value);
          }
        }
        function assocIndexOf2(array, key) {
          var length = array.length;
          while (length--) {
            if (eq2(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function baseAggregator(collection, setter, iteratee2, accumulator) {
          baseEach(collection, function(value, key, collection2) {
            setter(accumulator, value, iteratee2(value), collection2);
          });
          return accumulator;
        }
        function baseAssign2(object, source2) {
          return object && copyObject2(source2, keys2(source2), object);
        }
        function baseAssignIn(object, source2) {
          return object && copyObject2(source2, keysIn(source2), object);
        }
        function baseAssignValue2(object, key, value) {
          if (key == "__proto__" && defineProperty2) {
            defineProperty2(object, key, {
              "configurable": true,
              "enumerable": true,
              "value": value,
              "writable": true
            });
          } else {
            object[key] = value;
          }
        }
        function baseAt(object, paths) {
          var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
          while (++index < length) {
            result2[index] = skip ? undefined$1 : get2(object, paths[index]);
          }
          return result2;
        }
        function baseClamp2(number, lower, upper) {
          if (number === number) {
            if (upper !== undefined$1) {
              number = number <= upper ? number : upper;
            }
            if (lower !== undefined$1) {
              number = number >= lower ? number : lower;
            }
          }
          return number;
        }
        function baseClone2(value, bitmask, customizer, key, object, stack) {
          var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG2;
          if (customizer) {
            result2 = object ? customizer(value, key, object, stack) : customizer(value);
          }
          if (result2 !== undefined$1) {
            return result2;
          }
          if (!isObject2(value)) {
            return value;
          }
          var isArr = isArray2(value);
          if (isArr) {
            result2 = initCloneArray2(value);
            if (!isDeep) {
              return copyArray2(value, result2);
            }
          } else {
            var tag = getTag2(value), isFunc = tag == funcTag2 || tag == genTag2;
            if (isBuffer2(value)) {
              return cloneBuffer2(value, isDeep);
            }
            if (tag == objectTag2 || tag == argsTag2 || isFunc && !object) {
              result2 = isFlat || isFunc ? {} : initCloneObject2(value);
              if (!isDeep) {
                return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols2(value, baseAssign2(result2, value));
              }
            } else {
              if (!cloneableTags2[tag]) {
                return object ? value : {};
              }
              result2 = initCloneByTag2(value, tag, isDeep);
            }
          }
          stack || (stack = new Stack2());
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result2);
          if (isSet2(value)) {
            value.forEach(function(subValue) {
              result2.add(baseClone2(subValue, bitmask, customizer, subValue, value, stack));
            });
          } else if (isMap2(value)) {
            value.forEach(function(subValue, key2) {
              result2.set(key2, baseClone2(subValue, bitmask, customizer, key2, value, stack));
            });
          }
          var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys2 : isFlat ? keysIn : keys2;
          var props = isArr ? undefined$1 : keysFunc(value);
          arrayEach2(props || value, function(subValue, key2) {
            if (props) {
              key2 = subValue;
              subValue = value[key2];
            }
            assignValue2(result2, key2, baseClone2(subValue, bitmask, customizer, key2, value, stack));
          });
          return result2;
        }
        function baseConforms(source2) {
          var props = keys2(source2);
          return function(object) {
            return baseConformsTo(object, source2, props);
          };
        }
        function baseConformsTo(object, source2, props) {
          var length = props.length;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (length--) {
            var key = props[length], predicate = source2[key], value = object[key];
            if (value === undefined$1 && !(key in object) || !predicate(value)) {
              return false;
            }
          }
          return true;
        }
        function baseDelay(func, wait, args) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT2);
          }
          return setTimeout2(function() {
            func.apply(undefined$1, args);
          }, wait);
        }
        function baseDifference(array, values2, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
          if (!length) {
            return result2;
          }
          if (iteratee2) {
            values2 = arrayMap2(values2, baseUnary2(iteratee2));
          }
          if (comparator) {
            includes2 = arrayIncludesWith;
            isCommon = false;
          } else if (values2.length >= LARGE_ARRAY_SIZE2) {
            includes2 = cacheHas;
            isCommon = false;
            values2 = new SetCache(values2);
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 == null ? value : iteratee2(value);
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var valuesIndex = valuesLength;
                while (valuesIndex--) {
                  if (values2[valuesIndex] === computed) {
                    continue outer;
                  }
                }
                result2.push(value);
              } else if (!includes2(values2, computed, comparator)) {
                result2.push(value);
              }
            }
          return result2;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result2 = true;
          baseEach(collection, function(value, index, collection2) {
            result2 = !!predicate(value, index, collection2);
            return result2;
          });
          return result2;
        }
        function baseExtremum(array, iteratee2, comparator) {
          var index = -1, length = array.length;
          while (++index < length) {
            var value = array[index], current = iteratee2(value);
            if (current != null && (computed === undefined$1 ? current === current && !isSymbol2(current) : comparator(current, computed))) {
              var computed = current, result2 = value;
            }
          }
          return result2;
        }
        function baseFill(array, value, start, end) {
          var length = array.length;
          start = toInteger(start);
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end === undefined$1 || end > length ? length : toInteger(end);
          if (end < 0) {
            end += length;
          }
          end = start > end ? 0 : toLength(end);
          while (start < end) {
            array[start++] = value;
          }
          return array;
        }
        function baseFilter(collection, predicate) {
          var result2 = [];
          baseEach(collection, function(value, index, collection2) {
            if (predicate(value, index, collection2)) {
              result2.push(value);
            }
          });
          return result2;
        }
        function baseFlatten(array, depth, predicate, isStrict, result2) {
          var index = -1, length = array.length;
          predicate || (predicate = isFlattenable);
          result2 || (result2 = []);
          while (++index < length) {
            var value = array[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result2);
              } else {
                arrayPush2(result2, value);
              }
            } else if (!isStrict) {
              result2[result2.length] = value;
            }
          }
          return result2;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object, iteratee2) {
          return object && baseFor(object, iteratee2, keys2);
        }
        function baseForOwnRight(object, iteratee2) {
          return object && baseForRight(object, iteratee2, keys2);
        }
        function baseFunctions(object, props) {
          return arrayFilter2(props, function(key) {
            return isFunction2(object[key]);
          });
        }
        function baseGet2(object, path2) {
          path2 = castPath2(path2, object);
          var index = 0, length = path2.length;
          while (object != null && index < length) {
            object = object[toKey2(path2[index++])];
          }
          return index && index == length ? object : undefined$1;
        }
        function baseGetAllKeys2(object, keysFunc, symbolsFunc) {
          var result2 = keysFunc(object);
          return isArray2(object) ? result2 : arrayPush2(result2, symbolsFunc(object));
        }
        function baseGetTag2(value) {
          if (value == null) {
            return value === undefined$1 ? undefinedTag2 : nullTag2;
          }
          return symToStringTag2 && symToStringTag2 in Object2(value) ? getRawTag2(value) : objectToString2(value);
        }
        function baseGt(value, other) {
          return value > other;
        }
        function baseHas(object, key) {
          return object != null && hasOwnProperty2.call(object, key);
        }
        function baseHasIn(object, key) {
          return object != null && key in Object2(object);
        }
        function baseInRange(number, start, end) {
          return number >= nativeMin2(start, end) && number < nativeMax2(start, end);
        }
        function baseIntersection(arrays, iteratee2, comparator) {
          var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
          while (othIndex--) {
            var array = arrays[othIndex];
            if (othIndex && iteratee2) {
              array = arrayMap2(array, baseUnary2(iteratee2));
            }
            maxLength = nativeMin2(array.length, maxLength);
            caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined$1;
          }
          array = arrays[0];
          var index = -1, seen = caches[0];
          outer:
            while (++index < length && result2.length < maxLength) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
                othIndex = othLength;
                while (--othIndex) {
                  var cache = caches[othIndex];
                  if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                    continue outer;
                  }
                }
                if (seen) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseInverter(object, setter, iteratee2, accumulator) {
          baseForOwn(object, function(value, key, object2) {
            setter(accumulator, iteratee2(value), key, object2);
          });
          return accumulator;
        }
        function baseInvoke(object, path2, args) {
          path2 = castPath2(path2, object);
          object = parent(object, path2);
          var func = object == null ? object : object[toKey2(last(path2))];
          return func == null ? undefined$1 : apply(func, object, args);
        }
        function baseIsArguments2(value) {
          return isObjectLike2(value) && baseGetTag2(value) == argsTag2;
        }
        function baseIsArrayBuffer(value) {
          return isObjectLike2(value) && baseGetTag2(value) == arrayBufferTag2;
        }
        function baseIsDate(value) {
          return isObjectLike2(value) && baseGetTag2(value) == dateTag2;
        }
        function baseIsEqual(value, other, bitmask, customizer, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || !isObjectLike2(value) && !isObjectLike2(other)) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray2(object), othIsArr = isArray2(other), objTag = objIsArr ? arrayTag2 : getTag2(object), othTag = othIsArr ? arrayTag2 : getTag2(other);
          objTag = objTag == argsTag2 ? objectTag2 : objTag;
          othTag = othTag == argsTag2 ? objectTag2 : othTag;
          var objIsObj = objTag == objectTag2, othIsObj = othTag == objectTag2, isSameTag = objTag == othTag;
          if (isSameTag && isBuffer2(object)) {
            if (!isBuffer2(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack2());
            return objIsArr || isTypedArray2(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty2.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty2.call(other, "__wrapped__");
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack2());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack2());
          return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
        }
        function baseIsMap2(value) {
          return isObjectLike2(value) && getTag2(value) == mapTag2;
        }
        function baseIsMatch(object, source2, matchData, customizer) {
          var index = matchData.length, length = index, noCustomizer = !customizer;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (index--) {
            var data = matchData[index];
            if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0], objValue = object[key], srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined$1 && !(key in object)) {
                return false;
              }
            } else {
              var stack = new Stack2();
              if (customizer) {
                var result2 = customizer(objValue, srcValue, key, object, source2, stack);
              }
              if (!(result2 === undefined$1 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseIsNative2(value) {
          if (!isObject2(value) || isMasked2(value)) {
            return false;
          }
          var pattern = isFunction2(value) ? reIsNative2 : reIsHostCtor2;
          return pattern.test(toSource2(value));
        }
        function baseIsRegExp(value) {
          return isObjectLike2(value) && baseGetTag2(value) == regexpTag2;
        }
        function baseIsSet2(value) {
          return isObjectLike2(value) && getTag2(value) == setTag2;
        }
        function baseIsTypedArray2(value) {
          return isObjectLike2(value) && isLength2(value.length) && !!typedArrayTags2[baseGetTag2(value)];
        }
        function baseIteratee(value) {
          if (typeof value == "function") {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == "object") {
            return isArray2(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        function baseKeys2(object) {
          if (!isPrototype2(object)) {
            return nativeKeys2(object);
          }
          var result2 = [];
          for (var key in Object2(object)) {
            if (hasOwnProperty2.call(object, key) && key != "constructor") {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseKeysIn(object) {
          if (!isObject2(object)) {
            return nativeKeysIn(object);
          }
          var isProto = isPrototype2(object), result2 = [];
          for (var key in object) {
            if (!(key == "constructor" && (isProto || !hasOwnProperty2.call(object, key)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseLt(value, other) {
          return value < other;
        }
        function baseMap(collection, iteratee2) {
          var index = -1, result2 = isArrayLike2(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value, key, collection2) {
            result2[++index] = iteratee2(value, key, collection2);
          });
          return result2;
        }
        function baseMatches(source2) {
          var matchData = getMatchData(source2);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object) {
            return object === source2 || baseIsMatch(object, source2, matchData);
          };
        }
        function baseMatchesProperty(path2, srcValue) {
          if (isKey2(path2) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey2(path2), srcValue);
          }
          return function(object) {
            var objValue = get2(object, path2);
            return objValue === undefined$1 && objValue === srcValue ? hasIn(object, path2) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        function baseMerge(object, source2, srcIndex, customizer, stack) {
          if (object === source2) {
            return;
          }
          baseFor(source2, function(srcValue, key) {
            stack || (stack = new Stack2());
            if (isObject2(srcValue)) {
              baseMergeDeep(object, source2, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source2, stack) : undefined$1;
              if (newValue === undefined$1) {
                newValue = srcValue;
              }
              assignMergeValue(object, key, newValue);
            }
          }, keysIn);
        }
        function baseMergeDeep(object, source2, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = safeGet(object, key), srcValue = safeGet(source2, key), stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source2, stack) : undefined$1;
          var isCommon = newValue === undefined$1;
          if (isCommon) {
            var isArr = isArray2(srcValue), isBuff = !isArr && isBuffer2(srcValue), isTyped = !isArr && !isBuff && isTypedArray2(srcValue);
            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
              if (isArray2(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray2(objValue);
              } else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer2(srcValue, true);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray2(srcValue, true);
              } else {
                newValue = [];
              }
            } else if (isPlainObject(srcValue) || isArguments2(srcValue)) {
              newValue = objValue;
              if (isArguments2(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject2(objValue) || isFunction2(objValue)) {
                newValue = initCloneObject2(srcValue);
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack["delete"](srcValue);
          }
          assignMergeValue(object, key, newValue);
        }
        function baseNth(array, n) {
          var length = array.length;
          if (!length) {
            return;
          }
          n += n < 0 ? length : 0;
          return isIndex2(n, length) ? array[n] : undefined$1;
        }
        function baseOrderBy(collection, iteratees, orders) {
          if (iteratees.length) {
            iteratees = arrayMap2(iteratees, function(iteratee2) {
              if (isArray2(iteratee2)) {
                return function(value) {
                  return baseGet2(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                };
              }
              return iteratee2;
            });
          } else {
            iteratees = [identity];
          }
          var index = -1;
          iteratees = arrayMap2(iteratees, baseUnary2(getIteratee()));
          var result2 = baseMap(collection, function(value, key, collection2) {
            var criteria = arrayMap2(iteratees, function(iteratee2) {
              return iteratee2(value);
            });
            return { "criteria": criteria, "index": ++index, "value": value };
          });
          return baseSortBy(result2, function(object, other) {
            return compareMultiple(object, other, orders);
          });
        }
        function basePick(object, paths) {
          return basePickBy(object, paths, function(value, path2) {
            return hasIn(object, path2);
          });
        }
        function basePickBy(object, paths, predicate) {
          var index = -1, length = paths.length, result2 = {};
          while (++index < length) {
            var path2 = paths[index], value = baseGet2(object, path2);
            if (predicate(value, path2)) {
              baseSet(result2, castPath2(path2, object), value);
            }
          }
          return result2;
        }
        function basePropertyDeep(path2) {
          return function(object) {
            return baseGet2(object, path2);
          };
        }
        function basePullAll(array, values2, iteratee2, comparator) {
          var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
          if (array === values2) {
            values2 = copyArray2(values2);
          }
          if (iteratee2) {
            seen = arrayMap2(array, baseUnary2(iteratee2));
          }
          while (++index < length) {
            var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
            while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
              if (seen !== array) {
                splice2.call(seen, fromIndex, 1);
              }
              splice2.call(array, fromIndex, 1);
            }
          }
          return array;
        }
        function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0, lastIndex = length - 1;
          while (length--) {
            var index = indexes[length];
            if (length == lastIndex || index !== previous) {
              var previous = index;
              if (isIndex2(index)) {
                splice2.call(array, index, 1);
              } else {
                baseUnset(array, index);
              }
            }
          }
          return array;
        }
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start, end, step, fromRight) {
          var index = -1, length = nativeMax2(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
          while (length--) {
            result2[fromRight ? length : ++index] = start;
            start += step;
          }
          return result2;
        }
        function baseRepeat(string, n) {
          var result2 = "";
          if (!string || n < 1 || n > MAX_SAFE_INTEGER2) {
            return result2;
          }
          do {
            if (n % 2) {
              result2 += string;
            }
            n = nativeFloor(n / 2);
            if (n) {
              string += string;
            }
          } while (n);
          return result2;
        }
        function baseRest(func, start) {
          return setToString(overRest(func, start, identity), func + "");
        }
        function baseSample(collection) {
          return arraySample(values(collection));
        }
        function baseSampleSize(collection, n) {
          var array = values(collection);
          return shuffleSelf(array, baseClamp2(n, 0, array.length));
        }
        function baseSet(object, path2, value, customizer) {
          if (!isObject2(object)) {
            return object;
          }
          path2 = castPath2(path2, object);
          var index = -1, length = path2.length, lastIndex = length - 1, nested = object;
          while (nested != null && ++index < length) {
            var key = toKey2(path2[index]), newValue = value;
            if (key === "__proto__" || key === "constructor" || key === "prototype") {
              return object;
            }
            if (index != lastIndex) {
              var objValue = nested[key];
              newValue = customizer ? customizer(objValue, key, nested) : undefined$1;
              if (newValue === undefined$1) {
                newValue = isObject2(objValue) ? objValue : isIndex2(path2[index + 1]) ? [] : {};
              }
            }
            assignValue2(nested, key, newValue);
            nested = nested[key];
          }
          return object;
        }
        var baseSetData = !metaMap ? identity : function(func, data) {
          metaMap.set(func, data);
          return func;
        };
        var baseSetToString = !defineProperty2 ? identity : function(func, string) {
          return defineProperty2(func, "toString", {
            "configurable": true,
            "enumerable": false,
            "value": constant(string),
            "writable": true
          });
        };
        function baseShuffle(collection) {
          return shuffleSelf(values(collection));
        }
        function baseSlice(array, start, end) {
          var index = -1, length = array.length;
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : end - start >>> 0;
          start >>>= 0;
          var result2 = Array2(length);
          while (++index < length) {
            result2[index] = array[index + start];
          }
          return result2;
        }
        function baseSome(collection, predicate) {
          var result2;
          baseEach(collection, function(value, index, collection2) {
            result2 = predicate(value, index, collection2);
            return !result2;
          });
          return !!result2;
        }
        function baseSortedIndex(array, value, retHighest) {
          var low = 0, high = array == null ? low : array.length;
          if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = low + high >>> 1, computed = array[mid];
              if (computed !== null && !isSymbol2(computed) && (retHighest ? computed <= value : computed < value)) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array, value, identity, retHighest);
        }
        function baseSortedIndexBy(array, value, iteratee2, retHighest) {
          var low = 0, high = array == null ? 0 : array.length;
          if (high === 0) {
            return 0;
          }
          value = iteratee2(value);
          var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol2(value), valIsUndefined = value === undefined$1;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined$1, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol2(computed);
            if (valIsNaN) {
              var setLow = retHighest || othIsReflexive;
            } else if (valIsUndefined) {
              setLow = othIsReflexive && (retHighest || othIsDefined);
            } else if (valIsNull) {
              setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
            } else if (valIsSymbol) {
              setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
            } else if (othIsNull || othIsSymbol) {
              setLow = false;
            } else {
              setLow = retHighest ? computed <= value : computed < value;
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin2(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array, iteratee2) {
          var index = -1, length = array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
            if (!index || !eq2(computed, seen)) {
              var seen = computed;
              result2[resIndex++] = value === 0 ? 0 : value;
            }
          }
          return result2;
        }
        function baseToNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol2(value)) {
            return NAN2;
          }
          return +value;
        }
        function baseToString2(value) {
          if (typeof value == "string") {
            return value;
          }
          if (isArray2(value)) {
            return arrayMap2(value, baseToString2) + "";
          }
          if (isSymbol2(value)) {
            return symbolToString2 ? symbolToString2.call(value) : "";
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function baseUniq(array, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
          if (comparator) {
            isCommon = false;
            includes2 = arrayIncludesWith;
          } else if (length >= LARGE_ARRAY_SIZE2) {
            var set2 = iteratee2 ? null : createSet(array);
            if (set2) {
              return setToArray(set2);
            }
            isCommon = false;
            includes2 = cacheHas;
            seen = new SetCache();
          } else {
            seen = iteratee2 ? [] : result2;
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var seenIndex = seen.length;
                while (seenIndex--) {
                  if (seen[seenIndex] === computed) {
                    continue outer;
                  }
                }
                if (iteratee2) {
                  seen.push(computed);
                }
                result2.push(value);
              } else if (!includes2(seen, computed, comparator)) {
                if (seen !== result2) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseUnset(object, path2) {
          path2 = castPath2(path2, object);
          object = parent(object, path2);
          return object == null || delete object[toKey2(last(path2))];
        }
        function baseUpdate(object, path2, updater, customizer) {
          return baseSet(object, path2, updater(baseGet2(object, path2)), customizer);
        }
        function baseWhile(array, predicate, isDrop, fromRight) {
          var length = array.length, index = fromRight ? length : -1;
          while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
          }
          return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
        }
        function baseWrapperValue(value, actions) {
          var result2 = value;
          if (result2 instanceof LazyWrapper) {
            result2 = result2.value();
          }
          return arrayReduce(actions, function(result3, action) {
            return action.func.apply(action.thisArg, arrayPush2([result3], action.args));
          }, result2);
        }
        function baseXor(arrays, iteratee2, comparator) {
          var length = arrays.length;
          if (length < 2) {
            return length ? baseUniq(arrays[0]) : [];
          }
          var index = -1, result2 = Array2(length);
          while (++index < length) {
            var array = arrays[index], othIndex = -1;
            while (++othIndex < length) {
              if (othIndex != index) {
                result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
              }
            }
          }
          return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
        }
        function baseZipObject(props, values2, assignFunc) {
          var index = -1, length = props.length, valsLength = values2.length, result2 = {};
          while (++index < length) {
            var value = index < valsLength ? values2[index] : undefined$1;
            assignFunc(result2, props[index], value);
          }
          return result2;
        }
        function castArrayLikeObject(value) {
          return isArrayLikeObject(value) ? value : [];
        }
        function castFunction(value) {
          return typeof value == "function" ? value : identity;
        }
        function castPath2(value, object) {
          if (isArray2(value)) {
            return value;
          }
          return isKey2(value, object) ? [value] : stringToPath2(toString2(value));
        }
        var castRest = baseRest;
        function castSlice(array, start, end) {
          var length = array.length;
          end = end === undefined$1 ? length : end;
          return !start && end >= length ? array : baseSlice(array, start, end);
        }
        var clearTimeout2 = ctxClearTimeout || function(id) {
          return root2.clearTimeout(id);
        };
        function cloneBuffer2(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var length = buffer.length, result2 = allocUnsafe2 ? allocUnsafe2(length) : new buffer.constructor(length);
          buffer.copy(result2);
          return result2;
        }
        function cloneArrayBuffer2(arrayBuffer) {
          var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
          return result2;
        }
        function cloneDataView2(dataView, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer2(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        function cloneRegExp2(regexp) {
          var result2 = new regexp.constructor(regexp.source, reFlags2.exec(regexp));
          result2.lastIndex = regexp.lastIndex;
          return result2;
        }
        function cloneSymbol2(symbol) {
          return symbolValueOf2 ? Object2(symbolValueOf2.call(symbol)) : {};
        }
        function cloneTypedArray2(typedArray, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer2(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        function compareAscending(value, other) {
          if (value !== other) {
            var valIsDefined = value !== undefined$1, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol2(value);
            var othIsDefined = other !== undefined$1, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol2(other);
            if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
              return 1;
            }
            if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }
        function compareMultiple(object, other, orders) {
          var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
          while (++index < length) {
            var result2 = compareAscending(objCriteria[index], othCriteria[index]);
            if (result2) {
              if (index >= ordersLength) {
                return result2;
              }
              var order = orders[index];
              return result2 * (order == "desc" ? -1 : 1);
            }
          }
          return object.index - other.index;
        }
        function composeArgs(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax2(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
          while (++leftIndex < leftLength) {
            result2[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[holders[argsIndex]] = args[argsIndex];
            }
          }
          while (rangeLength--) {
            result2[leftIndex++] = args[argsIndex++];
          }
          return result2;
        }
        function composeArgsRight(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax2(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
          while (++argsIndex < rangeLength) {
            result2[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result2[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[offset + holders[holdersIndex]] = args[argsIndex++];
            }
          }
          return result2;
        }
        function copyArray2(source2, array) {
          var index = -1, length = source2.length;
          array || (array = Array2(length));
          while (++index < length) {
            array[index] = source2[index];
          }
          return array;
        }
        function copyObject2(source2, props, object, customizer) {
          var isNew = !object;
          object || (object = {});
          var index = -1, length = props.length;
          while (++index < length) {
            var key = props[index];
            var newValue = customizer ? customizer(object[key], source2[key], key, object, source2) : undefined$1;
            if (newValue === undefined$1) {
              newValue = source2[key];
            }
            if (isNew) {
              baseAssignValue2(object, key, newValue);
            } else {
              assignValue2(object, key, newValue);
            }
          }
          return object;
        }
        function copySymbols2(source2, object) {
          return copyObject2(source2, getSymbols2(source2), object);
        }
        function copySymbolsIn(source2, object) {
          return copyObject2(source2, getSymbolsIn(source2), object);
        }
        function createAggregator(setter, initializer) {
          return function(collection, iteratee2) {
            var func = isArray2(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
          };
        }
        function createAssigner(assigner) {
          return baseRest(function(object, sources) {
            var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined$1, guard = length > 2 ? sources[2] : undefined$1;
            customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined$1;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined$1 : customizer;
              length = 1;
            }
            object = Object2(object);
            while (++index < length) {
              var source2 = sources[index];
              if (source2) {
                assigner(object, source2, index, customizer);
              }
            }
            return object;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee2) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike2(collection)) {
              return eachFunc(collection, iteratee2);
            }
            var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
            while (fromRight ? index-- : ++index < length) {
              if (iteratee2(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function(object, iteratee2, keysFunc) {
            var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee2(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }
        function createBind(func, bitmask, thisArg) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var fn = this && this !== root2 && this instanceof wrapper ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
          }
          return wrapper;
        }
        function createCaseFirst(methodName) {
          return function(string) {
            string = toString2(string);
            var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined$1;
            var chr = strSymbols ? strSymbols[0] : string.charAt(0);
            var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        function createCompounder(callback) {
          return function(string) {
            return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
          };
        }
        function createCtor(Ctor) {
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor();
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate2(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
            return isObject2(result2) ? result2 : thisBinding;
          };
        }
        function createCurry(func, bitmask, arity) {
          var Ctor = createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
            while (index--) {
              args[index] = arguments[index];
            }
            var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            if (length < arity) {
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                undefined$1,
                args,
                holders,
                undefined$1,
                undefined$1,
                arity - length
              );
            }
            var fn = this && this !== root2 && this instanceof wrapper ? Ctor : func;
            return apply(fn, this, args);
          }
          return wrapper;
        }
        function createFind(findIndexFunc) {
          return function(collection, predicate, fromIndex) {
            var iterable = Object2(collection);
            if (!isArrayLike2(collection)) {
              var iteratee2 = getIteratee(predicate, 3);
              collection = keys2(collection);
              predicate = function(key) {
                return iteratee2(iterable[key], key, iterable);
              };
            }
            var index = findIndexFunc(collection, predicate, fromIndex);
            return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined$1;
          };
        }
        function createFlow(fromRight) {
          return flatRest(function(funcs) {
            var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              var func = funcs[index];
              if (typeof func != "function") {
                throw new TypeError2(FUNC_ERROR_TEXT2);
              }
              if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? index : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined$1;
              if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments, value = args[0];
              if (wrapper && args.length == 1 && isArray2(value)) {
                return wrapper.plant(value).value();
              }
              var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
              while (++index2 < length) {
                result2 = funcs[index2].call(this, result2);
              }
              return result2;
            };
          });
        }
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
          var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined$1 : createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length;
            while (index--) {
              args[index] = arguments[index];
            }
            if (isCurried) {
              var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
              args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length -= holdersCount;
            if (isCurried && length < arity) {
              var newHolders = replaceHolders(args, placeholder);
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                thisArg,
                args,
                newHolders,
                argPos,
                ary2,
                arity - length
              );
            }
            var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
            length = args.length;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && length > 1) {
              args.reverse();
            }
            if (isAry && ary2 < length) {
              args.length = ary2;
            }
            if (this && this !== root2 && this instanceof wrapper) {
              fn = Ctor || createCtor(fn);
            }
            return fn.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createInverter(setter, toIteratee) {
          return function(object, iteratee2) {
            return baseInverter(object, setter, toIteratee(iteratee2), {});
          };
        }
        function createMathOperation(operator, defaultValue) {
          return function(value, other) {
            var result2;
            if (value === undefined$1 && other === undefined$1) {
              return defaultValue;
            }
            if (value !== undefined$1) {
              result2 = value;
            }
            if (other !== undefined$1) {
              if (result2 === undefined$1) {
                return other;
              }
              if (typeof value == "string" || typeof other == "string") {
                value = baseToString2(value);
                other = baseToString2(other);
              } else {
                value = baseToNumber(value);
                other = baseToNumber(other);
              }
              result2 = operator(value, other);
            }
            return result2;
          };
        }
        function createOver(arrayFunc) {
          return flatRest(function(iteratees) {
            iteratees = arrayMap2(iteratees, baseUnary2(getIteratee()));
            return baseRest(function(args) {
              var thisArg = this;
              return arrayFunc(iteratees, function(iteratee2) {
                return apply(iteratee2, thisArg, args);
              });
            });
          });
        }
        function createPadding(length, chars) {
          chars = chars === undefined$1 ? " " : baseToString2(chars);
          var charsLength = chars.length;
          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length) : chars;
          }
          var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
          return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
        }
        function createPartial(func, bitmask, thisArg, partials) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root2 && this instanceof wrapper ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRange(fromRight) {
          return function(start, end, step) {
            if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
              end = step = undefined$1;
            }
            start = toFinite(start);
            if (end === undefined$1) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            step = step === undefined$1 ? start < end ? 1 : -1 : toFinite(step);
            return baseRange(start, end, step, fromRight);
          };
        }
        function createRelationalOperation(operator) {
          return function(value, other) {
            if (!(typeof value == "string" && typeof other == "string")) {
              value = toNumber2(value);
              other = toNumber2(other);
            }
            return operator(value, other);
          };
        }
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
          var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined$1, newHoldersRight = isCurry ? undefined$1 : holders, newPartials = isCurry ? partials : undefined$1, newPartialsRight = isCurry ? undefined$1 : partials;
          bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
          bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
          if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
            bitmask &= -4;
          }
          var newData = [
            func,
            bitmask,
            thisArg,
            newPartials,
            newHolders,
            newPartialsRight,
            newHoldersRight,
            argPos,
            ary2,
            arity
          ];
          var result2 = wrapFunc.apply(undefined$1, newData);
          if (isLaziable(func)) {
            setData(result2, newData);
          }
          result2.placeholder = placeholder;
          return setWrapToString(result2, func, bitmask);
        }
        function createRound(methodName) {
          var func = Math2[methodName];
          return function(number, precision) {
            number = toNumber2(number);
            precision = precision == null ? 0 : nativeMin2(toInteger(precision), 292);
            if (precision && nativeIsFinite(number)) {
              var pair = (toString2(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
              pair = (toString2(value) + "e").split("e");
              return +(pair[0] + "e" + (+pair[1] - precision));
            }
            return func(number);
          };
        }
        var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values2) {
          return new Set2(values2);
        };
        function createToPairs(keysFunc) {
          return function(object) {
            var tag = getTag2(object);
            if (tag == mapTag2) {
              return mapToArray(object);
            }
            if (tag == setTag2) {
              return setToPairs(object);
            }
            return baseToPairs(object, keysFunc(object));
          };
        }
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
          var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
          if (!isBindKey && typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT2);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= -97;
            partials = holders = undefined$1;
          }
          ary2 = ary2 === undefined$1 ? ary2 : nativeMax2(toInteger(ary2), 0);
          arity = arity === undefined$1 ? arity : toInteger(arity);
          length -= holders ? holders.length : 0;
          if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials, holdersRight = holders;
            partials = holders = undefined$1;
          }
          var data = isBindKey ? undefined$1 : getData(func);
          var newData = [
            func,
            bitmask,
            thisArg,
            partials,
            holders,
            partialsRight,
            holdersRight,
            argPos,
            ary2,
            arity
          ];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] === undefined$1 ? isBindKey ? 0 : func.length : nativeMax2(newData[9] - length, 0);
          if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
            bitmask &= -25;
          }
          if (!bitmask || bitmask == WRAP_BIND_FLAG) {
            var result2 = createBind(func, bitmask, thisArg);
          } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
            result2 = createCurry(func, bitmask, arity);
          } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
            result2 = createPartial(func, bitmask, thisArg, partials);
          } else {
            result2 = createHybrid.apply(undefined$1, newData);
          }
          var setter = data ? baseSetData : setData;
          return setWrapToString(setter(result2, newData), func, bitmask);
        }
        function customDefaultsAssignIn(objValue, srcValue, key, object) {
          if (objValue === undefined$1 || eq2(objValue, objectProto2[key]) && !hasOwnProperty2.call(object, key)) {
            return srcValue;
          }
          return objValue;
        }
        function customDefaultsMerge(objValue, srcValue, key, object, source2, stack) {
          if (isObject2(objValue) && isObject2(srcValue)) {
            stack.set(srcValue, objValue);
            baseMerge(objValue, srcValue, undefined$1, customDefaultsMerge, stack);
            stack["delete"](srcValue);
          }
          return objValue;
        }
        function customOmitClone(value) {
          return isPlainObject(value) ? undefined$1 : value;
        }
        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var arrStacked = stack.get(array);
          var othStacked = stack.get(other);
          if (arrStacked && othStacked) {
            return arrStacked == other && othStacked == array;
          }
          var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined$1;
          stack.set(array, other);
          stack.set(other, array);
          while (++index < arrLength) {
            var arrValue = array[index], othValue = other[index];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
            }
            if (compared !== undefined$1) {
              if (compared) {
                continue;
              }
              result2 = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function(othValue2, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result2 = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result2 = false;
              break;
            }
          }
          stack["delete"](array);
          stack["delete"](other);
          return result2;
        }
        function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
          switch (tag) {
            case dataViewTag2:
              if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
              }
              object = object.buffer;
              other = other.buffer;
            case arrayBufferTag2:
              if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
                return false;
              }
              return true;
            case boolTag2:
            case dateTag2:
            case numberTag2:
              return eq2(+object, +other);
            case errorTag2:
              return object.name == other.name && object.message == other.message;
            case regexpTag2:
            case stringTag2:
              return object == other + "";
            case mapTag2:
              var convert = mapToArray;
            case setTag2:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object, other);
              var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
              stack["delete"](object);
              return result2;
            case symbolTag2:
              if (symbolValueOf2) {
                return symbolValueOf2.call(object) == symbolValueOf2.call(other);
              }
          }
          return false;
        }
        function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys2(object), objLength = objProps.length, othProps = getAllKeys2(other), othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : hasOwnProperty2.call(other, key))) {
              return false;
            }
          }
          var objStacked = stack.get(object);
          var othStacked = stack.get(other);
          if (objStacked && othStacked) {
            return objStacked == other && othStacked == object;
          }
          var result2 = true;
          stack.set(object, other);
          stack.set(other, object);
          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key], othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
            }
            if (!(compared === undefined$1 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result2 = false;
              break;
            }
            skipCtor || (skipCtor = key == "constructor");
          }
          if (result2 && !skipCtor) {
            var objCtor = object.constructor, othCtor = other.constructor;
            if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
              result2 = false;
            }
          }
          stack["delete"](object);
          stack["delete"](other);
          return result2;
        }
        function flatRest(func) {
          return setToString(overRest(func, undefined$1, flatten), func + "");
        }
        function getAllKeys2(object) {
          return baseGetAllKeys2(object, keys2, getSymbols2);
        }
        function getAllKeysIn(object) {
          return baseGetAllKeys2(object, keysIn, getSymbolsIn);
        }
        var getData = !metaMap ? noop : function(func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty2.call(realNames, result2) ? array.length : 0;
          while (length--) {
            var data = array[length], otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result2;
        }
        function getHolder(func) {
          var object = hasOwnProperty2.call(lodash2, "placeholder") ? lodash2 : func;
          return object.placeholder;
        }
        function getIteratee() {
          var result2 = lodash2.iteratee || iteratee;
          result2 = result2 === iteratee ? baseIteratee : result2;
          return arguments.length ? result2(arguments[0], arguments[1]) : result2;
        }
        function getMapData2(map2, key) {
          var data = map2.__data__;
          return isKeyable2(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        function getMatchData(object) {
          var result2 = keys2(object), length = result2.length;
          while (length--) {
            var key = result2[length], value = object[key];
            result2[length] = [key, value, isStrictComparable(value)];
          }
          return result2;
        }
        function getNative2(object, key) {
          var value = getValue2(object, key);
          return baseIsNative2(value) ? value : undefined$1;
        }
        function getRawTag2(value) {
          var isOwn = hasOwnProperty2.call(value, symToStringTag2), tag = value[symToStringTag2];
          try {
            value[symToStringTag2] = undefined$1;
            var unmasked = true;
          } catch (e) {
          }
          var result2 = nativeObjectToString2.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag2] = tag;
            } else {
              delete value[symToStringTag2];
            }
          }
          return result2;
        }
        var getSymbols2 = !nativeGetSymbols2 ? stubArray2 : function(object) {
          if (object == null) {
            return [];
          }
          object = Object2(object);
          return arrayFilter2(nativeGetSymbols2(object), function(symbol) {
            return propertyIsEnumerable2.call(object, symbol);
          });
        };
        var getSymbolsIn = !nativeGetSymbols2 ? stubArray2 : function(object) {
          var result2 = [];
          while (object) {
            arrayPush2(result2, getSymbols2(object));
            object = getPrototype2(object);
          }
          return result2;
        };
        var getTag2 = baseGetTag2;
        if (DataView2 && getTag2(new DataView2(new ArrayBuffer(1))) != dataViewTag2 || Map2 && getTag2(new Map2()) != mapTag2 || Promise2 && getTag2(Promise2.resolve()) != promiseTag2 || Set2 && getTag2(new Set2()) != setTag2 || WeakMap2 && getTag2(new WeakMap2()) != weakMapTag2) {
          getTag2 = function(value) {
            var result2 = baseGetTag2(value), Ctor = result2 == objectTag2 ? value.constructor : undefined$1, ctorString = Ctor ? toSource2(Ctor) : "";
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString2:
                  return dataViewTag2;
                case mapCtorString2:
                  return mapTag2;
                case promiseCtorString2:
                  return promiseTag2;
                case setCtorString2:
                  return setTag2;
                case weakMapCtorString2:
                  return weakMapTag2;
              }
            }
            return result2;
          };
        }
        function getView(start, end, transforms) {
          var index = -1, length = transforms.length;
          while (++index < length) {
            var data = transforms[index], size2 = data.size;
            switch (data.type) {
              case "drop":
                start += size2;
                break;
              case "dropRight":
                end -= size2;
                break;
              case "take":
                end = nativeMin2(end, start + size2);
                break;
              case "takeRight":
                start = nativeMax2(start, end - size2);
                break;
            }
          }
          return { "start": start, "end": end };
        }
        function getWrapDetails(source2) {
          var match = source2.match(reWrapDetails);
          return match ? match[1].split(reSplitDetails) : [];
        }
        function hasPath(object, path2, hasFunc) {
          path2 = castPath2(path2, object);
          var index = -1, length = path2.length, result2 = false;
          while (++index < length) {
            var key = toKey2(path2[index]);
            if (!(result2 = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result2 || ++index != length) {
            return result2;
          }
          length = object == null ? 0 : object.length;
          return !!length && isLength2(length) && isIndex2(key, length) && (isArray2(object) || isArguments2(object));
        }
        function initCloneArray2(array) {
          var length = array.length, result2 = new array.constructor(length);
          if (length && typeof array[0] == "string" && hasOwnProperty2.call(array, "index")) {
            result2.index = array.index;
            result2.input = array.input;
          }
          return result2;
        }
        function initCloneObject2(object) {
          return typeof object.constructor == "function" && !isPrototype2(object) ? baseCreate2(getPrototype2(object)) : {};
        }
        function initCloneByTag2(object, tag, isDeep) {
          var Ctor = object.constructor;
          switch (tag) {
            case arrayBufferTag2:
              return cloneArrayBuffer2(object);
            case boolTag2:
            case dateTag2:
              return new Ctor(+object);
            case dataViewTag2:
              return cloneDataView2(object, isDeep);
            case float32Tag2:
            case float64Tag2:
            case int8Tag2:
            case int16Tag2:
            case int32Tag2:
            case uint8Tag2:
            case uint8ClampedTag2:
            case uint16Tag2:
            case uint32Tag2:
              return cloneTypedArray2(object, isDeep);
            case mapTag2:
              return new Ctor();
            case numberTag2:
            case stringTag2:
              return new Ctor(object);
            case regexpTag2:
              return cloneRegExp2(object);
            case setTag2:
              return new Ctor();
            case symbolTag2:
              return cloneSymbol2(object);
          }
        }
        function insertWrapDetails(source2, details) {
          var length = details.length;
          if (!length) {
            return source2;
          }
          var lastIndex = length - 1;
          details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
          details = details.join(length > 2 ? ", " : " ");
          return source2.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
        }
        function isFlattenable(value) {
          return isArray2(value) || isArguments2(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        function isIndex2(value, length) {
          var type = typeof value;
          length = length == null ? MAX_SAFE_INTEGER2 : length;
          return !!length && (type == "number" || type != "symbol" && reIsUint2.test(value)) && (value > -1 && value % 1 == 0 && value < length);
        }
        function isIterateeCall(value, index, object) {
          if (!isObject2(object)) {
            return false;
          }
          var type = typeof index;
          if (type == "number" ? isArrayLike2(object) && isIndex2(index, object.length) : type == "string" && index in object) {
            return eq2(object[index], value);
          }
          return false;
        }
        function isKey2(value, object) {
          if (isArray2(value)) {
            return false;
          }
          var type = typeof value;
          if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol2(value)) {
            return true;
          }
          return reIsPlainProp2.test(value) || !reIsDeepProp2.test(value) || object != null && value in Object2(object);
        }
        function isKeyable2(value) {
          var type = typeof value;
          return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
        }
        function isLaziable(func) {
          var funcName = getFuncName(func), other = lodash2[funcName];
          if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        function isMasked2(func) {
          return !!maskSrcKey2 && maskSrcKey2 in func;
        }
        var isMaskable = coreJsData2 ? isFunction2 : stubFalse2;
        function isPrototype2(value) {
          var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto2;
          return value === proto;
        }
        function isStrictComparable(value) {
          return value === value && !isObject2(value);
        }
        function matchesStrictComparable(key, srcValue) {
          return function(object) {
            if (object == null) {
              return false;
            }
            return object[key] === srcValue && (srcValue !== undefined$1 || key in Object2(object));
          };
        }
        function memoizeCapped2(func) {
          var result2 = memoize2(func, function(key) {
            if (cache.size === MAX_MEMOIZE_SIZE2) {
              cache.clear();
            }
            return key;
          });
          var cache = result2.cache;
          return result2;
        }
        function mergeData(data, source2) {
          var bitmask = data[1], srcBitmask = source2[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
          var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source2[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source2[7].length <= source2[8] && bitmask == WRAP_CURRY_FLAG;
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & WRAP_BIND_FLAG) {
            data[2] = source2[2];
            newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
          }
          var value = source2[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source2[4]) : value;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source2[4];
          }
          value = source2[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source2[6]) : value;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source2[6];
          }
          value = source2[7];
          if (value) {
            data[7] = value;
          }
          if (srcBitmask & WRAP_ARY_FLAG) {
            data[8] = data[8] == null ? source2[8] : nativeMin2(data[8], source2[8]);
          }
          if (data[9] == null) {
            data[9] = source2[9];
          }
          data[0] = source2[0];
          data[1] = newBitmask;
          return data;
        }
        function nativeKeysIn(object) {
          var result2 = [];
          if (object != null) {
            for (var key in Object2(object)) {
              result2.push(key);
            }
          }
          return result2;
        }
        function objectToString2(value) {
          return nativeObjectToString2.call(value);
        }
        function overRest(func, start, transform2) {
          start = nativeMax2(start === undefined$1 ? func.length - 1 : start, 0);
          return function() {
            var args = arguments, index = -1, length = nativeMax2(args.length - start, 0), array = Array2(length);
            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array2(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = transform2(array);
            return apply(func, this, otherArgs);
          };
        }
        function parent(object, path2) {
          return path2.length < 2 ? object : baseGet2(object, baseSlice(path2, 0, -1));
        }
        function reorder(array, indexes) {
          var arrLength = array.length, length = nativeMin2(indexes.length, arrLength), oldArray = copyArray2(array);
          while (length--) {
            var index = indexes[length];
            array[length] = isIndex2(index, arrLength) ? oldArray[index] : undefined$1;
          }
          return array;
        }
        function safeGet(object, key) {
          if (key === "constructor" && typeof object[key] === "function") {
            return;
          }
          if (key == "__proto__") {
            return;
          }
          return object[key];
        }
        var setData = shortOut(baseSetData);
        var setTimeout2 = ctxSetTimeout || function(func, wait) {
          return root2.setTimeout(func, wait);
        };
        var setToString = shortOut(baseSetToString);
        function setWrapToString(wrapper, reference, bitmask) {
          var source2 = reference + "";
          return setToString(wrapper, insertWrapDetails(source2, updateWrapDetails(getWrapDetails(source2), bitmask)));
        }
        function shortOut(func) {
          var count = 0, lastCalled = 0;
          return function() {
            var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(undefined$1, arguments);
          };
        }
        function shuffleSelf(array, size2) {
          var index = -1, length = array.length, lastIndex = length - 1;
          size2 = size2 === undefined$1 ? length : size2;
          while (++index < size2) {
            var rand = baseRandom(index, lastIndex), value = array[rand];
            array[rand] = array[index];
            array[index] = value;
          }
          array.length = size2;
          return array;
        }
        var stringToPath2 = memoizeCapped2(function(string) {
          var result2 = [];
          if (string.charCodeAt(0) === 46) {
            result2.push("");
          }
          string.replace(rePropName2, function(match, number, quote, subString) {
            result2.push(quote ? subString.replace(reEscapeChar2, "$1") : number || match);
          });
          return result2;
        });
        function toKey2(value) {
          if (typeof value == "string" || isSymbol2(value)) {
            return value;
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function toSource2(func) {
          if (func != null) {
            try {
              return funcToString2.call(func);
            } catch (e) {
            }
            try {
              return func + "";
            } catch (e) {
            }
          }
          return "";
        }
        function updateWrapDetails(details, bitmask) {
          arrayEach2(wrapFlags, function(pair) {
            var value = "_." + pair[0];
            if (bitmask & pair[1] && !arrayIncludes(details, value)) {
              details.push(value);
            }
          });
          return details.sort();
        }
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result2.__actions__ = copyArray2(wrapper.__actions__);
          result2.__index__ = wrapper.__index__;
          result2.__values__ = wrapper.__values__;
          return result2;
        }
        function chunk(array, size2, guard) {
          if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined$1) {
            size2 = 1;
          } else {
            size2 = nativeMax2(toInteger(size2), 0);
          }
          var length = array == null ? 0 : array.length;
          if (!length || size2 < 1) {
            return [];
          }
          var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
          while (index < length) {
            result2[resIndex++] = baseSlice(array, index, index += size2);
          }
          return result2;
        }
        function compact(array) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index];
            if (value) {
              result2[resIndex++] = value;
            }
          }
          return result2;
        }
        function concat() {
          var length = arguments.length;
          if (!length) {
            return [];
          }
          var args = Array2(length - 1), array = arguments[0], index = length;
          while (index--) {
            args[index - 1] = arguments[index];
          }
          return arrayPush2(isArray2(array) ? copyArray2(array) : [array], baseFlatten(args, 1));
        }
        var difference = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = baseRest(function(array, values2) {
          var iteratee2 = last(values2);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined$1;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
        });
        var differenceWith = baseRest(function(array, values2) {
          var comparator = last(values2);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined$1;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined$1, comparator) : [];
        });
        function drop(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined$1 ? 1 : toInteger(n);
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function dropRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined$1 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function dropRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
        }
        function fill(array, value, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
            start = 0;
            end = length;
          }
          return baseFill(array, value, start, end);
        }
        function findIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax2(length + index, 0);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index);
        }
        function findLastIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length - 1;
          if (fromIndex !== undefined$1) {
            index = toInteger(fromIndex);
            index = fromIndex < 0 ? nativeMax2(length + index, 0) : nativeMin2(index, length - 1);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index, true);
        }
        function flatten(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, 1) : [];
        }
        function flattenDeep(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, INFINITY) : [];
        }
        function flattenDepth(array, depth) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          depth = depth === undefined$1 ? 1 : toInteger(depth);
          return baseFlatten(array, depth);
        }
        function fromPairs(pairs) {
          var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
          while (++index < length) {
            var pair = pairs[index];
            result2[pair[0]] = pair[1];
          }
          return result2;
        }
        function head(array) {
          return array && array.length ? array[0] : undefined$1;
        }
        function indexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax2(length + index, 0);
          }
          return baseIndexOf(array, value, index);
        }
        function initial(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 0, -1) : [];
        }
        var intersection = baseRest(function(arrays) {
          var mapped = arrayMap2(arrays, castArrayLikeObject);
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        var intersectionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays), mapped = arrayMap2(arrays, castArrayLikeObject);
          if (iteratee2 === last(mapped)) {
            iteratee2 = undefined$1;
          } else {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
        });
        var intersectionWith = baseRest(function(arrays) {
          var comparator = last(arrays), mapped = arrayMap2(arrays, castArrayLikeObject);
          comparator = typeof comparator == "function" ? comparator : undefined$1;
          if (comparator) {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined$1, comparator) : [];
        });
        function join(array, separator) {
          return array == null ? "" : nativeJoin.call(array, separator);
        }
        function last(array) {
          var length = array == null ? 0 : array.length;
          return length ? array[length - 1] : undefined$1;
        }
        function lastIndexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length;
          if (fromIndex !== undefined$1) {
            index = toInteger(fromIndex);
            index = index < 0 ? nativeMax2(length + index, 0) : nativeMin2(index, length - 1);
          }
          return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
        }
        function nth(array, n) {
          return array && array.length ? baseNth(array, toInteger(n)) : undefined$1;
        }
        var pull = baseRest(pullAll);
        function pullAll(array, values2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
        }
        function pullAllBy(array, values2, iteratee2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
        }
        function pullAllWith(array, values2, comparator) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined$1, comparator) : array;
        }
        var pullAt = flatRest(function(array, indexes) {
          var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
          basePullAt(array, arrayMap2(indexes, function(index) {
            return isIndex2(index, length) ? +index : index;
          }).sort(compareAscending));
          return result2;
        });
        function remove(array, predicate) {
          var result2 = [];
          if (!(array && array.length)) {
            return result2;
          }
          var index = -1, indexes = [], length = array.length;
          predicate = getIteratee(predicate, 3);
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result2.push(value);
              indexes.push(index);
            }
          }
          basePullAt(array, indexes);
          return result2;
        }
        function reverse(array) {
          return array == null ? array : nativeReverse.call(array);
        }
        function slice(array, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
            start = 0;
            end = length;
          } else {
            start = start == null ? 0 : toInteger(start);
            end = end === undefined$1 ? length : toInteger(end);
          }
          return baseSlice(array, start, end);
        }
        function sortedIndex(array, value) {
          return baseSortedIndex(array, value);
        }
        function sortedIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
        }
        function sortedIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value);
            if (index < length && eq2(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedLastIndex(array, value) {
          return baseSortedIndex(array, value, true);
        }
        function sortedLastIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
        }
        function sortedLastIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value, true) - 1;
            if (eq2(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedUniq(array) {
          return array && array.length ? baseSortedUniq(array) : [];
        }
        function sortedUniqBy(array, iteratee2) {
          return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function tail(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 1, length) : [];
        }
        function take(array, n, guard) {
          if (!(array && array.length)) {
            return [];
          }
          n = guard || n === undefined$1 ? 1 : toInteger(n);
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function takeRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined$1 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function takeRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
        }
        var union = baseRest(function(arrays) {
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined$1;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
        });
        var unionWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined$1;
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined$1, comparator);
        });
        function uniq(array) {
          return array && array.length ? baseUniq(array) : [];
        }
        function uniqBy(array, iteratee2) {
          return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function uniqWith(array, comparator) {
          comparator = typeof comparator == "function" ? comparator : undefined$1;
          return array && array.length ? baseUniq(array, undefined$1, comparator) : [];
        }
        function unzip(array) {
          if (!(array && array.length)) {
            return [];
          }
          var length = 0;
          array = arrayFilter2(array, function(group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax2(group.length, length);
              return true;
            }
          });
          return baseTimes2(length, function(index) {
            return arrayMap2(array, baseProperty(index));
          });
        }
        function unzipWith(array, iteratee2) {
          if (!(array && array.length)) {
            return [];
          }
          var result2 = unzip(array);
          if (iteratee2 == null) {
            return result2;
          }
          return arrayMap2(result2, function(group) {
            return apply(iteratee2, undefined$1, group);
          });
        }
        var without = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
        });
        var xor = baseRest(function(arrays) {
          return baseXor(arrayFilter2(arrays, isArrayLikeObject));
        });
        var xorBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined$1;
          }
          return baseXor(arrayFilter2(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
        });
        var xorWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined$1;
          return baseXor(arrayFilter2(arrays, isArrayLikeObject), undefined$1, comparator);
        });
        var zip = baseRest(unzip);
        function zipObject(props, values2) {
          return baseZipObject(props || [], values2 || [], assignValue2);
        }
        function zipObjectDeep(props, values2) {
          return baseZipObject(props || [], values2 || [], baseSet);
        }
        var zipWith = baseRest(function(arrays) {
          var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined$1;
          iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined$1;
          return unzipWith(arrays, iteratee2);
        });
        function chain(value) {
          var result2 = lodash2(value);
          result2.__chain__ = true;
          return result2;
        }
        function tap(value, interceptor) {
          interceptor(value);
          return value;
        }
        function thru(value, interceptor) {
          return interceptor(value);
        }
        var wrapperAt = flatRest(function(paths) {
          var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
            return baseAt(object, paths);
          };
          if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex2(start)) {
            return this.thru(interceptor);
          }
          value = value.slice(start, +start + (length ? 1 : 0));
          value.__actions__.push({
            "func": thru,
            "args": [interceptor],
            "thisArg": undefined$1
          });
          return new LodashWrapper(value, this.__chain__).thru(function(array) {
            if (length && !array.length) {
              array.push(undefined$1);
            }
            return array;
          });
        });
        function wrapperChain() {
          return chain(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperNext() {
          if (this.__values__ === undefined$1) {
            this.__values__ = toArray(this.value());
          }
          var done = this.__index__ >= this.__values__.length, value = done ? undefined$1 : this.__values__[this.__index__++];
          return { "done": done, "value": value };
        }
        function wrapperToIterator() {
          return this;
        }
        function wrapperPlant(value) {
          var result2, parent2 = this;
          while (parent2 instanceof baseLodash) {
            var clone3 = wrapperClone(parent2);
            clone3.__index__ = 0;
            clone3.__values__ = undefined$1;
            if (result2) {
              previous.__wrapped__ = clone3;
            } else {
              result2 = clone3;
            }
            var previous = clone3;
            parent2 = parent2.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result2;
        }
        function wrapperReverse() {
          var value = this.__wrapped__;
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              "func": thru,
              "args": [reverse],
              "thisArg": undefined$1
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse);
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty2.call(result2, key)) {
            ++result2[key];
          } else {
            baseAssignValue2(result2, key, 1);
          }
        });
        function every(collection, predicate, guard) {
          var func = isArray2(collection) ? arrayEvery : baseEvery;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined$1;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        function filter(collection, predicate) {
          var func = isArray2(collection) ? arrayFilter2 : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex);
        function flatMap(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), 1);
        }
        function flatMapDeep(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), INFINITY);
        }
        function flatMapDepth(collection, iteratee2, depth) {
          depth = depth === undefined$1 ? 1 : toInteger(depth);
          return baseFlatten(map(collection, iteratee2), depth);
        }
        function forEach(collection, iteratee2) {
          var func = isArray2(collection) ? arrayEach2 : baseEach;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function forEachRight(collection, iteratee2) {
          var func = isArray2(collection) ? arrayEachRight : baseEachRight;
          return func(collection, getIteratee(iteratee2, 3));
        }
        var groupBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty2.call(result2, key)) {
            result2[key].push(value);
          } else {
            baseAssignValue2(result2, key, [value]);
          }
        });
        function includes(collection, value, fromIndex, guard) {
          collection = isArrayLike2(collection) ? collection : values(collection);
          fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax2(length + fromIndex, 0);
          }
          return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        var invokeMap = baseRest(function(collection, path2, args) {
          var index = -1, isFunc = typeof path2 == "function", result2 = isArrayLike2(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value) {
            result2[++index] = isFunc ? apply(path2, value, args) : baseInvoke(value, path2, args);
          });
          return result2;
        });
        var keyBy = createAggregator(function(result2, value, key) {
          baseAssignValue2(result2, key, value);
        });
        function map(collection, iteratee2) {
          var func = isArray2(collection) ? arrayMap2 : baseMap;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function orderBy(collection, iteratees, orders, guard) {
          if (collection == null) {
            return [];
          }
          if (!isArray2(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard ? undefined$1 : orders;
          if (!isArray2(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function(result2, value, key) {
          result2[key ? 0 : 1].push(value);
        }, function() {
          return [[], []];
        });
        function reduce(collection, iteratee2, accumulator) {
          var func = isArray2(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee2, accumulator) {
          var func = isArray2(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
          var func = isArray2(collection) ? arrayFilter2 : baseFilter;
          return func(collection, negate(getIteratee(predicate, 3)));
        }
        function sample(collection) {
          var func = isArray2(collection) ? arraySample : baseSample;
          return func(collection);
        }
        function sampleSize(collection, n, guard) {
          if (guard ? isIterateeCall(collection, n, guard) : n === undefined$1) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          var func = isArray2(collection) ? arraySampleSize : baseSampleSize;
          return func(collection, n);
        }
        function shuffle(collection) {
          var func = isArray2(collection) ? arrayShuffle : baseShuffle;
          return func(collection);
        }
        function size(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike2(collection)) {
            return isString(collection) ? stringSize(collection) : collection.length;
          }
          var tag = getTag2(collection);
          if (tag == mapTag2 || tag == setTag2) {
            return collection.size;
          }
          return baseKeys2(collection).length;
        }
        function some(collection, predicate, guard) {
          var func = isArray2(collection) ? arraySome : baseSome;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined$1;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = baseRest(function(collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length = iteratees.length;
          if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees = [iteratees[0]];
          }
          return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        var now2 = ctxNow || function() {
          return root2.Date.now();
        };
        function after(n, func) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT2);
          }
          n = toInteger(n);
          return function() {
            if (--n < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n, guard) {
          n = guard ? undefined$1 : n;
          n = func && n == null ? func.length : n;
          return createWrap(func, WRAP_ARY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, n);
        }
        function before(n, func) {
          var result2;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT2);
          }
          n = toInteger(n);
          return function() {
            if (--n > 0) {
              result2 = func.apply(this, arguments);
            }
            if (n <= 1) {
              func = undefined$1;
            }
            return result2;
          };
        }
        var bind = baseRest(function(func, thisArg, partials) {
          var bitmask = WRAP_BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = baseRest(function(object, key, partials) {
          var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bindKey));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(key, bitmask, object, partials, holders);
        });
        function curry(func, arity, guard) {
          arity = guard ? undefined$1 : arity;
          var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
          result2.placeholder = curry.placeholder;
          return result2;
        }
        function curryRight(func, arity, guard) {
          arity = guard ? undefined$1 : arity;
          var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
          result2.placeholder = curryRight.placeholder;
          return result2;
        }
        function debounce2(func, wait, options) {
          var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT2);
          }
          wait = toNumber2(wait) || 0;
          if (isObject2(options)) {
            leading = !!options.leading;
            maxing = "maxWait" in options;
            maxWait = maxing ? nativeMax2(toNumber2(options.maxWait) || 0, wait) : maxWait;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs, thisArg = lastThis;
            lastArgs = lastThis = undefined$1;
            lastInvokeTime = time;
            result2 = func.apply(thisArg, args);
            return result2;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout2(timerExpired, wait);
            return leading ? invokeFunc(time) : result2;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
            return maxing ? nativeMin2(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === undefined$1 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time = now2();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout2(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = undefined$1;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined$1;
            return result2;
          }
          function cancel() {
            if (timerId !== undefined$1) {
              clearTimeout2(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined$1;
          }
          function flush() {
            return timerId === undefined$1 ? result2 : trailingEdge(now2());
          }
          function debounced() {
            var time = now2(), isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === undefined$1) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                clearTimeout2(timerId);
                timerId = setTimeout2(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined$1) {
              timerId = setTimeout2(timerExpired, wait);
            }
            return result2;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        var defer = baseRest(function(func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = baseRest(function(func, wait, args) {
          return baseDelay(func, toNumber2(wait) || 0, args);
        });
        function flip(func) {
          return createWrap(func, WRAP_FLIP_FLAG);
        }
        function memoize2(func, resolver) {
          if (typeof func != "function" || resolver != null && typeof resolver != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT2);
          }
          var memoized = function() {
            var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result2 = func.apply(this, args);
            memoized.cache = cache.set(key, result2) || cache;
            return result2;
          };
          memoized.cache = new (memoize2.Cache || MapCache2)();
          return memoized;
        }
        memoize2.Cache = MapCache2;
        function negate(predicate) {
          if (typeof predicate != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT2);
          }
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        function once2(func) {
          return before(2, func);
        }
        var overArgs = castRest(function(func, transforms) {
          transforms = transforms.length == 1 && isArray2(transforms[0]) ? arrayMap2(transforms[0], baseUnary2(getIteratee())) : arrayMap2(baseFlatten(transforms, 1), baseUnary2(getIteratee()));
          var funcsLength = transforms.length;
          return baseRest(function(args) {
            var index = -1, length = nativeMin2(args.length, funcsLength);
            while (++index < length) {
              args[index] = transforms[index].call(this, args[index]);
            }
            return apply(func, this, args);
          });
        });
        var partial = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partial));
          return createWrap(func, WRAP_PARTIAL_FLAG, undefined$1, partials, holders);
        });
        var partialRight = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partialRight));
          return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined$1, partials, holders);
        });
        var rearg = flatRest(function(func, indexes) {
          return createWrap(func, WRAP_REARG_FLAG, undefined$1, undefined$1, undefined$1, indexes);
        });
        function rest(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT2);
          }
          start = start === undefined$1 ? start : toInteger(start);
          return baseRest(func, start);
        }
        function spread(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT2);
          }
          start = start == null ? 0 : nativeMax2(toInteger(start), 0);
          return baseRest(function(args) {
            var array = args[start], otherArgs = castSlice(args, 0, start);
            if (array) {
              arrayPush2(otherArgs, array);
            }
            return apply(func, this, otherArgs);
          });
        }
        function throttle(func, wait, options) {
          var leading = true, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT2);
          }
          if (isObject2(options)) {
            leading = "leading" in options ? !!options.leading : leading;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          return debounce2(func, wait, {
            "leading": leading,
            "maxWait": wait,
            "trailing": trailing
          });
        }
        function unary(func) {
          return ary(func, 1);
        }
        function wrap(value, wrapper) {
          return partial(castFunction(wrapper), value);
        }
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value = arguments[0];
          return isArray2(value) ? value : [value];
        }
        function clone2(value) {
          return baseClone2(value, CLONE_SYMBOLS_FLAG2);
        }
        function cloneWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          return baseClone2(value, CLONE_SYMBOLS_FLAG2, customizer);
        }
        function cloneDeep(value) {
          return baseClone2(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG2);
        }
        function cloneDeepWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          return baseClone2(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG2, customizer);
        }
        function conformsTo(object, source2) {
          return source2 == null || baseConformsTo(object, source2, keys2(source2));
        }
        function eq2(value, other) {
          return value === other || value !== value && other !== other;
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function(value, other) {
          return value >= other;
        });
        var isArguments2 = baseIsArguments2(/* @__PURE__ */ function() {
          return arguments;
        }()) ? baseIsArguments2 : function(value) {
          return isObjectLike2(value) && hasOwnProperty2.call(value, "callee") && !propertyIsEnumerable2.call(value, "callee");
        };
        var isArray2 = Array2.isArray;
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary2(nodeIsArrayBuffer) : baseIsArrayBuffer;
        function isArrayLike2(value) {
          return value != null && isLength2(value.length) && !isFunction2(value);
        }
        function isArrayLikeObject(value) {
          return isObjectLike2(value) && isArrayLike2(value);
        }
        function isBoolean(value) {
          return value === true || value === false || isObjectLike2(value) && baseGetTag2(value) == boolTag2;
        }
        var isBuffer2 = nativeIsBuffer2 || stubFalse2;
        var isDate = nodeIsDate ? baseUnary2(nodeIsDate) : baseIsDate;
        function isElement(value) {
          return isObjectLike2(value) && value.nodeType === 1 && !isPlainObject(value);
        }
        function isEmpty(value) {
          if (value == null) {
            return true;
          }
          if (isArrayLike2(value) && (isArray2(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer2(value) || isTypedArray2(value) || isArguments2(value))) {
            return !value.length;
          }
          var tag = getTag2(value);
          if (tag == mapTag2 || tag == setTag2) {
            return !value.size;
          }
          if (isPrototype2(value)) {
            return !baseKeys2(value).length;
          }
          for (var key in value) {
            if (hasOwnProperty2.call(value, key)) {
              return false;
            }
          }
          return true;
        }
        function isEqual(value, other) {
          return baseIsEqual(value, other);
        }
        function isEqualWith(value, other, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          var result2 = customizer ? customizer(value, other) : undefined$1;
          return result2 === undefined$1 ? baseIsEqual(value, other, undefined$1, customizer) : !!result2;
        }
        function isError(value) {
          if (!isObjectLike2(value)) {
            return false;
          }
          var tag = baseGetTag2(value);
          return tag == errorTag2 || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
        }
        function isFinite2(value) {
          return typeof value == "number" && nativeIsFinite(value);
        }
        function isFunction2(value) {
          if (!isObject2(value)) {
            return false;
          }
          var tag = baseGetTag2(value);
          return tag == funcTag2 || tag == genTag2 || tag == asyncTag2 || tag == proxyTag2;
        }
        function isInteger(value) {
          return typeof value == "number" && value == toInteger(value);
        }
        function isLength2(value) {
          return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
        }
        function isObject2(value) {
          var type = typeof value;
          return value != null && (type == "object" || type == "function");
        }
        function isObjectLike2(value) {
          return value != null && typeof value == "object";
        }
        var isMap2 = nodeIsMap2 ? baseUnary2(nodeIsMap2) : baseIsMap2;
        function isMatch(object, source2) {
          return object === source2 || baseIsMatch(object, source2, getMatchData(source2));
        }
        function isMatchWith(object, source2, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          return baseIsMatch(object, source2, getMatchData(source2), customizer);
        }
        function isNaN(value) {
          return isNumber(value) && value != +value;
        }
        function isNative(value) {
          if (isMaskable(value)) {
            throw new Error2(CORE_ERROR_TEXT);
          }
          return baseIsNative2(value);
        }
        function isNull(value) {
          return value === null;
        }
        function isNil(value) {
          return value == null;
        }
        function isNumber(value) {
          return typeof value == "number" || isObjectLike2(value) && baseGetTag2(value) == numberTag2;
        }
        function isPlainObject(value) {
          if (!isObjectLike2(value) || baseGetTag2(value) != objectTag2) {
            return false;
          }
          var proto = getPrototype2(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty2.call(proto, "constructor") && proto.constructor;
          return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString2.call(Ctor) == objectCtorString;
        }
        var isRegExp = nodeIsRegExp ? baseUnary2(nodeIsRegExp) : baseIsRegExp;
        function isSafeInteger(value) {
          return isInteger(value) && value >= -MAX_SAFE_INTEGER2 && value <= MAX_SAFE_INTEGER2;
        }
        var isSet2 = nodeIsSet2 ? baseUnary2(nodeIsSet2) : baseIsSet2;
        function isString(value) {
          return typeof value == "string" || !isArray2(value) && isObjectLike2(value) && baseGetTag2(value) == stringTag2;
        }
        function isSymbol2(value) {
          return typeof value == "symbol" || isObjectLike2(value) && baseGetTag2(value) == symbolTag2;
        }
        var isTypedArray2 = nodeIsTypedArray2 ? baseUnary2(nodeIsTypedArray2) : baseIsTypedArray2;
        function isUndefined(value) {
          return value === undefined$1;
        }
        function isWeakMap(value) {
          return isObjectLike2(value) && getTag2(value) == weakMapTag2;
        }
        function isWeakSet(value) {
          return isObjectLike2(value) && baseGetTag2(value) == weakSetTag;
        }
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function(value, other) {
          return value <= other;
        });
        function toArray(value) {
          if (!value) {
            return [];
          }
          if (isArrayLike2(value)) {
            return isString(value) ? stringToArray(value) : copyArray2(value);
          }
          if (symIterator && value[symIterator]) {
            return iteratorToArray(value[symIterator]());
          }
          var tag = getTag2(value), func = tag == mapTag2 ? mapToArray : tag == setTag2 ? setToArray : values;
          return func(value);
        }
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber2(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        function toInteger(value) {
          var result2 = toFinite(value), remainder = result2 % 1;
          return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
        }
        function toLength(value) {
          return value ? baseClamp2(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber2(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol2(value)) {
            return NAN2;
          }
          if (isObject2(value)) {
            var other = typeof value.valueOf == "function" ? value.valueOf() : value;
            value = isObject2(other) ? other + "" : other;
          }
          if (typeof value != "string") {
            return value === 0 ? value : +value;
          }
          value = baseTrim2(value);
          var isBinary = reIsBinary2.test(value);
          return isBinary || reIsOctal2.test(value) ? freeParseInt2(value.slice(2), isBinary ? 2 : 8) : reIsBadHex2.test(value) ? NAN2 : +value;
        }
        function toPlainObject(value) {
          return copyObject2(value, keysIn(value));
        }
        function toSafeInteger(value) {
          return value ? baseClamp2(toInteger(value), -MAX_SAFE_INTEGER2, MAX_SAFE_INTEGER2) : value === 0 ? value : 0;
        }
        function toString2(value) {
          return value == null ? "" : baseToString2(value);
        }
        var assign = createAssigner(function(object, source2) {
          if (isPrototype2(source2) || isArrayLike2(source2)) {
            copyObject2(source2, keys2(source2), object);
            return;
          }
          for (var key in source2) {
            if (hasOwnProperty2.call(source2, key)) {
              assignValue2(object, key, source2[key]);
            }
          }
        });
        var assignIn = createAssigner(function(object, source2) {
          copyObject2(source2, keysIn(source2), object);
        });
        var assignInWith = createAssigner(function(object, source2, srcIndex, customizer) {
          copyObject2(source2, keysIn(source2), object, customizer);
        });
        var assignWith = createAssigner(function(object, source2, srcIndex, customizer) {
          copyObject2(source2, keys2(source2), object, customizer);
        });
        var at = flatRest(baseAt);
        function create2(prototype, properties) {
          var result2 = baseCreate2(prototype);
          return properties == null ? result2 : baseAssign2(result2, properties);
        }
        var defaults = baseRest(function(object, sources) {
          object = Object2(object);
          var index = -1;
          var length = sources.length;
          var guard = length > 2 ? sources[2] : undefined$1;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            length = 1;
          }
          while (++index < length) {
            var source2 = sources[index];
            var props = keysIn(source2);
            var propsIndex = -1;
            var propsLength = props.length;
            while (++propsIndex < propsLength) {
              var key = props[propsIndex];
              var value = object[key];
              if (value === undefined$1 || eq2(value, objectProto2[key]) && !hasOwnProperty2.call(object, key)) {
                object[key] = source2[key];
              }
            }
          }
          return object;
        });
        var defaultsDeep = baseRest(function(args) {
          args.push(undefined$1, customDefaultsMerge);
          return apply(mergeWith, undefined$1, args);
        });
        function findKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
        }
        function findLastKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
        }
        function forIn(object, iteratee2) {
          return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forInRight(object, iteratee2) {
          return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forOwn(object, iteratee2) {
          return object && baseForOwn(object, getIteratee(iteratee2, 3));
        }
        function forOwnRight(object, iteratee2) {
          return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
        }
        function functions(object) {
          return object == null ? [] : baseFunctions(object, keys2(object));
        }
        function functionsIn(object) {
          return object == null ? [] : baseFunctions(object, keysIn(object));
        }
        function get2(object, path2, defaultValue) {
          var result2 = object == null ? undefined$1 : baseGet2(object, path2);
          return result2 === undefined$1 ? defaultValue : result2;
        }
        function has(object, path2) {
          return object != null && hasPath(object, path2, baseHas);
        }
        function hasIn(object, path2) {
          return object != null && hasPath(object, path2, baseHasIn);
        }
        var invert = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString2.call(value);
          }
          result2[value] = key;
        }, constant(identity));
        var invertBy = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString2.call(value);
          }
          if (hasOwnProperty2.call(result2, value)) {
            result2[value].push(key);
          } else {
            result2[value] = [key];
          }
        }, getIteratee);
        var invoke = baseRest(baseInvoke);
        function keys2(object) {
          return isArrayLike2(object) ? arrayLikeKeys2(object) : baseKeys2(object);
        }
        function keysIn(object) {
          return isArrayLike2(object) ? arrayLikeKeys2(object, true) : baseKeysIn(object);
        }
        function mapKeys(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue2(result2, iteratee2(value, key, object2), value);
          });
          return result2;
        }
        function mapValues(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue2(result2, key, iteratee2(value, key, object2));
          });
          return result2;
        }
        var merge = createAssigner(function(object, source2, srcIndex) {
          baseMerge(object, source2, srcIndex);
        });
        var mergeWith = createAssigner(function(object, source2, srcIndex, customizer) {
          baseMerge(object, source2, srcIndex, customizer);
        });
        var omit = flatRest(function(object, paths) {
          var result2 = {};
          if (object == null) {
            return result2;
          }
          var isDeep = false;
          paths = arrayMap2(paths, function(path2) {
            path2 = castPath2(path2, object);
            isDeep || (isDeep = path2.length > 1);
            return path2;
          });
          copyObject2(object, getAllKeysIn(object), result2);
          if (isDeep) {
            result2 = baseClone2(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG2, customOmitClone);
          }
          var length = paths.length;
          while (length--) {
            baseUnset(result2, paths[length]);
          }
          return result2;
        });
        function omitBy(object, predicate) {
          return pickBy(object, negate(getIteratee(predicate)));
        }
        var pick = flatRest(function(object, paths) {
          return object == null ? {} : basePick(object, paths);
        });
        function pickBy(object, predicate) {
          if (object == null) {
            return {};
          }
          var props = arrayMap2(getAllKeysIn(object), function(prop) {
            return [prop];
          });
          predicate = getIteratee(predicate);
          return basePickBy(object, props, function(value, path2) {
            return predicate(value, path2[0]);
          });
        }
        function result(object, path2, defaultValue) {
          path2 = castPath2(path2, object);
          var index = -1, length = path2.length;
          if (!length) {
            length = 1;
            object = undefined$1;
          }
          while (++index < length) {
            var value = object == null ? undefined$1 : object[toKey2(path2[index])];
            if (value === undefined$1) {
              index = length;
              value = defaultValue;
            }
            object = isFunction2(value) ? value.call(object) : value;
          }
          return object;
        }
        function set(object, path2, value) {
          return object == null ? object : baseSet(object, path2, value);
        }
        function setWith(object, path2, value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          return object == null ? object : baseSet(object, path2, value, customizer);
        }
        var toPairs = createToPairs(keys2);
        var toPairsIn = createToPairs(keysIn);
        function transform(object, iteratee2, accumulator) {
          var isArr = isArray2(object), isArrLike = isArr || isBuffer2(object) || isTypedArray2(object);
          iteratee2 = getIteratee(iteratee2, 4);
          if (accumulator == null) {
            var Ctor = object && object.constructor;
            if (isArrLike) {
              accumulator = isArr ? new Ctor() : [];
            } else if (isObject2(object)) {
              accumulator = isFunction2(Ctor) ? baseCreate2(getPrototype2(object)) : {};
            } else {
              accumulator = {};
            }
          }
          (isArrLike ? arrayEach2 : baseForOwn)(object, function(value, index, object2) {
            return iteratee2(accumulator, value, index, object2);
          });
          return accumulator;
        }
        function unset(object, path2) {
          return object == null ? true : baseUnset(object, path2);
        }
        function update(object, path2, updater) {
          return object == null ? object : baseUpdate(object, path2, castFunction(updater));
        }
        function updateWith(object, path2, updater, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          return object == null ? object : baseUpdate(object, path2, castFunction(updater), customizer);
        }
        function values(object) {
          return object == null ? [] : baseValues(object, keys2(object));
        }
        function valuesIn(object) {
          return object == null ? [] : baseValues(object, keysIn(object));
        }
        function clamp2(number, lower, upper) {
          if (upper === undefined$1) {
            upper = lower;
            lower = undefined$1;
          }
          if (upper !== undefined$1) {
            upper = toNumber2(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined$1) {
            lower = toNumber2(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp2(toNumber2(number), lower, upper);
        }
        function inRange(number, start, end) {
          start = toFinite(start);
          if (end === undefined$1) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          number = toNumber2(number);
          return baseInRange(number, start, end);
        }
        function random(lower, upper, floating) {
          if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined$1;
          }
          if (floating === undefined$1) {
            if (typeof upper == "boolean") {
              floating = upper;
              upper = undefined$1;
            } else if (typeof lower == "boolean") {
              floating = lower;
              lower = undefined$1;
            }
          }
          if (lower === undefined$1 && upper === undefined$1) {
            lower = 0;
            upper = 1;
          } else {
            lower = toFinite(lower);
            if (upper === undefined$1) {
              upper = lower;
              lower = 0;
            } else {
              upper = toFinite(upper);
            }
          }
          if (lower > upper) {
            var temp = lower;
            lower = upper;
            upper = temp;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin2(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
          }
          return baseRandom(lower, upper);
        }
        var camelCase = createCompounder(function(result2, word, index) {
          word = word.toLowerCase();
          return result2 + (index ? capitalize(word) : word);
        });
        function capitalize(string) {
          return upperFirst(toString2(string).toLowerCase());
        }
        function deburr(string) {
          string = toString2(string);
          return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
        }
        function endsWith(string, target, position) {
          string = toString2(string);
          target = baseToString2(target);
          var length = string.length;
          position = position === undefined$1 ? length : baseClamp2(toInteger(position), 0, length);
          var end = position;
          position -= target.length;
          return position >= 0 && string.slice(position, end) == target;
        }
        function escape(string) {
          string = toString2(string);
          return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        function escapeRegExp(string) {
          string = toString2(string);
          return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar2, "\\$&") : string;
        }
        var kebabCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "-" : "") + word.toLowerCase();
        });
        var lowerCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst("toLowerCase");
        function pad(string, length, chars) {
          string = toString2(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          if (!length || strLength >= length) {
            return string;
          }
          var mid = (length - strLength) / 2;
          return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
        }
        function padEnd(string, length, chars) {
          string = toString2(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
        }
        function padStart(string, length, chars) {
          string = toString2(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
        }
        function parseInt2(string, radix, guard) {
          if (guard || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          return nativeParseInt(toString2(string).replace(reTrimStart2, ""), radix || 0);
        }
        function repeat(string, n, guard) {
          if (guard ? isIterateeCall(string, n, guard) : n === undefined$1) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          return baseRepeat(toString2(string), n);
        }
        function replace() {
          var args = arguments, string = toString2(args[0]);
          return args.length < 3 ? string : string.replace(args[1], args[2]);
        }
        var snakeCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "_" : "") + word.toLowerCase();
        });
        function split(string, separator, limit) {
          if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
            separator = limit = undefined$1;
          }
          limit = limit === undefined$1 ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string = toString2(string);
          if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
            separator = baseToString2(separator);
            if (!separator && hasUnicode(string)) {
              return castSlice(stringToArray(string), 0, limit);
            }
          }
          return string.split(separator, limit);
        }
        var startCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + upperFirst(word);
        });
        function startsWith(string, target, position) {
          string = toString2(string);
          position = position == null ? 0 : baseClamp2(toInteger(position), 0, string.length);
          target = baseToString2(target);
          return string.slice(position, position + target.length) == target;
        }
        function template(string, options, guard) {
          var settings = lodash2.templateSettings;
          if (guard && isIterateeCall(string, options, guard)) {
            options = undefined$1;
          }
          string = toString2(string);
          options = assignInWith({}, options, settings, customDefaultsAssignIn);
          var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys2(imports), importsValues = baseValues(imports, importsKeys);
          var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source2 = "__p += '";
          var reDelimiters = RegExp2(
            (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
            "g"
          );
          var sourceURL = "//# sourceURL=" + (hasOwnProperty2.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
          string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source2 += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source2 += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source2 += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source2 += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index = offset + match.length;
            return match;
          });
          source2 += "';\n";
          var variable = hasOwnProperty2.call(options, "variable") && options.variable;
          if (!variable) {
            source2 = "with (obj) {\n" + source2 + "\n}\n";
          } else if (reForbiddenIdentifierChars.test(variable)) {
            throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
          }
          source2 = (isEvaluating ? source2.replace(reEmptyStringLeading, "") : source2).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
          source2 = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source2 + "return __p\n}";
          var result2 = attempt(function() {
            return Function2(importsKeys, sourceURL + "return " + source2).apply(undefined$1, importsValues);
          });
          result2.source = source2;
          if (isError(result2)) {
            throw result2;
          }
          return result2;
        }
        function toLower(value) {
          return toString2(value).toLowerCase();
        }
        function toUpper(value) {
          return toString2(value).toUpperCase();
        }
        function trim(string, chars, guard) {
          string = toString2(string);
          if (string && (guard || chars === undefined$1)) {
            return baseTrim2(string);
          }
          if (!string || !(chars = baseToString2(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
          return castSlice(strSymbols, start, end).join("");
        }
        function trimEnd(string, chars, guard) {
          string = toString2(string);
          if (string && (guard || chars === undefined$1)) {
            return string.slice(0, trimmedEndIndex2(string) + 1);
          }
          if (!string || !(chars = baseToString2(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
          return castSlice(strSymbols, 0, end).join("");
        }
        function trimStart(string, chars, guard) {
          string = toString2(string);
          if (string && (guard || chars === undefined$1)) {
            return string.replace(reTrimStart2, "");
          }
          if (!string || !(chars = baseToString2(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
          return castSlice(strSymbols, start).join("");
        }
        function truncate(string, options) {
          var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
          if (isObject2(options)) {
            var separator = "separator" in options ? options.separator : separator;
            length = "length" in options ? toInteger(options.length) : length;
            omission = "omission" in options ? baseToString2(options.omission) : omission;
          }
          string = toString2(string);
          var strLength = string.length;
          if (hasUnicode(string)) {
            var strSymbols = stringToArray(string);
            strLength = strSymbols.length;
          }
          if (length >= strLength) {
            return string;
          }
          var end = length - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
          if (separator === undefined$1) {
            return result2 + omission;
          }
          if (strSymbols) {
            end += result2.length - end;
          }
          if (isRegExp(separator)) {
            if (string.slice(end).search(separator)) {
              var match, substring = result2;
              if (!separator.global) {
                separator = RegExp2(separator.source, toString2(reFlags2.exec(separator)) + "g");
              }
              separator.lastIndex = 0;
              while (match = separator.exec(substring)) {
                var newEnd = match.index;
              }
              result2 = result2.slice(0, newEnd === undefined$1 ? end : newEnd);
            }
          } else if (string.indexOf(baseToString2(separator), end) != end) {
            var index = result2.lastIndexOf(separator);
            if (index > -1) {
              result2 = result2.slice(0, index);
            }
          }
          return result2 + omission;
        }
        function unescape(string) {
          string = toString2(string);
          return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        var upperCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toUpperCase();
        });
        var upperFirst = createCaseFirst("toUpperCase");
        function words(string, pattern, guard) {
          string = toString2(string);
          pattern = guard ? undefined$1 : pattern;
          if (pattern === undefined$1) {
            return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
          }
          return string.match(pattern) || [];
        }
        var attempt = baseRest(function(func, args) {
          try {
            return apply(func, undefined$1, args);
          } catch (e) {
            return isError(e) ? e : new Error2(e);
          }
        });
        var bindAll = flatRest(function(object, methodNames) {
          arrayEach2(methodNames, function(key) {
            key = toKey2(key);
            baseAssignValue2(object, key, bind(object[key], object));
          });
          return object;
        });
        function cond(pairs) {
          var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
          pairs = !length ? [] : arrayMap2(pairs, function(pair) {
            if (typeof pair[1] != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT2);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return baseRest(function(args) {
            var index = -1;
            while (++index < length) {
              var pair = pairs[index];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        function conforms(source2) {
          return baseConforms(baseClone2(source2, CLONE_DEEP_FLAG));
        }
        function constant(value) {
          return function() {
            return value;
          };
        }
        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity(value) {
          return value;
        }
        function iteratee(func) {
          return baseIteratee(typeof func == "function" ? func : baseClone2(func, CLONE_DEEP_FLAG));
        }
        function matches(source2) {
          return baseMatches(baseClone2(source2, CLONE_DEEP_FLAG));
        }
        function matchesProperty(path2, srcValue) {
          return baseMatchesProperty(path2, baseClone2(srcValue, CLONE_DEEP_FLAG));
        }
        var method = baseRest(function(path2, args) {
          return function(object) {
            return baseInvoke(object, path2, args);
          };
        });
        var methodOf = baseRest(function(object, args) {
          return function(path2) {
            return baseInvoke(object, path2, args);
          };
        });
        function mixin(object, source2, options) {
          var props = keys2(source2), methodNames = baseFunctions(source2, props);
          if (options == null && !(isObject2(source2) && (methodNames.length || !props.length))) {
            options = source2;
            source2 = object;
            object = this;
            methodNames = baseFunctions(source2, keys2(source2));
          }
          var chain2 = !(isObject2(options) && "chain" in options) || !!options.chain, isFunc = isFunction2(object);
          arrayEach2(methodNames, function(methodName) {
            var func = source2[methodName];
            object[methodName] = func;
            if (isFunc) {
              object.prototype[methodName] = function() {
                var chainAll = this.__chain__;
                if (chain2 || chainAll) {
                  var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray2(this.__actions__);
                  actions.push({ "func": func, "args": arguments, "thisArg": object });
                  result2.__chain__ = chainAll;
                  return result2;
                }
                return func.apply(object, arrayPush2([this.value()], arguments));
              };
            }
          });
          return object;
        }
        function noConflict() {
          if (root2._ === this) {
            root2._ = oldDash;
          }
          return this;
        }
        function noop() {
        }
        function nthArg(n) {
          n = toInteger(n);
          return baseRest(function(args) {
            return baseNth(args, n);
          });
        }
        var over = createOver(arrayMap2);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path2) {
          return isKey2(path2) ? baseProperty(toKey2(path2)) : basePropertyDeep(path2);
        }
        function propertyOf(object) {
          return function(path2) {
            return object == null ? undefined$1 : baseGet2(object, path2);
          };
        }
        var range = createRange();
        var rangeRight = createRange(true);
        function stubArray2() {
          return [];
        }
        function stubFalse2() {
          return false;
        }
        function stubObject() {
          return {};
        }
        function stubString() {
          return "";
        }
        function stubTrue() {
          return true;
        }
        function times(n, iteratee2) {
          n = toInteger(n);
          if (n < 1 || n > MAX_SAFE_INTEGER2) {
            return [];
          }
          var index = MAX_ARRAY_LENGTH, length = nativeMin2(n, MAX_ARRAY_LENGTH);
          iteratee2 = getIteratee(iteratee2);
          n -= MAX_ARRAY_LENGTH;
          var result2 = baseTimes2(length, iteratee2);
          while (++index < n) {
            iteratee2(index);
          }
          return result2;
        }
        function toPath(value) {
          if (isArray2(value)) {
            return arrayMap2(value, toKey2);
          }
          return isSymbol2(value) ? [value] : copyArray2(stringToPath2(toString2(value)));
        }
        function uniqueId(prefix) {
          var id = ++idCounter;
          return toString2(prefix) + id;
        }
        var add = createMathOperation(function(augend, addend) {
          return augend + addend;
        }, 0);
        var ceil = createRound("ceil");
        var divide = createMathOperation(function(dividend, divisor) {
          return dividend / divisor;
        }, 1);
        var floor = createRound("floor");
        function max(array) {
          return array && array.length ? baseExtremum(array, identity, baseGt) : undefined$1;
        }
        function maxBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined$1;
        }
        function mean(array) {
          return baseMean(array, identity);
        }
        function meanBy(array, iteratee2) {
          return baseMean(array, getIteratee(iteratee2, 2));
        }
        function min(array) {
          return array && array.length ? baseExtremum(array, identity, baseLt) : undefined$1;
        }
        function minBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined$1;
        }
        var multiply = createMathOperation(function(multiplier, multiplicand) {
          return multiplier * multiplicand;
        }, 1);
        var round = createRound("round");
        var subtract = createMathOperation(function(minuend, subtrahend) {
          return minuend - subtrahend;
        }, 0);
        function sum(array) {
          return array && array.length ? baseSum(array, identity) : 0;
        }
        function sumBy(array, iteratee2) {
          return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
        }
        lodash2.after = after;
        lodash2.ary = ary;
        lodash2.assign = assign;
        lodash2.assignIn = assignIn;
        lodash2.assignInWith = assignInWith;
        lodash2.assignWith = assignWith;
        lodash2.at = at;
        lodash2.before = before;
        lodash2.bind = bind;
        lodash2.bindAll = bindAll;
        lodash2.bindKey = bindKey;
        lodash2.castArray = castArray;
        lodash2.chain = chain;
        lodash2.chunk = chunk;
        lodash2.compact = compact;
        lodash2.concat = concat;
        lodash2.cond = cond;
        lodash2.conforms = conforms;
        lodash2.constant = constant;
        lodash2.countBy = countBy;
        lodash2.create = create2;
        lodash2.curry = curry;
        lodash2.curryRight = curryRight;
        lodash2.debounce = debounce2;
        lodash2.defaults = defaults;
        lodash2.defaultsDeep = defaultsDeep;
        lodash2.defer = defer;
        lodash2.delay = delay;
        lodash2.difference = difference;
        lodash2.differenceBy = differenceBy;
        lodash2.differenceWith = differenceWith;
        lodash2.drop = drop;
        lodash2.dropRight = dropRight;
        lodash2.dropRightWhile = dropRightWhile;
        lodash2.dropWhile = dropWhile;
        lodash2.fill = fill;
        lodash2.filter = filter;
        lodash2.flatMap = flatMap;
        lodash2.flatMapDeep = flatMapDeep;
        lodash2.flatMapDepth = flatMapDepth;
        lodash2.flatten = flatten;
        lodash2.flattenDeep = flattenDeep;
        lodash2.flattenDepth = flattenDepth;
        lodash2.flip = flip;
        lodash2.flow = flow;
        lodash2.flowRight = flowRight;
        lodash2.fromPairs = fromPairs;
        lodash2.functions = functions;
        lodash2.functionsIn = functionsIn;
        lodash2.groupBy = groupBy;
        lodash2.initial = initial;
        lodash2.intersection = intersection;
        lodash2.intersectionBy = intersectionBy;
        lodash2.intersectionWith = intersectionWith;
        lodash2.invert = invert;
        lodash2.invertBy = invertBy;
        lodash2.invokeMap = invokeMap;
        lodash2.iteratee = iteratee;
        lodash2.keyBy = keyBy;
        lodash2.keys = keys2;
        lodash2.keysIn = keysIn;
        lodash2.map = map;
        lodash2.mapKeys = mapKeys;
        lodash2.mapValues = mapValues;
        lodash2.matches = matches;
        lodash2.matchesProperty = matchesProperty;
        lodash2.memoize = memoize2;
        lodash2.merge = merge;
        lodash2.mergeWith = mergeWith;
        lodash2.method = method;
        lodash2.methodOf = methodOf;
        lodash2.mixin = mixin;
        lodash2.negate = negate;
        lodash2.nthArg = nthArg;
        lodash2.omit = omit;
        lodash2.omitBy = omitBy;
        lodash2.once = once2;
        lodash2.orderBy = orderBy;
        lodash2.over = over;
        lodash2.overArgs = overArgs;
        lodash2.overEvery = overEvery;
        lodash2.overSome = overSome;
        lodash2.partial = partial;
        lodash2.partialRight = partialRight;
        lodash2.partition = partition;
        lodash2.pick = pick;
        lodash2.pickBy = pickBy;
        lodash2.property = property;
        lodash2.propertyOf = propertyOf;
        lodash2.pull = pull;
        lodash2.pullAll = pullAll;
        lodash2.pullAllBy = pullAllBy;
        lodash2.pullAllWith = pullAllWith;
        lodash2.pullAt = pullAt;
        lodash2.range = range;
        lodash2.rangeRight = rangeRight;
        lodash2.rearg = rearg;
        lodash2.reject = reject;
        lodash2.remove = remove;
        lodash2.rest = rest;
        lodash2.reverse = reverse;
        lodash2.sampleSize = sampleSize;
        lodash2.set = set;
        lodash2.setWith = setWith;
        lodash2.shuffle = shuffle;
        lodash2.slice = slice;
        lodash2.sortBy = sortBy;
        lodash2.sortedUniq = sortedUniq;
        lodash2.sortedUniqBy = sortedUniqBy;
        lodash2.split = split;
        lodash2.spread = spread;
        lodash2.tail = tail;
        lodash2.take = take;
        lodash2.takeRight = takeRight;
        lodash2.takeRightWhile = takeRightWhile;
        lodash2.takeWhile = takeWhile;
        lodash2.tap = tap;
        lodash2.throttle = throttle;
        lodash2.thru = thru;
        lodash2.toArray = toArray;
        lodash2.toPairs = toPairs;
        lodash2.toPairsIn = toPairsIn;
        lodash2.toPath = toPath;
        lodash2.toPlainObject = toPlainObject;
        lodash2.transform = transform;
        lodash2.unary = unary;
        lodash2.union = union;
        lodash2.unionBy = unionBy;
        lodash2.unionWith = unionWith;
        lodash2.uniq = uniq;
        lodash2.uniqBy = uniqBy;
        lodash2.uniqWith = uniqWith;
        lodash2.unset = unset;
        lodash2.unzip = unzip;
        lodash2.unzipWith = unzipWith;
        lodash2.update = update;
        lodash2.updateWith = updateWith;
        lodash2.values = values;
        lodash2.valuesIn = valuesIn;
        lodash2.without = without;
        lodash2.words = words;
        lodash2.wrap = wrap;
        lodash2.xor = xor;
        lodash2.xorBy = xorBy;
        lodash2.xorWith = xorWith;
        lodash2.zip = zip;
        lodash2.zipObject = zipObject;
        lodash2.zipObjectDeep = zipObjectDeep;
        lodash2.zipWith = zipWith;
        lodash2.entries = toPairs;
        lodash2.entriesIn = toPairsIn;
        lodash2.extend = assignIn;
        lodash2.extendWith = assignInWith;
        mixin(lodash2, lodash2);
        lodash2.add = add;
        lodash2.attempt = attempt;
        lodash2.camelCase = camelCase;
        lodash2.capitalize = capitalize;
        lodash2.ceil = ceil;
        lodash2.clamp = clamp2;
        lodash2.clone = clone2;
        lodash2.cloneDeep = cloneDeep;
        lodash2.cloneDeepWith = cloneDeepWith;
        lodash2.cloneWith = cloneWith;
        lodash2.conformsTo = conformsTo;
        lodash2.deburr = deburr;
        lodash2.defaultTo = defaultTo;
        lodash2.divide = divide;
        lodash2.endsWith = endsWith;
        lodash2.eq = eq2;
        lodash2.escape = escape;
        lodash2.escapeRegExp = escapeRegExp;
        lodash2.every = every;
        lodash2.find = find;
        lodash2.findIndex = findIndex;
        lodash2.findKey = findKey;
        lodash2.findLast = findLast;
        lodash2.findLastIndex = findLastIndex;
        lodash2.findLastKey = findLastKey;
        lodash2.floor = floor;
        lodash2.forEach = forEach;
        lodash2.forEachRight = forEachRight;
        lodash2.forIn = forIn;
        lodash2.forInRight = forInRight;
        lodash2.forOwn = forOwn;
        lodash2.forOwnRight = forOwnRight;
        lodash2.get = get2;
        lodash2.gt = gt;
        lodash2.gte = gte;
        lodash2.has = has;
        lodash2.hasIn = hasIn;
        lodash2.head = head;
        lodash2.identity = identity;
        lodash2.includes = includes;
        lodash2.indexOf = indexOf;
        lodash2.inRange = inRange;
        lodash2.invoke = invoke;
        lodash2.isArguments = isArguments2;
        lodash2.isArray = isArray2;
        lodash2.isArrayBuffer = isArrayBuffer;
        lodash2.isArrayLike = isArrayLike2;
        lodash2.isArrayLikeObject = isArrayLikeObject;
        lodash2.isBoolean = isBoolean;
        lodash2.isBuffer = isBuffer2;
        lodash2.isDate = isDate;
        lodash2.isElement = isElement;
        lodash2.isEmpty = isEmpty;
        lodash2.isEqual = isEqual;
        lodash2.isEqualWith = isEqualWith;
        lodash2.isError = isError;
        lodash2.isFinite = isFinite2;
        lodash2.isFunction = isFunction2;
        lodash2.isInteger = isInteger;
        lodash2.isLength = isLength2;
        lodash2.isMap = isMap2;
        lodash2.isMatch = isMatch;
        lodash2.isMatchWith = isMatchWith;
        lodash2.isNaN = isNaN;
        lodash2.isNative = isNative;
        lodash2.isNil = isNil;
        lodash2.isNull = isNull;
        lodash2.isNumber = isNumber;
        lodash2.isObject = isObject2;
        lodash2.isObjectLike = isObjectLike2;
        lodash2.isPlainObject = isPlainObject;
        lodash2.isRegExp = isRegExp;
        lodash2.isSafeInteger = isSafeInteger;
        lodash2.isSet = isSet2;
        lodash2.isString = isString;
        lodash2.isSymbol = isSymbol2;
        lodash2.isTypedArray = isTypedArray2;
        lodash2.isUndefined = isUndefined;
        lodash2.isWeakMap = isWeakMap;
        lodash2.isWeakSet = isWeakSet;
        lodash2.join = join;
        lodash2.kebabCase = kebabCase;
        lodash2.last = last;
        lodash2.lastIndexOf = lastIndexOf;
        lodash2.lowerCase = lowerCase;
        lodash2.lowerFirst = lowerFirst;
        lodash2.lt = lt;
        lodash2.lte = lte;
        lodash2.max = max;
        lodash2.maxBy = maxBy;
        lodash2.mean = mean;
        lodash2.meanBy = meanBy;
        lodash2.min = min;
        lodash2.minBy = minBy;
        lodash2.stubArray = stubArray2;
        lodash2.stubFalse = stubFalse2;
        lodash2.stubObject = stubObject;
        lodash2.stubString = stubString;
        lodash2.stubTrue = stubTrue;
        lodash2.multiply = multiply;
        lodash2.nth = nth;
        lodash2.noConflict = noConflict;
        lodash2.noop = noop;
        lodash2.now = now2;
        lodash2.pad = pad;
        lodash2.padEnd = padEnd;
        lodash2.padStart = padStart;
        lodash2.parseInt = parseInt2;
        lodash2.random = random;
        lodash2.reduce = reduce;
        lodash2.reduceRight = reduceRight;
        lodash2.repeat = repeat;
        lodash2.replace = replace;
        lodash2.result = result;
        lodash2.round = round;
        lodash2.runInContext = runInContext2;
        lodash2.sample = sample;
        lodash2.size = size;
        lodash2.snakeCase = snakeCase;
        lodash2.some = some;
        lodash2.sortedIndex = sortedIndex;
        lodash2.sortedIndexBy = sortedIndexBy;
        lodash2.sortedIndexOf = sortedIndexOf;
        lodash2.sortedLastIndex = sortedLastIndex;
        lodash2.sortedLastIndexBy = sortedLastIndexBy;
        lodash2.sortedLastIndexOf = sortedLastIndexOf;
        lodash2.startCase = startCase;
        lodash2.startsWith = startsWith;
        lodash2.subtract = subtract;
        lodash2.sum = sum;
        lodash2.sumBy = sumBy;
        lodash2.template = template;
        lodash2.times = times;
        lodash2.toFinite = toFinite;
        lodash2.toInteger = toInteger;
        lodash2.toLength = toLength;
        lodash2.toLower = toLower;
        lodash2.toNumber = toNumber2;
        lodash2.toSafeInteger = toSafeInteger;
        lodash2.toString = toString2;
        lodash2.toUpper = toUpper;
        lodash2.trim = trim;
        lodash2.trimEnd = trimEnd;
        lodash2.trimStart = trimStart;
        lodash2.truncate = truncate;
        lodash2.unescape = unescape;
        lodash2.uniqueId = uniqueId;
        lodash2.upperCase = upperCase;
        lodash2.upperFirst = upperFirst;
        lodash2.each = forEach;
        lodash2.eachRight = forEachRight;
        lodash2.first = head;
        mixin(lodash2, function() {
          var source2 = {};
          baseForOwn(lodash2, function(func, methodName) {
            if (!hasOwnProperty2.call(lodash2.prototype, methodName)) {
              source2[methodName] = func;
            }
          });
          return source2;
        }(), { "chain": false });
        lodash2.VERSION = VERSION;
        arrayEach2(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
          lodash2[methodName].placeholder = lodash2;
        });
        arrayEach2(["drop", "take"], function(methodName, index) {
          LazyWrapper.prototype[methodName] = function(n) {
            n = n === undefined$1 ? 1 : nativeMax2(toInteger(n), 0);
            var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
            if (result2.__filtered__) {
              result2.__takeCount__ = nativeMin2(n, result2.__takeCount__);
            } else {
              result2.__views__.push({
                "size": nativeMin2(n, MAX_ARRAY_LENGTH),
                "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
              });
            }
            return result2;
          };
          LazyWrapper.prototype[methodName + "Right"] = function(n) {
            return this.reverse()[methodName](n).reverse();
          };
        });
        arrayEach2(["filter", "map", "takeWhile"], function(methodName, index) {
          var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function(iteratee2) {
            var result2 = this.clone();
            result2.__iteratees__.push({
              "iteratee": getIteratee(iteratee2, 3),
              "type": type
            });
            result2.__filtered__ = result2.__filtered__ || isFilter;
            return result2;
          };
        });
        arrayEach2(["head", "last"], function(methodName, index) {
          var takeName = "take" + (index ? "Right" : "");
          LazyWrapper.prototype[methodName] = function() {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach2(["initial", "tail"], function(methodName, index) {
          var dropName = "drop" + (index ? "" : "Right");
          LazyWrapper.prototype[methodName] = function() {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function() {
          return this.filter(identity);
        };
        LazyWrapper.prototype.find = function(predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function(predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function(path2, args) {
          if (typeof path2 == "function") {
            return new LazyWrapper(this);
          }
          return this.map(function(value) {
            return baseInvoke(value, path2, args);
          });
        });
        LazyWrapper.prototype.reject = function(predicate) {
          return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function(start, end) {
          start = toInteger(start);
          var result2 = this;
          if (result2.__filtered__ && (start > 0 || end < 0)) {
            return new LazyWrapper(result2);
          }
          if (start < 0) {
            result2 = result2.takeRight(-start);
          } else if (start) {
            result2 = result2.drop(start);
          }
          if (end !== undefined$1) {
            end = toInteger(end);
            result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
          }
          return result2;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash2[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash2.prototype[methodName] = function() {
            var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray2(value);
            var interceptor = function(value2) {
              var result3 = lodashFunc.apply(lodash2, arrayPush2([value2], args));
              return isTaker && chainAll ? result3[0] : result3;
            };
            if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result2 = func.apply(value, args);
              result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined$1 });
              return new LodashWrapper(result2, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result2 = this.thru(interceptor);
            return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
          };
        });
        arrayEach2(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
          var func = arrayProto2[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash2.prototype[methodName] = function() {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              var value = this.value();
              return func.apply(isArray2(value) ? value : [], args);
            }
            return this[chainName](function(value2) {
              return func.apply(isArray2(value2) ? value2 : [], args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var lodashFunc = lodash2[methodName];
          if (lodashFunc) {
            var key = lodashFunc.name + "";
            if (!hasOwnProperty2.call(realNames, key)) {
              realNames[key] = [];
            }
            realNames[key].push({ "name": methodName, "func": lodashFunc });
          }
        });
        realNames[createHybrid(undefined$1, WRAP_BIND_KEY_FLAG).name] = [{
          "name": "wrapper",
          "func": undefined$1
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash2.prototype.at = wrapperAt;
        lodash2.prototype.chain = wrapperChain;
        lodash2.prototype.commit = wrapperCommit;
        lodash2.prototype.next = wrapperNext;
        lodash2.prototype.plant = wrapperPlant;
        lodash2.prototype.reverse = wrapperReverse;
        lodash2.prototype.toJSON = lodash2.prototype.valueOf = lodash2.prototype.value = wrapperValue;
        lodash2.prototype.first = lodash2.prototype.head;
        if (symIterator) {
          lodash2.prototype[symIterator] = wrapperToIterator;
        }
        return lodash2;
      };
      var _ = runInContext();
      if (freeModule2) {
        (freeModule2.exports = _)._ = _;
        freeExports2._ = _;
      } else {
        root2._ = _;
      }
    }).call(lodash);
  })(lodash$1, lodash$1.exports);
  return lodash$1.exports;
}
var lodashExports = requireLodash();
const customDefaultCss = "#progress-bar.ytmusic-player-bar {\r\n  --paper-slider-active-color: #fff;\r\n  --paper-slider-knob-color: #fff;\r\n}\r\n// .ytmusic-item-thumbnail-overlay-renderer {\r\n//   background-image: url(https://i.mavis.moe/f/xp2CE4ENIY/dogejpg.jpg);\r\n//   background-size: cover;\r\n//   background-position: center;\r\n//   background-repeat: no-repeat;\r\n// }\r\n$playerBarBackground: #0f0f11;\r\nytmusic-app {\r\n  --ytmusic-player-bar-background: $playerBarBackground;\r\n}\r\nytmusic-player-page.ytmusic-app {\r\n  background: rgba(0, 0, 0, 0.8);\r\n  backdrop-filter: blur(20px);\r\n}\r\n.content.ytmusic-player-page {\r\n  padding: 0;\r\n  visibility: visible;\r\n  background: transparent;\r\n  @media screen and (max-width: 968px) {\r\n    #main-panel {\r\n      padding: 0 300px !important;\r\n      height: calc(6 / 16 * 100vw);\r\n    }\r\n  }\r\n}\r\n.image.ytmusic-player-bar {\r\n  border-radius: 8px;\r\n  transform: translate3d(0, 0, 1px);\r\n}\r\nytmusic-player-queue {\r\n  padding: 10px 0;\r\n}\r\ntp-yt-paper-icon-button.ytmusic-settings-button {\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\nytmusic-browse-response {\r\n  &:not([hidden]) {\r\n    display: block !important;\r\n    visibility: visible !important;\r\n  }\r\n}\r\n// hide scrollbar\r\nytmusic-tab-renderer.ytmusic-player-page {\r\n  padding-right: 12px;\r\n  margin-right: -10px;\r\n}\r\nytmusic-player-queue-item {\r\n  --ytmusic-player-queue-item-thumbnail-size: 42px !important;\r\n  --ytmusic-list-item-height: 58px;\r\n  &:not(:last-child) {\r\n    margin-bottom: 8px;\r\n  }\r\n  border-radius: 8px;\r\n  transform: translate3d(0, 0, 1px);\r\n  border: 0;\r\n  opacity: 0.825;\r\n  &:hover:not([selected]) {\r\n    background-color: rgba(#f9f9ff, 0.05);\r\n    opacity: 1;\r\n  }\r\n}\r\n.logo.ytmusic-nav-bar {\r\n  filter: hue-rotate(210deg);\r\n}\r\n.ytmusic-play-button-renderer,\r\n.thumbnail.ytmusic-player-queue-item,\r\n.thumbnail-overlay,\r\nytmusic-two-row-item-renderer.ytmusic-carousel {\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n  transform: translate3d(0, 0, 1px);\r\n}\r\nytmusic-player-bar.ytmusic-app {\r\n  background: transparent;\r\n}\r\n#player-bar-background.ytmusic-app-layout {\r\n  background-color: rgba(#000, 0.92) !important;\r\n  -webkit-backdrop-filter: blur(10px);\r\n  backdrop-filter: blur(10px);\r\n}\r\n#song-image.ytmusic-player,\r\n.song-media-controls.ytmusic-player,\r\nytmusic-player.ytmusic-player-page {\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n  transform: translate3d(0, 0, 1px);\r\n}\r\ntp-yt-paper-dialog,\r\ntp-yt-paper-listbox.ytmusic-menu-popup-renderer {\r\n  background-color: rgba(#000, 0.6) !important;\r\n  backdrop-filter: blur(10px);\r\n  border: 0;\r\n  box-shadow:\r\n    0px 4.1px 5.3px rgba(0, 0, 0, 0.028),\r\n    0px 13.6px 17.9px rgba(0, 0, 0, 0.042),\r\n    0px 61px 80px rgba(0, 0, 0, 0.07);\r\n  border-radius: 8px;\r\n}\r\n";
var __defProp$c = Object.defineProperty;
var __getOwnPropDesc$e = Object.getOwnPropertyDescriptor;
var __decorateClass$e = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$e(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$c(target, key, result);
  return result;
};
let CustomCSSProvider = class extends BaseProvider {
  constructor(app) {
    super("customcss");
    this.app = app;
  }
  scssWatcher;
  cssCache = /* @__PURE__ */ new Map();
  CACHE_DURATION = 3e4;
  // 30 seconds cache duration
  DEBOUNCE_DELAY = 1e3;
  // 1 second debounce delay
  currentScssPath = null;
  get settingsInstance() {
    return this.getProvider("settings");
  }
  getScssPath() {
    return this.settingsInstance.get("customcss.scssFile") ?? path$1.resolve(this.app.getPath("documents"), "ytmdesktop", "custom.scss");
  }
  clearCache() {
    this.cssCache.clear();
    this.logger.debug("CSS cache cleared");
  }
  async compileSCSS(scssPath, bypassCache = false) {
    try {
      if (this.currentScssPath !== scssPath) {
        this.clearCache();
        this.currentScssPath = scssPath;
      }
      const stats = fs.statSync(scssPath);
      const cached = this.cssCache.get(scssPath);
      if (!bypassCache && cached && Date.now() - cached.timestamp < this.CACHE_DURATION) {
        this.logger.debug(`Using cached CSS: ${scssPath}`);
        return cached.css;
      }
      this.logger.debug(`Compiling SCSS${bypassCache ? " (cache bypassed)" : ""}: ${scssPath}`);
      const result = await sass.compileAsync(scssPath);
      const compiledCSS = result.css;
      this.cssCache.set(scssPath, {
        css: compiledCSS,
        timestamp: Date.now(),
        size: new TextEncoder().encode(compiledCSS).length
      });
      return compiledCSS;
    } catch (error) {
      this.logger.error(`Failed to compile SCSS: ${error?.message || "Unknown error"}`);
      return null;
    }
  }
  async injectCompiledCSS(scssPath, bypassCache = false) {
    const css = await this.compileSCSS(scssPath, bypassCache);
    if (!css) return false;
    this.logger.debug(`Injecting CSS: ${this.cssCache.get(scssPath)?.size ?? 0} bytes`);
    try {
      return await rootWindowInjectCustomCss(this.views.youtubeView, css);
    } catch (error) {
      this.logger.error(`Failed to inject CSS: ${error?.message || "Unknown error"}`);
      return false;
    }
  }
  setupFileWatcher(scssPath) {
    if (this.scssWatcher) {
      this.scssWatcher.close();
      this.scssWatcher = null;
    }
    try {
      const debouncedUpdate = lodashExports.debounce(async () => {
        this.logger.debug(`SCSS file changed: ${scssPath}`);
        await this.updateCSS(true);
      }, this.DEBOUNCE_DELAY);
      const watchDir = path$1.dirname(scssPath);
      this.scssWatcher = fs.watch(watchDir, async (eventType, filename) => {
        if (filename === path$1.basename(scssPath)) {
          debouncedUpdate();
        }
      });
      this.scssWatcher.on("error", (error) => {
        this.logger.error(`File watcher error: ${error.message}`);
        this.scssWatcher = null;
      });
      this.logger.debug(`Watching SCSS file: ${scssPath}`);
    } catch (error) {
      this.logger.error(`Failed to setup file watcher: ${error?.message || "Unknown error"}`);
      this.scssWatcher = null;
    }
  }
  async updateCSS(bypassCache = false) {
    const config = this.settingsInstance.get("customcss");
    if (!config?.enabled) return;
    const scssPath = this.getScssPath();
    if (!fs.existsSync(scssPath)) {
      this.logger.warn(`SCSS file not found: ${scssPath}`);
      return;
    }
    this.logger.debug(`Loading custom CSS from ${scssPath}${bypassCache ? " (cache bypassed)" : ""}`);
    const before = performance.now();
    await this.injectCompiledCSS(scssPath, bypassCache);
    const after = performance.now();
    this.logger.debug(`CSS injected in ${(after - before).toFixed(2)}ms`);
  }
  async _event_customCssUpdate() {
    await this.updateCSS();
  }
  async _event_settingsChange(_key, value) {
    const config = this.settingsInstance.get("customcss");
    this.logger.debug(`Settings changed: ${_key}`, value);
    if (config?.enabled) {
      if (_key === "customcss.watching") {
        if (value) {
          this.setupFileWatcher(this.getScssPath());
        } else if (this.scssWatcher) {
          this.scssWatcher.close();
          this.scssWatcher = null;
        }
      } else {
        await this.updateCSS();
      }
    } else {
      await rootWindowClearCustomCss(this.views.youtubeView);
    }
  }
  async injectCSS() {
    const scssFile = this.getScssPath();
    if (scssFile) {
      await this._initializeSCSS();
      return await this.injectCompiledCSS(scssFile);
    }
    return false;
  }
  async AfterInit() {
    await this._initializeSCSS();
    const config = this.settingsInstance.get("customcss");
    if (config?.enabled) {
      await this.updateCSS();
      if (config?.watching && config?.scssFile) {
        this.setupFileWatcher(config.scssFile);
      }
    }
  }
  async _initializeSCSS() {
    const scssPath = this.getScssPath();
    const scssParent = path$1.resolve(scssPath, "..");
    try {
      if (!fs.existsSync(scssPath)) {
        if (!fs.existsSync(scssParent)) {
          fs.mkdirSync(scssParent, { recursive: true });
        }
        fs.writeFileSync(scssPath, customDefaultCss);
        this.logger.debug(`Created default SCSS file at ${scssPath}`);
        this.settingsInstance.set("customcss.enabled", true).set("customcss.scssFile", scssPath);
        const config = this.settingsInstance.get("customcss");
        if (config?.watching) {
          this.setupFileWatcher(scssPath);
          this.logger.debug("Setup file watcher", scssPath);
        }
        return true;
      } else {
        this.logger.debug(`SCSS file already exists: ${scssPath}`);
        if (!this.settingsInstance.get("customcss.scssFile")) {
          this.settingsInstance.set("customcss.scssFile", scssPath);
        }
      }
      return false;
    } catch (error) {
      this.logger.error(`Failed to initialize SCSS: ${error?.message || "Unknown error"}`);
      return false;
    }
  }
  initializeSCSS = () => this._initializeSCSS();
};
__decorateClass$e([
  IpcOn("customcss.update")
], CustomCSSProvider.prototype, "_event_customCssUpdate", 1);
__decorateClass$e([
  IpcOn("settingsProvider.change", {
    filter: (key) => ["customcss.enabled", "customcss.scssFile", "customcss.watching"].includes(key),
    debounce: 1e3
  })
], CustomCSSProvider.prototype, "_event_settingsChange", 1);
__decorateClass$e([
  IpcHandle("action:css")
], CustomCSSProvider.prototype, "injectCSS", 1);
CustomCSSProvider = __decorateClass$e([
  IpcContext
], CustomCSSProvider);
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get default() {
    return CustomCSSProvider;
  }
}, Symbol.toStringTag, { value: "Module" }));
const appName = "YouTube Music for Desktop";
const EN_US = {
  appName
};
const STRINGS = EN_US;
const Thumbnail = new RegExp(/https:\/\/(\w+)\.(googleusercontent\.com|ytimg\.com\/vi\/)/);
const YoutubeMatcher = {
  Thumbnail
};
const parseMusicUrlById = (id) => `https://music.youtube.com/watch?v=${id}&feature=share`;
const parseMusicChannelById = (id) => `https://music.youtube.com/channel/${id}?feature=share`;
const discordEmbedFromTrack = (track, playing = true, progress = 0) => {
  const startDate = progress ? new Date(Date.now() - progress * 1e3) : /* @__PURE__ */ new Date(), endDate = new Date(startDate.getTime() + ~~Number(track.video.lengthSeconds) * 1e3);
  return {
    details: track.video.title,
    state: `by ${track.video.author}`,
    startTimestamp: playing ? startDate : void 0,
    endTimestamp: playing ? endDate : void 0,
    largeImageKey: track.video.thumbnail.thumbnails.find((x) => YoutubeMatcher.Thumbnail.test(x.url))?.url ?? "logo",
    smallImageKey: playing ? "playx1024" : "pausex1024",
    smallImageText: `${Number.parseInt(track.video.viewCount)?.toLocaleString("de") || track.video.viewCount} views`,
    type: 2,
    buttons: [
      ...track.video.videoId ? [
        {
          label: "Open in Browser",
          url: parseMusicUrlById(track.video.videoId)
        }
      ] : [],
      ...track.video.channelId ? [
        {
          label: "View Channel",
          url: parseMusicChannelById(track.video.channelId)
        }
      ] : []
    ]
  };
};
var __defProp$b = Object.defineProperty;
var __getOwnPropDesc$d = Object.getOwnPropertyDescriptor;
var __decorateClass$d = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$d(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$b(target, key, result);
  return result;
};
const DISCORD_UPDATE_INTERVAL = 1e3 * 15;
const DEFAULT_PRESENCE = {
  largeImageKey: "logo",
  largeImageText: STRINGS.appName
};
const CLIENT_ID = "834475359071633499";
class DiscordRPCManager {
  constructor(clientId, onConnected, onDisconnected, onError, logger = new console$1.Logger("DiscordRPCManager")) {
    this.clientId = clientId;
    this.onConnected = onConnected;
    this.onDisconnected = onDisconnected;
    this.onError = onError;
    this.logger = logger;
  }
  client = null;
  _isConnected = false;
  _updateHandle;
  _presence = null;
  _enabled = false;
  get isConnected() {
    return this._isConnected;
  }
  get enabled() {
    return this._enabled;
  }
  get presence() {
    return this._presence;
  }
  get rpcClient() {
    return this.client;
  }
  set presence(val) {
    this._presence = val;
  }
  async enable() {
    if (this.client?.isConnected) return;
    if (!this.enabled) {
      if (this.isConnected) await this.disable();
    }
    clearTimeout(this._updateHandle);
    const [client, presence] = await this.createClient().then((instance) => {
      this.logger.debug("connected to discord");
      return instance || [null, null];
    }).catch((err) => {
      this.logger.error("error while connecting to discord", err);
      return [null, null];
    });
    this.client = client;
    this.presence = presence;
    this._enabled = !!client?.isConnected;
  }
  async disable() {
    if (this._createClientAbortController) {
      this._createClientAbortController.abort("discord has been disabled by user");
      this.logger.debug("aborting client creation", this._createClientAbortController.signal.aborted);
    }
    if (!this.client) return;
    clearTimeout(this._updateHandle);
    this._isConnected = false;
    await this.client.user.clearActivity().catch(() => {
    });
    await this.client.destroy().then(() => {
      this.onDisconnected();
      this.logger.debug("disconnected from discord");
    }).catch((err) => {
      this.logger.error("error while disconnecting from discord", err);
    });
    this.client = null;
    this._presence = null;
    this._enabled = false;
  }
  _createClientAbortController = null;
  async createClient(presence = DEFAULT_PRESENCE, isAborted = false, tries = 0) {
    if (isAborted) {
      this.logger.debug("creating client aborted", isAborted);
      this.onError(null);
      this._createClientAbortController = null;
      throw new Error("Creating client aborted");
    }
    const { signal } = this._createClientAbortController || (this._createClientAbortController = new AbortController());
    this.logger.debug("creating client", this.clientId, { signal: signal.aborted });
    const client = new discordRpc.Client({
      clientId: this.clientId,
      transport: {
        type: "ipc"
      }
    });
    signal.addEventListener("abort", () => {
      isAborted = true;
    });
    try {
      await client.login().catch((err) => {
        this.logger.error("error while connecting to discord", err);
        throw err;
      });
      this.logger.debug("connected");
      this._isConnected = true;
      this.presence = presence;
      this.client = client;
      this.onConnected();
      await this._refreshActivity(true);
      client.once("error", (err) => {
        this.logger.error("discord error", err);
        this.onDisconnected();
        this.enable();
      }).once("disconnected", () => {
        this.logger.error("discord disconnected, trying to reconnect");
        this.onDisconnected();
        if (tries < 3) {
          this.createClient(presence, isAborted, tries + 1);
        } else {
          this.onError(new Error("Discord disconnected"));
        }
      });
      return [client, presence];
    } catch (err) {
      this._isConnected = false;
      this.onDisconnected();
      this.logger.error("error while connecting to discord", err);
      if (isAborted) {
        this._createClientAbortController = null;
        this.onError(null);
        throw err;
      }
      this.onError(err);
      return await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (signal.aborted) {
            this._createClientAbortController = null;
            this.onError(null);
            reject(err);
          }
          this.createClient(void 0, isAborted).then(resolve).catch(reject);
        }, 2500);
      });
    }
  }
  _refreshActivity(initial = false) {
    if (this._updateHandle) clearTimeout(this._updateHandle);
    return new Promise((resolve, reject) => {
      if (this.client && this._isConnected)
        (initial ? Promise.resolve() : this.setActivity(this.presence, false)).then(() => {
          resolve();
          return this._updateHandle = setTimeout(() => this._refreshActivity(), DISCORD_UPDATE_INTERVAL);
        });
      else reject(new Error("Discord client not connected"));
    });
  }
  async setActivity(presence, resetUpdateHandle = true) {
    if (!this.client || !this.isConnected) return;
    this.presence = { ...presence, ...DEFAULT_PRESENCE };
    if (this.presence.buttons) {
      if (this.presence.buttons.findIndex((x) => !x.url.match(/^http/)) !== -1) {
        this.presence.buttons = this.presence.buttons.filter((x) => !x.url.match(/^http/));
      }
      if (this.presence.buttons.length > 2) {
        this.presence.buttons = this.presence.buttons.slice(0, 2);
      }
      if (this.presence.buttons.length === 0) delete this.presence.buttons;
    }
    if (presence.largeImageKey && YoutubeMatcher.Thumbnail.test(presence.largeImageKey)) {
      this.presence.largeImageKey = presence.largeImageKey;
    } else this.presence.largeImageKey = DEFAULT_PRESENCE.largeImageKey;
    if (this.presence.startTimestamp === null) delete this.presence.startTimestamp;
    if (this.presence.endTimestamp === null) delete this.presence.endTimestamp;
    if (resetUpdateHandle) await this._refreshActivity(false);
    return await this.client.user?.setActivity(this.presence).catch((err) => {
      this.logger.error(err);
    });
  }
}
let DiscordProvider = class extends BaseProvider {
  constructor(app) {
    super("discord");
    this.app = app;
    this.rpcManager = new DiscordRPCManager(
      CLIENT_ID,
      () => this.windowContext.sendToAllViews("discord.connected"),
      () => this.windowContext.sendToAllViews("discord.disconnected"),
      (err) => this.windowContext.sendToAllViews("discord.error", err),
      this.logger
    );
  }
  rpcManager;
  _enabled = true;
  get isConnected() {
    return this.rpcManager.isConnected;
  }
  get enabled() {
    return this._enabled;
  }
  get presence() {
    return this.rpcManager.presence;
  }
  get rpcClient() {
    return this.rpcManager.rpcClient;
  }
  get settingsInstance() {
    return this.getProvider("settings");
  }
  get trackService() {
    return this.getProvider("track");
  }
  get settingsEnabled() {
    return !!this.settingsInstance.get("discord.enabled", false);
  }
  async disable() {
    await this.rpcManager.disable();
  }
  async enable() {
    await this.rpcManager.enable();
    if (this.trackService.trackData) {
      const { trackData: track, playing, trackState } = this.trackService;
      if (track) {
        await this.rpcManager.setActivity(discordEmbedFromTrack(track, playing, trackState?.progress ?? 0));
      }
    }
  }
  async AfterInit() {
    const settings = this.settingsInstance.instance;
    if (!settings.discord.enabled || !this._enabled) return;
    await this.enable();
  }
  async updateTrackProgress(isPlaying, mediaProgress = 0) {
    if (this.trackService.trackData && this.isConnected) {
      await this.rpcManager.setActivity(discordEmbedFromTrack(this.trackService.trackData, isPlaying, mediaProgress));
    }
  }
  async __onToggleEnabled(key, enabled) {
    if (enabled) {
      await this.enable();
    } else {
      await this.disable();
    }
  }
  async __onToggleButtons() {
    if (this.trackService.trackData) {
      const { trackData: track, playing, trackState } = this.trackService;
      if (track) {
        await this.rpcManager.setActivity(discordEmbedFromTrack(track, playing, trackState?.progress ?? 0));
      }
    }
  }
  async handleDiscordState() {
    return this.rpcManager.rpcClient && this.enabled && this.isConnected;
  }
  async __onTrackInfo(track) {
    if (!track?.video) return;
    await this.rpcManager.setActivity(discordEmbedFromTrack(track));
  }
};
__decorateClass$d([
  IpcOn("settingsProvider.change", {
    filter: (key) => key === "discord.enabled",
    debounce: 1e3
  })
], DiscordProvider.prototype, "__onToggleEnabled", 1);
__decorateClass$d([
  IpcOn("settingsProvider.change", {
    filter: (key) => key === "discord.buttons",
    debounce: 1e3
  })
], DiscordProvider.prototype, "__onToggleButtons", 1);
__decorateClass$d([
  IpcHandle("req:discord.connected")
], DiscordProvider.prototype, "handleDiscordState", 1);
__decorateClass$d([
  IpcOn("track:change", {
    debounce: 100
  })
], DiscordProvider.prototype, "__onTrackInfo", 1);
DiscordProvider = __decorateClass$d([
  IpcContext
], DiscordProvider);
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get default() {
    return DiscordProvider;
  }
}, Symbol.toStringTag, { value: "Module" }));
class EventProvider extends BaseProvider {
  constructor(app) {
    super("events");
    this.app = app;
  }
  async AfterInit() {
  }
}
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: EventProvider
}, Symbol.toStringTag, { value: "Module" }));
const store = createEncryptedStore("credentials", {
  defaults: { credentials: {} }
});
class SecureStore {
  getAll() {
    return new Promise(
      (resolve, reject) => resolve(
        Object.entries(store.get("credentials", {})).map(
          ([account, password]) => ({
            account,
            password
          })
        )
      )
    );
  }
  set(key, value) {
    return new Promise(async (resolve, reject) => {
      store.set(`credentials.${key}`, value);
      return resolve(value);
    });
  }
  get(key) {
    return new Promise(async (resolve, reject) => {
      const value = store.get(`credentials.${key}`, null);
      return resolve(value);
    });
  }
  delete(key) {
    return new Promise(async (resolve, reject) => {
      store.delete(`credentials.${key}`);
      return resolve(true);
    });
  }
  setPassword = this.set.bind(this);
  getPassword = this.get.bind(this);
}
const secureStore = new SecureStore();
const LASTFM_KEYTAR_TOKEN = "lastfm_token";
const LASTFM_KEYTAR_SESSION = "lastfm_session";
var source$5 = { exports: {} };
var create = {};
var dist = { exports: {} };
var hasRequiredDist;
function requireDist() {
  if (hasRequiredDist) return dist.exports;
  hasRequiredDist = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    const typedArrayTypeNames = [
      "Int8Array",
      "Uint8Array",
      "Uint8ClampedArray",
      "Int16Array",
      "Uint16Array",
      "Int32Array",
      "Uint32Array",
      "Float32Array",
      "Float64Array",
      "BigInt64Array",
      "BigUint64Array"
    ];
    function isTypedArrayName(name) {
      return typedArrayTypeNames.includes(name);
    }
    const objectTypeNames = [
      "Function",
      "Generator",
      "AsyncGenerator",
      "GeneratorFunction",
      "AsyncGeneratorFunction",
      "AsyncFunction",
      "Observable",
      "Array",
      "Buffer",
      "Blob",
      "Object",
      "RegExp",
      "Date",
      "Error",
      "Map",
      "Set",
      "WeakMap",
      "WeakSet",
      "ArrayBuffer",
      "SharedArrayBuffer",
      "DataView",
      "Promise",
      "URL",
      "FormData",
      "URLSearchParams",
      "HTMLElement",
      ...typedArrayTypeNames
    ];
    function isObjectTypeName(name) {
      return objectTypeNames.includes(name);
    }
    const primitiveTypeNames = [
      "null",
      "undefined",
      "string",
      "number",
      "bigint",
      "boolean",
      "symbol"
    ];
    function isPrimitiveTypeName(name) {
      return primitiveTypeNames.includes(name);
    }
    function isOfType(type) {
      return (value) => typeof value === type;
    }
    const { toString: toString2 } = Object.prototype;
    const getObjectType = (value) => {
      const objectTypeName = toString2.call(value).slice(8, -1);
      if (/HTML\w+Element/.test(objectTypeName) && is.domElement(value)) {
        return "HTMLElement";
      }
      if (isObjectTypeName(objectTypeName)) {
        return objectTypeName;
      }
      return void 0;
    };
    const isObjectOfType = (type) => (value) => getObjectType(value) === type;
    function is(value) {
      if (value === null) {
        return "null";
      }
      switch (typeof value) {
        case "undefined":
          return "undefined";
        case "string":
          return "string";
        case "number":
          return "number";
        case "boolean":
          return "boolean";
        case "function":
          return "Function";
        case "bigint":
          return "bigint";
        case "symbol":
          return "symbol";
      }
      if (is.observable(value)) {
        return "Observable";
      }
      if (is.array(value)) {
        return "Array";
      }
      if (is.buffer(value)) {
        return "Buffer";
      }
      const tagType = getObjectType(value);
      if (tagType) {
        return tagType;
      }
      if (value instanceof String || value instanceof Boolean || value instanceof Number) {
        throw new TypeError("Please don't use object wrappers for primitive types");
      }
      return "Object";
    }
    is.undefined = isOfType("undefined");
    is.string = isOfType("string");
    const isNumberType = isOfType("number");
    is.number = (value) => isNumberType(value) && !is.nan(value);
    is.bigint = isOfType("bigint");
    is.function_ = isOfType("function");
    is.null_ = (value) => value === null;
    is.class_ = (value) => is.function_(value) && value.toString().startsWith("class ");
    is.boolean = (value) => value === true || value === false;
    is.symbol = isOfType("symbol");
    is.numericString = (value) => is.string(value) && !is.emptyStringOrWhitespace(value) && !Number.isNaN(Number(value));
    is.array = (value, assertion) => {
      if (!Array.isArray(value)) {
        return false;
      }
      if (!is.function_(assertion)) {
        return true;
      }
      return value.every(assertion);
    };
    is.buffer = (value) => {
      var _a, _b, _c, _d;
      return (_d = (_c = (_b = (_a = value) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.isBuffer) === null || _c === void 0 ? void 0 : _c.call(_b, value)) !== null && _d !== void 0 ? _d : false;
    };
    is.blob = (value) => isObjectOfType("Blob")(value);
    is.nullOrUndefined = (value) => is.null_(value) || is.undefined(value);
    is.object = (value) => !is.null_(value) && (typeof value === "object" || is.function_(value));
    is.iterable = (value) => {
      var _a;
      return is.function_((_a = value) === null || _a === void 0 ? void 0 : _a[Symbol.iterator]);
    };
    is.asyncIterable = (value) => {
      var _a;
      return is.function_((_a = value) === null || _a === void 0 ? void 0 : _a[Symbol.asyncIterator]);
    };
    is.generator = (value) => {
      var _a, _b;
      return is.iterable(value) && is.function_((_a = value) === null || _a === void 0 ? void 0 : _a.next) && is.function_((_b = value) === null || _b === void 0 ? void 0 : _b.throw);
    };
    is.asyncGenerator = (value) => is.asyncIterable(value) && is.function_(value.next) && is.function_(value.throw);
    is.nativePromise = (value) => isObjectOfType("Promise")(value);
    const hasPromiseAPI = (value) => {
      var _a, _b;
      return is.function_((_a = value) === null || _a === void 0 ? void 0 : _a.then) && is.function_((_b = value) === null || _b === void 0 ? void 0 : _b.catch);
    };
    is.promise = (value) => is.nativePromise(value) || hasPromiseAPI(value);
    is.generatorFunction = isObjectOfType("GeneratorFunction");
    is.asyncGeneratorFunction = (value) => getObjectType(value) === "AsyncGeneratorFunction";
    is.asyncFunction = (value) => getObjectType(value) === "AsyncFunction";
    is.boundFunction = (value) => is.function_(value) && !value.hasOwnProperty("prototype");
    is.regExp = isObjectOfType("RegExp");
    is.date = isObjectOfType("Date");
    is.error = isObjectOfType("Error");
    is.map = (value) => isObjectOfType("Map")(value);
    is.set = (value) => isObjectOfType("Set")(value);
    is.weakMap = (value) => isObjectOfType("WeakMap")(value);
    is.weakSet = (value) => isObjectOfType("WeakSet")(value);
    is.int8Array = isObjectOfType("Int8Array");
    is.uint8Array = isObjectOfType("Uint8Array");
    is.uint8ClampedArray = isObjectOfType("Uint8ClampedArray");
    is.int16Array = isObjectOfType("Int16Array");
    is.uint16Array = isObjectOfType("Uint16Array");
    is.int32Array = isObjectOfType("Int32Array");
    is.uint32Array = isObjectOfType("Uint32Array");
    is.float32Array = isObjectOfType("Float32Array");
    is.float64Array = isObjectOfType("Float64Array");
    is.bigInt64Array = isObjectOfType("BigInt64Array");
    is.bigUint64Array = isObjectOfType("BigUint64Array");
    is.arrayBuffer = isObjectOfType("ArrayBuffer");
    is.sharedArrayBuffer = isObjectOfType("SharedArrayBuffer");
    is.dataView = isObjectOfType("DataView");
    is.enumCase = (value, targetEnum) => Object.values(targetEnum).includes(value);
    is.directInstanceOf = (instance, class_) => Object.getPrototypeOf(instance) === class_.prototype;
    is.urlInstance = (value) => isObjectOfType("URL")(value);
    is.urlString = (value) => {
      if (!is.string(value)) {
        return false;
      }
      try {
        new URL(value);
        return true;
      } catch (_a) {
        return false;
      }
    };
    is.truthy = (value) => Boolean(value);
    is.falsy = (value) => !value;
    is.nan = (value) => Number.isNaN(value);
    is.primitive = (value) => is.null_(value) || isPrimitiveTypeName(typeof value);
    is.integer = (value) => Number.isInteger(value);
    is.safeInteger = (value) => Number.isSafeInteger(value);
    is.plainObject = (value) => {
      if (toString2.call(value) !== "[object Object]") {
        return false;
      }
      const prototype = Object.getPrototypeOf(value);
      return prototype === null || prototype === Object.getPrototypeOf({});
    };
    is.typedArray = (value) => isTypedArrayName(getObjectType(value));
    const isValidLength = (value) => is.safeInteger(value) && value >= 0;
    is.arrayLike = (value) => !is.nullOrUndefined(value) && !is.function_(value) && isValidLength(value.length);
    is.inRange = (value, range) => {
      if (is.number(range)) {
        return value >= Math.min(0, range) && value <= Math.max(range, 0);
      }
      if (is.array(range) && range.length === 2) {
        return value >= Math.min(...range) && value <= Math.max(...range);
      }
      throw new TypeError(`Invalid range: ${JSON.stringify(range)}`);
    };
    const NODE_TYPE_ELEMENT = 1;
    const DOM_PROPERTIES_TO_CHECK = [
      "innerHTML",
      "ownerDocument",
      "style",
      "attributes",
      "nodeValue"
    ];
    is.domElement = (value) => {
      return is.object(value) && value.nodeType === NODE_TYPE_ELEMENT && is.string(value.nodeName) && !is.plainObject(value) && DOM_PROPERTIES_TO_CHECK.every((property) => property in value);
    };
    is.observable = (value) => {
      var _a, _b, _c, _d;
      if (!value) {
        return false;
      }
      if (value === ((_b = (_a = value)[Symbol.observable]) === null || _b === void 0 ? void 0 : _b.call(_a))) {
        return true;
      }
      if (value === ((_d = (_c = value)["@@observable"]) === null || _d === void 0 ? void 0 : _d.call(_c))) {
        return true;
      }
      return false;
    };
    is.nodeStream = (value) => is.object(value) && is.function_(value.pipe) && !is.observable(value);
    is.infinite = (value) => value === Infinity || value === -Infinity;
    const isAbsoluteMod2 = (remainder) => (value) => is.integer(value) && Math.abs(value % 2) === remainder;
    is.evenInteger = isAbsoluteMod2(0);
    is.oddInteger = isAbsoluteMod2(1);
    is.emptyArray = (value) => is.array(value) && value.length === 0;
    is.nonEmptyArray = (value) => is.array(value) && value.length > 0;
    is.emptyString = (value) => is.string(value) && value.length === 0;
    const isWhiteSpaceString = (value) => is.string(value) && !/\S/.test(value);
    is.emptyStringOrWhitespace = (value) => is.emptyString(value) || isWhiteSpaceString(value);
    is.nonEmptyString = (value) => is.string(value) && value.length > 0;
    is.nonEmptyStringAndNotWhitespace = (value) => is.string(value) && !is.emptyStringOrWhitespace(value);
    is.emptyObject = (value) => is.object(value) && !is.map(value) && !is.set(value) && Object.keys(value).length === 0;
    is.nonEmptyObject = (value) => is.object(value) && !is.map(value) && !is.set(value) && Object.keys(value).length > 0;
    is.emptySet = (value) => is.set(value) && value.size === 0;
    is.nonEmptySet = (value) => is.set(value) && value.size > 0;
    is.emptyMap = (value) => is.map(value) && value.size === 0;
    is.nonEmptyMap = (value) => is.map(value) && value.size > 0;
    is.propertyKey = (value) => is.any([is.string, is.number, is.symbol], value);
    is.formData = (value) => isObjectOfType("FormData")(value);
    is.urlSearchParams = (value) => isObjectOfType("URLSearchParams")(value);
    const predicateOnArray = (method, predicate, values) => {
      if (!is.function_(predicate)) {
        throw new TypeError(`Invalid predicate: ${JSON.stringify(predicate)}`);
      }
      if (values.length === 0) {
        throw new TypeError("Invalid number of values");
      }
      return method.call(values, predicate);
    };
    is.any = (predicate, ...values) => {
      const predicates = is.array(predicate) ? predicate : [predicate];
      return predicates.some((singlePredicate) => predicateOnArray(Array.prototype.some, singlePredicate, values));
    };
    is.all = (predicate, ...values) => predicateOnArray(Array.prototype.every, predicate, values);
    const assertType = (condition, description, value, options = {}) => {
      if (!condition) {
        const { multipleValues } = options;
        const valuesMessage = multipleValues ? `received values of types ${[
          ...new Set(value.map((singleValue) => `\`${is(singleValue)}\``))
        ].join(", ")}` : `received value of type \`${is(value)}\``;
        throw new TypeError(`Expected value which is \`${description}\`, ${valuesMessage}.`);
      }
    };
    exports2.assert = {
      // Unknowns.
      undefined: (value) => assertType(is.undefined(value), "undefined", value),
      string: (value) => assertType(is.string(value), "string", value),
      number: (value) => assertType(is.number(value), "number", value),
      bigint: (value) => assertType(is.bigint(value), "bigint", value),
      // eslint-disable-next-line @typescript-eslint/ban-types
      function_: (value) => assertType(is.function_(value), "Function", value),
      null_: (value) => assertType(is.null_(value), "null", value),
      class_: (value) => assertType(is.class_(value), "Class", value),
      boolean: (value) => assertType(is.boolean(value), "boolean", value),
      symbol: (value) => assertType(is.symbol(value), "symbol", value),
      numericString: (value) => assertType(is.numericString(value), "string with a number", value),
      array: (value, assertion) => {
        const assert = assertType;
        assert(is.array(value), "Array", value);
        if (assertion) {
          value.forEach(assertion);
        }
      },
      buffer: (value) => assertType(is.buffer(value), "Buffer", value),
      blob: (value) => assertType(is.blob(value), "Blob", value),
      nullOrUndefined: (value) => assertType(is.nullOrUndefined(value), "null or undefined", value),
      object: (value) => assertType(is.object(value), "Object", value),
      iterable: (value) => assertType(is.iterable(value), "Iterable", value),
      asyncIterable: (value) => assertType(is.asyncIterable(value), "AsyncIterable", value),
      generator: (value) => assertType(is.generator(value), "Generator", value),
      asyncGenerator: (value) => assertType(is.asyncGenerator(value), "AsyncGenerator", value),
      nativePromise: (value) => assertType(is.nativePromise(value), "native Promise", value),
      promise: (value) => assertType(is.promise(value), "Promise", value),
      generatorFunction: (value) => assertType(is.generatorFunction(value), "GeneratorFunction", value),
      asyncGeneratorFunction: (value) => assertType(is.asyncGeneratorFunction(value), "AsyncGeneratorFunction", value),
      // eslint-disable-next-line @typescript-eslint/ban-types
      asyncFunction: (value) => assertType(is.asyncFunction(value), "AsyncFunction", value),
      // eslint-disable-next-line @typescript-eslint/ban-types
      boundFunction: (value) => assertType(is.boundFunction(value), "Function", value),
      regExp: (value) => assertType(is.regExp(value), "RegExp", value),
      date: (value) => assertType(is.date(value), "Date", value),
      error: (value) => assertType(is.error(value), "Error", value),
      map: (value) => assertType(is.map(value), "Map", value),
      set: (value) => assertType(is.set(value), "Set", value),
      weakMap: (value) => assertType(is.weakMap(value), "WeakMap", value),
      weakSet: (value) => assertType(is.weakSet(value), "WeakSet", value),
      int8Array: (value) => assertType(is.int8Array(value), "Int8Array", value),
      uint8Array: (value) => assertType(is.uint8Array(value), "Uint8Array", value),
      uint8ClampedArray: (value) => assertType(is.uint8ClampedArray(value), "Uint8ClampedArray", value),
      int16Array: (value) => assertType(is.int16Array(value), "Int16Array", value),
      uint16Array: (value) => assertType(is.uint16Array(value), "Uint16Array", value),
      int32Array: (value) => assertType(is.int32Array(value), "Int32Array", value),
      uint32Array: (value) => assertType(is.uint32Array(value), "Uint32Array", value),
      float32Array: (value) => assertType(is.float32Array(value), "Float32Array", value),
      float64Array: (value) => assertType(is.float64Array(value), "Float64Array", value),
      bigInt64Array: (value) => assertType(is.bigInt64Array(value), "BigInt64Array", value),
      bigUint64Array: (value) => assertType(is.bigUint64Array(value), "BigUint64Array", value),
      arrayBuffer: (value) => assertType(is.arrayBuffer(value), "ArrayBuffer", value),
      sharedArrayBuffer: (value) => assertType(is.sharedArrayBuffer(value), "SharedArrayBuffer", value),
      dataView: (value) => assertType(is.dataView(value), "DataView", value),
      enumCase: (value, targetEnum) => assertType(is.enumCase(value, targetEnum), "EnumCase", value),
      urlInstance: (value) => assertType(is.urlInstance(value), "URL", value),
      urlString: (value) => assertType(is.urlString(value), "string with a URL", value),
      truthy: (value) => assertType(is.truthy(value), "truthy", value),
      falsy: (value) => assertType(is.falsy(value), "falsy", value),
      nan: (value) => assertType(is.nan(value), "NaN", value),
      primitive: (value) => assertType(is.primitive(value), "primitive", value),
      integer: (value) => assertType(is.integer(value), "integer", value),
      safeInteger: (value) => assertType(is.safeInteger(value), "integer", value),
      plainObject: (value) => assertType(is.plainObject(value), "plain object", value),
      typedArray: (value) => assertType(is.typedArray(value), "TypedArray", value),
      arrayLike: (value) => assertType(is.arrayLike(value), "array-like", value),
      domElement: (value) => assertType(is.domElement(value), "HTMLElement", value),
      observable: (value) => assertType(is.observable(value), "Observable", value),
      nodeStream: (value) => assertType(is.nodeStream(value), "Node.js Stream", value),
      infinite: (value) => assertType(is.infinite(value), "infinite number", value),
      emptyArray: (value) => assertType(is.emptyArray(value), "empty array", value),
      nonEmptyArray: (value) => assertType(is.nonEmptyArray(value), "non-empty array", value),
      emptyString: (value) => assertType(is.emptyString(value), "empty string", value),
      emptyStringOrWhitespace: (value) => assertType(is.emptyStringOrWhitespace(value), "empty string or whitespace", value),
      nonEmptyString: (value) => assertType(is.nonEmptyString(value), "non-empty string", value),
      nonEmptyStringAndNotWhitespace: (value) => assertType(is.nonEmptyStringAndNotWhitespace(value), "non-empty string and not whitespace", value),
      emptyObject: (value) => assertType(is.emptyObject(value), "empty object", value),
      nonEmptyObject: (value) => assertType(is.nonEmptyObject(value), "non-empty object", value),
      emptySet: (value) => assertType(is.emptySet(value), "empty set", value),
      nonEmptySet: (value) => assertType(is.nonEmptySet(value), "non-empty set", value),
      emptyMap: (value) => assertType(is.emptyMap(value), "empty map", value),
      nonEmptyMap: (value) => assertType(is.nonEmptyMap(value), "non-empty map", value),
      propertyKey: (value) => assertType(is.propertyKey(value), "PropertyKey", value),
      formData: (value) => assertType(is.formData(value), "FormData", value),
      urlSearchParams: (value) => assertType(is.urlSearchParams(value), "URLSearchParams", value),
      // Numbers.
      evenInteger: (value) => assertType(is.evenInteger(value), "even integer", value),
      oddInteger: (value) => assertType(is.oddInteger(value), "odd integer", value),
      // Two arguments.
      directInstanceOf: (instance, class_) => assertType(is.directInstanceOf(instance, class_), "T", instance),
      inRange: (value, range) => assertType(is.inRange(value, range), "in range", value),
      // Variadic functions.
      any: (predicate, ...values) => {
        return assertType(is.any(predicate, ...values), "predicate returns truthy for any value", values, { multipleValues: true });
      },
      all: (predicate, ...values) => assertType(is.all(predicate, ...values), "predicate returns truthy for all values", values, { multipleValues: true })
    };
    Object.defineProperties(is, {
      class: {
        value: is.class_
      },
      function: {
        value: is.function_
      },
      null: {
        value: is.null_
      }
    });
    Object.defineProperties(exports2.assert, {
      class: {
        value: exports2.assert.class_
      },
      function: {
        value: exports2.assert.function_
      },
      null: {
        value: exports2.assert.null_
      }
    });
    exports2.default = is;
    module2.exports = is;
    module2.exports.default = is;
    module2.exports.assert = exports2.assert;
  })(dist, dist.exports);
  return dist.exports;
}
var asPromise = {};
var pCancelable = { exports: {} };
var hasRequiredPCancelable;
function requirePCancelable() {
  if (hasRequiredPCancelable) return pCancelable.exports;
  hasRequiredPCancelable = 1;
  class CancelError extends Error {
    constructor(reason) {
      super(reason || "Promise was canceled");
      this.name = "CancelError";
    }
    get isCanceled() {
      return true;
    }
  }
  class PCancelable {
    static fn(userFn) {
      return (...arguments_) => {
        return new PCancelable((resolve, reject, onCancel) => {
          arguments_.push(onCancel);
          userFn(...arguments_).then(resolve, reject);
        });
      };
    }
    constructor(executor) {
      this._cancelHandlers = [];
      this._isPending = true;
      this._isCanceled = false;
      this._rejectOnCancel = true;
      this._promise = new Promise((resolve, reject) => {
        this._reject = reject;
        const onResolve = (value) => {
          if (!this._isCanceled || !onCancel.shouldReject) {
            this._isPending = false;
            resolve(value);
          }
        };
        const onReject = (error) => {
          this._isPending = false;
          reject(error);
        };
        const onCancel = (handler) => {
          if (!this._isPending) {
            throw new Error("The `onCancel` handler was attached after the promise settled.");
          }
          this._cancelHandlers.push(handler);
        };
        Object.defineProperties(onCancel, {
          shouldReject: {
            get: () => this._rejectOnCancel,
            set: (boolean) => {
              this._rejectOnCancel = boolean;
            }
          }
        });
        return executor(onResolve, onReject, onCancel);
      });
    }
    then(onFulfilled, onRejected) {
      return this._promise.then(onFulfilled, onRejected);
    }
    catch(onRejected) {
      return this._promise.catch(onRejected);
    }
    finally(onFinally) {
      return this._promise.finally(onFinally);
    }
    cancel(reason) {
      if (!this._isPending || this._isCanceled) {
        return;
      }
      this._isCanceled = true;
      if (this._cancelHandlers.length > 0) {
        try {
          for (const handler of this._cancelHandlers) {
            handler();
          }
        } catch (error) {
          this._reject(error);
          return;
        }
      }
      if (this._rejectOnCancel) {
        this._reject(new CancelError(reason));
      }
    }
    get isCanceled() {
      return this._isCanceled;
    }
  }
  Object.setPrototypeOf(PCancelable.prototype, Promise.prototype);
  pCancelable.exports = PCancelable;
  pCancelable.exports.CancelError = CancelError;
  return pCancelable.exports;
}
var types$1 = {};
var core = {};
var source$4 = { exports: {} };
var source$3 = { exports: {} };
var hasRequiredSource$4;
function requireSource$4() {
  if (hasRequiredSource$4) return source$3.exports;
  hasRequiredSource$4 = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    function isTLSSocket(socket) {
      return socket.encrypted;
    }
    const deferToConnect = (socket, fn) => {
      let listeners;
      if (typeof fn === "function") {
        const connect = fn;
        listeners = { connect };
      } else {
        listeners = fn;
      }
      const hasConnectListener = typeof listeners.connect === "function";
      const hasSecureConnectListener = typeof listeners.secureConnect === "function";
      const hasCloseListener = typeof listeners.close === "function";
      const onConnect = () => {
        if (hasConnectListener) {
          listeners.connect();
        }
        if (isTLSSocket(socket) && hasSecureConnectListener) {
          if (socket.authorized) {
            listeners.secureConnect();
          } else if (!socket.authorizationError) {
            socket.once("secureConnect", listeners.secureConnect);
          }
        }
        if (hasCloseListener) {
          socket.once("close", listeners.close);
        }
      };
      if (socket.writable && !socket.connecting) {
        onConnect();
      } else if (socket.connecting) {
        socket.once("connect", onConnect);
      } else if (socket.destroyed && hasCloseListener) {
        listeners.close(socket._hadError);
      }
    };
    exports2.default = deferToConnect;
    module2.exports = deferToConnect;
    module2.exports.default = deferToConnect;
  })(source$3, source$3.exports);
  return source$3.exports;
}
var hasRequiredSource$3;
function requireSource$3() {
  if (hasRequiredSource$3) return source$4.exports;
  hasRequiredSource$3 = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    const defer_to_connect_1 = requireSource$4();
    const util_1 = require$$1$1;
    const nodejsMajorVersion = Number(process.versions.node.split(".")[0]);
    const timer = (request) => {
      if (request.timings) {
        return request.timings;
      }
      const timings = {
        start: Date.now(),
        socket: void 0,
        lookup: void 0,
        connect: void 0,
        secureConnect: void 0,
        upload: void 0,
        response: void 0,
        end: void 0,
        error: void 0,
        abort: void 0,
        phases: {
          wait: void 0,
          dns: void 0,
          tcp: void 0,
          tls: void 0,
          request: void 0,
          firstByte: void 0,
          download: void 0,
          total: void 0
        }
      };
      request.timings = timings;
      const handleError = (origin) => {
        const emit = origin.emit.bind(origin);
        origin.emit = (event, ...args) => {
          if (event === "error") {
            timings.error = Date.now();
            timings.phases.total = timings.error - timings.start;
            origin.emit = emit;
          }
          return emit(event, ...args);
        };
      };
      handleError(request);
      const onAbort = () => {
        timings.abort = Date.now();
        if (!timings.response || nodejsMajorVersion >= 13) {
          timings.phases.total = Date.now() - timings.start;
        }
      };
      request.prependOnceListener("abort", onAbort);
      const onSocket = (socket) => {
        timings.socket = Date.now();
        timings.phases.wait = timings.socket - timings.start;
        if (util_1.types.isProxy(socket)) {
          return;
        }
        const lookupListener = () => {
          timings.lookup = Date.now();
          timings.phases.dns = timings.lookup - timings.socket;
        };
        socket.prependOnceListener("lookup", lookupListener);
        defer_to_connect_1.default(socket, {
          connect: () => {
            timings.connect = Date.now();
            if (timings.lookup === void 0) {
              socket.removeListener("lookup", lookupListener);
              timings.lookup = timings.connect;
              timings.phases.dns = timings.lookup - timings.socket;
            }
            timings.phases.tcp = timings.connect - timings.lookup;
          },
          secureConnect: () => {
            timings.secureConnect = Date.now();
            timings.phases.tls = timings.secureConnect - timings.connect;
          }
        });
      };
      if (request.socket) {
        onSocket(request.socket);
      } else {
        request.prependOnceListener("socket", onSocket);
      }
      const onUpload = () => {
        var _a;
        timings.upload = Date.now();
        timings.phases.request = timings.upload - ((_a = timings.secureConnect) !== null && _a !== void 0 ? _a : timings.connect);
      };
      const writableFinished = () => {
        if (typeof request.writableFinished === "boolean") {
          return request.writableFinished;
        }
        return request.finished && request.outputSize === 0 && (!request.socket || request.socket.writableLength === 0);
      };
      if (writableFinished()) {
        onUpload();
      } else {
        request.prependOnceListener("finish", onUpload);
      }
      request.prependOnceListener("response", (response) => {
        timings.response = Date.now();
        timings.phases.firstByte = timings.response - timings.upload;
        response.timings = timings;
        handleError(response);
        response.prependOnceListener("end", () => {
          timings.end = Date.now();
          timings.phases.download = timings.end - timings.response;
          timings.phases.total = timings.end - timings.start;
        });
        response.prependOnceListener("aborted", onAbort);
      });
      return timings;
    };
    exports2.default = timer;
    module2.exports = timer;
    module2.exports.default = timer;
  })(source$4, source$4.exports);
  return source$4.exports;
}
var source$2 = { exports: {} };
var hasRequiredSource$2;
function requireSource$2() {
  if (hasRequiredSource$2) return source$2.exports;
  hasRequiredSource$2 = 1;
  const {
    V4MAPPED,
    ADDRCONFIG,
    ALL,
    promises: {
      Resolver: AsyncResolver
    },
    lookup: dnsLookup
  } = require$$0$2;
  const { promisify } = require$$1$1;
  const os = require$$2;
  const kCacheableLookupCreateConnection = Symbol("cacheableLookupCreateConnection");
  const kCacheableLookupInstance = Symbol("cacheableLookupInstance");
  const kExpires = Symbol("expires");
  const supportsALL = typeof ALL === "number";
  const verifyAgent = (agent2) => {
    if (!(agent2 && typeof agent2.createConnection === "function")) {
      throw new Error("Expected an Agent instance as the first argument");
    }
  };
  const map4to6 = (entries) => {
    for (const entry of entries) {
      if (entry.family === 6) {
        continue;
      }
      entry.address = `::ffff:${entry.address}`;
      entry.family = 6;
    }
  };
  const getIfaceInfo = () => {
    let has4 = false;
    let has6 = false;
    for (const device of Object.values(os.networkInterfaces())) {
      for (const iface of device) {
        if (iface.internal) {
          continue;
        }
        if (iface.family === "IPv6") {
          has6 = true;
        } else {
          has4 = true;
        }
        if (has4 && has6) {
          return { has4, has6 };
        }
      }
    }
    return { has4, has6 };
  };
  const isIterable = (map) => {
    return Symbol.iterator in map;
  };
  const ttl = { ttl: true };
  const all = { all: true };
  class CacheableLookup {
    constructor({
      cache = /* @__PURE__ */ new Map(),
      maxTtl = Infinity,
      fallbackDuration = 3600,
      errorTtl = 0.15,
      resolver = new AsyncResolver(),
      lookup = dnsLookup
    } = {}) {
      this.maxTtl = maxTtl;
      this.errorTtl = errorTtl;
      this._cache = cache;
      this._resolver = resolver;
      this._dnsLookup = promisify(lookup);
      if (this._resolver instanceof AsyncResolver) {
        this._resolve4 = this._resolver.resolve4.bind(this._resolver);
        this._resolve6 = this._resolver.resolve6.bind(this._resolver);
      } else {
        this._resolve4 = promisify(this._resolver.resolve4.bind(this._resolver));
        this._resolve6 = promisify(this._resolver.resolve6.bind(this._resolver));
      }
      this._iface = getIfaceInfo();
      this._pending = {};
      this._nextRemovalTime = false;
      this._hostnamesToFallback = /* @__PURE__ */ new Set();
      if (fallbackDuration < 1) {
        this._fallback = false;
      } else {
        this._fallback = true;
        const interval = setInterval(() => {
          this._hostnamesToFallback.clear();
        }, fallbackDuration * 1e3);
        if (interval.unref) {
          interval.unref();
        }
      }
      this.lookup = this.lookup.bind(this);
      this.lookupAsync = this.lookupAsync.bind(this);
    }
    set servers(servers) {
      this.clear();
      this._resolver.setServers(servers);
    }
    get servers() {
      return this._resolver.getServers();
    }
    lookup(hostname, options, callback) {
      if (typeof options === "function") {
        callback = options;
        options = {};
      } else if (typeof options === "number") {
        options = {
          family: options
        };
      }
      if (!callback) {
        throw new Error("Callback must be a function.");
      }
      this.lookupAsync(hostname, options).then((result) => {
        if (options.all) {
          callback(null, result);
        } else {
          callback(null, result.address, result.family, result.expires, result.ttl);
        }
      }, callback);
    }
    async lookupAsync(hostname, options = {}) {
      if (typeof options === "number") {
        options = {
          family: options
        };
      }
      let cached = await this.query(hostname);
      if (options.family === 6) {
        const filtered = cached.filter((entry) => entry.family === 6);
        if (options.hints & V4MAPPED) {
          if (supportsALL && options.hints & ALL || filtered.length === 0) {
            map4to6(cached);
          } else {
            cached = filtered;
          }
        } else {
          cached = filtered;
        }
      } else if (options.family === 4) {
        cached = cached.filter((entry) => entry.family === 4);
      }
      if (options.hints & ADDRCONFIG) {
        const { _iface } = this;
        cached = cached.filter((entry) => entry.family === 6 ? _iface.has6 : _iface.has4);
      }
      if (cached.length === 0) {
        const error = new Error(`cacheableLookup ENOTFOUND ${hostname}`);
        error.code = "ENOTFOUND";
        error.hostname = hostname;
        throw error;
      }
      if (options.all) {
        return cached;
      }
      return cached[0];
    }
    async query(hostname) {
      let cached = await this._cache.get(hostname);
      if (!cached) {
        const pending = this._pending[hostname];
        if (pending) {
          cached = await pending;
        } else {
          const newPromise = this.queryAndCache(hostname);
          this._pending[hostname] = newPromise;
          try {
            cached = await newPromise;
          } finally {
            delete this._pending[hostname];
          }
        }
      }
      cached = cached.map((entry) => {
        return { ...entry };
      });
      return cached;
    }
    async _resolve(hostname) {
      const wrap = async (promise) => {
        try {
          return await promise;
        } catch (error) {
          if (error.code === "ENODATA" || error.code === "ENOTFOUND") {
            return [];
          }
          throw error;
        }
      };
      const [A, AAAA] = await Promise.all([
        this._resolve4(hostname, ttl),
        this._resolve6(hostname, ttl)
      ].map((promise) => wrap(promise)));
      let aTtl = 0;
      let aaaaTtl = 0;
      let cacheTtl = 0;
      const now2 = Date.now();
      for (const entry of A) {
        entry.family = 4;
        entry.expires = now2 + entry.ttl * 1e3;
        aTtl = Math.max(aTtl, entry.ttl);
      }
      for (const entry of AAAA) {
        entry.family = 6;
        entry.expires = now2 + entry.ttl * 1e3;
        aaaaTtl = Math.max(aaaaTtl, entry.ttl);
      }
      if (A.length > 0) {
        if (AAAA.length > 0) {
          cacheTtl = Math.min(aTtl, aaaaTtl);
        } else {
          cacheTtl = aTtl;
        }
      } else {
        cacheTtl = aaaaTtl;
      }
      return {
        entries: [
          ...A,
          ...AAAA
        ],
        cacheTtl
      };
    }
    async _lookup(hostname) {
      try {
        const entries = await this._dnsLookup(hostname, {
          all: true
        });
        return {
          entries,
          cacheTtl: 0
        };
      } catch (_) {
        return {
          entries: [],
          cacheTtl: 0
        };
      }
    }
    async _set(hostname, data, cacheTtl) {
      if (this.maxTtl > 0 && cacheTtl > 0) {
        cacheTtl = Math.min(cacheTtl, this.maxTtl) * 1e3;
        data[kExpires] = Date.now() + cacheTtl;
        try {
          await this._cache.set(hostname, data, cacheTtl);
        } catch (error) {
          this.lookupAsync = async () => {
            const cacheError = new Error("Cache Error. Please recreate the CacheableLookup instance.");
            cacheError.cause = error;
            throw cacheError;
          };
        }
        if (isIterable(this._cache)) {
          this._tick(cacheTtl);
        }
      }
    }
    async queryAndCache(hostname) {
      if (this._hostnamesToFallback.has(hostname)) {
        return this._dnsLookup(hostname, all);
      }
      let query = await this._resolve(hostname);
      if (query.entries.length === 0 && this._fallback) {
        query = await this._lookup(hostname);
        if (query.entries.length !== 0) {
          this._hostnamesToFallback.add(hostname);
        }
      }
      const cacheTtl = query.entries.length === 0 ? this.errorTtl : query.cacheTtl;
      await this._set(hostname, query.entries, cacheTtl);
      return query.entries;
    }
    _tick(ms) {
      const nextRemovalTime = this._nextRemovalTime;
      if (!nextRemovalTime || ms < nextRemovalTime) {
        clearTimeout(this._removalTimeout);
        this._nextRemovalTime = ms;
        this._removalTimeout = setTimeout(() => {
          this._nextRemovalTime = false;
          let nextExpiry = Infinity;
          const now2 = Date.now();
          for (const [hostname, entries] of this._cache) {
            const expires = entries[kExpires];
            if (now2 >= expires) {
              this._cache.delete(hostname);
            } else if (expires < nextExpiry) {
              nextExpiry = expires;
            }
          }
          if (nextExpiry !== Infinity) {
            this._tick(nextExpiry - now2);
          }
        }, ms);
        if (this._removalTimeout.unref) {
          this._removalTimeout.unref();
        }
      }
    }
    install(agent2) {
      verifyAgent(agent2);
      if (kCacheableLookupCreateConnection in agent2) {
        throw new Error("CacheableLookup has been already installed");
      }
      agent2[kCacheableLookupCreateConnection] = agent2.createConnection;
      agent2[kCacheableLookupInstance] = this;
      agent2.createConnection = (options, callback) => {
        if (!("lookup" in options)) {
          options.lookup = this.lookup;
        }
        return agent2[kCacheableLookupCreateConnection](options, callback);
      };
    }
    uninstall(agent2) {
      verifyAgent(agent2);
      if (agent2[kCacheableLookupCreateConnection]) {
        if (agent2[kCacheableLookupInstance] !== this) {
          throw new Error("The agent is not owned by this CacheableLookup instance");
        }
        agent2.createConnection = agent2[kCacheableLookupCreateConnection];
        delete agent2[kCacheableLookupCreateConnection];
        delete agent2[kCacheableLookupInstance];
      }
    }
    updateInterfaceInfo() {
      const { _iface } = this;
      this._iface = getIfaceInfo();
      if (_iface.has4 && !this._iface.has4 || _iface.has6 && !this._iface.has6) {
        this._cache.clear();
      }
    }
    clear(hostname) {
      if (hostname) {
        this._cache.delete(hostname);
        return;
      }
      this._cache.clear();
    }
  }
  source$2.exports = CacheableLookup;
  source$2.exports.default = CacheableLookup;
  return source$2.exports;
}
var normalizeUrl_1;
var hasRequiredNormalizeUrl;
function requireNormalizeUrl() {
  if (hasRequiredNormalizeUrl) return normalizeUrl_1;
  hasRequiredNormalizeUrl = 1;
  const DATA_URL_DEFAULT_MIME_TYPE = "text/plain";
  const DATA_URL_DEFAULT_CHARSET = "us-ascii";
  const testParameter = (name, filters) => {
    return filters.some((filter) => filter instanceof RegExp ? filter.test(name) : filter === name);
  };
  const normalizeDataURL = (urlString, { stripHash }) => {
    const match = /^data:(?<type>[^,]*?),(?<data>[^#]*?)(?:#(?<hash>.*))?$/.exec(urlString);
    if (!match) {
      throw new Error(`Invalid URL: ${urlString}`);
    }
    let { type, data, hash } = match.groups;
    const mediaType = type.split(";");
    hash = stripHash ? "" : hash;
    let isBase64 = false;
    if (mediaType[mediaType.length - 1] === "base64") {
      mediaType.pop();
      isBase64 = true;
    }
    const mimeType = (mediaType.shift() || "").toLowerCase();
    const attributes = mediaType.map((attribute) => {
      let [key, value = ""] = attribute.split("=").map((string) => string.trim());
      if (key === "charset") {
        value = value.toLowerCase();
        if (value === DATA_URL_DEFAULT_CHARSET) {
          return "";
        }
      }
      return `${key}${value ? `=${value}` : ""}`;
    }).filter(Boolean);
    const normalizedMediaType = [
      ...attributes
    ];
    if (isBase64) {
      normalizedMediaType.push("base64");
    }
    if (normalizedMediaType.length !== 0 || mimeType && mimeType !== DATA_URL_DEFAULT_MIME_TYPE) {
      normalizedMediaType.unshift(mimeType);
    }
    return `data:${normalizedMediaType.join(";")},${isBase64 ? data.trim() : data}${hash ? `#${hash}` : ""}`;
  };
  const normalizeUrl = (urlString, options) => {
    options = {
      defaultProtocol: "http:",
      normalizeProtocol: true,
      forceHttp: false,
      forceHttps: false,
      stripAuthentication: true,
      stripHash: false,
      stripTextFragment: true,
      stripWWW: true,
      removeQueryParameters: [/^utm_\w+/i],
      removeTrailingSlash: true,
      removeSingleSlash: true,
      removeDirectoryIndex: false,
      sortQueryParameters: true,
      ...options
    };
    urlString = urlString.trim();
    if (/^data:/i.test(urlString)) {
      return normalizeDataURL(urlString, options);
    }
    if (/^view-source:/i.test(urlString)) {
      throw new Error("`view-source:` is not supported as it is a non-standard protocol");
    }
    const hasRelativeProtocol = urlString.startsWith("//");
    const isRelativeUrl = !hasRelativeProtocol && /^\.*\//.test(urlString);
    if (!isRelativeUrl) {
      urlString = urlString.replace(/^(?!(?:\w+:)?\/\/)|^\/\//, options.defaultProtocol);
    }
    const urlObj = new URL(urlString);
    if (options.forceHttp && options.forceHttps) {
      throw new Error("The `forceHttp` and `forceHttps` options cannot be used together");
    }
    if (options.forceHttp && urlObj.protocol === "https:") {
      urlObj.protocol = "http:";
    }
    if (options.forceHttps && urlObj.protocol === "http:") {
      urlObj.protocol = "https:";
    }
    if (options.stripAuthentication) {
      urlObj.username = "";
      urlObj.password = "";
    }
    if (options.stripHash) {
      urlObj.hash = "";
    } else if (options.stripTextFragment) {
      urlObj.hash = urlObj.hash.replace(/#?:~:text.*?$/i, "");
    }
    if (urlObj.pathname) {
      urlObj.pathname = urlObj.pathname.replace(/(?<!\b(?:[a-z][a-z\d+\-.]{1,50}:))\/{2,}/g, "/");
    }
    if (urlObj.pathname) {
      try {
        urlObj.pathname = decodeURI(urlObj.pathname);
      } catch (_) {
      }
    }
    if (options.removeDirectoryIndex === true) {
      options.removeDirectoryIndex = [/^index\.[a-z]+$/];
    }
    if (Array.isArray(options.removeDirectoryIndex) && options.removeDirectoryIndex.length > 0) {
      let pathComponents = urlObj.pathname.split("/");
      const lastComponent = pathComponents[pathComponents.length - 1];
      if (testParameter(lastComponent, options.removeDirectoryIndex)) {
        pathComponents = pathComponents.slice(0, pathComponents.length - 1);
        urlObj.pathname = pathComponents.slice(1).join("/") + "/";
      }
    }
    if (urlObj.hostname) {
      urlObj.hostname = urlObj.hostname.replace(/\.$/, "");
      if (options.stripWWW && /^www\.(?!www\.)(?:[a-z\-\d]{1,63})\.(?:[a-z.\-\d]{2,63})$/.test(urlObj.hostname)) {
        urlObj.hostname = urlObj.hostname.replace(/^www\./, "");
      }
    }
    if (Array.isArray(options.removeQueryParameters)) {
      for (const key of [...urlObj.searchParams.keys()]) {
        if (testParameter(key, options.removeQueryParameters)) {
          urlObj.searchParams.delete(key);
        }
      }
    }
    if (options.removeQueryParameters === true) {
      urlObj.search = "";
    }
    if (options.sortQueryParameters) {
      urlObj.searchParams.sort();
    }
    if (options.removeTrailingSlash) {
      urlObj.pathname = urlObj.pathname.replace(/\/$/, "");
    }
    const oldUrlString = urlString;
    urlString = urlObj.toString();
    if (!options.removeSingleSlash && urlObj.pathname === "/" && !oldUrlString.endsWith("/") && urlObj.hash === "") {
      urlString = urlString.replace(/\/$/, "");
    }
    if ((options.removeTrailingSlash || urlObj.pathname === "/") && urlObj.hash === "" && options.removeSingleSlash) {
      urlString = urlString.replace(/\/$/, "");
    }
    if (hasRelativeProtocol && !options.normalizeProtocol) {
      urlString = urlString.replace(/^http:\/\//, "//");
    }
    if (options.stripProtocol) {
      urlString = urlString.replace(/^(?:https?:)?\/\//, "");
    }
    return urlString;
  };
  normalizeUrl_1 = normalizeUrl;
  return normalizeUrl_1;
}
var getStream = { exports: {} };
var once = { exports: {} };
var wrappy_1;
var hasRequiredWrappy;
function requireWrappy() {
  if (hasRequiredWrappy) return wrappy_1;
  hasRequiredWrappy = 1;
  wrappy_1 = wrappy;
  function wrappy(fn, cb) {
    if (fn && cb) return wrappy(fn)(cb);
    if (typeof fn !== "function")
      throw new TypeError("need wrapper function");
    Object.keys(fn).forEach(function(k) {
      wrapper[k] = fn[k];
    });
    return wrapper;
    function wrapper() {
      var args = new Array(arguments.length);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }
      var ret = fn.apply(this, args);
      var cb2 = args[args.length - 1];
      if (typeof ret === "function" && ret !== cb2) {
        Object.keys(cb2).forEach(function(k) {
          ret[k] = cb2[k];
        });
      }
      return ret;
    }
  }
  return wrappy_1;
}
var hasRequiredOnce;
function requireOnce() {
  if (hasRequiredOnce) return once.exports;
  hasRequiredOnce = 1;
  var wrappy = requireWrappy();
  once.exports = wrappy(once$1);
  once.exports.strict = wrappy(onceStrict);
  once$1.proto = once$1(function() {
    Object.defineProperty(Function.prototype, "once", {
      value: function() {
        return once$1(this);
      },
      configurable: true
    });
    Object.defineProperty(Function.prototype, "onceStrict", {
      value: function() {
        return onceStrict(this);
      },
      configurable: true
    });
  });
  function once$1(fn) {
    var f = function() {
      if (f.called) return f.value;
      f.called = true;
      return f.value = fn.apply(this, arguments);
    };
    f.called = false;
    return f;
  }
  function onceStrict(fn) {
    var f = function() {
      if (f.called)
        throw new Error(f.onceError);
      f.called = true;
      return f.value = fn.apply(this, arguments);
    };
    var name = fn.name || "Function wrapped with `once`";
    f.onceError = name + " shouldn't be called more than once";
    f.called = false;
    return f;
  }
  return once.exports;
}
var endOfStream;
var hasRequiredEndOfStream;
function requireEndOfStream() {
  if (hasRequiredEndOfStream) return endOfStream;
  hasRequiredEndOfStream = 1;
  var once2 = requireOnce();
  var noop = function() {
  };
  var isRequest = function(stream) {
    return stream.setHeader && typeof stream.abort === "function";
  };
  var isChildProcess = function(stream) {
    return stream.stdio && Array.isArray(stream.stdio) && stream.stdio.length === 3;
  };
  var eos = function(stream, opts, callback) {
    if (typeof opts === "function") return eos(stream, null, opts);
    if (!opts) opts = {};
    callback = once2(callback || noop);
    var ws = stream._writableState;
    var rs = stream._readableState;
    var readable = opts.readable || opts.readable !== false && stream.readable;
    var writable = opts.writable || opts.writable !== false && stream.writable;
    var cancelled = false;
    var onlegacyfinish = function() {
      if (!stream.writable) onfinish();
    };
    var onfinish = function() {
      writable = false;
      if (!readable) callback.call(stream);
    };
    var onend = function() {
      readable = false;
      if (!writable) callback.call(stream);
    };
    var onexit = function(exitCode) {
      callback.call(stream, exitCode ? new Error("exited with error code: " + exitCode) : null);
    };
    var onerror = function(err) {
      callback.call(stream, err);
    };
    var onclose = function() {
      process.nextTick(onclosenexttick);
    };
    var onclosenexttick = function() {
      if (cancelled) return;
      if (readable && !(rs && (rs.ended && !rs.destroyed))) return callback.call(stream, new Error("premature close"));
      if (writable && !(ws && (ws.ended && !ws.destroyed))) return callback.call(stream, new Error("premature close"));
    };
    var onrequest = function() {
      stream.req.on("finish", onfinish);
    };
    if (isRequest(stream)) {
      stream.on("complete", onfinish);
      stream.on("abort", onclose);
      if (stream.req) onrequest();
      else stream.on("request", onrequest);
    } else if (writable && !ws) {
      stream.on("end", onlegacyfinish);
      stream.on("close", onlegacyfinish);
    }
    if (isChildProcess(stream)) stream.on("exit", onexit);
    stream.on("end", onend);
    stream.on("finish", onfinish);
    if (opts.error !== false) stream.on("error", onerror);
    stream.on("close", onclose);
    return function() {
      cancelled = true;
      stream.removeListener("complete", onfinish);
      stream.removeListener("abort", onclose);
      stream.removeListener("request", onrequest);
      if (stream.req) stream.req.removeListener("finish", onfinish);
      stream.removeListener("end", onlegacyfinish);
      stream.removeListener("close", onlegacyfinish);
      stream.removeListener("finish", onfinish);
      stream.removeListener("exit", onexit);
      stream.removeListener("end", onend);
      stream.removeListener("error", onerror);
      stream.removeListener("close", onclose);
    };
  };
  endOfStream = eos;
  return endOfStream;
}
var pump_1;
var hasRequiredPump;
function requirePump() {
  if (hasRequiredPump) return pump_1;
  hasRequiredPump = 1;
  var once2 = requireOnce();
  var eos = requireEndOfStream();
  var fs2;
  try {
    fs2 = require("fs");
  } catch (e) {
  }
  var noop = function() {
  };
  var ancient = /^v?\.0/.test(process.version);
  var isFn = function(fn) {
    return typeof fn === "function";
  };
  var isFS = function(stream) {
    if (!ancient) return false;
    if (!fs2) return false;
    return (stream instanceof (fs2.ReadStream || noop) || stream instanceof (fs2.WriteStream || noop)) && isFn(stream.close);
  };
  var isRequest = function(stream) {
    return stream.setHeader && isFn(stream.abort);
  };
  var destroyer = function(stream, reading, writing, callback) {
    callback = once2(callback);
    var closed = false;
    stream.on("close", function() {
      closed = true;
    });
    eos(stream, { readable: reading, writable: writing }, function(err) {
      if (err) return callback(err);
      closed = true;
      callback();
    });
    var destroyed = false;
    return function(err) {
      if (closed) return;
      if (destroyed) return;
      destroyed = true;
      if (isFS(stream)) return stream.close(noop);
      if (isRequest(stream)) return stream.abort();
      if (isFn(stream.destroy)) return stream.destroy();
      callback(err || new Error("stream was destroyed"));
    };
  };
  var call = function(fn) {
    fn();
  };
  var pipe = function(from, to) {
    return from.pipe(to);
  };
  var pump = function() {
    var streams = Array.prototype.slice.call(arguments);
    var callback = isFn(streams[streams.length - 1] || noop) && streams.pop() || noop;
    if (Array.isArray(streams[0])) streams = streams[0];
    if (streams.length < 2) throw new Error("pump requires two streams per minimum");
    var error;
    var destroys = streams.map(function(stream, i) {
      var reading = i < streams.length - 1;
      var writing = i > 0;
      return destroyer(stream, reading, writing, function(err) {
        if (!error) error = err;
        if (err) destroys.forEach(call);
        if (reading) return;
        destroys.forEach(call);
        callback(error);
      });
    });
    return streams.reduce(pipe);
  };
  pump_1 = pump;
  return pump_1;
}
var bufferStream;
var hasRequiredBufferStream;
function requireBufferStream() {
  if (hasRequiredBufferStream) return bufferStream;
  hasRequiredBufferStream = 1;
  const { PassThrough: PassThroughStream } = require$$0$3;
  bufferStream = (options) => {
    options = { ...options };
    const { array } = options;
    let { encoding } = options;
    const isBuffer2 = encoding === "buffer";
    let objectMode = false;
    if (array) {
      objectMode = !(encoding || isBuffer2);
    } else {
      encoding = encoding || "utf8";
    }
    if (isBuffer2) {
      encoding = null;
    }
    const stream = new PassThroughStream({ objectMode });
    if (encoding) {
      stream.setEncoding(encoding);
    }
    let length = 0;
    const chunks = [];
    stream.on("data", (chunk) => {
      chunks.push(chunk);
      if (objectMode) {
        length = chunks.length;
      } else {
        length += chunk.length;
      }
    });
    stream.getBufferedValue = () => {
      if (array) {
        return chunks;
      }
      return isBuffer2 ? Buffer.concat(chunks, length) : chunks.join("");
    };
    stream.getBufferedLength = () => length;
    return stream;
  };
  return bufferStream;
}
var hasRequiredGetStream;
function requireGetStream() {
  if (hasRequiredGetStream) return getStream.exports;
  hasRequiredGetStream = 1;
  const { constants: BufferConstants } = require$$1;
  const pump = requirePump();
  const bufferStream2 = requireBufferStream();
  class MaxBufferError extends Error {
    constructor() {
      super("maxBuffer exceeded");
      this.name = "MaxBufferError";
    }
  }
  async function getStream$1(inputStream, options) {
    if (!inputStream) {
      return Promise.reject(new Error("Expected a stream"));
    }
    options = {
      maxBuffer: Infinity,
      ...options
    };
    const { maxBuffer } = options;
    let stream;
    await new Promise((resolve, reject) => {
      const rejectPromise = (error) => {
        if (error && stream.getBufferedLength() <= BufferConstants.MAX_LENGTH) {
          error.bufferedData = stream.getBufferedValue();
        }
        reject(error);
      };
      stream = pump(inputStream, bufferStream2(options), (error) => {
        if (error) {
          rejectPromise(error);
          return;
        }
        resolve();
      });
      stream.on("data", () => {
        if (stream.getBufferedLength() > maxBuffer) {
          rejectPromise(new MaxBufferError());
        }
      });
    });
    return stream.getBufferedValue();
  }
  getStream.exports = getStream$1;
  getStream.exports.default = getStream$1;
  getStream.exports.buffer = (stream, options) => getStream$1(stream, { ...options, encoding: "buffer" });
  getStream.exports.array = (stream, options) => getStream$1(stream, { ...options, array: true });
  getStream.exports.MaxBufferError = MaxBufferError;
  return getStream.exports;
}
var httpCacheSemantics;
var hasRequiredHttpCacheSemantics;
function requireHttpCacheSemantics() {
  if (hasRequiredHttpCacheSemantics) return httpCacheSemantics;
  hasRequiredHttpCacheSemantics = 1;
  const statusCodeCacheableByDefault = /* @__PURE__ */ new Set([
    200,
    203,
    204,
    206,
    300,
    301,
    308,
    404,
    405,
    410,
    414,
    501
  ]);
  const understoodStatuses = /* @__PURE__ */ new Set([
    200,
    203,
    204,
    300,
    301,
    302,
    303,
    307,
    308,
    404,
    405,
    410,
    414,
    501
  ]);
  const errorStatusCodes = /* @__PURE__ */ new Set([
    500,
    502,
    503,
    504
  ]);
  const hopByHopHeaders = {
    date: true,
    // included, because we add Age update Date
    connection: true,
    "keep-alive": true,
    "proxy-authenticate": true,
    "proxy-authorization": true,
    te: true,
    trailer: true,
    "transfer-encoding": true,
    upgrade: true
  };
  const excludedFromRevalidationUpdate = {
    // Since the old body is reused, it doesn't make sense to change properties of the body
    "content-length": true,
    "content-encoding": true,
    "transfer-encoding": true,
    "content-range": true
  };
  function toNumberOrZero(s) {
    const n = parseInt(s, 10);
    return isFinite(n) ? n : 0;
  }
  function isErrorResponse(response) {
    if (!response) {
      return true;
    }
    return errorStatusCodes.has(response.status);
  }
  function parseCacheControl(header) {
    const cc = {};
    if (!header) return cc;
    const parts = header.trim().split(/,/);
    for (const part of parts) {
      const [k, v] = part.split(/=/, 2);
      cc[k.trim()] = v === void 0 ? true : v.trim().replace(/^"|"$/g, "");
    }
    return cc;
  }
  function formatCacheControl(cc) {
    let parts = [];
    for (const k in cc) {
      const v = cc[k];
      parts.push(v === true ? k : k + "=" + v);
    }
    if (!parts.length) {
      return void 0;
    }
    return parts.join(", ");
  }
  httpCacheSemantics = class CachePolicy {
    constructor(req, res, {
      shared,
      cacheHeuristic,
      immutableMinTimeToLive,
      ignoreCargoCult,
      _fromObject
    } = {}) {
      if (_fromObject) {
        this._fromObject(_fromObject);
        return;
      }
      if (!res || !res.headers) {
        throw Error("Response headers missing");
      }
      this._assertRequestHasHeaders(req);
      this._responseTime = this.now();
      this._isShared = shared !== false;
      this._cacheHeuristic = void 0 !== cacheHeuristic ? cacheHeuristic : 0.1;
      this._immutableMinTtl = void 0 !== immutableMinTimeToLive ? immutableMinTimeToLive : 24 * 3600 * 1e3;
      this._status = "status" in res ? res.status : 200;
      this._resHeaders = res.headers;
      this._rescc = parseCacheControl(res.headers["cache-control"]);
      this._method = "method" in req ? req.method : "GET";
      this._url = req.url;
      this._host = req.headers.host;
      this._noAuthorization = !req.headers.authorization;
      this._reqHeaders = res.headers.vary ? req.headers : null;
      this._reqcc = parseCacheControl(req.headers["cache-control"]);
      if (ignoreCargoCult && "pre-check" in this._rescc && "post-check" in this._rescc) {
        delete this._rescc["pre-check"];
        delete this._rescc["post-check"];
        delete this._rescc["no-cache"];
        delete this._rescc["no-store"];
        delete this._rescc["must-revalidate"];
        this._resHeaders = Object.assign({}, this._resHeaders, {
          "cache-control": formatCacheControl(this._rescc)
        });
        delete this._resHeaders.expires;
        delete this._resHeaders.pragma;
      }
      if (res.headers["cache-control"] == null && /no-cache/.test(res.headers.pragma)) {
        this._rescc["no-cache"] = true;
      }
    }
    now() {
      return Date.now();
    }
    storable() {
      return !!(!this._reqcc["no-store"] && // A cache MUST NOT store a response to any request, unless:
      // The request method is understood by the cache and defined as being cacheable, and
      ("GET" === this._method || "HEAD" === this._method || "POST" === this._method && this._hasExplicitExpiration()) && // the response status code is understood by the cache, and
      understoodStatuses.has(this._status) && // the "no-store" cache directive does not appear in request or response header fields, and
      !this._rescc["no-store"] && // the "private" response directive does not appear in the response, if the cache is shared, and
      (!this._isShared || !this._rescc.private) && // the Authorization header field does not appear in the request, if the cache is shared,
      (!this._isShared || this._noAuthorization || this._allowsStoringAuthenticated()) && // the response either:
      // contains an Expires header field, or
      (this._resHeaders.expires || // contains a max-age response directive, or
      // contains a s-maxage response directive and the cache is shared, or
      // contains a public response directive.
      this._rescc["max-age"] || this._isShared && this._rescc["s-maxage"] || this._rescc.public || // has a status code that is defined as cacheable by default
      statusCodeCacheableByDefault.has(this._status)));
    }
    _hasExplicitExpiration() {
      return this._isShared && this._rescc["s-maxage"] || this._rescc["max-age"] || this._resHeaders.expires;
    }
    _assertRequestHasHeaders(req) {
      if (!req || !req.headers) {
        throw Error("Request headers missing");
      }
    }
    satisfiesWithoutRevalidation(req) {
      this._assertRequestHasHeaders(req);
      const requestCC = parseCacheControl(req.headers["cache-control"]);
      if (requestCC["no-cache"] || /no-cache/.test(req.headers.pragma)) {
        return false;
      }
      if (requestCC["max-age"] && this.age() > requestCC["max-age"]) {
        return false;
      }
      if (requestCC["min-fresh"] && this.timeToLive() < 1e3 * requestCC["min-fresh"]) {
        return false;
      }
      if (this.stale()) {
        const allowsStale = requestCC["max-stale"] && !this._rescc["must-revalidate"] && (true === requestCC["max-stale"] || requestCC["max-stale"] > this.age() - this.maxAge());
        if (!allowsStale) {
          return false;
        }
      }
      return this._requestMatches(req, false);
    }
    _requestMatches(req, allowHeadMethod) {
      return (!this._url || this._url === req.url) && this._host === req.headers.host && // the request method associated with the stored response allows it to be used for the presented request, and
      (!req.method || this._method === req.method || allowHeadMethod && "HEAD" === req.method) && // selecting header fields nominated by the stored response (if any) match those presented, and
      this._varyMatches(req);
    }
    _allowsStoringAuthenticated() {
      return this._rescc["must-revalidate"] || this._rescc.public || this._rescc["s-maxage"];
    }
    _varyMatches(req) {
      if (!this._resHeaders.vary) {
        return true;
      }
      if (this._resHeaders.vary === "*") {
        return false;
      }
      const fields = this._resHeaders.vary.trim().toLowerCase().split(/\s*,\s*/);
      for (const name of fields) {
        if (req.headers[name] !== this._reqHeaders[name]) return false;
      }
      return true;
    }
    _copyWithoutHopByHopHeaders(inHeaders) {
      const headers = {};
      for (const name in inHeaders) {
        if (hopByHopHeaders[name]) continue;
        headers[name] = inHeaders[name];
      }
      if (inHeaders.connection) {
        const tokens = inHeaders.connection.trim().split(/\s*,\s*/);
        for (const name of tokens) {
          delete headers[name];
        }
      }
      if (headers.warning) {
        const warnings = headers.warning.split(/,/).filter((warning) => {
          return !/^\s*1[0-9][0-9]/.test(warning);
        });
        if (!warnings.length) {
          delete headers.warning;
        } else {
          headers.warning = warnings.join(",").trim();
        }
      }
      return headers;
    }
    responseHeaders() {
      const headers = this._copyWithoutHopByHopHeaders(this._resHeaders);
      const age = this.age();
      if (age > 3600 * 24 && !this._hasExplicitExpiration() && this.maxAge() > 3600 * 24) {
        headers.warning = (headers.warning ? `${headers.warning}, ` : "") + '113 - "rfc7234 5.5.4"';
      }
      headers.age = `${Math.round(age)}`;
      headers.date = new Date(this.now()).toUTCString();
      return headers;
    }
    /**
     * Value of the Date response header or current time if Date was invalid
     * @return timestamp
     */
    date() {
      const serverDate = Date.parse(this._resHeaders.date);
      if (isFinite(serverDate)) {
        return serverDate;
      }
      return this._responseTime;
    }
    /**
     * Value of the Age header, in seconds, updated for the current time.
     * May be fractional.
     *
     * @return Number
     */
    age() {
      let age = this._ageValue();
      const residentTime = (this.now() - this._responseTime) / 1e3;
      return age + residentTime;
    }
    _ageValue() {
      return toNumberOrZero(this._resHeaders.age);
    }
    /**
     * Value of applicable max-age (or heuristic equivalent) in seconds. This counts since response's `Date`.
     *
     * For an up-to-date value, see `timeToLive()`.
     *
     * @return Number
     */
    maxAge() {
      if (!this.storable() || this._rescc["no-cache"]) {
        return 0;
      }
      if (this._isShared && (this._resHeaders["set-cookie"] && !this._rescc.public && !this._rescc.immutable)) {
        return 0;
      }
      if (this._resHeaders.vary === "*") {
        return 0;
      }
      if (this._isShared) {
        if (this._rescc["proxy-revalidate"]) {
          return 0;
        }
        if (this._rescc["s-maxage"]) {
          return toNumberOrZero(this._rescc["s-maxage"]);
        }
      }
      if (this._rescc["max-age"]) {
        return toNumberOrZero(this._rescc["max-age"]);
      }
      const defaultMinTtl = this._rescc.immutable ? this._immutableMinTtl : 0;
      const serverDate = this.date();
      if (this._resHeaders.expires) {
        const expires = Date.parse(this._resHeaders.expires);
        if (Number.isNaN(expires) || expires < serverDate) {
          return 0;
        }
        return Math.max(defaultMinTtl, (expires - serverDate) / 1e3);
      }
      if (this._resHeaders["last-modified"]) {
        const lastModified = Date.parse(this._resHeaders["last-modified"]);
        if (isFinite(lastModified) && serverDate > lastModified) {
          return Math.max(
            defaultMinTtl,
            (serverDate - lastModified) / 1e3 * this._cacheHeuristic
          );
        }
      }
      return defaultMinTtl;
    }
    timeToLive() {
      const age = this.maxAge() - this.age();
      const staleIfErrorAge = age + toNumberOrZero(this._rescc["stale-if-error"]);
      const staleWhileRevalidateAge = age + toNumberOrZero(this._rescc["stale-while-revalidate"]);
      return Math.max(0, age, staleIfErrorAge, staleWhileRevalidateAge) * 1e3;
    }
    stale() {
      return this.maxAge() <= this.age();
    }
    _useStaleIfError() {
      return this.maxAge() + toNumberOrZero(this._rescc["stale-if-error"]) > this.age();
    }
    useStaleWhileRevalidate() {
      return this.maxAge() + toNumberOrZero(this._rescc["stale-while-revalidate"]) > this.age();
    }
    static fromObject(obj) {
      return new this(void 0, void 0, { _fromObject: obj });
    }
    _fromObject(obj) {
      if (this._responseTime) throw Error("Reinitialized");
      if (!obj || obj.v !== 1) throw Error("Invalid serialization");
      this._responseTime = obj.t;
      this._isShared = obj.sh;
      this._cacheHeuristic = obj.ch;
      this._immutableMinTtl = obj.imm !== void 0 ? obj.imm : 24 * 3600 * 1e3;
      this._status = obj.st;
      this._resHeaders = obj.resh;
      this._rescc = obj.rescc;
      this._method = obj.m;
      this._url = obj.u;
      this._host = obj.h;
      this._noAuthorization = obj.a;
      this._reqHeaders = obj.reqh;
      this._reqcc = obj.reqcc;
    }
    toObject() {
      return {
        v: 1,
        t: this._responseTime,
        sh: this._isShared,
        ch: this._cacheHeuristic,
        imm: this._immutableMinTtl,
        st: this._status,
        resh: this._resHeaders,
        rescc: this._rescc,
        m: this._method,
        u: this._url,
        h: this._host,
        a: this._noAuthorization,
        reqh: this._reqHeaders,
        reqcc: this._reqcc
      };
    }
    /**
     * Headers for sending to the origin server to revalidate stale response.
     * Allows server to return 304 to allow reuse of the previous response.
     *
     * Hop by hop headers are always stripped.
     * Revalidation headers may be added or removed, depending on request.
     */
    revalidationHeaders(incomingReq) {
      this._assertRequestHasHeaders(incomingReq);
      const headers = this._copyWithoutHopByHopHeaders(incomingReq.headers);
      delete headers["if-range"];
      if (!this._requestMatches(incomingReq, true) || !this.storable()) {
        delete headers["if-none-match"];
        delete headers["if-modified-since"];
        return headers;
      }
      if (this._resHeaders.etag) {
        headers["if-none-match"] = headers["if-none-match"] ? `${headers["if-none-match"]}, ${this._resHeaders.etag}` : this._resHeaders.etag;
      }
      const forbidsWeakValidators = headers["accept-ranges"] || headers["if-match"] || headers["if-unmodified-since"] || this._method && this._method != "GET";
      if (forbidsWeakValidators) {
        delete headers["if-modified-since"];
        if (headers["if-none-match"]) {
          const etags = headers["if-none-match"].split(/,/).filter((etag) => {
            return !/^\s*W\//.test(etag);
          });
          if (!etags.length) {
            delete headers["if-none-match"];
          } else {
            headers["if-none-match"] = etags.join(",").trim();
          }
        }
      } else if (this._resHeaders["last-modified"] && !headers["if-modified-since"]) {
        headers["if-modified-since"] = this._resHeaders["last-modified"];
      }
      return headers;
    }
    /**
     * Creates new CachePolicy with information combined from the previews response,
     * and the new revalidation response.
     *
     * Returns {policy, modified} where modified is a boolean indicating
     * whether the response body has been modified, and old cached body can't be used.
     *
     * @return {Object} {policy: CachePolicy, modified: Boolean}
     */
    revalidatedPolicy(request, response) {
      this._assertRequestHasHeaders(request);
      if (this._useStaleIfError() && isErrorResponse(response)) {
        return {
          modified: false,
          matches: false,
          policy: this
        };
      }
      if (!response || !response.headers) {
        throw Error("Response headers missing");
      }
      let matches = false;
      if (response.status !== void 0 && response.status != 304) {
        matches = false;
      } else if (response.headers.etag && !/^\s*W\//.test(response.headers.etag)) {
        matches = this._resHeaders.etag && this._resHeaders.etag.replace(/^\s*W\//, "") === response.headers.etag;
      } else if (this._resHeaders.etag && response.headers.etag) {
        matches = this._resHeaders.etag.replace(/^\s*W\//, "") === response.headers.etag.replace(/^\s*W\//, "");
      } else if (this._resHeaders["last-modified"]) {
        matches = this._resHeaders["last-modified"] === response.headers["last-modified"];
      } else {
        if (!this._resHeaders.etag && !this._resHeaders["last-modified"] && !response.headers.etag && !response.headers["last-modified"]) {
          matches = true;
        }
      }
      if (!matches) {
        return {
          policy: new this.constructor(request, response),
          // Client receiving 304 without body, even if it's invalid/mismatched has no option
          // but to reuse a cached body. We don't have a good way to tell clients to do
          // error recovery in such case.
          modified: response.status != 304,
          matches: false
        };
      }
      const headers = {};
      for (const k in this._resHeaders) {
        headers[k] = k in response.headers && !excludedFromRevalidationUpdate[k] ? response.headers[k] : this._resHeaders[k];
      }
      const newResponse = Object.assign({}, response, {
        status: this._status,
        method: this._method,
        headers
      });
      return {
        policy: new this.constructor(request, newResponse, {
          shared: this._isShared,
          cacheHeuristic: this._cacheHeuristic,
          immutableMinTimeToLive: this._immutableMinTtl
        }),
        modified: false,
        matches: true
      };
    }
  };
  return httpCacheSemantics;
}
var lowercaseKeys;
var hasRequiredLowercaseKeys;
function requireLowercaseKeys() {
  if (hasRequiredLowercaseKeys) return lowercaseKeys;
  hasRequiredLowercaseKeys = 1;
  lowercaseKeys = (object) => {
    const result = {};
    for (const [key, value] of Object.entries(object)) {
      result[key.toLowerCase()] = value;
    }
    return result;
  };
  return lowercaseKeys;
}
var src$3;
var hasRequiredSrc$3;
function requireSrc$3() {
  if (hasRequiredSrc$3) return src$3;
  hasRequiredSrc$3 = 1;
  const Readable = require$$0$3.Readable;
  const lowercaseKeys2 = requireLowercaseKeys();
  class Response extends Readable {
    constructor(statusCode, headers, body, url) {
      if (typeof statusCode !== "number") {
        throw new TypeError("Argument `statusCode` should be a number");
      }
      if (typeof headers !== "object") {
        throw new TypeError("Argument `headers` should be an object");
      }
      if (!(body instanceof Buffer)) {
        throw new TypeError("Argument `body` should be a buffer");
      }
      if (typeof url !== "string") {
        throw new TypeError("Argument `url` should be a string");
      }
      super();
      this.statusCode = statusCode;
      this.headers = lowercaseKeys2(headers);
      this.body = body;
      this.url = url;
    }
    _read() {
      this.push(this.body);
      this.push(null);
    }
  }
  src$3 = Response;
  return src$3;
}
var mimicResponse$1;
var hasRequiredMimicResponse$1;
function requireMimicResponse$1() {
  if (hasRequiredMimicResponse$1) return mimicResponse$1;
  hasRequiredMimicResponse$1 = 1;
  const knownProps = [
    "destroy",
    "setTimeout",
    "socket",
    "headers",
    "trailers",
    "rawHeaders",
    "statusCode",
    "httpVersion",
    "httpVersionMinor",
    "httpVersionMajor",
    "rawTrailers",
    "statusMessage"
  ];
  mimicResponse$1 = (fromStream, toStream) => {
    const fromProps = new Set(Object.keys(fromStream).concat(knownProps));
    for (const prop of fromProps) {
      if (prop in toStream) {
        continue;
      }
      toStream[prop] = typeof fromStream[prop] === "function" ? fromStream[prop].bind(fromStream) : fromStream[prop];
    }
  };
  return mimicResponse$1;
}
var src$2;
var hasRequiredSrc$2;
function requireSrc$2() {
  if (hasRequiredSrc$2) return src$2;
  hasRequiredSrc$2 = 1;
  const PassThrough = require$$0$3.PassThrough;
  const mimicResponse2 = requireMimicResponse$1();
  const cloneResponse = (response) => {
    if (!(response && response.pipe)) {
      throw new TypeError("Parameter `response` must be a response stream.");
    }
    const clone2 = new PassThrough();
    mimicResponse2(response, clone2);
    return response.pipe(clone2);
  };
  src$2 = cloneResponse;
  return src$2;
}
function commonjsRequire(path2) {
  throw new Error('Could not dynamically require "' + path2 + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var jsonBuffer = {};
var hasRequiredJsonBuffer;
function requireJsonBuffer() {
  if (hasRequiredJsonBuffer) return jsonBuffer;
  hasRequiredJsonBuffer = 1;
  jsonBuffer.stringify = function stringify(o) {
    if ("undefined" == typeof o) return o;
    if (o && Buffer.isBuffer(o))
      return JSON.stringify(":base64:" + o.toString("base64"));
    if (o && o.toJSON)
      o = o.toJSON();
    if (o && "object" === typeof o) {
      var s = "";
      var array = Array.isArray(o);
      s = array ? "[" : "{";
      var first = true;
      for (var k in o) {
        var ignore = "function" == typeof o[k] || !array && "undefined" === typeof o[k];
        if (Object.hasOwnProperty.call(o, k) && !ignore) {
          if (!first)
            s += ",";
          first = false;
          if (array) {
            if (o[k] == void 0)
              s += "null";
            else
              s += stringify(o[k]);
          } else if (o[k] !== void 0) {
            s += stringify(k) + ":" + stringify(o[k]);
          }
        }
      }
      s += array ? "]" : "}";
      return s;
    } else if ("string" === typeof o) {
      return JSON.stringify(/^:/.test(o) ? ":" + o : o);
    } else if ("undefined" === typeof o) {
      return "null";
    } else
      return JSON.stringify(o);
  };
  jsonBuffer.parse = function(s) {
    return JSON.parse(s, function(key, value) {
      if ("string" === typeof value) {
        if (/^:base64:/.test(value))
          return Buffer.from(value.substring(8), "base64");
        else
          return /^:/.test(value) ? value.substring(1) : value;
      }
      return value;
    });
  };
  return jsonBuffer;
}
var src$1;
var hasRequiredSrc$1;
function requireSrc$1() {
  if (hasRequiredSrc$1) return src$1;
  hasRequiredSrc$1 = 1;
  const EventEmitter = require$$0$1;
  const JSONB = requireJsonBuffer();
  const loadStore = (options) => {
    const adapters = {
      redis: "@keyv/redis",
      rediss: "@keyv/redis",
      mongodb: "@keyv/mongo",
      mongo: "@keyv/mongo",
      sqlite: "@keyv/sqlite",
      postgresql: "@keyv/postgres",
      postgres: "@keyv/postgres",
      mysql: "@keyv/mysql",
      etcd: "@keyv/etcd",
      offline: "@keyv/offline",
      tiered: "@keyv/tiered"
    };
    if (options.adapter || options.uri) {
      const adapter = options.adapter || /^[^:+]*/.exec(options.uri)[0];
      return new (commonjsRequire(adapters[adapter]))(options);
    }
    return /* @__PURE__ */ new Map();
  };
  const iterableAdapters = [
    "sqlite",
    "postgres",
    "mysql",
    "mongo",
    "redis",
    "tiered"
  ];
  class Keyv extends EventEmitter {
    constructor(uri, { emitErrors = true, ...options } = {}) {
      super();
      this.opts = {
        namespace: "keyv",
        serialize: JSONB.stringify,
        deserialize: JSONB.parse,
        ...typeof uri === "string" ? { uri } : uri,
        ...options
      };
      if (!this.opts.store) {
        const adapterOptions = { ...this.opts };
        this.opts.store = loadStore(adapterOptions);
      }
      if (this.opts.compression) {
        const compression = this.opts.compression;
        this.opts.serialize = compression.serialize.bind(compression);
        this.opts.deserialize = compression.deserialize.bind(compression);
      }
      if (typeof this.opts.store.on === "function" && emitErrors) {
        this.opts.store.on("error", (error) => this.emit("error", error));
      }
      this.opts.store.namespace = this.opts.namespace;
      const generateIterator = (iterator) => async function* () {
        for await (const [key, raw] of typeof iterator === "function" ? iterator(this.opts.store.namespace) : iterator) {
          const data = this.opts.deserialize(raw);
          if (this.opts.store.namespace && !key.includes(this.opts.store.namespace)) {
            continue;
          }
          if (typeof data.expires === "number" && Date.now() > data.expires) {
            this.delete(key);
            continue;
          }
          yield [this._getKeyUnprefix(key), data.value];
        }
      };
      if (typeof this.opts.store[Symbol.iterator] === "function" && this.opts.store instanceof Map) {
        this.iterator = generateIterator(this.opts.store);
      } else if (typeof this.opts.store.iterator === "function" && this.opts.store.opts && this._checkIterableAdaptar()) {
        this.iterator = generateIterator(this.opts.store.iterator.bind(this.opts.store));
      }
    }
    _checkIterableAdaptar() {
      return iterableAdapters.includes(this.opts.store.opts.dialect) || iterableAdapters.findIndex((element) => this.opts.store.opts.url.includes(element)) >= 0;
    }
    _getKeyPrefix(key) {
      return `${this.opts.namespace}:${key}`;
    }
    _getKeyPrefixArray(keys2) {
      return keys2.map((key) => `${this.opts.namespace}:${key}`);
    }
    _getKeyUnprefix(key) {
      return key.split(":").splice(1).join(":");
    }
    get(key, options) {
      const { store: store2 } = this.opts;
      const isArray2 = Array.isArray(key);
      const keyPrefixed = isArray2 ? this._getKeyPrefixArray(key) : this._getKeyPrefix(key);
      if (isArray2 && store2.getMany === void 0) {
        const promises = [];
        for (const key2 of keyPrefixed) {
          promises.push(
            Promise.resolve().then(() => store2.get(key2)).then((data) => typeof data === "string" ? this.opts.deserialize(data) : this.opts.compression ? this.opts.deserialize(data) : data).then((data) => {
              if (data === void 0 || data === null) {
                return void 0;
              }
              if (typeof data.expires === "number" && Date.now() > data.expires) {
                return this.delete(key2).then(() => void 0);
              }
              return options && options.raw ? data : data.value;
            })
          );
        }
        return Promise.allSettled(promises).then((values) => {
          const data = [];
          for (const value of values) {
            data.push(value.value);
          }
          return data;
        });
      }
      return Promise.resolve().then(() => isArray2 ? store2.getMany(keyPrefixed) : store2.get(keyPrefixed)).then((data) => typeof data === "string" ? this.opts.deserialize(data) : this.opts.compression ? this.opts.deserialize(data) : data).then((data) => {
        if (data === void 0 || data === null) {
          return void 0;
        }
        if (isArray2) {
          const result = [];
          for (let row of data) {
            if (typeof row === "string") {
              row = this.opts.deserialize(row);
            }
            if (row === void 0 || row === null) {
              result.push(void 0);
              continue;
            }
            if (typeof row.expires === "number" && Date.now() > row.expires) {
              this.delete(key).then(() => void 0);
              result.push(void 0);
            } else {
              result.push(options && options.raw ? row : row.value);
            }
          }
          return result;
        }
        if (typeof data.expires === "number" && Date.now() > data.expires) {
          return this.delete(key).then(() => void 0);
        }
        return options && options.raw ? data : data.value;
      });
    }
    set(key, value, ttl) {
      const keyPrefixed = this._getKeyPrefix(key);
      if (typeof ttl === "undefined") {
        ttl = this.opts.ttl;
      }
      if (ttl === 0) {
        ttl = void 0;
      }
      const { store: store2 } = this.opts;
      return Promise.resolve().then(() => {
        const expires = typeof ttl === "number" ? Date.now() + ttl : null;
        if (typeof value === "symbol") {
          this.emit("error", "symbol cannot be serialized");
        }
        value = { value, expires };
        return this.opts.serialize(value);
      }).then((value2) => store2.set(keyPrefixed, value2, ttl)).then(() => true);
    }
    delete(key) {
      const { store: store2 } = this.opts;
      if (Array.isArray(key)) {
        const keyPrefixed2 = this._getKeyPrefixArray(key);
        if (store2.deleteMany === void 0) {
          const promises = [];
          for (const key2 of keyPrefixed2) {
            promises.push(store2.delete(key2));
          }
          return Promise.allSettled(promises).then((values) => values.every((x) => x.value === true));
        }
        return Promise.resolve().then(() => store2.deleteMany(keyPrefixed2));
      }
      const keyPrefixed = this._getKeyPrefix(key);
      return Promise.resolve().then(() => store2.delete(keyPrefixed));
    }
    clear() {
      const { store: store2 } = this.opts;
      return Promise.resolve().then(() => store2.clear());
    }
    has(key) {
      const keyPrefixed = this._getKeyPrefix(key);
      const { store: store2 } = this.opts;
      return Promise.resolve().then(async () => {
        if (typeof store2.has === "function") {
          return store2.has(keyPrefixed);
        }
        const value = await store2.get(keyPrefixed);
        return value !== void 0;
      });
    }
    disconnect() {
      const { store: store2 } = this.opts;
      if (typeof store2.disconnect === "function") {
        return store2.disconnect();
      }
    }
  }
  src$1 = Keyv;
  return src$1;
}
var src;
var hasRequiredSrc;
function requireSrc() {
  if (hasRequiredSrc) return src;
  hasRequiredSrc = 1;
  const EventEmitter = require$$0$1;
  const urlLib = require$$0$4;
  const normalizeUrl = requireNormalizeUrl();
  const getStream2 = requireGetStream();
  const CachePolicy = requireHttpCacheSemantics();
  const Response = requireSrc$3();
  const lowercaseKeys2 = requireLowercaseKeys();
  const cloneResponse = requireSrc$2();
  const Keyv = requireSrc$1();
  class CacheableRequest {
    constructor(request, cacheAdapter) {
      if (typeof request !== "function") {
        throw new TypeError("Parameter `request` must be a function");
      }
      this.cache = new Keyv({
        uri: typeof cacheAdapter === "string" && cacheAdapter,
        store: typeof cacheAdapter !== "string" && cacheAdapter,
        namespace: "cacheable-request"
      });
      return this.createCacheableRequest(request);
    }
    createCacheableRequest(request) {
      return (opts, cb) => {
        let url;
        if (typeof opts === "string") {
          url = normalizeUrlObject(urlLib.parse(opts));
          opts = {};
        } else if (opts instanceof urlLib.URL) {
          url = normalizeUrlObject(urlLib.parse(opts.toString()));
          opts = {};
        } else {
          const [pathname, ...searchParts] = (opts.path || "").split("?");
          const search = searchParts.length > 0 ? `?${searchParts.join("?")}` : "";
          url = normalizeUrlObject({ ...opts, pathname, search });
        }
        opts = {
          headers: {},
          method: "GET",
          cache: true,
          strictTtl: false,
          automaticFailover: false,
          ...opts,
          ...urlObjectToRequestOptions(url)
        };
        opts.headers = lowercaseKeys2(opts.headers);
        const ee = new EventEmitter();
        const normalizedUrlString = normalizeUrl(
          urlLib.format(url),
          {
            stripWWW: false,
            removeTrailingSlash: false,
            stripAuthentication: false
          }
        );
        const key = `${opts.method}:${normalizedUrlString}`;
        let revalidate = false;
        let madeRequest = false;
        const makeRequest = (opts2) => {
          madeRequest = true;
          let requestErrored = false;
          let requestErrorCallback;
          const requestErrorPromise = new Promise((resolve) => {
            requestErrorCallback = () => {
              if (!requestErrored) {
                requestErrored = true;
                resolve();
              }
            };
          });
          const handler = (response) => {
            if (revalidate && !opts2.forceRefresh) {
              response.status = response.statusCode;
              const revalidatedPolicy = CachePolicy.fromObject(revalidate.cachePolicy).revalidatedPolicy(opts2, response);
              if (!revalidatedPolicy.modified) {
                const headers = revalidatedPolicy.policy.responseHeaders();
                response = new Response(revalidate.statusCode, headers, revalidate.body, revalidate.url);
                response.cachePolicy = revalidatedPolicy.policy;
                response.fromCache = true;
              }
            }
            if (!response.fromCache) {
              response.cachePolicy = new CachePolicy(opts2, response, opts2);
              response.fromCache = false;
            }
            let clonedResponse;
            if (opts2.cache && response.cachePolicy.storable()) {
              clonedResponse = cloneResponse(response);
              (async () => {
                try {
                  const bodyPromise = getStream2.buffer(response);
                  await Promise.race([
                    requestErrorPromise,
                    new Promise((resolve) => response.once("end", resolve))
                  ]);
                  if (requestErrored) {
                    return;
                  }
                  const body = await bodyPromise;
                  const value = {
                    cachePolicy: response.cachePolicy.toObject(),
                    url: response.url,
                    statusCode: response.fromCache ? revalidate.statusCode : response.statusCode,
                    body
                  };
                  let ttl = opts2.strictTtl ? response.cachePolicy.timeToLive() : void 0;
                  if (opts2.maxTtl) {
                    ttl = ttl ? Math.min(ttl, opts2.maxTtl) : opts2.maxTtl;
                  }
                  await this.cache.set(key, value, ttl);
                } catch (error) {
                  ee.emit("error", new CacheableRequest.CacheError(error));
                }
              })();
            } else if (opts2.cache && revalidate) {
              (async () => {
                try {
                  await this.cache.delete(key);
                } catch (error) {
                  ee.emit("error", new CacheableRequest.CacheError(error));
                }
              })();
            }
            ee.emit("response", clonedResponse || response);
            if (typeof cb === "function") {
              cb(clonedResponse || response);
            }
          };
          try {
            const req = request(opts2, handler);
            req.once("error", requestErrorCallback);
            req.once("abort", requestErrorCallback);
            ee.emit("request", req);
          } catch (error) {
            ee.emit("error", new CacheableRequest.RequestError(error));
          }
        };
        (async () => {
          const get2 = async (opts2) => {
            await Promise.resolve();
            const cacheEntry = opts2.cache ? await this.cache.get(key) : void 0;
            if (typeof cacheEntry === "undefined") {
              return makeRequest(opts2);
            }
            const policy = CachePolicy.fromObject(cacheEntry.cachePolicy);
            if (policy.satisfiesWithoutRevalidation(opts2) && !opts2.forceRefresh) {
              const headers = policy.responseHeaders();
              const response = new Response(cacheEntry.statusCode, headers, cacheEntry.body, cacheEntry.url);
              response.cachePolicy = policy;
              response.fromCache = true;
              ee.emit("response", response);
              if (typeof cb === "function") {
                cb(response);
              }
            } else {
              revalidate = cacheEntry;
              opts2.headers = policy.revalidationHeaders(opts2);
              makeRequest(opts2);
            }
          };
          const errorHandler = (error) => ee.emit("error", new CacheableRequest.CacheError(error));
          this.cache.once("error", errorHandler);
          ee.on("response", () => this.cache.removeListener("error", errorHandler));
          try {
            await get2(opts);
          } catch (error) {
            if (opts.automaticFailover && !madeRequest) {
              makeRequest(opts);
            }
            ee.emit("error", new CacheableRequest.CacheError(error));
          }
        })();
        return ee;
      };
    }
  }
  function urlObjectToRequestOptions(url) {
    const options = { ...url };
    options.path = `${url.pathname || "/"}${url.search || ""}`;
    delete options.pathname;
    delete options.search;
    return options;
  }
  function normalizeUrlObject(url) {
    return {
      protocol: url.protocol,
      auth: url.auth,
      hostname: url.hostname || url.host || "localhost",
      port: url.port,
      pathname: url.pathname,
      search: url.search
    };
  }
  CacheableRequest.RequestError = class extends Error {
    constructor(error) {
      super(error.message);
      this.name = "RequestError";
      Object.assign(this, error);
    }
  };
  CacheableRequest.CacheError = class extends Error {
    constructor(error) {
      super(error.message);
      this.name = "CacheError";
      Object.assign(this, error);
    }
  };
  src = CacheableRequest;
  return src;
}
var mimicResponse;
var hasRequiredMimicResponse;
function requireMimicResponse() {
  if (hasRequiredMimicResponse) return mimicResponse;
  hasRequiredMimicResponse = 1;
  const knownProperties = [
    "aborted",
    "complete",
    "headers",
    "httpVersion",
    "httpVersionMinor",
    "httpVersionMajor",
    "method",
    "rawHeaders",
    "rawTrailers",
    "setTimeout",
    "socket",
    "statusCode",
    "statusMessage",
    "trailers",
    "url"
  ];
  mimicResponse = (fromStream, toStream) => {
    if (toStream._readableState.autoDestroy) {
      throw new Error("The second stream must have the `autoDestroy` option set to `false`");
    }
    const fromProperties = new Set(Object.keys(fromStream).concat(knownProperties));
    const properties = {};
    for (const property of fromProperties) {
      if (property in toStream) {
        continue;
      }
      properties[property] = {
        get() {
          const value = fromStream[property];
          const isFunction2 = typeof value === "function";
          return isFunction2 ? value.bind(fromStream) : value;
        },
        set(value) {
          fromStream[property] = value;
        },
        enumerable: true,
        configurable: false
      };
    }
    Object.defineProperties(toStream, properties);
    fromStream.once("aborted", () => {
      toStream.destroy();
      toStream.emit("aborted");
    });
    fromStream.once("close", () => {
      if (fromStream.complete) {
        if (toStream.readable) {
          toStream.once("end", () => {
            toStream.emit("close");
          });
        } else {
          toStream.emit("close");
        }
      } else {
        toStream.emit("close");
      }
    });
    return toStream;
  };
  return mimicResponse;
}
var decompressResponse;
var hasRequiredDecompressResponse;
function requireDecompressResponse() {
  if (hasRequiredDecompressResponse) return decompressResponse;
  hasRequiredDecompressResponse = 1;
  const { Transform, PassThrough } = require$$0$3;
  const zlib = require$$1$2;
  const mimicResponse2 = requireMimicResponse();
  decompressResponse = (response) => {
    const contentEncoding = (response.headers["content-encoding"] || "").toLowerCase();
    if (!["gzip", "deflate", "br"].includes(contentEncoding)) {
      return response;
    }
    const isBrotli = contentEncoding === "br";
    if (isBrotli && typeof zlib.createBrotliDecompress !== "function") {
      response.destroy(new Error("Brotli is not supported on Node.js < 12"));
      return response;
    }
    let isEmpty = true;
    const checker = new Transform({
      transform(data, _encoding, callback) {
        isEmpty = false;
        callback(null, data);
      },
      flush(callback) {
        callback();
      }
    });
    const finalStream = new PassThrough({
      autoDestroy: false,
      destroy(error, callback) {
        response.destroy();
        callback(error);
      }
    });
    const decompressStream = isBrotli ? zlib.createBrotliDecompress() : zlib.createUnzip();
    decompressStream.once("error", (error) => {
      if (isEmpty && !response.readable) {
        finalStream.end();
        return;
      }
      finalStream.destroy(error);
    });
    mimicResponse2(response, finalStream);
    response.pipe(checker).pipe(decompressStream).pipe(finalStream);
    return finalStream;
  };
  return decompressResponse;
}
var quickLru;
var hasRequiredQuickLru;
function requireQuickLru() {
  if (hasRequiredQuickLru) return quickLru;
  hasRequiredQuickLru = 1;
  class QuickLRU {
    constructor(options = {}) {
      if (!(options.maxSize && options.maxSize > 0)) {
        throw new TypeError("`maxSize` must be a number greater than 0");
      }
      this.maxSize = options.maxSize;
      this.onEviction = options.onEviction;
      this.cache = /* @__PURE__ */ new Map();
      this.oldCache = /* @__PURE__ */ new Map();
      this._size = 0;
    }
    _set(key, value) {
      this.cache.set(key, value);
      this._size++;
      if (this._size >= this.maxSize) {
        this._size = 0;
        if (typeof this.onEviction === "function") {
          for (const [key2, value2] of this.oldCache.entries()) {
            this.onEviction(key2, value2);
          }
        }
        this.oldCache = this.cache;
        this.cache = /* @__PURE__ */ new Map();
      }
    }
    get(key) {
      if (this.cache.has(key)) {
        return this.cache.get(key);
      }
      if (this.oldCache.has(key)) {
        const value = this.oldCache.get(key);
        this.oldCache.delete(key);
        this._set(key, value);
        return value;
      }
    }
    set(key, value) {
      if (this.cache.has(key)) {
        this.cache.set(key, value);
      } else {
        this._set(key, value);
      }
      return this;
    }
    has(key) {
      return this.cache.has(key) || this.oldCache.has(key);
    }
    peek(key) {
      if (this.cache.has(key)) {
        return this.cache.get(key);
      }
      if (this.oldCache.has(key)) {
        return this.oldCache.get(key);
      }
    }
    delete(key) {
      const deleted = this.cache.delete(key);
      if (deleted) {
        this._size--;
      }
      return this.oldCache.delete(key) || deleted;
    }
    clear() {
      this.cache.clear();
      this.oldCache.clear();
      this._size = 0;
    }
    *keys() {
      for (const [key] of this) {
        yield key;
      }
    }
    *values() {
      for (const [, value] of this) {
        yield value;
      }
    }
    *[Symbol.iterator]() {
      for (const item of this.cache) {
        yield item;
      }
      for (const item of this.oldCache) {
        const [key] = item;
        if (!this.cache.has(key)) {
          yield item;
        }
      }
    }
    get size() {
      let oldCacheSize = 0;
      for (const key of this.oldCache.keys()) {
        if (!this.cache.has(key)) {
          oldCacheSize++;
        }
      }
      return Math.min(this._size + oldCacheSize, this.maxSize);
    }
  }
  quickLru = QuickLRU;
  return quickLru;
}
var agent;
var hasRequiredAgent;
function requireAgent() {
  if (hasRequiredAgent) return agent;
  hasRequiredAgent = 1;
  const EventEmitter = require$$0$1;
  const tls = require$$1$3;
  const http2 = require$$0$5;
  const QuickLRU = requireQuickLru();
  const kCurrentStreamsCount = Symbol("currentStreamsCount");
  const kRequest = Symbol("request");
  const kOriginSet = Symbol("cachedOriginSet");
  const kGracefullyClosing = Symbol("gracefullyClosing");
  const nameKeys = [
    // `http2.connect()` options
    "maxDeflateDynamicTableSize",
    "maxSessionMemory",
    "maxHeaderListPairs",
    "maxOutstandingPings",
    "maxReservedRemoteStreams",
    "maxSendHeaderBlockLength",
    "paddingStrategy",
    // `tls.connect()` options
    "localAddress",
    "path",
    "rejectUnauthorized",
    "minDHSize",
    // `tls.createSecureContext()` options
    "ca",
    "cert",
    "clientCertEngine",
    "ciphers",
    "key",
    "pfx",
    "servername",
    "minVersion",
    "maxVersion",
    "secureProtocol",
    "crl",
    "honorCipherOrder",
    "ecdhCurve",
    "dhparam",
    "secureOptions",
    "sessionIdContext"
  ];
  const getSortedIndex = (array, value, compare) => {
    let low = 0;
    let high = array.length;
    while (low < high) {
      const mid = low + high >>> 1;
      if (compare(array[mid], value)) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return low;
  };
  const compareSessions = (a, b) => {
    return a.remoteSettings.maxConcurrentStreams > b.remoteSettings.maxConcurrentStreams;
  };
  const closeCoveredSessions = (where, session) => {
    for (const coveredSession of where) {
      if (
        // The set is a proper subset when its length is less than the other set.
        coveredSession[kOriginSet].length < session[kOriginSet].length && // And the other set includes all elements of the subset.
        coveredSession[kOriginSet].every((origin) => session[kOriginSet].includes(origin)) && // Makes sure that the session can handle all requests from the covered session.
        coveredSession[kCurrentStreamsCount] + session[kCurrentStreamsCount] <= session.remoteSettings.maxConcurrentStreams
      ) {
        gracefullyClose(coveredSession);
      }
    }
  };
  const closeSessionIfCovered = (where, coveredSession) => {
    for (const session of where) {
      if (coveredSession[kOriginSet].length < session[kOriginSet].length && coveredSession[kOriginSet].every((origin) => session[kOriginSet].includes(origin)) && coveredSession[kCurrentStreamsCount] + session[kCurrentStreamsCount] <= session.remoteSettings.maxConcurrentStreams) {
        gracefullyClose(coveredSession);
      }
    }
  };
  const getSessions = ({ agent: agent2, isFree }) => {
    const result = {};
    for (const normalizedOptions in agent2.sessions) {
      const sessions = agent2.sessions[normalizedOptions];
      const filtered = sessions.filter((session) => {
        const result2 = session[Agent.kCurrentStreamsCount] < session.remoteSettings.maxConcurrentStreams;
        return isFree ? result2 : !result2;
      });
      if (filtered.length !== 0) {
        result[normalizedOptions] = filtered;
      }
    }
    return result;
  };
  const gracefullyClose = (session) => {
    session[kGracefullyClosing] = true;
    if (session[kCurrentStreamsCount] === 0) {
      session.close();
    }
  };
  class Agent extends EventEmitter {
    constructor({ timeout = 6e4, maxSessions = Infinity, maxFreeSessions = 10, maxCachedTlsSessions = 100 } = {}) {
      super();
      this.sessions = {};
      this.queue = {};
      this.timeout = timeout;
      this.maxSessions = maxSessions;
      this.maxFreeSessions = maxFreeSessions;
      this._freeSessionsCount = 0;
      this._sessionsCount = 0;
      this.settings = {
        enablePush: false
      };
      this.tlsSessionCache = new QuickLRU({ maxSize: maxCachedTlsSessions });
    }
    static normalizeOrigin(url, servername) {
      if (typeof url === "string") {
        url = new URL(url);
      }
      if (servername && url.hostname !== servername) {
        url.hostname = servername;
      }
      return url.origin;
    }
    normalizeOptions(options) {
      let normalized = "";
      if (options) {
        for (const key of nameKeys) {
          if (options[key]) {
            normalized += `:${options[key]}`;
          }
        }
      }
      return normalized;
    }
    _tryToCreateNewSession(normalizedOptions, normalizedOrigin) {
      if (!(normalizedOptions in this.queue) || !(normalizedOrigin in this.queue[normalizedOptions])) {
        return;
      }
      const item = this.queue[normalizedOptions][normalizedOrigin];
      if (this._sessionsCount < this.maxSessions && !item.completed) {
        item.completed = true;
        item();
      }
    }
    getSession(origin, options, listeners) {
      return new Promise((resolve, reject) => {
        if (Array.isArray(listeners)) {
          listeners = [...listeners];
          resolve();
        } else {
          listeners = [{ resolve, reject }];
        }
        const normalizedOptions = this.normalizeOptions(options);
        const normalizedOrigin = Agent.normalizeOrigin(origin, options && options.servername);
        if (normalizedOrigin === void 0) {
          for (const { reject: reject2 } of listeners) {
            reject2(new TypeError("The `origin` argument needs to be a string or an URL object"));
          }
          return;
        }
        if (normalizedOptions in this.sessions) {
          const sessions = this.sessions[normalizedOptions];
          let maxConcurrentStreams = -1;
          let currentStreamsCount = -1;
          let optimalSession;
          for (const session of sessions) {
            const sessionMaxConcurrentStreams = session.remoteSettings.maxConcurrentStreams;
            if (sessionMaxConcurrentStreams < maxConcurrentStreams) {
              break;
            }
            if (session[kOriginSet].includes(normalizedOrigin)) {
              const sessionCurrentStreamsCount = session[kCurrentStreamsCount];
              if (sessionCurrentStreamsCount >= sessionMaxConcurrentStreams || session[kGracefullyClosing] || // Unfortunately the `close` event isn't called immediately,
              // so `session.destroyed` is `true`, but `session.closed` is `false`.
              session.destroyed) {
                continue;
              }
              if (!optimalSession) {
                maxConcurrentStreams = sessionMaxConcurrentStreams;
              }
              if (sessionCurrentStreamsCount > currentStreamsCount) {
                optimalSession = session;
                currentStreamsCount = sessionCurrentStreamsCount;
              }
            }
          }
          if (optimalSession) {
            if (listeners.length !== 1) {
              for (const { reject: reject2 } of listeners) {
                const error = new Error(
                  `Expected the length of listeners to be 1, got ${listeners.length}.
Please report this to https://github.com/szmarczak/http2-wrapper/`
                );
                reject2(error);
              }
              return;
            }
            listeners[0].resolve(optimalSession);
            return;
          }
        }
        if (normalizedOptions in this.queue) {
          if (normalizedOrigin in this.queue[normalizedOptions]) {
            this.queue[normalizedOptions][normalizedOrigin].listeners.push(...listeners);
            this._tryToCreateNewSession(normalizedOptions, normalizedOrigin);
            return;
          }
        } else {
          this.queue[normalizedOptions] = {};
        }
        const removeFromQueue = () => {
          if (normalizedOptions in this.queue && this.queue[normalizedOptions][normalizedOrigin] === entry) {
            delete this.queue[normalizedOptions][normalizedOrigin];
            if (Object.keys(this.queue[normalizedOptions]).length === 0) {
              delete this.queue[normalizedOptions];
            }
          }
        };
        const entry = () => {
          const name = `${normalizedOrigin}:${normalizedOptions}`;
          let receivedSettings = false;
          try {
            const session = http2.connect(origin, {
              createConnection: this.createConnection,
              settings: this.settings,
              session: this.tlsSessionCache.get(name),
              ...options
            });
            session[kCurrentStreamsCount] = 0;
            session[kGracefullyClosing] = false;
            const isFree = () => session[kCurrentStreamsCount] < session.remoteSettings.maxConcurrentStreams;
            let wasFree = true;
            session.socket.once("session", (tlsSession) => {
              this.tlsSessionCache.set(name, tlsSession);
            });
            session.once("error", (error) => {
              for (const { reject: reject2 } of listeners) {
                reject2(error);
              }
              this.tlsSessionCache.delete(name);
            });
            session.setTimeout(this.timeout, () => {
              session.destroy();
            });
            session.once("close", () => {
              if (receivedSettings) {
                if (wasFree) {
                  this._freeSessionsCount--;
                }
                this._sessionsCount--;
                const where = this.sessions[normalizedOptions];
                where.splice(where.indexOf(session), 1);
                if (where.length === 0) {
                  delete this.sessions[normalizedOptions];
                }
              } else {
                const error = new Error("Session closed without receiving a SETTINGS frame");
                error.code = "HTTP2WRAPPER_NOSETTINGS";
                for (const { reject: reject2 } of listeners) {
                  reject2(error);
                }
                removeFromQueue();
              }
              this._tryToCreateNewSession(normalizedOptions, normalizedOrigin);
            });
            const processListeners = () => {
              if (!(normalizedOptions in this.queue) || !isFree()) {
                return;
              }
              for (const origin2 of session[kOriginSet]) {
                if (origin2 in this.queue[normalizedOptions]) {
                  const { listeners: listeners2 } = this.queue[normalizedOptions][origin2];
                  while (listeners2.length !== 0 && isFree()) {
                    listeners2.shift().resolve(session);
                  }
                  const where = this.queue[normalizedOptions];
                  if (where[origin2].listeners.length === 0) {
                    delete where[origin2];
                    if (Object.keys(where).length === 0) {
                      delete this.queue[normalizedOptions];
                      break;
                    }
                  }
                  if (!isFree()) {
                    break;
                  }
                }
              }
            };
            session.on("origin", () => {
              session[kOriginSet] = session.originSet;
              if (!isFree()) {
                return;
              }
              processListeners();
              closeCoveredSessions(this.sessions[normalizedOptions], session);
            });
            session.once("remoteSettings", () => {
              session.ref();
              session.unref();
              this._sessionsCount++;
              if (entry.destroyed) {
                const error = new Error("Agent has been destroyed");
                for (const listener of listeners) {
                  listener.reject(error);
                }
                session.destroy();
                return;
              }
              session[kOriginSet] = session.originSet;
              {
                const where = this.sessions;
                if (normalizedOptions in where) {
                  const sessions = where[normalizedOptions];
                  sessions.splice(getSortedIndex(sessions, session, compareSessions), 0, session);
                } else {
                  where[normalizedOptions] = [session];
                }
              }
              this._freeSessionsCount += 1;
              receivedSettings = true;
              this.emit("session", session);
              processListeners();
              removeFromQueue();
              if (session[kCurrentStreamsCount] === 0 && this._freeSessionsCount > this.maxFreeSessions) {
                session.close();
              }
              if (listeners.length !== 0) {
                this.getSession(normalizedOrigin, options, listeners);
                listeners.length = 0;
              }
              session.on("remoteSettings", () => {
                processListeners();
                closeCoveredSessions(this.sessions[normalizedOptions], session);
              });
            });
            session[kRequest] = session.request;
            session.request = (headers, streamOptions) => {
              if (session[kGracefullyClosing]) {
                throw new Error("The session is gracefully closing. No new streams are allowed.");
              }
              const stream = session[kRequest](headers, streamOptions);
              session.ref();
              ++session[kCurrentStreamsCount];
              if (session[kCurrentStreamsCount] === session.remoteSettings.maxConcurrentStreams) {
                this._freeSessionsCount--;
              }
              stream.once("close", () => {
                wasFree = isFree();
                --session[kCurrentStreamsCount];
                if (!session.destroyed && !session.closed) {
                  closeSessionIfCovered(this.sessions[normalizedOptions], session);
                  if (isFree() && !session.closed) {
                    if (!wasFree) {
                      this._freeSessionsCount++;
                      wasFree = true;
                    }
                    const isEmpty = session[kCurrentStreamsCount] === 0;
                    if (isEmpty) {
                      session.unref();
                    }
                    if (isEmpty && (this._freeSessionsCount > this.maxFreeSessions || session[kGracefullyClosing])) {
                      session.close();
                    } else {
                      closeCoveredSessions(this.sessions[normalizedOptions], session);
                      processListeners();
                    }
                  }
                }
              });
              return stream;
            };
          } catch (error) {
            for (const listener of listeners) {
              listener.reject(error);
            }
            removeFromQueue();
          }
        };
        entry.listeners = listeners;
        entry.completed = false;
        entry.destroyed = false;
        this.queue[normalizedOptions][normalizedOrigin] = entry;
        this._tryToCreateNewSession(normalizedOptions, normalizedOrigin);
      });
    }
    request(origin, options, headers, streamOptions) {
      return new Promise((resolve, reject) => {
        this.getSession(origin, options, [{
          reject,
          resolve: (session) => {
            try {
              resolve(session.request(headers, streamOptions));
            } catch (error) {
              reject(error);
            }
          }
        }]);
      });
    }
    createConnection(origin, options) {
      return Agent.connect(origin, options);
    }
    static connect(origin, options) {
      options.ALPNProtocols = ["h2"];
      const port = origin.port || 443;
      const host = origin.hostname || origin.host;
      if (typeof options.servername === "undefined") {
        options.servername = host;
      }
      return tls.connect(port, host, options);
    }
    closeFreeSessions() {
      for (const sessions of Object.values(this.sessions)) {
        for (const session of sessions) {
          if (session[kCurrentStreamsCount] === 0) {
            session.close();
          }
        }
      }
    }
    destroy(reason) {
      for (const sessions of Object.values(this.sessions)) {
        for (const session of sessions) {
          session.destroy(reason);
        }
      }
      for (const entriesOfAuthority of Object.values(this.queue)) {
        for (const entry of Object.values(entriesOfAuthority)) {
          entry.destroyed = true;
        }
      }
      this.queue = {};
    }
    get freeSessions() {
      return getSessions({ agent: this, isFree: true });
    }
    get busySessions() {
      return getSessions({ agent: this, isFree: false });
    }
  }
  Agent.kCurrentStreamsCount = kCurrentStreamsCount;
  Agent.kGracefullyClosing = kGracefullyClosing;
  agent = {
    Agent,
    globalAgent: new Agent()
  };
  return agent;
}
var incomingMessage;
var hasRequiredIncomingMessage;
function requireIncomingMessage() {
  if (hasRequiredIncomingMessage) return incomingMessage;
  hasRequiredIncomingMessage = 1;
  const { Readable } = require$$0$3;
  class IncomingMessage extends Readable {
    constructor(socket, highWaterMark) {
      super({
        highWaterMark,
        autoDestroy: false
      });
      this.statusCode = null;
      this.statusMessage = "";
      this.httpVersion = "2.0";
      this.httpVersionMajor = 2;
      this.httpVersionMinor = 0;
      this.headers = {};
      this.trailers = {};
      this.req = null;
      this.aborted = false;
      this.complete = false;
      this.upgrade = null;
      this.rawHeaders = [];
      this.rawTrailers = [];
      this.socket = socket;
      this.connection = socket;
      this._dumped = false;
    }
    _destroy(error) {
      this.req._request.destroy(error);
    }
    setTimeout(ms, callback) {
      this.req.setTimeout(ms, callback);
      return this;
    }
    _dump() {
      if (!this._dumped) {
        this._dumped = true;
        this.removeAllListeners("data");
        this.resume();
      }
    }
    _read() {
      if (this.req) {
        this.req._request.resume();
      }
    }
  }
  incomingMessage = IncomingMessage;
  return incomingMessage;
}
var urlToOptions$1;
var hasRequiredUrlToOptions$1;
function requireUrlToOptions$1() {
  if (hasRequiredUrlToOptions$1) return urlToOptions$1;
  hasRequiredUrlToOptions$1 = 1;
  urlToOptions$1 = (url) => {
    const options = {
      protocol: url.protocol,
      hostname: typeof url.hostname === "string" && url.hostname.startsWith("[") ? url.hostname.slice(1, -1) : url.hostname,
      host: url.host,
      hash: url.hash,
      search: url.search,
      pathname: url.pathname,
      href: url.href,
      path: `${url.pathname || ""}${url.search || ""}`
    };
    if (typeof url.port === "string" && url.port.length !== 0) {
      options.port = Number(url.port);
    }
    if (url.username || url.password) {
      options.auth = `${url.username || ""}:${url.password || ""}`;
    }
    return options;
  };
  return urlToOptions$1;
}
var proxyEvents$1;
var hasRequiredProxyEvents$1;
function requireProxyEvents$1() {
  if (hasRequiredProxyEvents$1) return proxyEvents$1;
  hasRequiredProxyEvents$1 = 1;
  proxyEvents$1 = (from, to, events2) => {
    for (const event of events2) {
      from.on(event, (...args) => to.emit(event, ...args));
    }
  };
  return proxyEvents$1;
}
var isRequestPseudoHeader;
var hasRequiredIsRequestPseudoHeader;
function requireIsRequestPseudoHeader() {
  if (hasRequiredIsRequestPseudoHeader) return isRequestPseudoHeader;
  hasRequiredIsRequestPseudoHeader = 1;
  isRequestPseudoHeader = (header) => {
    switch (header) {
      case ":method":
      case ":scheme":
      case ":authority":
      case ":path":
        return true;
      default:
        return false;
    }
  };
  return isRequestPseudoHeader;
}
var errors = { exports: {} };
var hasRequiredErrors;
function requireErrors() {
  if (hasRequiredErrors) return errors.exports;
  hasRequiredErrors = 1;
  (function(module2) {
    const makeError = (Base, key, getMessage) => {
      module2.exports[key] = class NodeError extends Base {
        constructor(...args) {
          super(typeof getMessage === "string" ? getMessage : getMessage(args));
          this.name = `${super.name} [${key}]`;
          this.code = key;
        }
      };
    };
    makeError(TypeError, "ERR_INVALID_ARG_TYPE", (args) => {
      const type = args[0].includes(".") ? "property" : "argument";
      let valid = args[1];
      const isManyTypes = Array.isArray(valid);
      if (isManyTypes) {
        valid = `${valid.slice(0, -1).join(", ")} or ${valid.slice(-1)}`;
      }
      return `The "${args[0]}" ${type} must be ${isManyTypes ? "one of" : "of"} type ${valid}. Received ${typeof args[2]}`;
    });
    makeError(TypeError, "ERR_INVALID_PROTOCOL", (args) => {
      return `Protocol "${args[0]}" not supported. Expected "${args[1]}"`;
    });
    makeError(Error, "ERR_HTTP_HEADERS_SENT", (args) => {
      return `Cannot ${args[0]} headers after they are sent to the client`;
    });
    makeError(TypeError, "ERR_INVALID_HTTP_TOKEN", (args) => {
      return `${args[0]} must be a valid HTTP token [${args[1]}]`;
    });
    makeError(TypeError, "ERR_HTTP_INVALID_HEADER_VALUE", (args) => {
      return `Invalid value "${args[0]} for header "${args[1]}"`;
    });
    makeError(TypeError, "ERR_INVALID_CHAR", (args) => {
      return `Invalid character in ${args[0]} [${args[1]}]`;
    });
  })(errors);
  return errors.exports;
}
var clientRequest;
var hasRequiredClientRequest;
function requireClientRequest() {
  if (hasRequiredClientRequest) return clientRequest;
  hasRequiredClientRequest = 1;
  const http2 = require$$0$5;
  const { Writable } = require$$0$3;
  const { Agent, globalAgent } = requireAgent();
  const IncomingMessage = requireIncomingMessage();
  const urlToOptions2 = requireUrlToOptions$1();
  const proxyEvents2 = requireProxyEvents$1();
  const isRequestPseudoHeader2 = requireIsRequestPseudoHeader();
  const {
    ERR_INVALID_ARG_TYPE,
    ERR_INVALID_PROTOCOL,
    ERR_HTTP_HEADERS_SENT,
    ERR_INVALID_HTTP_TOKEN,
    ERR_HTTP_INVALID_HEADER_VALUE,
    ERR_INVALID_CHAR
  } = requireErrors();
  const {
    HTTP2_HEADER_STATUS,
    HTTP2_HEADER_METHOD,
    HTTP2_HEADER_PATH,
    HTTP2_METHOD_CONNECT
  } = http2.constants;
  const kHeaders = Symbol("headers");
  const kOrigin = Symbol("origin");
  const kSession = Symbol("session");
  const kOptions = Symbol("options");
  const kFlushedHeaders = Symbol("flushedHeaders");
  const kJobs = Symbol("jobs");
  const isValidHttpToken = /^[\^`\-\w!#$%&*+.|~]+$/;
  const isInvalidHeaderValue = /[^\t\u0020-\u007E\u0080-\u00FF]/;
  class ClientRequest extends Writable {
    constructor(input, options, callback) {
      super({
        autoDestroy: false
      });
      const hasInput = typeof input === "string" || input instanceof URL;
      if (hasInput) {
        input = urlToOptions2(input instanceof URL ? input : new URL(input));
      }
      if (typeof options === "function" || options === void 0) {
        callback = options;
        options = hasInput ? input : { ...input };
      } else {
        options = { ...input, ...options };
      }
      if (options.h2session) {
        this[kSession] = options.h2session;
      } else if (options.agent === false) {
        this.agent = new Agent({ maxFreeSessions: 0 });
      } else if (typeof options.agent === "undefined" || options.agent === null) {
        if (typeof options.createConnection === "function") {
          this.agent = new Agent({ maxFreeSessions: 0 });
          this.agent.createConnection = options.createConnection;
        } else {
          this.agent = globalAgent;
        }
      } else if (typeof options.agent.request === "function") {
        this.agent = options.agent;
      } else {
        throw new ERR_INVALID_ARG_TYPE("options.agent", ["Agent-like Object", "undefined", "false"], options.agent);
      }
      if (options.protocol && options.protocol !== "https:") {
        throw new ERR_INVALID_PROTOCOL(options.protocol, "https:");
      }
      const port = options.port || options.defaultPort || this.agent && this.agent.defaultPort || 443;
      const host = options.hostname || options.host || "localhost";
      delete options.hostname;
      delete options.host;
      delete options.port;
      const { timeout } = options;
      options.timeout = void 0;
      this[kHeaders] = /* @__PURE__ */ Object.create(null);
      this[kJobs] = [];
      this.socket = null;
      this.connection = null;
      this.method = options.method || "GET";
      this.path = options.path;
      this.res = null;
      this.aborted = false;
      this.reusedSocket = false;
      if (options.headers) {
        for (const [header, value] of Object.entries(options.headers)) {
          this.setHeader(header, value);
        }
      }
      if (options.auth && !("authorization" in this[kHeaders])) {
        this[kHeaders].authorization = "Basic " + Buffer.from(options.auth).toString("base64");
      }
      options.session = options.tlsSession;
      options.path = options.socketPath;
      this[kOptions] = options;
      if (port === 443) {
        this[kOrigin] = `https://${host}`;
        if (!(":authority" in this[kHeaders])) {
          this[kHeaders][":authority"] = host;
        }
      } else {
        this[kOrigin] = `https://${host}:${port}`;
        if (!(":authority" in this[kHeaders])) {
          this[kHeaders][":authority"] = `${host}:${port}`;
        }
      }
      if (timeout) {
        this.setTimeout(timeout);
      }
      if (callback) {
        this.once("response", callback);
      }
      this[kFlushedHeaders] = false;
    }
    get method() {
      return this[kHeaders][HTTP2_HEADER_METHOD];
    }
    set method(value) {
      if (value) {
        this[kHeaders][HTTP2_HEADER_METHOD] = value.toUpperCase();
      }
    }
    get path() {
      return this[kHeaders][HTTP2_HEADER_PATH];
    }
    set path(value) {
      if (value) {
        this[kHeaders][HTTP2_HEADER_PATH] = value;
      }
    }
    get _mustNotHaveABody() {
      return this.method === "GET" || this.method === "HEAD" || this.method === "DELETE";
    }
    _write(chunk, encoding, callback) {
      if (this._mustNotHaveABody) {
        callback(new Error("The GET, HEAD and DELETE methods must NOT have a body"));
        return;
      }
      this.flushHeaders();
      const callWrite = () => this._request.write(chunk, encoding, callback);
      if (this._request) {
        callWrite();
      } else {
        this[kJobs].push(callWrite);
      }
    }
    _final(callback) {
      if (this.destroyed) {
        return;
      }
      this.flushHeaders();
      const callEnd = () => {
        if (this._mustNotHaveABody) {
          callback();
          return;
        }
        this._request.end(callback);
      };
      if (this._request) {
        callEnd();
      } else {
        this[kJobs].push(callEnd);
      }
    }
    abort() {
      if (this.res && this.res.complete) {
        return;
      }
      if (!this.aborted) {
        process.nextTick(() => this.emit("abort"));
      }
      this.aborted = true;
      this.destroy();
    }
    _destroy(error, callback) {
      if (this.res) {
        this.res._dump();
      }
      if (this._request) {
        this._request.destroy();
      }
      callback(error);
    }
    async flushHeaders() {
      if (this[kFlushedHeaders] || this.destroyed) {
        return;
      }
      this[kFlushedHeaders] = true;
      const isConnectMethod = this.method === HTTP2_METHOD_CONNECT;
      const onStream = (stream) => {
        this._request = stream;
        if (this.destroyed) {
          stream.destroy();
          return;
        }
        if (!isConnectMethod) {
          proxyEvents2(stream, this, ["timeout", "continue", "close", "error"]);
        }
        const waitForEnd = (fn) => {
          return (...args) => {
            if (!this.writable && !this.destroyed) {
              fn(...args);
            } else {
              this.once("finish", () => {
                fn(...args);
              });
            }
          };
        };
        stream.once("response", waitForEnd((headers, flags, rawHeaders) => {
          const response = new IncomingMessage(this.socket, stream.readableHighWaterMark);
          this.res = response;
          response.req = this;
          response.statusCode = headers[HTTP2_HEADER_STATUS];
          response.headers = headers;
          response.rawHeaders = rawHeaders;
          response.once("end", () => {
            if (this.aborted) {
              response.aborted = true;
              response.emit("aborted");
            } else {
              response.complete = true;
              response.socket = null;
              response.connection = null;
            }
          });
          if (isConnectMethod) {
            response.upgrade = true;
            if (this.emit("connect", response, stream, Buffer.alloc(0))) {
              this.emit("close");
            } else {
              stream.destroy();
            }
          } else {
            stream.on("data", (chunk) => {
              if (!response._dumped && !response.push(chunk)) {
                stream.pause();
              }
            });
            stream.once("end", () => {
              response.push(null);
            });
            if (!this.emit("response", response)) {
              response._dump();
            }
          }
        }));
        stream.once("headers", waitForEnd(
          (headers) => this.emit("information", { statusCode: headers[HTTP2_HEADER_STATUS] })
        ));
        stream.once("trailers", waitForEnd((trailers, flags, rawTrailers) => {
          const { res } = this;
          res.trailers = trailers;
          res.rawTrailers = rawTrailers;
        }));
        const { socket } = stream.session;
        this.socket = socket;
        this.connection = socket;
        for (const job of this[kJobs]) {
          job();
        }
        this.emit("socket", this.socket);
      };
      if (this[kSession]) {
        try {
          onStream(this[kSession].request(this[kHeaders]));
        } catch (error) {
          this.emit("error", error);
        }
      } else {
        this.reusedSocket = true;
        try {
          onStream(await this.agent.request(this[kOrigin], this[kOptions], this[kHeaders]));
        } catch (error) {
          this.emit("error", error);
        }
      }
    }
    getHeader(name) {
      if (typeof name !== "string") {
        throw new ERR_INVALID_ARG_TYPE("name", "string", name);
      }
      return this[kHeaders][name.toLowerCase()];
    }
    get headersSent() {
      return this[kFlushedHeaders];
    }
    removeHeader(name) {
      if (typeof name !== "string") {
        throw new ERR_INVALID_ARG_TYPE("name", "string", name);
      }
      if (this.headersSent) {
        throw new ERR_HTTP_HEADERS_SENT("remove");
      }
      delete this[kHeaders][name.toLowerCase()];
    }
    setHeader(name, value) {
      if (this.headersSent) {
        throw new ERR_HTTP_HEADERS_SENT("set");
      }
      if (typeof name !== "string" || !isValidHttpToken.test(name) && !isRequestPseudoHeader2(name)) {
        throw new ERR_INVALID_HTTP_TOKEN("Header name", name);
      }
      if (typeof value === "undefined") {
        throw new ERR_HTTP_INVALID_HEADER_VALUE(value, name);
      }
      if (isInvalidHeaderValue.test(value)) {
        throw new ERR_INVALID_CHAR("header content", name);
      }
      this[kHeaders][name.toLowerCase()] = value;
    }
    setNoDelay() {
    }
    setSocketKeepAlive() {
    }
    setTimeout(ms, callback) {
      const applyTimeout = () => this._request.setTimeout(ms, callback);
      if (this._request) {
        applyTimeout();
      } else {
        this[kJobs].push(applyTimeout);
      }
      return this;
    }
    get maxHeadersCount() {
      if (!this.destroyed && this._request) {
        return this._request.session.localSettings.maxHeaderListSize;
      }
      return void 0;
    }
    set maxHeadersCount(_value) {
    }
  }
  clientRequest = ClientRequest;
  return clientRequest;
}
var auto = { exports: {} };
var resolveAlpn;
var hasRequiredResolveAlpn;
function requireResolveAlpn() {
  if (hasRequiredResolveAlpn) return resolveAlpn;
  hasRequiredResolveAlpn = 1;
  const tls = require$$1$3;
  resolveAlpn = (options = {}, connect = tls.connect) => new Promise((resolve, reject) => {
    let timeout = false;
    let socket;
    const callback = async () => {
      await socketPromise;
      socket.off("timeout", onTimeout);
      socket.off("error", reject);
      if (options.resolveSocket) {
        resolve({ alpnProtocol: socket.alpnProtocol, socket, timeout });
        if (timeout) {
          await Promise.resolve();
          socket.emit("timeout");
        }
      } else {
        socket.destroy();
        resolve({ alpnProtocol: socket.alpnProtocol, timeout });
      }
    };
    const onTimeout = async () => {
      timeout = true;
      callback();
    };
    const socketPromise = (async () => {
      try {
        socket = await connect(options, callback);
        socket.on("error", reject);
        socket.once("timeout", onTimeout);
      } catch (error) {
        reject(error);
      }
    })();
  });
  return resolveAlpn;
}
var calculateServerName;
var hasRequiredCalculateServerName;
function requireCalculateServerName() {
  if (hasRequiredCalculateServerName) return calculateServerName;
  hasRequiredCalculateServerName = 1;
  const net = require$$0$6;
  calculateServerName = (options) => {
    let servername = options.host;
    const hostHeader = options.headers && options.headers.host;
    if (hostHeader) {
      if (hostHeader.startsWith("[")) {
        const index = hostHeader.indexOf("]");
        if (index === -1) {
          servername = hostHeader;
        } else {
          servername = hostHeader.slice(1, -1);
        }
      } else {
        servername = hostHeader.split(":", 1)[0];
      }
    }
    if (net.isIP(servername)) {
      return "";
    }
    return servername;
  };
  return calculateServerName;
}
var hasRequiredAuto;
function requireAuto() {
  if (hasRequiredAuto) return auto.exports;
  hasRequiredAuto = 1;
  const http = require$$4;
  const https = require$$1$4;
  const resolveALPN = requireResolveAlpn();
  const QuickLRU = requireQuickLru();
  const Http2ClientRequest = requireClientRequest();
  const calculateServerName2 = requireCalculateServerName();
  const urlToOptions2 = requireUrlToOptions$1();
  const cache = new QuickLRU({ maxSize: 100 });
  const queue = /* @__PURE__ */ new Map();
  const installSocket = (agent2, socket, options) => {
    socket._httpMessage = { shouldKeepAlive: true };
    const onFree = () => {
      agent2.emit("free", socket, options);
    };
    socket.on("free", onFree);
    const onClose = () => {
      agent2.removeSocket(socket, options);
    };
    socket.on("close", onClose);
    const onRemove = () => {
      agent2.removeSocket(socket, options);
      socket.off("close", onClose);
      socket.off("free", onFree);
      socket.off("agentRemove", onRemove);
    };
    socket.on("agentRemove", onRemove);
    agent2.emit("free", socket, options);
  };
  const resolveProtocol = async (options) => {
    const name = `${options.host}:${options.port}:${options.ALPNProtocols.sort()}`;
    if (!cache.has(name)) {
      if (queue.has(name)) {
        const result = await queue.get(name);
        return result.alpnProtocol;
      }
      const { path: path2, agent: agent2 } = options;
      options.path = options.socketPath;
      const resultPromise = resolveALPN(options);
      queue.set(name, resultPromise);
      try {
        const { socket, alpnProtocol } = await resultPromise;
        cache.set(name, alpnProtocol);
        options.path = path2;
        if (alpnProtocol === "h2") {
          socket.destroy();
        } else {
          const { globalAgent } = https;
          const defaultCreateConnection = https.Agent.prototype.createConnection;
          if (agent2) {
            if (agent2.createConnection === defaultCreateConnection) {
              installSocket(agent2, socket, options);
            } else {
              socket.destroy();
            }
          } else if (globalAgent.createConnection === defaultCreateConnection) {
            installSocket(globalAgent, socket, options);
          } else {
            socket.destroy();
          }
        }
        queue.delete(name);
        return alpnProtocol;
      } catch (error) {
        queue.delete(name);
        throw error;
      }
    }
    return cache.get(name);
  };
  auto.exports = async (input, options, callback) => {
    if (typeof input === "string" || input instanceof URL) {
      input = urlToOptions2(new URL(input));
    }
    if (typeof options === "function") {
      callback = options;
      options = void 0;
    }
    options = {
      ALPNProtocols: ["h2", "http/1.1"],
      ...input,
      ...options,
      resolveSocket: true
    };
    if (!Array.isArray(options.ALPNProtocols) || options.ALPNProtocols.length === 0) {
      throw new Error("The `ALPNProtocols` option must be an Array with at least one entry");
    }
    options.protocol = options.protocol || "https:";
    const isHttps = options.protocol === "https:";
    options.host = options.hostname || options.host || "localhost";
    options.session = options.tlsSession;
    options.servername = options.servername || calculateServerName2(options);
    options.port = options.port || (isHttps ? 443 : 80);
    options._defaultAgent = isHttps ? https.globalAgent : http.globalAgent;
    const agents = options.agent;
    if (agents) {
      if (agents.addRequest) {
        throw new Error("The `options.agent` object can contain only `http`, `https` or `http2` properties");
      }
      options.agent = agents[isHttps ? "https" : "http"];
    }
    if (isHttps) {
      const protocol = await resolveProtocol(options);
      if (protocol === "h2") {
        if (agents) {
          options.agent = agents.http2;
        }
        return new Http2ClientRequest(options, callback);
      }
    }
    return http.request(options, callback);
  };
  auto.exports.protocolCache = cache;
  return auto.exports;
}
var source$1;
var hasRequiredSource$1;
function requireSource$1() {
  if (hasRequiredSource$1) return source$1;
  hasRequiredSource$1 = 1;
  const http2 = require$$0$5;
  const agent2 = requireAgent();
  const ClientRequest = requireClientRequest();
  const IncomingMessage = requireIncomingMessage();
  const auto2 = requireAuto();
  const request = (url, options, callback) => {
    return new ClientRequest(url, options, callback);
  };
  const get2 = (url, options, callback) => {
    const req = new ClientRequest(url, options, callback);
    req.end();
    return req;
  };
  source$1 = {
    ...http2,
    ClientRequest,
    IncomingMessage,
    ...agent2,
    request,
    get: get2,
    auto: auto2
  };
  return source$1;
}
var getBodySize = {};
var isFormData = {};
var hasRequiredIsFormData;
function requireIsFormData() {
  if (hasRequiredIsFormData) return isFormData;
  hasRequiredIsFormData = 1;
  Object.defineProperty(isFormData, "__esModule", { value: true });
  const is_1 = /* @__PURE__ */ requireDist();
  isFormData.default = (body) => is_1.default.nodeStream(body) && is_1.default.function_(body.getBoundary);
  return isFormData;
}
var hasRequiredGetBodySize;
function requireGetBodySize() {
  if (hasRequiredGetBodySize) return getBodySize;
  hasRequiredGetBodySize = 1;
  Object.defineProperty(getBodySize, "__esModule", { value: true });
  const fs_1 = fs;
  const util_1 = require$$1$1;
  const is_1 = /* @__PURE__ */ requireDist();
  const is_form_data_1 = /* @__PURE__ */ requireIsFormData();
  const statAsync = util_1.promisify(fs_1.stat);
  getBodySize.default = async (body, headers) => {
    if (headers && "content-length" in headers) {
      return Number(headers["content-length"]);
    }
    if (!body) {
      return 0;
    }
    if (is_1.default.string(body)) {
      return Buffer.byteLength(body);
    }
    if (is_1.default.buffer(body)) {
      return body.length;
    }
    if (is_form_data_1.default(body)) {
      return util_1.promisify(body.getLength.bind(body))();
    }
    if (body instanceof fs_1.ReadStream) {
      const { size } = await statAsync(body.path);
      if (size === 0) {
        return void 0;
      }
      return size;
    }
    return void 0;
  };
  return getBodySize;
}
var proxyEvents = {};
var hasRequiredProxyEvents;
function requireProxyEvents() {
  if (hasRequiredProxyEvents) return proxyEvents;
  hasRequiredProxyEvents = 1;
  Object.defineProperty(proxyEvents, "__esModule", { value: true });
  function default_1(from, to, events2) {
    const fns = {};
    for (const event of events2) {
      fns[event] = (...args) => {
        to.emit(event, ...args);
      };
      from.on(event, fns[event]);
    }
    return () => {
      for (const event of events2) {
        from.off(event, fns[event]);
      }
    };
  }
  proxyEvents.default = default_1;
  return proxyEvents;
}
var timedOut = {};
var unhandle = {};
var hasRequiredUnhandle;
function requireUnhandle() {
  if (hasRequiredUnhandle) return unhandle;
  hasRequiredUnhandle = 1;
  Object.defineProperty(unhandle, "__esModule", { value: true });
  unhandle.default = () => {
    const handlers = [];
    return {
      once(origin, event, fn) {
        origin.once(event, fn);
        handlers.push({ origin, event, fn });
      },
      unhandleAll() {
        for (const handler of handlers) {
          const { origin, event, fn } = handler;
          origin.removeListener(event, fn);
        }
        handlers.length = 0;
      }
    };
  };
  return unhandle;
}
var hasRequiredTimedOut;
function requireTimedOut() {
  if (hasRequiredTimedOut) return timedOut;
  hasRequiredTimedOut = 1;
  Object.defineProperty(timedOut, "__esModule", { value: true });
  timedOut.TimeoutError = void 0;
  const net = require$$0$6;
  const unhandle_1 = /* @__PURE__ */ requireUnhandle();
  const reentry = Symbol("reentry");
  const noop = () => {
  };
  class TimeoutError extends Error {
    constructor(threshold, event) {
      super(`Timeout awaiting '${event}' for ${threshold}ms`);
      this.event = event;
      this.name = "TimeoutError";
      this.code = "ETIMEDOUT";
    }
  }
  timedOut.TimeoutError = TimeoutError;
  timedOut.default = (request, delays, options) => {
    if (reentry in request) {
      return noop;
    }
    request[reentry] = true;
    const cancelers = [];
    const { once: once2, unhandleAll } = unhandle_1.default();
    const addTimeout = (delay, callback, event) => {
      var _a;
      const timeout = setTimeout(callback, delay, delay, event);
      (_a = timeout.unref) === null || _a === void 0 ? void 0 : _a.call(timeout);
      const cancel = () => {
        clearTimeout(timeout);
      };
      cancelers.push(cancel);
      return cancel;
    };
    const { host, hostname } = options;
    const timeoutHandler = (delay, event) => {
      request.destroy(new TimeoutError(delay, event));
    };
    const cancelTimeouts = () => {
      for (const cancel of cancelers) {
        cancel();
      }
      unhandleAll();
    };
    request.once("error", (error) => {
      cancelTimeouts();
      if (request.listenerCount("error") === 0) {
        throw error;
      }
    });
    request.once("close", cancelTimeouts);
    once2(request, "response", (response) => {
      once2(response, "end", cancelTimeouts);
    });
    if (typeof delays.request !== "undefined") {
      addTimeout(delays.request, timeoutHandler, "request");
    }
    if (typeof delays.socket !== "undefined") {
      const socketTimeoutHandler = () => {
        timeoutHandler(delays.socket, "socket");
      };
      request.setTimeout(delays.socket, socketTimeoutHandler);
      cancelers.push(() => {
        request.removeListener("timeout", socketTimeoutHandler);
      });
    }
    once2(request, "socket", (socket) => {
      var _a;
      const { socketPath } = request;
      if (socket.connecting) {
        const hasPath = Boolean(socketPath !== null && socketPath !== void 0 ? socketPath : net.isIP((_a = hostname !== null && hostname !== void 0 ? hostname : host) !== null && _a !== void 0 ? _a : "") !== 0);
        if (typeof delays.lookup !== "undefined" && !hasPath && typeof socket.address().address === "undefined") {
          const cancelTimeout = addTimeout(delays.lookup, timeoutHandler, "lookup");
          once2(socket, "lookup", cancelTimeout);
        }
        if (typeof delays.connect !== "undefined") {
          const timeConnect = () => addTimeout(delays.connect, timeoutHandler, "connect");
          if (hasPath) {
            once2(socket, "connect", timeConnect());
          } else {
            once2(socket, "lookup", (error) => {
              if (error === null) {
                once2(socket, "connect", timeConnect());
              }
            });
          }
        }
        if (typeof delays.secureConnect !== "undefined" && options.protocol === "https:") {
          once2(socket, "connect", () => {
            const cancelTimeout = addTimeout(delays.secureConnect, timeoutHandler, "secureConnect");
            once2(socket, "secureConnect", cancelTimeout);
          });
        }
      }
      if (typeof delays.send !== "undefined") {
        const timeRequest = () => addTimeout(delays.send, timeoutHandler, "send");
        if (socket.connecting) {
          once2(socket, "connect", () => {
            once2(request, "upload-complete", timeRequest());
          });
        } else {
          once2(request, "upload-complete", timeRequest());
        }
      }
    });
    if (typeof delays.response !== "undefined") {
      once2(request, "upload-complete", () => {
        const cancelTimeout = addTimeout(delays.response, timeoutHandler, "response");
        once2(request, "response", cancelTimeout);
      });
    }
    return cancelTimeouts;
  };
  return timedOut;
}
var urlToOptions = {};
var hasRequiredUrlToOptions;
function requireUrlToOptions() {
  if (hasRequiredUrlToOptions) return urlToOptions;
  hasRequiredUrlToOptions = 1;
  Object.defineProperty(urlToOptions, "__esModule", { value: true });
  const is_1 = /* @__PURE__ */ requireDist();
  urlToOptions.default = (url) => {
    url = url;
    const options = {
      protocol: url.protocol,
      hostname: is_1.default.string(url.hostname) && url.hostname.startsWith("[") ? url.hostname.slice(1, -1) : url.hostname,
      host: url.host,
      hash: url.hash,
      search: url.search,
      pathname: url.pathname,
      href: url.href,
      path: `${url.pathname || ""}${url.search || ""}`
    };
    if (is_1.default.string(url.port) && url.port.length > 0) {
      options.port = Number(url.port);
    }
    if (url.username || url.password) {
      options.auth = `${url.username || ""}:${url.password || ""}`;
    }
    return options;
  };
  return urlToOptions;
}
var optionsToUrl = {};
var hasRequiredOptionsToUrl;
function requireOptionsToUrl() {
  if (hasRequiredOptionsToUrl) return optionsToUrl;
  hasRequiredOptionsToUrl = 1;
  Object.defineProperty(optionsToUrl, "__esModule", { value: true });
  const url_1 = require$$0$4;
  const keys2 = [
    "protocol",
    "host",
    "hostname",
    "port",
    "pathname",
    "search"
  ];
  optionsToUrl.default = (origin, options) => {
    var _a, _b;
    if (options.path) {
      if (options.pathname) {
        throw new TypeError("Parameters `path` and `pathname` are mutually exclusive.");
      }
      if (options.search) {
        throw new TypeError("Parameters `path` and `search` are mutually exclusive.");
      }
      if (options.searchParams) {
        throw new TypeError("Parameters `path` and `searchParams` are mutually exclusive.");
      }
    }
    if (options.search && options.searchParams) {
      throw new TypeError("Parameters `search` and `searchParams` are mutually exclusive.");
    }
    if (!origin) {
      if (!options.protocol) {
        throw new TypeError("No URL protocol specified");
      }
      origin = `${options.protocol}//${(_b = (_a = options.hostname) !== null && _a !== void 0 ? _a : options.host) !== null && _b !== void 0 ? _b : ""}`;
    }
    const url = new url_1.URL(origin);
    if (options.path) {
      const searchIndex = options.path.indexOf("?");
      if (searchIndex === -1) {
        options.pathname = options.path;
      } else {
        options.pathname = options.path.slice(0, searchIndex);
        options.search = options.path.slice(searchIndex + 1);
      }
      delete options.path;
    }
    for (const key of keys2) {
      if (options[key]) {
        url[key] = options[key].toString();
      }
    }
    return url;
  };
  return optionsToUrl;
}
var weakableMap = {};
var hasRequiredWeakableMap;
function requireWeakableMap() {
  if (hasRequiredWeakableMap) return weakableMap;
  hasRequiredWeakableMap = 1;
  Object.defineProperty(weakableMap, "__esModule", { value: true });
  class WeakableMap {
    constructor() {
      this.weakMap = /* @__PURE__ */ new WeakMap();
      this.map = /* @__PURE__ */ new Map();
    }
    set(key, value) {
      if (typeof key === "object") {
        this.weakMap.set(key, value);
      } else {
        this.map.set(key, value);
      }
    }
    get(key) {
      if (typeof key === "object") {
        return this.weakMap.get(key);
      }
      return this.map.get(key);
    }
    has(key) {
      if (typeof key === "object") {
        return this.weakMap.has(key);
      }
      return this.map.has(key);
    }
  }
  weakableMap.default = WeakableMap;
  return weakableMap;
}
var getBuffer = {};
var hasRequiredGetBuffer;
function requireGetBuffer() {
  if (hasRequiredGetBuffer) return getBuffer;
  hasRequiredGetBuffer = 1;
  Object.defineProperty(getBuffer, "__esModule", { value: true });
  const getBuffer$1 = async (stream) => {
    const chunks = [];
    let length = 0;
    for await (const chunk of stream) {
      chunks.push(chunk);
      length += Buffer.byteLength(chunk);
    }
    if (Buffer.isBuffer(chunks[0])) {
      return Buffer.concat(chunks, length);
    }
    return Buffer.from(chunks.join(""));
  };
  getBuffer.default = getBuffer$1;
  return getBuffer;
}
var dnsIpVersion = {};
var hasRequiredDnsIpVersion;
function requireDnsIpVersion() {
  if (hasRequiredDnsIpVersion) return dnsIpVersion;
  hasRequiredDnsIpVersion = 1;
  (function(exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.dnsLookupIpVersionToFamily = exports2.isDnsLookupIpVersion = void 0;
    const conversionTable = {
      auto: 0,
      ipv4: 4,
      ipv6: 6
    };
    exports2.isDnsLookupIpVersion = (value) => {
      return value in conversionTable;
    };
    exports2.dnsLookupIpVersionToFamily = (dnsLookupIpVersion) => {
      if (exports2.isDnsLookupIpVersion(dnsLookupIpVersion)) {
        return conversionTable[dnsLookupIpVersion];
      }
      throw new Error("Invalid DNS lookup IP version");
    };
  })(dnsIpVersion);
  return dnsIpVersion;
}
var isResponseOk = {};
var hasRequiredIsResponseOk;
function requireIsResponseOk() {
  if (hasRequiredIsResponseOk) return isResponseOk;
  hasRequiredIsResponseOk = 1;
  Object.defineProperty(isResponseOk, "__esModule", { value: true });
  isResponseOk.isResponseOk = void 0;
  isResponseOk.isResponseOk = (response) => {
    const { statusCode } = response;
    const limitStatusCode = response.request.options.followRedirect ? 299 : 399;
    return statusCode >= 200 && statusCode <= limitStatusCode || statusCode === 304;
  };
  return isResponseOk;
}
var deprecationWarning = {};
var hasRequiredDeprecationWarning;
function requireDeprecationWarning() {
  if (hasRequiredDeprecationWarning) return deprecationWarning;
  hasRequiredDeprecationWarning = 1;
  Object.defineProperty(deprecationWarning, "__esModule", { value: true });
  const alreadyWarned = /* @__PURE__ */ new Set();
  deprecationWarning.default = (message) => {
    if (alreadyWarned.has(message)) {
      return;
    }
    alreadyWarned.add(message);
    process.emitWarning(`Got: ${message}`, {
      type: "DeprecationWarning"
    });
  };
  return deprecationWarning;
}
var normalizeArguments = {};
var hasRequiredNormalizeArguments;
function requireNormalizeArguments() {
  if (hasRequiredNormalizeArguments) return normalizeArguments;
  hasRequiredNormalizeArguments = 1;
  Object.defineProperty(normalizeArguments, "__esModule", { value: true });
  const is_1 = /* @__PURE__ */ requireDist();
  const normalizeArguments$1 = (options, defaults) => {
    if (is_1.default.null_(options.encoding)) {
      throw new TypeError("To get a Buffer, set `options.responseType` to `buffer` instead");
    }
    is_1.assert.any([is_1.default.string, is_1.default.undefined], options.encoding);
    is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.resolveBodyOnly);
    is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.methodRewriting);
    is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.isStream);
    is_1.assert.any([is_1.default.string, is_1.default.undefined], options.responseType);
    if (options.responseType === void 0) {
      options.responseType = "text";
    }
    const { retry } = options;
    if (defaults) {
      options.retry = { ...defaults.retry };
    } else {
      options.retry = {
        calculateDelay: (retryObject) => retryObject.computedValue,
        limit: 0,
        methods: [],
        statusCodes: [],
        errorCodes: [],
        maxRetryAfter: void 0
      };
    }
    if (is_1.default.object(retry)) {
      options.retry = {
        ...options.retry,
        ...retry
      };
      options.retry.methods = [...new Set(options.retry.methods.map((method) => method.toUpperCase()))];
      options.retry.statusCodes = [...new Set(options.retry.statusCodes)];
      options.retry.errorCodes = [...new Set(options.retry.errorCodes)];
    } else if (is_1.default.number(retry)) {
      options.retry.limit = retry;
    }
    if (is_1.default.undefined(options.retry.maxRetryAfter)) {
      options.retry.maxRetryAfter = Math.min(
        ...[options.timeout.request, options.timeout.connect].filter(is_1.default.number)
      );
    }
    if (is_1.default.object(options.pagination)) {
      if (defaults) {
        options.pagination = {
          ...defaults.pagination,
          ...options.pagination
        };
      }
      const { pagination } = options;
      if (!is_1.default.function_(pagination.transform)) {
        throw new Error("`options.pagination.transform` must be implemented");
      }
      if (!is_1.default.function_(pagination.shouldContinue)) {
        throw new Error("`options.pagination.shouldContinue` must be implemented");
      }
      if (!is_1.default.function_(pagination.filter)) {
        throw new TypeError("`options.pagination.filter` must be implemented");
      }
      if (!is_1.default.function_(pagination.paginate)) {
        throw new Error("`options.pagination.paginate` must be implemented");
      }
    }
    if (options.responseType === "json" && options.headers.accept === void 0) {
      options.headers.accept = "application/json";
    }
    return options;
  };
  normalizeArguments.default = normalizeArguments$1;
  return normalizeArguments;
}
var calculateRetryDelay = {};
var hasRequiredCalculateRetryDelay;
function requireCalculateRetryDelay() {
  if (hasRequiredCalculateRetryDelay) return calculateRetryDelay;
  hasRequiredCalculateRetryDelay = 1;
  Object.defineProperty(calculateRetryDelay, "__esModule", { value: true });
  calculateRetryDelay.retryAfterStatusCodes = void 0;
  calculateRetryDelay.retryAfterStatusCodes = /* @__PURE__ */ new Set([413, 429, 503]);
  const calculateRetryDelay$1 = ({ attemptCount, retryOptions, error, retryAfter }) => {
    if (attemptCount > retryOptions.limit) {
      return 0;
    }
    const hasMethod = retryOptions.methods.includes(error.options.method);
    const hasErrorCode = retryOptions.errorCodes.includes(error.code);
    const hasStatusCode = error.response && retryOptions.statusCodes.includes(error.response.statusCode);
    if (!hasMethod || !hasErrorCode && !hasStatusCode) {
      return 0;
    }
    if (error.response) {
      if (retryAfter) {
        if (retryOptions.maxRetryAfter === void 0 || retryAfter > retryOptions.maxRetryAfter) {
          return 0;
        }
        return retryAfter;
      }
      if (error.response.statusCode === 413) {
        return 0;
      }
    }
    const noise = Math.random() * 100;
    return 2 ** (attemptCount - 1) * 1e3 + noise;
  };
  calculateRetryDelay.default = calculateRetryDelay$1;
  return calculateRetryDelay;
}
var hasRequiredCore;
function requireCore() {
  if (hasRequiredCore) return core;
  hasRequiredCore = 1;
  (function(exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.UnsupportedProtocolError = exports2.ReadError = exports2.TimeoutError = exports2.UploadError = exports2.CacheError = exports2.HTTPError = exports2.MaxRedirectsError = exports2.RequestError = exports2.setNonEnumerableProperties = exports2.knownHookEvents = exports2.withoutBody = exports2.kIsNormalizedAlready = void 0;
    const util_1 = require$$1$1;
    const stream_1 = require$$0$3;
    const fs_1 = fs;
    const url_1 = require$$0$4;
    const http = require$$4;
    const http_1 = require$$4;
    const https = require$$1$4;
    const http_timer_1 = requireSource$3();
    const cacheable_lookup_1 = requireSource$2();
    const CacheableRequest = requireSrc();
    const decompressResponse2 = requireDecompressResponse();
    const http2wrapper = requireSource$1();
    const lowercaseKeys2 = requireLowercaseKeys();
    const is_1 = /* @__PURE__ */ requireDist();
    const get_body_size_1 = /* @__PURE__ */ requireGetBodySize();
    const is_form_data_1 = /* @__PURE__ */ requireIsFormData();
    const proxy_events_1 = /* @__PURE__ */ requireProxyEvents();
    const timed_out_1 = /* @__PURE__ */ requireTimedOut();
    const url_to_options_1 = /* @__PURE__ */ requireUrlToOptions();
    const options_to_url_1 = /* @__PURE__ */ requireOptionsToUrl();
    const weakable_map_1 = /* @__PURE__ */ requireWeakableMap();
    const get_buffer_1 = /* @__PURE__ */ requireGetBuffer();
    const dns_ip_version_1 = /* @__PURE__ */ requireDnsIpVersion();
    const is_response_ok_1 = /* @__PURE__ */ requireIsResponseOk();
    const deprecation_warning_1 = /* @__PURE__ */ requireDeprecationWarning();
    const normalize_arguments_1 = /* @__PURE__ */ requireNormalizeArguments();
    const calculate_retry_delay_1 = /* @__PURE__ */ requireCalculateRetryDelay();
    let globalDnsCache;
    const kRequest = Symbol("request");
    const kResponse = Symbol("response");
    const kResponseSize = Symbol("responseSize");
    const kDownloadedSize = Symbol("downloadedSize");
    const kBodySize = Symbol("bodySize");
    const kUploadedSize = Symbol("uploadedSize");
    const kServerResponsesPiped = Symbol("serverResponsesPiped");
    const kUnproxyEvents = Symbol("unproxyEvents");
    const kIsFromCache = Symbol("isFromCache");
    const kCancelTimeouts = Symbol("cancelTimeouts");
    const kStartedReading = Symbol("startedReading");
    const kStopReading = Symbol("stopReading");
    const kTriggerRead = Symbol("triggerRead");
    const kBody = Symbol("body");
    const kJobs = Symbol("jobs");
    const kOriginalResponse = Symbol("originalResponse");
    const kRetryTimeout = Symbol("retryTimeout");
    exports2.kIsNormalizedAlready = Symbol("isNormalizedAlready");
    const supportsBrotli = is_1.default.string(process.versions.brotli);
    exports2.withoutBody = /* @__PURE__ */ new Set(["GET", "HEAD"]);
    exports2.knownHookEvents = [
      "init",
      "beforeRequest",
      "beforeRedirect",
      "beforeError",
      "beforeRetry",
      // Promise-Only
      "afterResponse"
    ];
    function validateSearchParameters(searchParameters) {
      for (const key in searchParameters) {
        const value = searchParameters[key];
        if (!is_1.default.string(value) && !is_1.default.number(value) && !is_1.default.boolean(value) && !is_1.default.null_(value) && !is_1.default.undefined(value)) {
          throw new TypeError(`The \`searchParams\` value '${String(value)}' must be a string, number, boolean or null`);
        }
      }
    }
    function isClientRequest(clientRequest2) {
      return is_1.default.object(clientRequest2) && !("statusCode" in clientRequest2);
    }
    const cacheableStore = new weakable_map_1.default();
    const waitForOpenFile = async (file) => new Promise((resolve, reject) => {
      const onError = (error) => {
        reject(error);
      };
      if (!file.pending) {
        resolve();
      }
      file.once("error", onError);
      file.once("ready", () => {
        file.off("error", onError);
        resolve();
      });
    });
    const redirectCodes = /* @__PURE__ */ new Set([300, 301, 302, 303, 304, 307, 308]);
    const nonEnumerableProperties = [
      "context",
      "body",
      "json",
      "form"
    ];
    exports2.setNonEnumerableProperties = (sources, to) => {
      const properties = {};
      for (const source2 of sources) {
        if (!source2) {
          continue;
        }
        for (const name of nonEnumerableProperties) {
          if (!(name in source2)) {
            continue;
          }
          properties[name] = {
            writable: true,
            configurable: true,
            enumerable: false,
            // @ts-expect-error TS doesn't see the check above
            value: source2[name]
          };
        }
      }
      Object.defineProperties(to, properties);
    };
    class RequestError extends Error {
      constructor(message, error, self2) {
        var _a, _b;
        super(message);
        Error.captureStackTrace(this, this.constructor);
        this.name = "RequestError";
        this.code = (_a = error.code) !== null && _a !== void 0 ? _a : "ERR_GOT_REQUEST_ERROR";
        if (self2 instanceof Request) {
          Object.defineProperty(this, "request", {
            enumerable: false,
            value: self2
          });
          Object.defineProperty(this, "response", {
            enumerable: false,
            value: self2[kResponse]
          });
          Object.defineProperty(this, "options", {
            // This fails because of TS 3.7.2 useDefineForClassFields
            // Ref: https://github.com/microsoft/TypeScript/issues/34972
            enumerable: false,
            value: self2.options
          });
        } else {
          Object.defineProperty(this, "options", {
            // This fails because of TS 3.7.2 useDefineForClassFields
            // Ref: https://github.com/microsoft/TypeScript/issues/34972
            enumerable: false,
            value: self2
          });
        }
        this.timings = (_b = this.request) === null || _b === void 0 ? void 0 : _b.timings;
        if (is_1.default.string(error.stack) && is_1.default.string(this.stack)) {
          const indexOfMessage = this.stack.indexOf(this.message) + this.message.length;
          const thisStackTrace = this.stack.slice(indexOfMessage).split("\n").reverse();
          const errorStackTrace = error.stack.slice(error.stack.indexOf(error.message) + error.message.length).split("\n").reverse();
          while (errorStackTrace.length !== 0 && errorStackTrace[0] === thisStackTrace[0]) {
            thisStackTrace.shift();
          }
          this.stack = `${this.stack.slice(0, indexOfMessage)}${thisStackTrace.reverse().join("\n")}${errorStackTrace.reverse().join("\n")}`;
        }
      }
    }
    exports2.RequestError = RequestError;
    class MaxRedirectsError extends RequestError {
      constructor(request) {
        super(`Redirected ${request.options.maxRedirects} times. Aborting.`, {}, request);
        this.name = "MaxRedirectsError";
        this.code = "ERR_TOO_MANY_REDIRECTS";
      }
    }
    exports2.MaxRedirectsError = MaxRedirectsError;
    class HTTPError extends RequestError {
      constructor(response) {
        super(`Response code ${response.statusCode} (${response.statusMessage})`, {}, response.request);
        this.name = "HTTPError";
        this.code = "ERR_NON_2XX_3XX_RESPONSE";
      }
    }
    exports2.HTTPError = HTTPError;
    class CacheError extends RequestError {
      constructor(error, request) {
        super(error.message, error, request);
        this.name = "CacheError";
        this.code = this.code === "ERR_GOT_REQUEST_ERROR" ? "ERR_CACHE_ACCESS" : this.code;
      }
    }
    exports2.CacheError = CacheError;
    class UploadError extends RequestError {
      constructor(error, request) {
        super(error.message, error, request);
        this.name = "UploadError";
        this.code = this.code === "ERR_GOT_REQUEST_ERROR" ? "ERR_UPLOAD" : this.code;
      }
    }
    exports2.UploadError = UploadError;
    class TimeoutError extends RequestError {
      constructor(error, timings, request) {
        super(error.message, error, request);
        this.name = "TimeoutError";
        this.event = error.event;
        this.timings = timings;
      }
    }
    exports2.TimeoutError = TimeoutError;
    class ReadError extends RequestError {
      constructor(error, request) {
        super(error.message, error, request);
        this.name = "ReadError";
        this.code = this.code === "ERR_GOT_REQUEST_ERROR" ? "ERR_READING_RESPONSE_STREAM" : this.code;
      }
    }
    exports2.ReadError = ReadError;
    class UnsupportedProtocolError extends RequestError {
      constructor(options) {
        super(`Unsupported protocol "${options.url.protocol}"`, {}, options);
        this.name = "UnsupportedProtocolError";
        this.code = "ERR_UNSUPPORTED_PROTOCOL";
      }
    }
    exports2.UnsupportedProtocolError = UnsupportedProtocolError;
    const proxiedRequestEvents = [
      "socket",
      "connect",
      "continue",
      "information",
      "upgrade",
      "timeout"
    ];
    class Request extends stream_1.Duplex {
      constructor(url, options = {}, defaults) {
        super({
          // This must be false, to enable throwing after destroy
          // It is used for retry logic in Promise API
          autoDestroy: false,
          // It needs to be zero because we're just proxying the data to another stream
          highWaterMark: 0
        });
        this[kDownloadedSize] = 0;
        this[kUploadedSize] = 0;
        this.requestInitialized = false;
        this[kServerResponsesPiped] = /* @__PURE__ */ new Set();
        this.redirects = [];
        this[kStopReading] = false;
        this[kTriggerRead] = false;
        this[kJobs] = [];
        this.retryCount = 0;
        this._progressCallbacks = [];
        const unlockWrite = () => this._unlockWrite();
        const lockWrite = () => this._lockWrite();
        this.on("pipe", (source2) => {
          source2.prependListener("data", unlockWrite);
          source2.on("data", lockWrite);
          source2.prependListener("end", unlockWrite);
          source2.on("end", lockWrite);
        });
        this.on("unpipe", (source2) => {
          source2.off("data", unlockWrite);
          source2.off("data", lockWrite);
          source2.off("end", unlockWrite);
          source2.off("end", lockWrite);
        });
        this.on("pipe", (source2) => {
          if (source2 instanceof http_1.IncomingMessage) {
            this.options.headers = {
              ...source2.headers,
              ...this.options.headers
            };
          }
        });
        const { json, body, form } = options;
        if (json || body || form) {
          this._lockWrite();
        }
        if (exports2.kIsNormalizedAlready in options) {
          this.options = options;
        } else {
          try {
            this.options = this.constructor.normalizeArguments(url, options, defaults);
          } catch (error) {
            if (is_1.default.nodeStream(options.body)) {
              options.body.destroy();
            }
            this.destroy(error);
            return;
          }
        }
        (async () => {
          var _a;
          try {
            if (this.options.body instanceof fs_1.ReadStream) {
              await waitForOpenFile(this.options.body);
            }
            const { url: normalizedURL } = this.options;
            if (!normalizedURL) {
              throw new TypeError("Missing `url` property");
            }
            this.requestUrl = normalizedURL.toString();
            decodeURI(this.requestUrl);
            await this._finalizeBody();
            await this._makeRequest();
            if (this.destroyed) {
              (_a = this[kRequest]) === null || _a === void 0 ? void 0 : _a.destroy();
              return;
            }
            for (const job of this[kJobs]) {
              job();
            }
            this[kJobs].length = 0;
            this.requestInitialized = true;
          } catch (error) {
            if (error instanceof RequestError) {
              this._beforeError(error);
              return;
            }
            if (!this.destroyed) {
              this.destroy(error);
            }
          }
        })();
      }
      static normalizeArguments(url, options, defaults) {
        var _a, _b, _c, _d, _e;
        const rawOptions = options;
        if (is_1.default.object(url) && !is_1.default.urlInstance(url)) {
          options = { ...defaults, ...url, ...options };
        } else {
          if (url && options && options.url !== void 0) {
            throw new TypeError("The `url` option is mutually exclusive with the `input` argument");
          }
          options = { ...defaults, ...options };
          if (url !== void 0) {
            options.url = url;
          }
          if (is_1.default.urlInstance(options.url)) {
            options.url = new url_1.URL(options.url.toString());
          }
        }
        if (options.cache === false) {
          options.cache = void 0;
        }
        if (options.dnsCache === false) {
          options.dnsCache = void 0;
        }
        is_1.assert.any([is_1.default.string, is_1.default.undefined], options.method);
        is_1.assert.any([is_1.default.object, is_1.default.undefined], options.headers);
        is_1.assert.any([is_1.default.string, is_1.default.urlInstance, is_1.default.undefined], options.prefixUrl);
        is_1.assert.any([is_1.default.object, is_1.default.undefined], options.cookieJar);
        is_1.assert.any([is_1.default.object, is_1.default.string, is_1.default.undefined], options.searchParams);
        is_1.assert.any([is_1.default.object, is_1.default.string, is_1.default.undefined], options.cache);
        is_1.assert.any([is_1.default.object, is_1.default.number, is_1.default.undefined], options.timeout);
        is_1.assert.any([is_1.default.object, is_1.default.undefined], options.context);
        is_1.assert.any([is_1.default.object, is_1.default.undefined], options.hooks);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.decompress);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.ignoreInvalidCookies);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.followRedirect);
        is_1.assert.any([is_1.default.number, is_1.default.undefined], options.maxRedirects);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.throwHttpErrors);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.http2);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.allowGetBody);
        is_1.assert.any([is_1.default.string, is_1.default.undefined], options.localAddress);
        is_1.assert.any([dns_ip_version_1.isDnsLookupIpVersion, is_1.default.undefined], options.dnsLookupIpVersion);
        is_1.assert.any([is_1.default.object, is_1.default.undefined], options.https);
        is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.rejectUnauthorized);
        if (options.https) {
          is_1.assert.any([is_1.default.boolean, is_1.default.undefined], options.https.rejectUnauthorized);
          is_1.assert.any([is_1.default.function_, is_1.default.undefined], options.https.checkServerIdentity);
          is_1.assert.any([is_1.default.string, is_1.default.object, is_1.default.array, is_1.default.undefined], options.https.certificateAuthority);
          is_1.assert.any([is_1.default.string, is_1.default.object, is_1.default.array, is_1.default.undefined], options.https.key);
          is_1.assert.any([is_1.default.string, is_1.default.object, is_1.default.array, is_1.default.undefined], options.https.certificate);
          is_1.assert.any([is_1.default.string, is_1.default.undefined], options.https.passphrase);
          is_1.assert.any([is_1.default.string, is_1.default.buffer, is_1.default.array, is_1.default.undefined], options.https.pfx);
        }
        is_1.assert.any([is_1.default.object, is_1.default.undefined], options.cacheOptions);
        if (is_1.default.string(options.method)) {
          options.method = options.method.toUpperCase();
        } else {
          options.method = "GET";
        }
        if (options.headers === (defaults === null || defaults === void 0 ? void 0 : defaults.headers)) {
          options.headers = { ...options.headers };
        } else {
          options.headers = lowercaseKeys2({ ...defaults === null || defaults === void 0 ? void 0 : defaults.headers, ...options.headers });
        }
        if ("slashes" in options) {
          throw new TypeError("The legacy `url.Url` has been deprecated. Use `URL` instead.");
        }
        if ("auth" in options) {
          throw new TypeError("Parameter `auth` is deprecated. Use `username` / `password` instead.");
        }
        if ("searchParams" in options) {
          if (options.searchParams && options.searchParams !== (defaults === null || defaults === void 0 ? void 0 : defaults.searchParams)) {
            let searchParameters;
            if (is_1.default.string(options.searchParams) || options.searchParams instanceof url_1.URLSearchParams) {
              searchParameters = new url_1.URLSearchParams(options.searchParams);
            } else {
              validateSearchParameters(options.searchParams);
              searchParameters = new url_1.URLSearchParams();
              for (const key in options.searchParams) {
                const value = options.searchParams[key];
                if (value === null) {
                  searchParameters.append(key, "");
                } else if (value !== void 0) {
                  searchParameters.append(key, value);
                }
              }
            }
            (_a = defaults === null || defaults === void 0 ? void 0 : defaults.searchParams) === null || _a === void 0 ? void 0 : _a.forEach((value, key) => {
              if (!searchParameters.has(key)) {
                searchParameters.append(key, value);
              }
            });
            options.searchParams = searchParameters;
          }
        }
        options.username = (_b = options.username) !== null && _b !== void 0 ? _b : "";
        options.password = (_c = options.password) !== null && _c !== void 0 ? _c : "";
        if (is_1.default.undefined(options.prefixUrl)) {
          options.prefixUrl = (_d = defaults === null || defaults === void 0 ? void 0 : defaults.prefixUrl) !== null && _d !== void 0 ? _d : "";
        } else {
          options.prefixUrl = options.prefixUrl.toString();
          if (options.prefixUrl !== "" && !options.prefixUrl.endsWith("/")) {
            options.prefixUrl += "/";
          }
        }
        if (is_1.default.string(options.url)) {
          if (options.url.startsWith("/")) {
            throw new Error("`input` must not start with a slash when using `prefixUrl`");
          }
          options.url = options_to_url_1.default(options.prefixUrl + options.url, options);
        } else if (is_1.default.undefined(options.url) && options.prefixUrl !== "" || options.protocol) {
          options.url = options_to_url_1.default(options.prefixUrl, options);
        }
        if (options.url) {
          if ("port" in options) {
            delete options.port;
          }
          let { prefixUrl } = options;
          Object.defineProperty(options, "prefixUrl", {
            set: (value) => {
              const url2 = options.url;
              if (!url2.href.startsWith(value)) {
                throw new Error(`Cannot change \`prefixUrl\` from ${prefixUrl} to ${value}: ${url2.href}`);
              }
              options.url = new url_1.URL(value + url2.href.slice(prefixUrl.length));
              prefixUrl = value;
            },
            get: () => prefixUrl
          });
          let { protocol } = options.url;
          if (protocol === "unix:") {
            protocol = "http:";
            options.url = new url_1.URL(`http://unix${options.url.pathname}${options.url.search}`);
          }
          if (options.searchParams) {
            options.url.search = options.searchParams.toString();
          }
          if (protocol !== "http:" && protocol !== "https:") {
            throw new UnsupportedProtocolError(options);
          }
          if (options.username === "") {
            options.username = options.url.username;
          } else {
            options.url.username = options.username;
          }
          if (options.password === "") {
            options.password = options.url.password;
          } else {
            options.url.password = options.password;
          }
        }
        const { cookieJar } = options;
        if (cookieJar) {
          let { setCookie, getCookieString } = cookieJar;
          is_1.assert.function_(setCookie);
          is_1.assert.function_(getCookieString);
          if (setCookie.length === 4 && getCookieString.length === 0) {
            setCookie = util_1.promisify(setCookie.bind(options.cookieJar));
            getCookieString = util_1.promisify(getCookieString.bind(options.cookieJar));
            options.cookieJar = {
              setCookie,
              getCookieString
            };
          }
        }
        const { cache } = options;
        if (cache) {
          if (!cacheableStore.has(cache)) {
            cacheableStore.set(cache, new CacheableRequest((requestOptions, handler) => {
              const result = requestOptions[kRequest](requestOptions, handler);
              if (is_1.default.promise(result)) {
                result.once = (event, handler2) => {
                  if (event === "error") {
                    result.catch(handler2);
                  } else if (event === "abort") {
                    (async () => {
                      try {
                        const request = await result;
                        request.once("abort", handler2);
                      } catch (_a2) {
                      }
                    })();
                  } else {
                    throw new Error(`Unknown HTTP2 promise event: ${event}`);
                  }
                  return result;
                };
              }
              return result;
            }, cache));
          }
        }
        options.cacheOptions = { ...options.cacheOptions };
        if (options.dnsCache === true) {
          if (!globalDnsCache) {
            globalDnsCache = new cacheable_lookup_1.default();
          }
          options.dnsCache = globalDnsCache;
        } else if (!is_1.default.undefined(options.dnsCache) && !options.dnsCache.lookup) {
          throw new TypeError(`Parameter \`dnsCache\` must be a CacheableLookup instance or a boolean, got ${is_1.default(options.dnsCache)}`);
        }
        if (is_1.default.number(options.timeout)) {
          options.timeout = { request: options.timeout };
        } else if (defaults && options.timeout !== defaults.timeout) {
          options.timeout = {
            ...defaults.timeout,
            ...options.timeout
          };
        } else {
          options.timeout = { ...options.timeout };
        }
        if (!options.context) {
          options.context = {};
        }
        const areHooksDefault = options.hooks === (defaults === null || defaults === void 0 ? void 0 : defaults.hooks);
        options.hooks = { ...options.hooks };
        for (const event of exports2.knownHookEvents) {
          if (event in options.hooks) {
            if (is_1.default.array(options.hooks[event])) {
              options.hooks[event] = [...options.hooks[event]];
            } else {
              throw new TypeError(`Parameter \`${event}\` must be an Array, got ${is_1.default(options.hooks[event])}`);
            }
          } else {
            options.hooks[event] = [];
          }
        }
        if (defaults && !areHooksDefault) {
          for (const event of exports2.knownHookEvents) {
            const defaultHooks = defaults.hooks[event];
            if (defaultHooks.length > 0) {
              options.hooks[event] = [
                ...defaults.hooks[event],
                ...options.hooks[event]
              ];
            }
          }
        }
        if ("family" in options) {
          deprecation_warning_1.default('"options.family" was never documented, please use "options.dnsLookupIpVersion"');
        }
        if (defaults === null || defaults === void 0 ? void 0 : defaults.https) {
          options.https = { ...defaults.https, ...options.https };
        }
        if ("rejectUnauthorized" in options) {
          deprecation_warning_1.default('"options.rejectUnauthorized" is now deprecated, please use "options.https.rejectUnauthorized"');
        }
        if ("checkServerIdentity" in options) {
          deprecation_warning_1.default('"options.checkServerIdentity" was never documented, please use "options.https.checkServerIdentity"');
        }
        if ("ca" in options) {
          deprecation_warning_1.default('"options.ca" was never documented, please use "options.https.certificateAuthority"');
        }
        if ("key" in options) {
          deprecation_warning_1.default('"options.key" was never documented, please use "options.https.key"');
        }
        if ("cert" in options) {
          deprecation_warning_1.default('"options.cert" was never documented, please use "options.https.certificate"');
        }
        if ("passphrase" in options) {
          deprecation_warning_1.default('"options.passphrase" was never documented, please use "options.https.passphrase"');
        }
        if ("pfx" in options) {
          deprecation_warning_1.default('"options.pfx" was never documented, please use "options.https.pfx"');
        }
        if ("followRedirects" in options) {
          throw new TypeError("The `followRedirects` option does not exist. Use `followRedirect` instead.");
        }
        if (options.agent) {
          for (const key in options.agent) {
            if (key !== "http" && key !== "https" && key !== "http2") {
              throw new TypeError(`Expected the \`options.agent\` properties to be \`http\`, \`https\` or \`http2\`, got \`${key}\``);
            }
          }
        }
        options.maxRedirects = (_e = options.maxRedirects) !== null && _e !== void 0 ? _e : 0;
        exports2.setNonEnumerableProperties([defaults, rawOptions], options);
        return normalize_arguments_1.default(options, defaults);
      }
      _lockWrite() {
        const onLockedWrite = () => {
          throw new TypeError("The payload has been already provided");
        };
        this.write = onLockedWrite;
        this.end = onLockedWrite;
      }
      _unlockWrite() {
        this.write = super.write;
        this.end = super.end;
      }
      async _finalizeBody() {
        const { options } = this;
        const { headers } = options;
        const isForm = !is_1.default.undefined(options.form);
        const isJSON = !is_1.default.undefined(options.json);
        const isBody = !is_1.default.undefined(options.body);
        const hasPayload = isForm || isJSON || isBody;
        const cannotHaveBody = exports2.withoutBody.has(options.method) && !(options.method === "GET" && options.allowGetBody);
        this._cannotHaveBody = cannotHaveBody;
        if (hasPayload) {
          if (cannotHaveBody) {
            throw new TypeError(`The \`${options.method}\` method cannot be used with a body`);
          }
          if ([isBody, isForm, isJSON].filter((isTrue) => isTrue).length > 1) {
            throw new TypeError("The `body`, `json` and `form` options are mutually exclusive");
          }
          if (isBody && !(options.body instanceof stream_1.Readable) && !is_1.default.string(options.body) && !is_1.default.buffer(options.body) && !is_form_data_1.default(options.body)) {
            throw new TypeError("The `body` option must be a stream.Readable, string or Buffer");
          }
          if (isForm && !is_1.default.object(options.form)) {
            throw new TypeError("The `form` option must be an Object");
          }
          {
            const noContentType = !is_1.default.string(headers["content-type"]);
            if (isBody) {
              if (is_form_data_1.default(options.body) && noContentType) {
                headers["content-type"] = `multipart/form-data; boundary=${options.body.getBoundary()}`;
              }
              this[kBody] = options.body;
            } else if (isForm) {
              if (noContentType) {
                headers["content-type"] = "application/x-www-form-urlencoded";
              }
              this[kBody] = new url_1.URLSearchParams(options.form).toString();
            } else {
              if (noContentType) {
                headers["content-type"] = "application/json";
              }
              this[kBody] = options.stringifyJson(options.json);
            }
            const uploadBodySize = await get_body_size_1.default(this[kBody], options.headers);
            if (is_1.default.undefined(headers["content-length"]) && is_1.default.undefined(headers["transfer-encoding"])) {
              if (!cannotHaveBody && !is_1.default.undefined(uploadBodySize)) {
                headers["content-length"] = String(uploadBodySize);
              }
            }
          }
        } else if (cannotHaveBody) {
          this._lockWrite();
        } else {
          this._unlockWrite();
        }
        this[kBodySize] = Number(headers["content-length"]) || void 0;
      }
      async _onResponseBase(response) {
        const { options } = this;
        const { url } = options;
        this[kOriginalResponse] = response;
        if (options.decompress) {
          response = decompressResponse2(response);
        }
        const statusCode = response.statusCode;
        const typedResponse = response;
        typedResponse.statusMessage = typedResponse.statusMessage ? typedResponse.statusMessage : http.STATUS_CODES[statusCode];
        typedResponse.url = options.url.toString();
        typedResponse.requestUrl = this.requestUrl;
        typedResponse.redirectUrls = this.redirects;
        typedResponse.request = this;
        typedResponse.isFromCache = response.fromCache || false;
        typedResponse.ip = this.ip;
        typedResponse.retryCount = this.retryCount;
        this[kIsFromCache] = typedResponse.isFromCache;
        this[kResponseSize] = Number(response.headers["content-length"]) || void 0;
        this[kResponse] = response;
        response.once("end", () => {
          this[kResponseSize] = this[kDownloadedSize];
          this.emit("downloadProgress", this.downloadProgress);
        });
        response.once("error", (error) => {
          response.destroy();
          this._beforeError(new ReadError(error, this));
        });
        response.once("aborted", () => {
          this._beforeError(new ReadError({
            name: "Error",
            message: "The server aborted pending request",
            code: "ECONNRESET"
          }, this));
        });
        this.emit("downloadProgress", this.downloadProgress);
        const rawCookies = response.headers["set-cookie"];
        if (is_1.default.object(options.cookieJar) && rawCookies) {
          let promises = rawCookies.map(async (rawCookie) => options.cookieJar.setCookie(rawCookie, url.toString()));
          if (options.ignoreInvalidCookies) {
            promises = promises.map(async (p) => p.catch(() => {
            }));
          }
          try {
            await Promise.all(promises);
          } catch (error) {
            this._beforeError(error);
            return;
          }
        }
        if (options.followRedirect && response.headers.location && redirectCodes.has(statusCode)) {
          response.resume();
          if (this[kRequest]) {
            this[kCancelTimeouts]();
            delete this[kRequest];
            this[kUnproxyEvents]();
          }
          const shouldBeGet = statusCode === 303 && options.method !== "GET" && options.method !== "HEAD";
          if (shouldBeGet || !options.methodRewriting) {
            options.method = "GET";
            if ("body" in options) {
              delete options.body;
            }
            if ("json" in options) {
              delete options.json;
            }
            if ("form" in options) {
              delete options.form;
            }
            this[kBody] = void 0;
            delete options.headers["content-length"];
          }
          if (this.redirects.length >= options.maxRedirects) {
            this._beforeError(new MaxRedirectsError(this));
            return;
          }
          try {
            let isUnixSocketURL = function(url2) {
              return url2.protocol === "unix:" || url2.hostname === "unix";
            };
            const redirectBuffer = Buffer.from(response.headers.location, "binary").toString();
            const redirectUrl = new url_1.URL(redirectBuffer, url);
            const redirectString = redirectUrl.toString();
            decodeURI(redirectString);
            if (!isUnixSocketURL(url) && isUnixSocketURL(redirectUrl)) {
              this._beforeError(new RequestError("Cannot redirect to UNIX socket", {}, this));
              return;
            }
            if (redirectUrl.hostname !== url.hostname || redirectUrl.port !== url.port) {
              if ("host" in options.headers) {
                delete options.headers.host;
              }
              if ("cookie" in options.headers) {
                delete options.headers.cookie;
              }
              if ("authorization" in options.headers) {
                delete options.headers.authorization;
              }
              if (options.username || options.password) {
                options.username = "";
                options.password = "";
              }
            } else {
              redirectUrl.username = options.username;
              redirectUrl.password = options.password;
            }
            this.redirects.push(redirectString);
            options.url = redirectUrl;
            for (const hook of options.hooks.beforeRedirect) {
              await hook(options, typedResponse);
            }
            this.emit("redirect", typedResponse, options);
            await this._makeRequest();
          } catch (error) {
            this._beforeError(error);
            return;
          }
          return;
        }
        if (options.isStream && options.throwHttpErrors && !is_response_ok_1.isResponseOk(typedResponse)) {
          this._beforeError(new HTTPError(typedResponse));
          return;
        }
        response.on("readable", () => {
          if (this[kTriggerRead]) {
            this._read();
          }
        });
        this.on("resume", () => {
          response.resume();
        });
        this.on("pause", () => {
          response.pause();
        });
        response.once("end", () => {
          this.push(null);
        });
        this.emit("response", response);
        for (const destination of this[kServerResponsesPiped]) {
          if (destination.headersSent) {
            continue;
          }
          for (const key in response.headers) {
            const isAllowed = options.decompress ? key !== "content-encoding" : true;
            const value = response.headers[key];
            if (isAllowed) {
              destination.setHeader(key, value);
            }
          }
          destination.statusCode = statusCode;
        }
      }
      async _onResponse(response) {
        try {
          await this._onResponseBase(response);
        } catch (error) {
          this._beforeError(error);
        }
      }
      _onRequest(request) {
        const { options } = this;
        const { timeout, url } = options;
        http_timer_1.default(request);
        this[kCancelTimeouts] = timed_out_1.default(request, timeout, url);
        const responseEventName = options.cache ? "cacheableResponse" : "response";
        request.once(responseEventName, (response) => {
          void this._onResponse(response);
        });
        request.once("error", (error) => {
          var _a;
          request.destroy();
          (_a = request.res) === null || _a === void 0 ? void 0 : _a.removeAllListeners("end");
          error = error instanceof timed_out_1.TimeoutError ? new TimeoutError(error, this.timings, this) : new RequestError(error.message, error, this);
          this._beforeError(error);
        });
        this[kUnproxyEvents] = proxy_events_1.default(request, this, proxiedRequestEvents);
        this[kRequest] = request;
        this.emit("uploadProgress", this.uploadProgress);
        const body = this[kBody];
        const currentRequest = this.redirects.length === 0 ? this : request;
        if (is_1.default.nodeStream(body)) {
          body.pipe(currentRequest);
          body.once("error", (error) => {
            this._beforeError(new UploadError(error, this));
          });
        } else {
          this._unlockWrite();
          if (!is_1.default.undefined(body)) {
            this._writeRequest(body, void 0, () => {
            });
            currentRequest.end();
            this._lockWrite();
          } else if (this._cannotHaveBody || this._noPipe) {
            currentRequest.end();
            this._lockWrite();
          }
        }
        this.emit("request", request);
      }
      async _createCacheableRequest(url, options) {
        return new Promise((resolve, reject) => {
          Object.assign(options, url_to_options_1.default(url));
          delete options.url;
          let request;
          const cacheRequest = cacheableStore.get(options.cache)(options, async (response) => {
            response._readableState.autoDestroy = false;
            if (request) {
              (await request).emit("cacheableResponse", response);
            }
            resolve(response);
          });
          options.url = url;
          cacheRequest.once("error", reject);
          cacheRequest.once("request", async (requestOrPromise) => {
            request = requestOrPromise;
            resolve(request);
          });
        });
      }
      async _makeRequest() {
        var _a, _b, _c, _d, _e;
        const { options } = this;
        const { headers } = options;
        for (const key in headers) {
          if (is_1.default.undefined(headers[key])) {
            delete headers[key];
          } else if (is_1.default.null_(headers[key])) {
            throw new TypeError(`Use \`undefined\` instead of \`null\` to delete the \`${key}\` header`);
          }
        }
        if (options.decompress && is_1.default.undefined(headers["accept-encoding"])) {
          headers["accept-encoding"] = supportsBrotli ? "gzip, deflate, br" : "gzip, deflate";
        }
        if (options.cookieJar) {
          const cookieString = await options.cookieJar.getCookieString(options.url.toString());
          if (is_1.default.nonEmptyString(cookieString)) {
            options.headers.cookie = cookieString;
          }
        }
        for (const hook of options.hooks.beforeRequest) {
          const result = await hook(options);
          if (!is_1.default.undefined(result)) {
            options.request = () => result;
            break;
          }
        }
        if (options.body && this[kBody] !== options.body) {
          this[kBody] = options.body;
        }
        const { agent: agent2, request, timeout, url } = options;
        if (options.dnsCache && !("lookup" in options)) {
          options.lookup = options.dnsCache.lookup;
        }
        if (url.hostname === "unix") {
          const matches = /(?<socketPath>.+?):(?<path>.+)/.exec(`${url.pathname}${url.search}`);
          if (matches === null || matches === void 0 ? void 0 : matches.groups) {
            const { socketPath, path: path2 } = matches.groups;
            Object.assign(options, {
              socketPath,
              path: path2,
              host: ""
            });
          }
        }
        const isHttps = url.protocol === "https:";
        let fallbackFn;
        if (options.http2) {
          fallbackFn = http2wrapper.auto;
        } else {
          fallbackFn = isHttps ? https.request : http.request;
        }
        const realFn = (_a = options.request) !== null && _a !== void 0 ? _a : fallbackFn;
        const fn = options.cache ? this._createCacheableRequest : realFn;
        if (agent2 && !options.http2) {
          options.agent = agent2[isHttps ? "https" : "http"];
        }
        options[kRequest] = realFn;
        delete options.request;
        delete options.timeout;
        const requestOptions = options;
        requestOptions.shared = (_b = options.cacheOptions) === null || _b === void 0 ? void 0 : _b.shared;
        requestOptions.cacheHeuristic = (_c = options.cacheOptions) === null || _c === void 0 ? void 0 : _c.cacheHeuristic;
        requestOptions.immutableMinTimeToLive = (_d = options.cacheOptions) === null || _d === void 0 ? void 0 : _d.immutableMinTimeToLive;
        requestOptions.ignoreCargoCult = (_e = options.cacheOptions) === null || _e === void 0 ? void 0 : _e.ignoreCargoCult;
        if (options.dnsLookupIpVersion !== void 0) {
          try {
            requestOptions.family = dns_ip_version_1.dnsLookupIpVersionToFamily(options.dnsLookupIpVersion);
          } catch (_f) {
            throw new Error("Invalid `dnsLookupIpVersion` option value");
          }
        }
        if (options.https) {
          if ("rejectUnauthorized" in options.https) {
            requestOptions.rejectUnauthorized = options.https.rejectUnauthorized;
          }
          if (options.https.checkServerIdentity) {
            requestOptions.checkServerIdentity = options.https.checkServerIdentity;
          }
          if (options.https.certificateAuthority) {
            requestOptions.ca = options.https.certificateAuthority;
          }
          if (options.https.certificate) {
            requestOptions.cert = options.https.certificate;
          }
          if (options.https.key) {
            requestOptions.key = options.https.key;
          }
          if (options.https.passphrase) {
            requestOptions.passphrase = options.https.passphrase;
          }
          if (options.https.pfx) {
            requestOptions.pfx = options.https.pfx;
          }
        }
        try {
          let requestOrResponse = await fn(url, requestOptions);
          if (is_1.default.undefined(requestOrResponse)) {
            requestOrResponse = fallbackFn(url, requestOptions);
          }
          options.request = request;
          options.timeout = timeout;
          options.agent = agent2;
          if (options.https) {
            if ("rejectUnauthorized" in options.https) {
              delete requestOptions.rejectUnauthorized;
            }
            if (options.https.checkServerIdentity) {
              delete requestOptions.checkServerIdentity;
            }
            if (options.https.certificateAuthority) {
              delete requestOptions.ca;
            }
            if (options.https.certificate) {
              delete requestOptions.cert;
            }
            if (options.https.key) {
              delete requestOptions.key;
            }
            if (options.https.passphrase) {
              delete requestOptions.passphrase;
            }
            if (options.https.pfx) {
              delete requestOptions.pfx;
            }
          }
          if (isClientRequest(requestOrResponse)) {
            this._onRequest(requestOrResponse);
          } else if (this.writable) {
            this.once("finish", () => {
              void this._onResponse(requestOrResponse);
            });
            this._unlockWrite();
            this.end();
            this._lockWrite();
          } else {
            void this._onResponse(requestOrResponse);
          }
        } catch (error) {
          if (error instanceof CacheableRequest.CacheError) {
            throw new CacheError(error, this);
          }
          throw new RequestError(error.message, error, this);
        }
      }
      async _error(error) {
        try {
          for (const hook of this.options.hooks.beforeError) {
            error = await hook(error);
          }
        } catch (error_) {
          error = new RequestError(error_.message, error_, this);
        }
        this.destroy(error);
      }
      _beforeError(error) {
        if (this[kStopReading]) {
          return;
        }
        const { options } = this;
        const retryCount = this.retryCount + 1;
        this[kStopReading] = true;
        if (!(error instanceof RequestError)) {
          error = new RequestError(error.message, error, this);
        }
        const typedError = error;
        const { response } = typedError;
        void (async () => {
          if (response && !response.body) {
            response.setEncoding(this._readableState.encoding);
            try {
              response.rawBody = await get_buffer_1.default(response);
              response.body = response.rawBody.toString();
            } catch (_a) {
            }
          }
          if (this.listenerCount("retry") !== 0) {
            let backoff;
            try {
              let retryAfter;
              if (response && "retry-after" in response.headers) {
                retryAfter = Number(response.headers["retry-after"]);
                if (Number.isNaN(retryAfter)) {
                  retryAfter = Date.parse(response.headers["retry-after"]) - Date.now();
                  if (retryAfter <= 0) {
                    retryAfter = 1;
                  }
                } else {
                  retryAfter *= 1e3;
                }
              }
              backoff = await options.retry.calculateDelay({
                attemptCount: retryCount,
                retryOptions: options.retry,
                error: typedError,
                retryAfter,
                computedValue: calculate_retry_delay_1.default({
                  attemptCount: retryCount,
                  retryOptions: options.retry,
                  error: typedError,
                  retryAfter,
                  computedValue: 0
                })
              });
            } catch (error_) {
              void this._error(new RequestError(error_.message, error_, this));
              return;
            }
            if (backoff) {
              const retry = async () => {
                try {
                  for (const hook of this.options.hooks.beforeRetry) {
                    await hook(this.options, typedError, retryCount);
                  }
                } catch (error_) {
                  void this._error(new RequestError(error_.message, error, this));
                  return;
                }
                if (this.destroyed) {
                  return;
                }
                this.destroy();
                this.emit("retry", retryCount, error);
              };
              this[kRetryTimeout] = setTimeout(retry, backoff);
              return;
            }
          }
          void this._error(typedError);
        })();
      }
      _read() {
        this[kTriggerRead] = true;
        const response = this[kResponse];
        if (response && !this[kStopReading]) {
          if (response.readableLength) {
            this[kTriggerRead] = false;
          }
          let data;
          while ((data = response.read()) !== null) {
            this[kDownloadedSize] += data.length;
            this[kStartedReading] = true;
            const progress = this.downloadProgress;
            if (progress.percent < 1) {
              this.emit("downloadProgress", progress);
            }
            this.push(data);
          }
        }
      }
      // Node.js 12 has incorrect types, so the encoding must be a string
      _write(chunk, encoding, callback) {
        const write = () => {
          this._writeRequest(chunk, encoding, callback);
        };
        if (this.requestInitialized) {
          write();
        } else {
          this[kJobs].push(write);
        }
      }
      _writeRequest(chunk, encoding, callback) {
        if (this[kRequest].destroyed) {
          return;
        }
        this._progressCallbacks.push(() => {
          this[kUploadedSize] += Buffer.byteLength(chunk, encoding);
          const progress = this.uploadProgress;
          if (progress.percent < 1) {
            this.emit("uploadProgress", progress);
          }
        });
        this[kRequest].write(chunk, encoding, (error) => {
          if (!error && this._progressCallbacks.length > 0) {
            this._progressCallbacks.shift()();
          }
          callback(error);
        });
      }
      _final(callback) {
        const endRequest = () => {
          while (this._progressCallbacks.length !== 0) {
            this._progressCallbacks.shift()();
          }
          if (!(kRequest in this)) {
            callback();
            return;
          }
          if (this[kRequest].destroyed) {
            callback();
            return;
          }
          this[kRequest].end((error) => {
            if (!error) {
              this[kBodySize] = this[kUploadedSize];
              this.emit("uploadProgress", this.uploadProgress);
              this[kRequest].emit("upload-complete");
            }
            callback(error);
          });
        };
        if (this.requestInitialized) {
          endRequest();
        } else {
          this[kJobs].push(endRequest);
        }
      }
      _destroy(error, callback) {
        var _a;
        this[kStopReading] = true;
        clearTimeout(this[kRetryTimeout]);
        if (kRequest in this) {
          this[kCancelTimeouts]();
          if (!((_a = this[kResponse]) === null || _a === void 0 ? void 0 : _a.complete)) {
            this[kRequest].destroy();
          }
        }
        if (error !== null && !is_1.default.undefined(error) && !(error instanceof RequestError)) {
          error = new RequestError(error.message, error, this);
        }
        callback(error);
      }
      get _isAboutToError() {
        return this[kStopReading];
      }
      /**
      The remote IP address.
      */
      get ip() {
        var _a;
        return (_a = this.socket) === null || _a === void 0 ? void 0 : _a.remoteAddress;
      }
      /**
      Indicates whether the request has been aborted or not.
      */
      get aborted() {
        var _a, _b, _c;
        return ((_b = (_a = this[kRequest]) === null || _a === void 0 ? void 0 : _a.destroyed) !== null && _b !== void 0 ? _b : this.destroyed) && !((_c = this[kOriginalResponse]) === null || _c === void 0 ? void 0 : _c.complete);
      }
      get socket() {
        var _a, _b;
        return (_b = (_a = this[kRequest]) === null || _a === void 0 ? void 0 : _a.socket) !== null && _b !== void 0 ? _b : void 0;
      }
      /**
      Progress event for downloading (receiving a response).
      */
      get downloadProgress() {
        let percent;
        if (this[kResponseSize]) {
          percent = this[kDownloadedSize] / this[kResponseSize];
        } else if (this[kResponseSize] === this[kDownloadedSize]) {
          percent = 1;
        } else {
          percent = 0;
        }
        return {
          percent,
          transferred: this[kDownloadedSize],
          total: this[kResponseSize]
        };
      }
      /**
      Progress event for uploading (sending a request).
      */
      get uploadProgress() {
        let percent;
        if (this[kBodySize]) {
          percent = this[kUploadedSize] / this[kBodySize];
        } else if (this[kBodySize] === this[kUploadedSize]) {
          percent = 1;
        } else {
          percent = 0;
        }
        return {
          percent,
          transferred: this[kUploadedSize],
          total: this[kBodySize]
        };
      }
      /**
      		    The object contains the following properties:
      
      		    - `start` - Time when the request started.
      		    - `socket` - Time when a socket was assigned to the request.
      		    - `lookup` - Time when the DNS lookup finished.
      		    - `connect` - Time when the socket successfully connected.
      		    - `secureConnect` - Time when the socket securely connected.
      		    - `upload` - Time when the request finished uploading.
      		    - `response` - Time when the request fired `response` event.
      		    - `end` - Time when the response fired `end` event.
      		    - `error` - Time when the request fired `error` event.
      		    - `abort` - Time when the request fired `abort` event.
      		    - `phases`
      		        - `wait` - `timings.socket - timings.start`
      		        - `dns` - `timings.lookup - timings.socket`
      		        - `tcp` - `timings.connect - timings.lookup`
      		        - `tls` - `timings.secureConnect - timings.connect`
      		        - `request` - `timings.upload - (timings.secureConnect || timings.connect)`
      		        - `firstByte` - `timings.response - timings.upload`
      		        - `download` - `timings.end - timings.response`
      		        - `total` - `(timings.end || timings.error || timings.abort) - timings.start`
      
      		    If something has not been measured yet, it will be `undefined`.
      
      		    __Note__: The time is a `number` representing the milliseconds elapsed since the UNIX epoch.
      		    */
      get timings() {
        var _a;
        return (_a = this[kRequest]) === null || _a === void 0 ? void 0 : _a.timings;
      }
      /**
      Whether the response was retrieved from the cache.
      */
      get isFromCache() {
        return this[kIsFromCache];
      }
      pipe(destination, options) {
        if (this[kStartedReading]) {
          throw new Error("Failed to pipe. The response has been emitted already.");
        }
        if (destination instanceof http_1.ServerResponse) {
          this[kServerResponsesPiped].add(destination);
        }
        return super.pipe(destination, options);
      }
      unpipe(destination) {
        if (destination instanceof http_1.ServerResponse) {
          this[kServerResponsesPiped].delete(destination);
        }
        super.unpipe(destination);
        return this;
      }
    }
    exports2.default = Request;
  })(core);
  return core;
}
var hasRequiredTypes$1;
function requireTypes$1() {
  if (hasRequiredTypes$1) return types$1;
  hasRequiredTypes$1 = 1;
  (function(exports2) {
    var __createBinding = types$1 && types$1.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = types$1 && types$1.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CancelError = exports2.ParseError = void 0;
    const core_1 = /* @__PURE__ */ requireCore();
    class ParseError extends core_1.RequestError {
      constructor(error, response) {
        const { options } = response.request;
        super(`${error.message} in "${options.url.toString()}"`, error, response.request);
        this.name = "ParseError";
        this.code = this.code === "ERR_GOT_REQUEST_ERROR" ? "ERR_BODY_PARSE_FAILURE" : this.code;
      }
    }
    exports2.ParseError = ParseError;
    class CancelError extends core_1.RequestError {
      constructor(request) {
        super("Promise was canceled", {}, request);
        this.name = "CancelError";
        this.code = "ERR_CANCELED";
      }
      get isCanceled() {
        return true;
      }
    }
    exports2.CancelError = CancelError;
    __exportStar(/* @__PURE__ */ requireCore(), exports2);
  })(types$1);
  return types$1;
}
var parseBody = {};
var hasRequiredParseBody;
function requireParseBody() {
  if (hasRequiredParseBody) return parseBody;
  hasRequiredParseBody = 1;
  Object.defineProperty(parseBody, "__esModule", { value: true });
  const types_1 = /* @__PURE__ */ requireTypes$1();
  const parseBody$1 = (response, responseType, parseJson2, encoding) => {
    const { rawBody } = response;
    try {
      if (responseType === "text") {
        return rawBody.toString(encoding);
      }
      if (responseType === "json") {
        return rawBody.length === 0 ? "" : parseJson2(rawBody.toString());
      }
      if (responseType === "buffer") {
        return rawBody;
      }
      throw new types_1.ParseError({
        message: `Unknown body type '${responseType}'`,
        name: "Error"
      }, response);
    } catch (error) {
      throw new types_1.ParseError(error, response);
    }
  };
  parseBody.default = parseBody$1;
  return parseBody;
}
var hasRequiredAsPromise;
function requireAsPromise() {
  if (hasRequiredAsPromise) return asPromise;
  hasRequiredAsPromise = 1;
  (function(exports2) {
    var __createBinding = asPromise && asPromise.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = asPromise && asPromise.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    const events_1 = require$$0$1;
    const is_1 = /* @__PURE__ */ requireDist();
    const PCancelable = requirePCancelable();
    const types_1 = /* @__PURE__ */ requireTypes$1();
    const parse_body_1 = /* @__PURE__ */ requireParseBody();
    const core_1 = /* @__PURE__ */ requireCore();
    const proxy_events_1 = /* @__PURE__ */ requireProxyEvents();
    const get_buffer_1 = /* @__PURE__ */ requireGetBuffer();
    const is_response_ok_1 = /* @__PURE__ */ requireIsResponseOk();
    const proxiedRequestEvents = [
      "request",
      "response",
      "redirect",
      "uploadProgress",
      "downloadProgress"
    ];
    function asPromise$1(normalizedOptions) {
      let globalRequest;
      let globalResponse;
      const emitter = new events_1.EventEmitter();
      const promise = new PCancelable((resolve, reject, onCancel) => {
        const makeRequest = (retryCount) => {
          const request = new core_1.default(void 0, normalizedOptions);
          request.retryCount = retryCount;
          request._noPipe = true;
          onCancel(() => request.destroy());
          onCancel.shouldReject = false;
          onCancel(() => reject(new types_1.CancelError(request)));
          globalRequest = request;
          request.once("response", async (response) => {
            var _a;
            response.retryCount = retryCount;
            if (response.request.aborted) {
              return;
            }
            let rawBody;
            try {
              rawBody = await get_buffer_1.default(request);
              response.rawBody = rawBody;
            } catch (_b) {
              return;
            }
            if (request._isAboutToError) {
              return;
            }
            const contentEncoding = ((_a = response.headers["content-encoding"]) !== null && _a !== void 0 ? _a : "").toLowerCase();
            const isCompressed = ["gzip", "deflate", "br"].includes(contentEncoding);
            const { options } = request;
            if (isCompressed && !options.decompress) {
              response.body = rawBody;
            } else {
              try {
                response.body = parse_body_1.default(response, options.responseType, options.parseJson, options.encoding);
              } catch (error) {
                response.body = rawBody.toString();
                if (is_response_ok_1.isResponseOk(response)) {
                  request._beforeError(error);
                  return;
                }
              }
            }
            try {
              for (const [index, hook] of options.hooks.afterResponse.entries()) {
                response = await hook(response, async (updatedOptions) => {
                  const typedOptions = core_1.default.normalizeArguments(void 0, {
                    ...updatedOptions,
                    retry: {
                      calculateDelay: () => 0
                    },
                    throwHttpErrors: false,
                    resolveBodyOnly: false
                  }, options);
                  typedOptions.hooks.afterResponse = typedOptions.hooks.afterResponse.slice(0, index);
                  for (const hook2 of typedOptions.hooks.beforeRetry) {
                    await hook2(typedOptions);
                  }
                  const promise2 = asPromise$1(typedOptions);
                  onCancel(() => {
                    promise2.catch(() => {
                    });
                    promise2.cancel();
                  });
                  return promise2;
                });
              }
            } catch (error) {
              request._beforeError(new types_1.RequestError(error.message, error, request));
              return;
            }
            globalResponse = response;
            if (!is_response_ok_1.isResponseOk(response)) {
              request._beforeError(new types_1.HTTPError(response));
              return;
            }
            request.destroy();
            resolve(request.options.resolveBodyOnly ? response.body : response);
          });
          const onError = (error) => {
            if (promise.isCanceled) {
              return;
            }
            const { options } = request;
            if (error instanceof types_1.HTTPError && !options.throwHttpErrors) {
              const { response } = error;
              resolve(request.options.resolveBodyOnly ? response.body : response);
              return;
            }
            reject(error);
          };
          request.once("error", onError);
          const previousBody = request.options.body;
          request.once("retry", (newRetryCount, error) => {
            var _a, _b;
            if (previousBody === ((_a = error.request) === null || _a === void 0 ? void 0 : _a.options.body) && is_1.default.nodeStream((_b = error.request) === null || _b === void 0 ? void 0 : _b.options.body)) {
              onError(error);
              return;
            }
            makeRequest(newRetryCount);
          });
          proxy_events_1.default(request, emitter, proxiedRequestEvents);
        };
        makeRequest(0);
      });
      promise.on = (event, fn) => {
        emitter.on(event, fn);
        return promise;
      };
      const shortcut = (responseType) => {
        const newPromise = (async () => {
          await promise;
          const { options } = globalResponse.request;
          return parse_body_1.default(globalResponse, responseType, options.parseJson, options.encoding);
        })();
        Object.defineProperties(newPromise, Object.getOwnPropertyDescriptors(promise));
        return newPromise;
      };
      promise.json = () => {
        const { headers } = globalRequest.options;
        if (!globalRequest.writableFinished && headers.accept === void 0) {
          headers.accept = "application/json";
        }
        return shortcut("json");
      };
      promise.buffer = () => shortcut("buffer");
      promise.text = () => shortcut("text");
      return promise;
    }
    exports2.default = asPromise$1;
    __exportStar(/* @__PURE__ */ requireTypes$1(), exports2);
  })(asPromise);
  return asPromise;
}
var createRejection = {};
var hasRequiredCreateRejection;
function requireCreateRejection() {
  if (hasRequiredCreateRejection) return createRejection;
  hasRequiredCreateRejection = 1;
  Object.defineProperty(createRejection, "__esModule", { value: true });
  const types_1 = /* @__PURE__ */ requireTypes$1();
  function createRejection$1(error, ...beforeErrorGroups) {
    const promise = (async () => {
      if (error instanceof types_1.RequestError) {
        try {
          for (const hooks of beforeErrorGroups) {
            if (hooks) {
              for (const hook of hooks) {
                error = await hook(error);
              }
            }
          }
        } catch (error_) {
          error = error_;
        }
      }
      throw error;
    })();
    const returnPromise = () => promise;
    promise.json = returnPromise;
    promise.text = returnPromise;
    promise.buffer = returnPromise;
    promise.on = returnPromise;
    return promise;
  }
  createRejection.default = createRejection$1;
  return createRejection;
}
var deepFreeze = {};
var hasRequiredDeepFreeze;
function requireDeepFreeze() {
  if (hasRequiredDeepFreeze) return deepFreeze;
  hasRequiredDeepFreeze = 1;
  Object.defineProperty(deepFreeze, "__esModule", { value: true });
  const is_1 = /* @__PURE__ */ requireDist();
  function deepFreeze$1(object) {
    for (const value of Object.values(object)) {
      if (is_1.default.plainObject(value) || is_1.default.array(value)) {
        deepFreeze$1(value);
      }
    }
    return Object.freeze(object);
  }
  deepFreeze.default = deepFreeze$1;
  return deepFreeze;
}
var types = {};
var hasRequiredTypes;
function requireTypes() {
  if (hasRequiredTypes) return types;
  hasRequiredTypes = 1;
  Object.defineProperty(types, "__esModule", { value: true });
  return types;
}
var hasRequiredCreate;
function requireCreate() {
  if (hasRequiredCreate) return create;
  hasRequiredCreate = 1;
  (function(exports2) {
    var __createBinding = create && create.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = create && create.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.defaultHandler = void 0;
    const is_1 = /* @__PURE__ */ requireDist();
    const as_promise_1 = /* @__PURE__ */ requireAsPromise();
    const create_rejection_1 = /* @__PURE__ */ requireCreateRejection();
    const core_1 = /* @__PURE__ */ requireCore();
    const deep_freeze_1 = /* @__PURE__ */ requireDeepFreeze();
    const errors2 = {
      RequestError: as_promise_1.RequestError,
      CacheError: as_promise_1.CacheError,
      ReadError: as_promise_1.ReadError,
      HTTPError: as_promise_1.HTTPError,
      MaxRedirectsError: as_promise_1.MaxRedirectsError,
      TimeoutError: as_promise_1.TimeoutError,
      ParseError: as_promise_1.ParseError,
      CancelError: as_promise_1.CancelError,
      UnsupportedProtocolError: as_promise_1.UnsupportedProtocolError,
      UploadError: as_promise_1.UploadError
    };
    const delay = async (ms) => new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
    const { normalizeArguments: normalizeArguments2 } = core_1.default;
    const mergeOptions = (...sources) => {
      let mergedOptions;
      for (const source2 of sources) {
        mergedOptions = normalizeArguments2(void 0, source2, mergedOptions);
      }
      return mergedOptions;
    };
    const getPromiseOrStream = (options) => options.isStream ? new core_1.default(void 0, options) : as_promise_1.default(options);
    const isGotInstance = (value) => "defaults" in value && "options" in value.defaults;
    const aliases = [
      "get",
      "post",
      "put",
      "patch",
      "head",
      "delete"
    ];
    exports2.defaultHandler = (options, next) => next(options);
    const callInitHooks = (hooks, options) => {
      if (hooks) {
        for (const hook of hooks) {
          hook(options);
        }
      }
    };
    const create$1 = (defaults) => {
      defaults._rawHandlers = defaults.handlers;
      defaults.handlers = defaults.handlers.map((fn) => (options, next) => {
        let root2;
        const result = fn(options, (newOptions) => {
          root2 = next(newOptions);
          return root2;
        });
        if (result !== root2 && !options.isStream && root2) {
          const typedResult = result;
          const { then: promiseThen, catch: promiseCatch, finally: promiseFianlly } = typedResult;
          Object.setPrototypeOf(typedResult, Object.getPrototypeOf(root2));
          Object.defineProperties(typedResult, Object.getOwnPropertyDescriptors(root2));
          typedResult.then = promiseThen;
          typedResult.catch = promiseCatch;
          typedResult.finally = promiseFianlly;
        }
        return result;
      });
      const got2 = (url, options = {}, _defaults) => {
        var _a, _b;
        let iteration = 0;
        const iterateHandlers = (newOptions) => {
          return defaults.handlers[iteration++](newOptions, iteration === defaults.handlers.length ? getPromiseOrStream : iterateHandlers);
        };
        if (is_1.default.plainObject(url)) {
          const mergedOptions = {
            ...url,
            ...options
          };
          core_1.setNonEnumerableProperties([url, options], mergedOptions);
          options = mergedOptions;
          url = void 0;
        }
        try {
          let initHookError;
          try {
            callInitHooks(defaults.options.hooks.init, options);
            callInitHooks((_a = options.hooks) === null || _a === void 0 ? void 0 : _a.init, options);
          } catch (error) {
            initHookError = error;
          }
          const normalizedOptions = normalizeArguments2(url, options, _defaults !== null && _defaults !== void 0 ? _defaults : defaults.options);
          normalizedOptions[core_1.kIsNormalizedAlready] = true;
          if (initHookError) {
            throw new as_promise_1.RequestError(initHookError.message, initHookError, normalizedOptions);
          }
          return iterateHandlers(normalizedOptions);
        } catch (error) {
          if (options.isStream) {
            throw error;
          } else {
            return create_rejection_1.default(error, defaults.options.hooks.beforeError, (_b = options.hooks) === null || _b === void 0 ? void 0 : _b.beforeError);
          }
        }
      };
      got2.extend = (...instancesOrOptions) => {
        const optionsArray = [defaults.options];
        let handlers = [...defaults._rawHandlers];
        let isMutableDefaults;
        for (const value of instancesOrOptions) {
          if (isGotInstance(value)) {
            optionsArray.push(value.defaults.options);
            handlers.push(...value.defaults._rawHandlers);
            isMutableDefaults = value.defaults.mutableDefaults;
          } else {
            optionsArray.push(value);
            if ("handlers" in value) {
              handlers.push(...value.handlers);
            }
            isMutableDefaults = value.mutableDefaults;
          }
        }
        handlers = handlers.filter((handler) => handler !== exports2.defaultHandler);
        if (handlers.length === 0) {
          handlers.push(exports2.defaultHandler);
        }
        return create$1({
          options: mergeOptions(...optionsArray),
          handlers,
          mutableDefaults: Boolean(isMutableDefaults)
        });
      };
      const paginateEach = async function* (url, options) {
        let normalizedOptions = normalizeArguments2(url, options, defaults.options);
        normalizedOptions.resolveBodyOnly = false;
        const pagination = normalizedOptions.pagination;
        if (!is_1.default.object(pagination)) {
          throw new TypeError("`options.pagination` must be implemented");
        }
        const all = [];
        let { countLimit } = pagination;
        let numberOfRequests = 0;
        while (numberOfRequests < pagination.requestLimit) {
          if (numberOfRequests !== 0) {
            await delay(pagination.backoff);
          }
          const result = await got2(void 0, void 0, normalizedOptions);
          const parsed = await pagination.transform(result);
          const current = [];
          for (const item of parsed) {
            if (pagination.filter(item, all, current)) {
              if (!pagination.shouldContinue(item, all, current)) {
                return;
              }
              yield item;
              if (pagination.stackAllItems) {
                all.push(item);
              }
              current.push(item);
              if (--countLimit <= 0) {
                return;
              }
            }
          }
          const optionsToMerge = pagination.paginate(result, all, current);
          if (optionsToMerge === false) {
            return;
          }
          if (optionsToMerge === result.request.options) {
            normalizedOptions = result.request.options;
          } else if (optionsToMerge !== void 0) {
            normalizedOptions = normalizeArguments2(void 0, optionsToMerge, normalizedOptions);
          }
          numberOfRequests++;
        }
      };
      got2.paginate = paginateEach;
      got2.paginate.all = async (url, options) => {
        const results = [];
        for await (const item of paginateEach(url, options)) {
          results.push(item);
        }
        return results;
      };
      got2.paginate.each = paginateEach;
      got2.stream = (url, options) => got2(url, { ...options, isStream: true });
      for (const method of aliases) {
        got2[method] = (url, options) => got2(url, { ...options, method });
        got2.stream[method] = (url, options) => {
          return got2(url, { ...options, method, isStream: true });
        };
      }
      Object.assign(got2, errors2);
      Object.defineProperty(got2, "defaults", {
        value: defaults.mutableDefaults ? defaults : deep_freeze_1.default(defaults),
        writable: defaults.mutableDefaults,
        configurable: defaults.mutableDefaults,
        enumerable: true
      });
      got2.mergeOptions = mergeOptions;
      return got2;
    };
    exports2.default = create$1;
    __exportStar(/* @__PURE__ */ requireTypes(), exports2);
  })(create);
  return create;
}
var source = source$5.exports;
var hasRequiredSource;
function requireSource() {
  if (hasRequiredSource) return source$5.exports;
  hasRequiredSource = 1;
  (function(module2, exports2) {
    var __createBinding = source && source.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = source && source.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    const url_1 = require$$0$4;
    const create_1 = /* @__PURE__ */ requireCreate();
    const defaults = {
      options: {
        method: "GET",
        retry: {
          limit: 2,
          methods: [
            "GET",
            "PUT",
            "HEAD",
            "DELETE",
            "OPTIONS",
            "TRACE"
          ],
          statusCodes: [
            408,
            413,
            429,
            500,
            502,
            503,
            504,
            521,
            522,
            524
          ],
          errorCodes: [
            "ETIMEDOUT",
            "ECONNRESET",
            "EADDRINUSE",
            "ECONNREFUSED",
            "EPIPE",
            "ENOTFOUND",
            "ENETUNREACH",
            "EAI_AGAIN"
          ],
          maxRetryAfter: void 0,
          calculateDelay: ({ computedValue }) => computedValue
        },
        timeout: {},
        headers: {
          "user-agent": "got (https://github.com/sindresorhus/got)"
        },
        hooks: {
          init: [],
          beforeRequest: [],
          beforeRedirect: [],
          beforeRetry: [],
          beforeError: [],
          afterResponse: []
        },
        cache: void 0,
        dnsCache: void 0,
        decompress: true,
        throwHttpErrors: true,
        followRedirect: true,
        isStream: false,
        responseType: "text",
        resolveBodyOnly: false,
        maxRedirects: 10,
        prefixUrl: "",
        methodRewriting: true,
        ignoreInvalidCookies: false,
        context: {},
        // TODO: Set this to `true` when Got 12 gets released
        http2: false,
        allowGetBody: false,
        https: void 0,
        pagination: {
          transform: (response) => {
            if (response.request.options.responseType === "json") {
              return response.body;
            }
            return JSON.parse(response.body);
          },
          paginate: (response) => {
            if (!Reflect.has(response.headers, "link")) {
              return false;
            }
            const items = response.headers.link.split(",");
            let next;
            for (const item of items) {
              const parsed = item.split(";");
              if (parsed[1].includes("next")) {
                next = parsed[0].trimStart().trim();
                next = next.slice(1, -1);
                break;
              }
            }
            if (next) {
              const options = {
                url: new url_1.URL(next)
              };
              return options;
            }
            return false;
          },
          filter: () => true,
          shouldContinue: () => true,
          countLimit: Infinity,
          backoff: 0,
          requestLimit: 1e4,
          stackAllItems: true
        },
        parseJson: (text) => JSON.parse(text),
        stringifyJson: (object) => JSON.stringify(object),
        cacheOptions: {}
      },
      handlers: [create_1.defaultHandler],
      mutableDefaults: false
    };
    const got2 = create_1.default(defaults);
    exports2.default = got2;
    module2.exports = got2;
    module2.exports.default = got2;
    module2.exports.__esModule = true;
    __exportStar(/* @__PURE__ */ requireCreate(), exports2);
    __exportStar(/* @__PURE__ */ requireAsPromise(), exports2);
  })(source$5, source$5.exports);
  return source$5.exports;
}
var sourceExports = /* @__PURE__ */ requireSource();
const got = /* @__PURE__ */ getDefaultExportFromCjs(sourceExports);
class LastFMClient {
  constructor(key) {
    this.key = key;
    this.client = got.extend({
      prefixUrl: "https://ws.audioscrobbler.com/2.0/",
      headers: {
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0"
      },
      hooks: {
        beforeRequest: [
          (options) => {
            if (!options.searchParams) options.searchParams = new URLSearchParams();
            if (!options.searchParams.has("api_key")) options.searchParams.set("api_key", this.key.api);
            if (this.token) {
              options.searchParams.set("token", this.token);
              let requestSourceData = "";
              const requestSourceHashable = ["api_key", "method", "token"];
              options.searchParams.sort();
              for (const [key2, value] of options.searchParams.entries()) {
                if (requestSourceHashable.includes(key2)) requestSourceData += key2 + value;
              }
              requestSourceData += this.key.secret;
              options.searchParams.set("api_sig", crypto.createHash("md5").update(requestSourceData).digest("hex"));
            }
            options.searchParams.set("format", "json");
            console.log("[API::LASTFM@BeforeRequest]", options, "params:", {
              ...options.searchParams
            });
          }
        ]
      }
    });
  }
  client;
  token;
  session;
  sessionName;
  lastError;
  async callMethod(method, type = "post", payload = {}) {
    const query = Object.assign({}, payload.query || {}, { method });
    const searchParams = new URLSearchParams(query);
    searchParams.set("api_key", this.key.api);
    if (this.token) {
      searchParams.set("token", this.token);
      let requestSourceData = "";
      searchParams.sort();
      for (const [key, value] of searchParams.entries()) {
        requestSourceData += key + value;
      }
      requestSourceData += this.key.secret;
      searchParams.set("api_sig", require$$0.MD5(requestSourceData).toString(require$$0.enc.Hex));
    }
    searchParams.set("format", "json");
    this.lastError = null;
    return await fetch$1(`https://ws.audioscrobbler.com/2.0/?${searchParams.toString()}`, {
      method: type.toLowerCase(),
      headers: {
        "user-agent": "ytmd (github.com/Venipa/ytmdesktop2)"
      }
    }).then((r) => r.ok ? r.json() : Promise.reject(r)).catch((err) => {
      this.lastError = err;
      return Promise.reject(err);
    });
  }
  async authorize() {
    const token = await this.callMethod("auth.getToken", "get").then((d) => d.token);
    return this.token = token;
  }
  async getSession() {
    const { session: s } = await this.callMethod("auth.getSession", "get");
    this.sessionName = s.name;
    return this.session = s.key;
  }
  async updateNowPlaying(...tracks) {
    if (!this.session) throw new Error("Invalid session");
    return await Promise.resolve(
      this.callMethod("track.updateNowPlaying", "post", {
        query: {
          sk: this.session,
          ...tracks[0]
        }
      })
    );
  }
  async scrobble(...tracks) {
    if (!this.session) throw new Error("Invalid session");
    return await this.callMethod("track.scrobble", "post", {
      query: {
        sk: this.session,
        ...tracks[0]
      }
    });
  }
  getUserAuthorizeUrl() {
    if (!this.token) {
      throw new Error("Invalid token");
    }
    return `https://www.last.fm/api/auth?api_key=${this.key.api}&token=${this.token}`;
  }
  getName() {
    if (!this.session) return null;
    return this.sessionName;
  }
  hasError() {
    return !!this.lastError;
  }
  isConnected() {
    return !!this.session;
  }
  setAuthorize({ token, session, name }) {
    this.token = token;
    this.session = session;
    if (!this.session) this.sessionName = null;
    else this.sessionName = name;
    this.lastError = null;
  }
}
var __defProp$a = Object.defineProperty;
var __getOwnPropDesc$c = Object.getOwnPropertyDescriptor;
var __decorateClass$c = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$c(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$a(target, key, result);
  return result;
};
const lastFmClient = new LastFMClient({
  api: "998569bb094251f7cd8e1dc40853c05e",
  secret: "011d30afed063e55fad8d8ea608a8f5b"
}) || null;
let LastFMProvider = class extends BaseProvider {
  constructor(app) {
    super("lastfm");
    this.app = app;
  }
  get client() {
    return lastFmClient;
  }
  async OnInit() {
    if (!lastFmClient) {
      this.getProvider("settings").set("lastfm.enabled", false);
      return;
    }
    const lastfm = this.getProvider("settings").get("lastfm");
    if (lastfm.enabled) {
      const creds = await secureStore.getAll();
      const lastFMState = creds.reduce(
        (acc, r) => {
          if (r.account === LASTFM_KEYTAR_TOKEN) acc.token = r.password;
          else if (r.account === LASTFM_KEYTAR_SESSION) acc.session = r.password;
          return acc;
        },
        {}
      );
      if (lastFMState.session)
        this.client.setAuthorize({
          token: lastFMState.token,
          session: lastFMState.session,
          name: lastfm.name ? helpers.string.escapeHTML(lastfm.name) : ""
        });
    }
  }
  async AfterInit() {
    if (!this.views.toolbarView?.webContents.isLoading()) this.sendState();
    else this.views.toolbarView.webContents.on("did-finish-load", () => this.sendState());
  }
  authProgress = false;
  async authorizeSession() {
    if (this.authProgress) return;
    const token = await this.client.authorize();
    const win = new electron.BrowserWindow({
      width: 480,
      height: 600,
      minWidth: 480,
      minHeight: 600,
      alwaysOnTop: true,
      parent: this.windowContext.main,
      title: "LastFM Authorize",
      icon: appIconPath,
      paintWhenInitiallyHidden: true,
      show: false,
      autoHideMenuBar: true,
      center: true,
      resizable: false,
      minimizable: false,
      maximizable: false,
      fullscreenable: false,
      modal: true
    });
    await win.loadURL(this.client.getUserAuthorizeUrl());
    const hasSuccessInfo = () => win.webContents.executeJavaScript(`!!document.querySelector("#mantle_skin .alert.alert-success")`);
    const settings = this.getProvider("settings");
    win.webContents.on("did-navigate", async (ev, url, code, status) => {
      this.logger.debug(`[URL]> ${url}, ${code}, ${status}`);
      if (await hasSuccessInfo()) {
        const { userState } = await win.webContents.executeJavaScript(`document.getElementById("tlmdata")?.dataset?.tealiumData`).then(parseJson).catch(() => ({}));
        this.logger.debug(`[Auth]> User: ${stringifyJson(userState)}`);
        if (userState === "authenticated") {
          await secureStore.set(LASTFM_KEYTAR_TOKEN, token);
          const sessionToken = await this.client.getSession();
          if (sessionToken) {
            await secureStore.set(LASTFM_KEYTAR_SESSION, sessionToken);
            if (!win.isDestroyed()) win.close();
          }
          this.logger.debug(`[Auth]> Authenticated: ${sessionToken}`);
          settings.set("lastfm.enabled", true);
          settings.set("lastfm.name", helpers.string.escapeHTML(this.client.getName() || null, { encodeSymbols: true }));
          settings.saveToDrive();
        }
      }
      this.sendState();
    });
    win.show();
    this.authProgress = true;
    this.sendState();
    win.once("closed", () => {
      this.authProgress = false;
      this.sendState();
    });
  }
  getState() {
    if (!this.client) return { connected: false, name: null, processing: false, error: true };
    const lastfm = this.getProvider("settings")?.get("lastfm");
    return {
      connected: this.client.isConnected(),
      name: this.client.getName() || (lastfm.enabled ? lastfm.name : null),
      error: this.client.hasError(),
      processing: this.authProgress
    };
  }
  sendState() {
    this.windowContext.sendToAllViews(IPC_EVENT_NAMES.LAST_FM_STATUS, this.getState());
  }
  async handleLastFMState() {
    return this.getState();
  }
  async handleLastFMProfile() {
    if (!this.client.isConnected()) return;
    const username = this.client.getName() || this.getProvider("settings")?.instance.lastfm.name;
    return await electron.shell.openExternal(`https://www.last.fm/user/${helpers.string.escapeHTML(username)}/`);
  }
  async handleLastFMAuth() {
    return await this.authorizeSession().then(() => true).catch((err) => {
      console.error(err);
      return false;
    });
  }
  async handleLastFMToggle(_, state) {
    if (state === void 0) return null;
    const settings = this.getProvider("settings");
    settings.set("lastfm.enabled", !!state);
    settings.saveToDrive();
    if (state) {
      this.client.setAuthorize({ token: null, session: null });
      await this.handleLastFMAuth();
    } else {
      this.client.setAuthorize({ token: null, session: null });
      settings.set("lastfm.name", null);
      await Promise.all([secureStore.delete(LASTFM_KEYTAR_SESSION), secureStore.delete(LASTFM_KEYTAR_TOKEN)]);
    }
    this.sendState();
    return this.getState();
  }
  async handleTrackStart(track) {
    {
      if (!this.client.isConnected()) return;
      this.views.toolbarView?.webContents.send(IPC_EVENT_NAMES.LAST_FM_SUBMIT_STATE, "start");
      await this.client.updateNowPlaying({
        artist: track.video.author,
        track: track.video.title,
        duration: track.meta.duration
      }).then(stringifyJson).then((d) => this.logger.debug(d)).then(() => {
        this.views.toolbarView?.webContents.send(IPC_EVENT_NAMES.LAST_FM_SUBMIT_STATE, true);
      }).catch((err) => {
        this.logger.error(err);
        this.views.toolbarView?.webContents.send(IPC_EVENT_NAMES.LAST_FM_SUBMIT_STATE, false);
      });
    }
  }
  async handleTrackChange(track) {
    if (!this.client.isConnected()) return;
    this.views.toolbarView?.webContents.send(IPC_EVENT_NAMES.LAST_FM_SUBMIT_STATE, "change");
    await this.client.scrobble({
      artist: track.video.author,
      track: track.video.title,
      timestamp: track.meta.startedAt,
      duration: track.meta.duration
    }).then(stringifyJson).then((d) => this.logger.debug(d)).then(() => {
      this.views.toolbarView?.webContents.send(IPC_EVENT_NAMES.LAST_FM_SUBMIT_STATE, true);
    }).catch((err) => {
      this.logger.error(err);
      this.views.toolbarView?.webContents.send(IPC_EVENT_NAMES.LAST_FM_SUBMIT_STATE, false);
    });
  }
};
__decorateClass$c([
  IpcHandle("action:" + IPC_EVENT_NAMES.LAST_FM_STATUS)
], LastFMProvider.prototype, "handleLastFMState", 1);
__decorateClass$c([
  IpcHandle("action:" + IPC_EVENT_NAMES.LAST_FM_PROFILE)
], LastFMProvider.prototype, "handleLastFMProfile", 1);
__decorateClass$c([
  IpcHandle(IPC_EVENT_NAMES.LAST_FM_AUTHORIZE)
], LastFMProvider.prototype, "handleLastFMAuth", 1);
__decorateClass$c([
  IpcHandle("action:" + IPC_EVENT_NAMES.LAST_FM_TOGGLE)
], LastFMProvider.prototype, "handleLastFMToggle", 1);
LastFMProvider = __decorateClass$c([
  IpcContext
], LastFMProvider);
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get default() {
    return LastFMProvider;
  }
}, Symbol.toStringTag, { value: "Module" }));
var __defProp$9 = Object.defineProperty;
var __getOwnPropDesc$b = Object.getOwnPropertyDescriptor;
var __decorateClass$b = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$b(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$9(target, key, result);
  return result;
};
let MediaControlProvider = class extends BaseProvider {
  constructor(app2) {
    super("mediaController");
    this.app = app2;
  }
  _mediaProvider = null;
  xosmsLog = this.logger.child("xosms");
  async BeforeStart() {
    try {
      electron.app.commandLine.appendSwitch("disable-features", "MediaSessionService");
      electron.app.commandLine.appendSwitch("in-progress-gpu");
    } catch (error) {
      this.logger.error("Failed to set command line switches:", error);
    }
  }
  onKeyPressed(ev, keyName, ...args) {
    try {
      this.xosmsLog.debug(["button press", keyName, ...args]);
      const trackProvider = this.getProvider("api");
      if (!trackProvider) {
        this.logger.warn("API provider not available for media control");
        return;
      }
      switch (keyName) {
        case "pause":
          trackProvider.pauseTrack();
          break;
        case "play":
          trackProvider.playTrack();
          break;
        case "next":
          trackProvider.nextTrack();
          break;
        case "previous":
          trackProvider.prevTrack();
          break;
      }
    } catch (error) {
      this.logger.error("Error handling media key press:", error);
    }
  }
  async onPosChange(ev, pos) {
    try {
      this.logger.debug("onPosChange", pos);
      return await this.api.seekTrack(null, {
        type: "seek",
        time: pos * 1e3
      });
    } catch (error) {
      this.logger.error("Error handling position change:", error);
    }
  }
  async onPosSeek(ev, seek) {
    try {
      this.logger.debug("onPosSeek", seek);
      return await this.api.seekTrack(null, {
        time: seek * 1e3
      });
    } catch (error) {
      this.logger.error("Error handling position seek:", error);
    }
  }
  async AfterInit() {
    try {
      this._mediaProvider = new xosms.MediaPlayer(this.app.name, this.app.name);
      if (!this._mediaProvider) {
        throw new Error("Failed to create media provider");
      }
      this._mediaProvider.seekEnabled = true;
      this._mediaProvider.previousButtonEnabled = true;
      this._mediaProvider.nextButtonEnabled = true;
      this._mediaProvider.addEventListener("buttonpressed", this.onKeyPressed.bind(this));
      this._mediaProvider.addEventListener("positionchanged", this.onPosChange.bind(this));
      this._mediaProvider.addEventListener("positionseeked", this.onPosSeek.bind(this));
      await this._mediaProvider.activate();
      if (!this.mediaProviderEnabled()) {
        this.xosmsLog.warn("XOSMS is disabled", ":: Status:", `Provider: ${!!this._mediaProvider}, Enabled: ${this.mediaProviderEnabled()}`);
      }
    } catch (error) {
      this.logger.error("Failed to initialize media provider:", error);
      this._mediaProvider = null;
    }
  }
  get instance() {
    return this._mediaProvider;
  }
  get trackData() {
    return this.getProvider("track")?.trackData;
  }
  get api() {
    return this.getProvider("api");
  }
  __handleTrackMediaOSControl(_ev, isPlaying, progressSeconds = 0) {
    if (!this.mediaProviderEnabled()) return;
    try {
      const { trackData } = this.getProvider("track");
      if (!trackData) {
        this._mediaProvider.playbackStatus = xosms.MediaPlayerPlaybackStatus.Stopped;
        this._mediaProvider.playButtonEnabled = true;
        this._mediaProvider.pauseButtonEnabled = false;
      } else {
        this._mediaProvider.playbackStatus = isPlaying ? xosms.MediaPlayerPlaybackStatus.Playing : xosms.MediaPlayerPlaybackStatus.Paused;
        this._mediaProvider.playButtonEnabled = !isPlaying;
        this._mediaProvider.pauseButtonEnabled = isPlaying;
        const [progress, duration] = [progressSeconds, Number(this.trackData.meta.duration)];
        this._mediaProvider.setTimeline(duration, clamp(progress, 0, duration));
      }
      this._mediaProvider.update();
    } catch (error) {
      this.logger.error("Error handling track media OS control:", error);
    }
  }
  mediaProviderEnabled() {
    return !!this._mediaProvider;
  }
  async handleTrackMediaOSControlChange(trackData) {
    if (!this.mediaProviderEnabled() || !trackData?.video) return;
    try {
      const albumThumbnail = trackData.meta.thumbnail;
      this._mediaProvider.mediaType = xosms.MediaPlayerMediaType.Music;
      this._mediaProvider.playbackStatus = xosms.MediaPlayerPlaybackStatus.Playing;
      this._mediaProvider.artist = trackData.video.author;
      this._mediaProvider.albumTitle = trackData.context.pageOwnerDetails.name;
      this._mediaProvider.artist = trackData.video.author;
      if (albumThumbnail) {
        this._mediaProvider.setThumbnail(await xosms.MediaPlayerThumbnail.create(xosms.MediaPlayerThumbnailType.Uri, albumThumbnail));
      }
      this._mediaProvider.title = trackData.video.title;
      this._mediaProvider.trackId = trackData.video.videoId;
      this._mediaProvider.previousButtonEnabled = true;
      this._mediaProvider.nextButtonEnabled = true;
      this._mediaProvider.update();
      this.logger.debug(this._mediaProvider.title, this._mediaProvider.mediaType === 1 ? "music" : "other", this._mediaProvider.trackId);
    } catch (error) {
      this.logger.error("Error handling track media control change:", error);
    }
  }
  OnDestroy() {
    try {
      if (this._mediaProvider) {
        this._mediaProvider.removeEventListener("buttonpressed", this.onKeyPressed);
        this._mediaProvider.deactivate();
        this._mediaProvider = null;
      }
    } catch (error) {
      this.logger.error("Error during media provider cleanup:", error);
    }
  }
};
__decorateClass$b([
  IpcOn(IPC_EVENT_NAMES.TRACK_PLAYSTATE)
], MediaControlProvider.prototype, "__handleTrackMediaOSControl", 1);
MediaControlProvider = __decorateClass$b([
  IpcContext
], MediaControlProvider);
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get default() {
    return MediaControlProvider;
  }
}, Symbol.toStringTag, { value: "Module" }));
var __defProp$8 = Object.defineProperty;
var __getOwnPropDesc$a = Object.getOwnPropertyDescriptor;
var __decorateClass$a = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$a(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$8(target, key, result);
  return result;
};
let MiniPlayerProvider = class extends BaseProvider {
  constructor(_app) {
    super("mp");
    this._app = _app;
  }
  get app() {
    return this._app;
  }
  async AfterInit() {
  }
  async __onPlayerTop(ev) {
    const window2 = getWindowFromContents(ev.sender);
    if (!window2 || window2.isDestroyed()) return false;
    const isOnTop = !window2.isAlwaysOnTop();
    window2.setAlwaysOnTop(isOnTop);
    return isOnTop;
  }
  async __isPlayerTop(ev) {
    const window2 = getWindowFromContents(ev.sender);
    if (!window2 || window2.isDestroyed()) return false;
    const isOnTop = window2.isAlwaysOnTop();
    return isOnTop;
  }
  async __playerWindow() {
    let mpId;
    let mpWindow = this.windowContext.views.miniPlayerWindow;
    if (!mpWindow || mpWindow.isDestroyed()) {
      this.windowContext.views.miniPlayerWindow = mpWindow = await createAppWindow({
        path: "/miniplayer",
        minWidth: 340,
        minHeight: 340,
        height: 340,
        width: 540
      });
      const { state, saveState } = await wrapWindowHandler(mpWindow, "miniPlayer", {
        width: 540,
        height: 340
      });
      if (state) {
        mpWindow.setBounds(state);
      } else {
        mpWindow.setBounds({ width: 540, height: 340 });
      }
      mpWindow.setMinimizable(true);
      this.windowContext.main.hide();
      mpWindow.on("close", () => {
        this.windowContext.main.show();
        saveState();
      });
      mpId = mpWindow.id;
    } else {
      mpId = mpWindow.id;
      mpWindow.show();
    }
    this.windowContext.sendToAllViews("miniplayer.state", !this.views.miniPlayerWindow ? null : { active: false });
    return mpId;
  }
};
__decorateClass$a([
  IpcHandle("action:miniplayer.stayOnTop")
], MiniPlayerProvider.prototype, "__onPlayerTop", 1);
__decorateClass$a([
  IpcHandle("miniplayer.stayOnTop")
], MiniPlayerProvider.prototype, "__isPlayerTop", 1);
__decorateClass$a([
  IpcHandle("action:app.miniPlayer"),
  IpcHandle("app.miniPlayer")
], MiniPlayerProvider.prototype, "__playerWindow", 1);
MiniPlayerProvider = __decorateClass$a([
  IpcContext
], MiniPlayerProvider);
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get default() {
    return MiniPlayerProvider;
  }
}, Symbol.toStringTag, { value: "Module" }));
var __defProp$7 = Object.defineProperty;
var __getOwnPropDesc$9 = Object.getOwnPropertyDescriptor;
var __decorateClass$9 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$9(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$7(target, key, result);
  return result;
};
let NavigationProvider = class extends BaseProvider {
  constructor(app) {
    super("navigation");
    this.app = app;
  }
  async AfterInit() {
    let lastNavigatioIsSameOrigin = true;
    this.views.youtubeView.webContents.on("did-navigate-in-page", (ev, url) => {
      const isHome = !!url.match(devUtils.defaultUrl);
      this.logger.debug(`isHome :: ${isHome}, ${url}`);
      if (isHome !== lastNavigatioIsSameOrigin) {
        lastNavigatioIsSameOrigin = isHome;
        this.windowContext.sendToAllViews("nav.same-origin", isHome);
        if (isHome) this.handlePreloadOnWindowNav();
      }
    });
  }
  isYTMLoaded() {
    if (this.windowContext.main.webContents.isLoading()) return null;
    return this.views.youtubeView.webContents.executeJavaScript(`typeof window.isYTMLoaded === "function" && !!window.isYTMLoaded()`).then((x) => !!x).catch(() => false);
  }
  _isPreloading = false;
  async handlePreloadOnWindowNav() {
    const isLoaded = await this.isYTMLoaded();
    if (isLoaded === null) return;
    if (this._isPreloading) {
      if (isLoaded) this._isPreloading = false;
      return;
    }
    if (!isLoaded) {
      this._isPreloading = true;
      this.windowContext.main.reload();
    }
  }
  async __onHomeAction() {
    await this.views.youtubeView.webContents.loadURL(devUtils.defaultUrl);
  }
  async __onDevAction() {
    if (!this.views.youtubeView.webContents.isDevToolsOpened()) this.views.youtubeView.webContents.openDevTools({ mode: "detach" });
    else this.views.youtubeView.webContents.closeDevTools();
  }
};
__decorateClass$9([
  IpcHandle("action:nav.same-origin", {
    debounce: 1e3
  })
], NavigationProvider.prototype, "__onHomeAction", 1);
__decorateClass$9([
  IpcHandle("action:app.devTools", {
    debounce: 1e3
  })
], NavigationProvider.prototype, "__onDevAction", 1);
NavigationProvider = __decorateClass$9([
  IpcContext
], NavigationProvider);
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get default() {
    return NavigationProvider;
  }
}, Symbol.toStringTag, { value: "Module" }));
var __defProp$6 = Object.defineProperty;
var __getOwnPropDesc$8 = Object.getOwnPropertyDescriptor;
var __decorateClass$8 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$8(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$6(target, key, result);
  return result;
};
const defaultSettings = {
  api: {
    enabled: false,
    port: 13091
  },
  app: {
    beta: false,
    autoupdate: true,
    autostart: true,
    autostartMinimized: true,
    getstarted: true,
    enableDev: false,
    minimizeTrayOverride: false,
    enableStatisticsAndErrorTracing: true,
    disableHardwareAccel: false
  },
  volumeRatio: {
    enabled: true,
    volume: 0.05
  },
  player: {
    skipDisliked: false,
    res: {
      enabled: false,
      prefer: "auto"
    }
  },
  discord: {
    enabled: true,
    buttons: false
  },
  customcss: {
    enabled: true,
    scssFile: null,
    watching: false
  },
  state: {
    currentUrl: null
  },
  lastfm: {
    enabled: false
  }
};
const _settingsStore = createYmlStore("app-settings", {
  defaults: defaultSettings,
  migrations: [
    {
      version: 0,
      hook(store2) {
        const { migratedFromJson } = store2.store?.__meta ?? {};
        if (migratedFromJson) return;
        const oldConfigPath = path$1.resolve(electron.app.getPath("userData"), "app-settings.json");
        if (!fs.statSync(oldConfigPath, { throwIfNoEntry: false })) {
          store2.set("__meta.migratedFromJson", true);
          return;
        }
        const oldConfigBody = fs.readFileSync(oldConfigPath, "utf8");
        if (!oldConfigBody) return;
        fs.rmSync(oldConfigPath);
        const oldConfig = JSON.parse(oldConfigBody);
        store2.set(oldConfig);
        store2.set("__meta.migratedFromJson", true);
      }
    },
    {
      version: 1,
      hook(store2) {
        store2.set("volumeRatio", {
          enabled: true,
          volume: 0.1
        });
      }
    }
  ]
});
let SettingsProvider = class extends BaseProvider {
  constructor(app2) {
    super("settings");
    this.app = app2;
  }
  onChange = new rxjs.Subject();
  onChangeProp(key) {
    const settings = this.instance;
    return this.onChange.pipe(rxjs.takeUntil(this.onChange), rxjs.startWith(settings)).pipe(
      rxjs.map((value) => get(value, key, null)),
      rxjs.filter(Boolean),
      rxjs.distinctUntilChanged((l, r) => stringifyJson(l) === stringifyJson(r))
    );
  }
  getConfigPath() {
    return path$1.resolve(this.app.getPath("userData"), "app-settings.json");
  }
  async BeforeStart() {
    const configFile = this.getConfigPath();
    this.logger.debug(configFile);
  }
  get instance() {
    return _settingsStore.store;
  }
  get(key, defaultValue) {
    return get(_settingsStore.store, key, defaultValue);
  }
  set(key, value) {
    _settingsStore.set(key, value ?? null);
    this.onChange.next(_settingsStore.store);
    try {
      serverMain.emit(IPC_EVENT_NAMES.SERVER_SETTINGS_CHANGE, key, value);
      this.windowContext.sendToAllViews(IPC_EVENT_NAMES.SERVER_SETTINGS_CHANGE, key, value);
    } catch (ex) {
      this.logger.error(ex);
    }
    return this;
  }
  saveToDrive() {
  }
  async OnDestroy() {
    this.onChange.complete();
    this.saveToDrive();
  }
  AfterInit() {
    this.views.youtubeView.webContents.on("did-navigate-in-page", (ev, location) => {
      this.logger.debug(`navigate-in-page :: ${location}`);
      const url = new URLSearchParams(location.split("?")[1]);
      if (url?.has("v")) this.getProvider("track").setActiveTrack(url.get("v"));
    });
    let previousHostname = devUtils.defaultUrl;
    this.views.youtubeView.webContents.on(
      "did-navigate",
      debounce((ev, location) => {
        this.logger.debug("navigate", location);
        const url = new URL(location);
        if (url) {
          if (url.hostname === devUtils.defaultUri.hostname && previousHostname !== url.hostname) {
            serverMain.emit("customcss.update");
          }
          previousHostname = url.hostname;
          if (url.hostname !== devUtils.defaultUri.hostname) {
            this.views.toolbarView.webContents.send("track:title", null);
          }
        }
      }, 500)
    );
  }
  _onEventGet(ev, ...args) {
    const [key, value] = args;
    const returnValue = this.get(key);
    return returnValue === void 0 || returnValue === null ? value : returnValue;
  }
  _onEventGetAll(ev, ...args) {
    const [value] = args;
    const returnValue = _settingsStore.store;
    return returnValue === void 0 || returnValue === null ? value : returnValue;
  }
  _onEventSet(ev, ...args) {
    const [key, value] = args;
    this.set(key, value);
    this.logger.debug(key, value);
    this.saveToDrive();
  }
  async _onEventUpdate(ev, ...args) {
    const [key, value] = args;
    this.logger.debug(key, value);
    this.set(key, value);
    this.saveToDrive();
    return value;
  }
};
__decorateClass$8([
  IpcOn("settingsProvider.save", {
    debounce: 5e3
  })
], SettingsProvider.prototype, "saveToDrive", 1);
__decorateClass$8([
  IpcHandle("settingsProvider.get")
], SettingsProvider.prototype, "_onEventGet", 1);
__decorateClass$8([
  IpcHandle("settingsProvider.getAll")
], SettingsProvider.prototype, "_onEventGetAll", 1);
__decorateClass$8([
  IpcOn("settingsProvider.set")
], SettingsProvider.prototype, "_onEventSet", 1);
__decorateClass$8([
  IpcHandle("settingsProvider.update")
], SettingsProvider.prototype, "_onEventUpdate", 1);
SettingsProvider = __decorateClass$8([
  IpcContext
], SettingsProvider);
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get default() {
    return SettingsProvider;
  }
}, Symbol.toStringTag, { value: "Module" }));
var __defProp$5 = Object.defineProperty;
var __getOwnPropDesc$7 = Object.getOwnPropertyDescriptor;
var __decorateClass$7 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$7(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$5(target, key, result);
  return result;
};
let StartupProvider = class extends BaseProvider {
  constructor(app) {
    super("startup");
    this.app = app;
    app.commandLine.appendSwitch("disable-http-cache");
    if (process.platform === "win32") {
      app.commandLine.appendSwitch("enable-gpu-rasterization");
      app.commandLine.appendSwitch("enable-zero-copy");
      app.commandLine.appendSwitch("enable-features", "CanvasOopRasterization,EnableDrDc");
    }
  }
  get settingsInstance() {
    return this.getProvider("settings");
  }
  get isEnabled() {
    return !!this.settingsInstance.instance?.app?.autostart;
  }
  get isInitialMinimized() {
    return !!this.settingsInstance.instance?.app?.autostartMinimized;
  }
  async BeforeStart() {
    if (this.settingsInstance.instance.app.disableHardwareAccel) this.app.disableHardwareAcceleration();
    if (!utils.platform.isMacOS) {
      electron.powerSaveBlocker.start("prevent-app-suspension");
    }
  }
  get startArgs() {
    return ["--processStart", `"${path$1.basename(process.execPath)}"`, "--startup"];
  }
  get isStartupContext() {
    return !!process.argv.find((arg) => arg === "--startup");
  }
  get isMinimizedArg() {
    return !!process.argv.find((arg) => arg === "--minimized");
  }
  async AfterInit() {
    const app = this.settingsInstance.instance.app;
    {
      if (app.autostart) {
        this.app.setLoginItemSettings({
          openAtLogin: true,
          path: process.execPath,
          args: this.startArgs
        });
      } else {
        this.app.setLoginItemSettings({
          openAtLogin: false,
          args: this.startArgs
        });
      }
    }
    this.getProvider("tray").initializeTray().then(() => {
      this.logger.debug("tray initialized");
    });
  }
  async onAutoStartToggle(key, enabled) {
    if (enabled) {
      this.app.setLoginItemSettings({
        openAtLogin: true,
        path: process.execPath,
        args: this.startArgs
      });
    } else {
      this.app.setLoginItemSettings({
        openAtLogin: false,
        args: this.startArgs
      });
    }
  }
};
__decorateClass$7([
  IpcOn("settingsProvider.change", {
    debounce: 1e3,
    filter: (key) => key === "app.autostart"
  })
], StartupProvider.prototype, "onAutoStartToggle", 1);
StartupProvider = __decorateClass$7([
  IpcContext
], StartupProvider);
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get default() {
    return StartupProvider;
  }
}, Symbol.toStringTag, { value: "Module" }));
var __getOwnPropDesc$6 = Object.getOwnPropertyDescriptor;
var __decorateClass$6 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$6(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
};
const emotes = {
  pause: "⏸️",
  play: "▶️",
  like: "👍",
  dislike: "👎",
  prev: "⏮️",
  next: "⏭️",
  repeat: "🔁",
  shuffle: "🔀",
  shuffleOn: "🔀",
  shuffleOff: "🔀",
  repeatOn: "🔂",
  repeatOff: "🔁",
  volume: "🔊",
  mute: "🔇",
  unmute: "🔊",
  repeatOne: "🔂"
};
const emoteColors = {
  like: "#202020",
  dislike: "#202020",
  repeat: "#202020",
  shuffle: "#202020",
  volume: "#202020"
};
const emoteColorsOff = {
  like: null,
  dislike: null,
  repeat: null,
  shuffle: null,
  volume: null
};
let TouchbarProvider = class extends BaseProvider {
  constructor() {
    super("touchbar");
  }
  async AfterInit() {
    this.logger.debug("TouchbarProvider AfterInit", utils.platform.isMacOS);
    if (!utils.platform.isMacOS) return;
    try {
      const songTitle = new electron.TouchBar.TouchBarLabel({
        label: ""
      });
      const songImage = {};
      const trackApi = this.getProvider("api");
      const trackProvider = this.getProvider("track");
      const trackState = trackProvider.trackState;
      const pausePlayButton = new electron.TouchBar.TouchBarButton({
        label: emotes.play,
        click: () => {
          trackApi.toggleTrackPlayback().then((playing) => {
            pausePlayButton.label = playing ? emotes.pause : emotes.play;
          });
        }
      });
      const likeButton = new electron.TouchBar.TouchBarButton({
        label: emotes.like,
        backgroundColor: trackState?.liked ? emoteColors.like : emoteColorsOff.like,
        click: () => {
          trackApi.postTrackLike(null, true).then((liked) => {
            likeButton.backgroundColor = liked ? "#202020" : null;
          });
        }
      });
      const dislikeButton = new electron.TouchBar.TouchBarButton({
        label: emotes.dislike,
        backgroundColor: trackState?.disliked ? emoteColors.dislike : emoteColorsOff.dislike,
        click: () => {
          trackApi.postTrackDisLike(null, false).then((disliked) => {
            dislikeButton.backgroundColor = disliked ? "#202020" : null;
          });
        }
      });
      const repeatButton = new electron.TouchBar.TouchBarButton({
        label: emotes.repeat,
        click: () => {
          trackApi.repeatTrack().then((repeat) => {
            repeatButton.label = repeat ? emotes.repeatOn : emotes.repeatOff;
            repeatButton.backgroundColor = repeat ? emoteColors.repeat : emoteColorsOff.repeat;
          });
        }
      });
      const shuffleButton = new electron.TouchBar.TouchBarButton({
        label: emotes.shuffle,
        click: () => {
          trackApi.shuffleTrack().then((shuffle) => {
            shuffleButton.label = shuffle ? emotes.shuffleOn : emotes.shuffleOff;
            shuffleButton.backgroundColor = shuffle ? emoteColors.shuffle : emoteColorsOff.shuffle;
          });
        }
      });
      const buttonHandlers = [
        () => trackApi.prevTrack(),
        () => trackApi.toggleTrackPlayback().then((playing) => {
          pausePlayButton.label = playing ? emotes.pause : emotes.play;
        }),
        () => trackApi.nextTrack(),
        () => trackApi.postTrackLike(null, true).then((liked) => {
          likeButton.backgroundColor = liked ? emoteColors.like : emoteColorsOff.like;
        }),
        () => trackApi.postTrackDisLike(null, true).then((disliked) => {
          dislikeButton.backgroundColor = disliked ? emoteColors.dislike : emoteColorsOff.dislike;
        })
      ];
      const buttons = new electron.TouchBar.TouchBarSegmentedControl({
        segments: [
          new electron.TouchBar.TouchBarButton({
            label: emotes.prev,
            click: () => {
              trackApi.prevTrack();
            }
          }),
          pausePlayButton,
          new electron.TouchBar.TouchBarButton({
            label: emotes.next,
            click: () => {
              trackApi.nextTrack();
            }
          }),
          likeButton,
          dislikeButton
        ],
        change: (selectedIndex) => {
          Promise.resolve(buttonHandlers[selectedIndex]?.()).then(() => {
            this.windowContext.main.setTouchBar(touchBar);
          });
        },
        mode: "buttons",
        segmentStyle: "automatic"
      });
      const trackSlider = new electron.TouchBar.TouchBarSlider({
        minValue: 0,
        maxValue: 100,
        value: 0,
        change: (value) => {
          this.logger.debug("TouchbarProvider trackSlider change", value);
          const duration = trackProvider.trackState?.duration ?? 0;
          if (duration <= 0) return;
          const newValue = Math.floor(value / 100 * duration);
          trackApi.seekTrack(null, { time: newValue * 1e3, type: "seek" });
          this.logger.debug("TouchbarProvider trackSlider change", newValue, duration);
        }
      });
      const touchBar = new electron.TouchBar({
        items: [
          new electron.TouchBar.TouchBarScrubber({
            items: [songImage, songTitle],
            continuous: false
          }),
          new electron.TouchBar.TouchBarSpacer({
            size: "flexible"
          }),
          trackSlider,
          new electron.TouchBar.TouchBarSpacer({
            size: "flexible"
          }),
          buttons
        ]
      });
      this.logger.debug("Setting touchbar", !!touchBar);
      trackProvider.onTrackStateChange(
        (state) => {
          likeButton.backgroundColor = state.liked ? emoteColors.like : emoteColorsOff.like;
          dislikeButton.backgroundColor = state.disliked ? emoteColors.dislike : emoteColorsOff.dislike;
          pausePlayButton.label = state.playing ? emotes.pause : emotes.play;
          this.windowContext.main.setTouchBar(touchBar);
        },
        { debounce: 1e3 }
      );
      trackProvider.onTrackStateChange(async (state) => {
        const newValue = clamp(state.progress / state.duration * 100, 0, 100);
        trackSlider.value = Math.floor(newValue);
      });
      trackProvider.onTrackChange(async (track) => {
        songTitle.label = track.video.title;
        this.logger.debug("TouchbarProvider onTrackChange", songTitle.label, track.video.thumbnail.thumbnails?.[0]?.url);
        const buffer = track.video.thumbnail.thumbnails?.[0]?.url && await fetch(track.video.thumbnail.thumbnails[0].url).catch(() => null);
        songImage.icon = (buffer ? electron.nativeImage.createFromBuffer(Buffer.from(await buffer.arrayBuffer())) : electron.nativeImage.createFromPath(appIconPath)).resize({
          height: 23
        });
        const { liked, disliked } = await trackApi.getTrackState();
        likeButton.backgroundColor = liked ? emoteColors.like : emoteColorsOff.like;
        dislikeButton.backgroundColor = disliked ? emoteColors.dislike : emoteColorsOff.dislike;
        this.windowContext.main.setTouchBar(touchBar);
      });
      this.windowContext.main.setTouchBar(touchBar);
    } catch (error) {
      this.logger.error("TouchbarProvider error", error);
    }
  }
};
TouchbarProvider = __decorateClass$6([
  IpcContext
], TouchbarProvider);
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get default() {
    return TouchbarProvider;
  }
}, Symbol.toStringTag, { value: "Module" }));
var __defProp$4 = Object.defineProperty;
var __getOwnPropDesc$5 = Object.getOwnPropertyDescriptor;
var __decorateClass$5 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$5(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$4(target, key, result);
  return result;
};
const events = new require$$0$1.EventEmitter();
class TrackCollection {
  tracks = /* @__PURE__ */ new Map();
  maxSize = 10;
  addOrUpdate(id, value) {
    const track = { ...value, id };
    const shouldUpdateTrack = this.tracks.has(id);
    this.tracks.set(id, track);
    if (!shouldUpdateTrack && this.tracks.size > this.maxSize) {
      const firstKey = this.tracks.keys().next().value;
      this.tracks.delete(firstKey);
    }
    return track;
  }
  remove(id) {
    return this.tracks.delete(id);
  }
  findById(id) {
    return this.tracks.get(id);
  }
  clear() {
    this.tracks.clear();
  }
}
const trackCollection = new TrackCollection();
const parseTrackDuration = (td) => {
  return ((dur) => dur ? Number.parseInt(dur) : null)(td.context?.videoDetails?.durationSeconds ?? td.video?.lengthSeconds);
};
let TrackProvider = class extends BaseProvider {
  constructor(app) {
    super("track");
    this.app = app;
  }
  _activeTrackId = null;
  _playState;
  _trackState = null;
  _trackDataCache = null;
  get playState() {
    return this._playState;
  }
  get trackState() {
    return this._trackState;
  }
  get playing() {
    return this.playState === "playing";
  }
  async AfterInit() {
  }
  get trackData() {
    if (this._trackDataCache?.id === this._activeTrackId) {
      return this._trackDataCache;
    }
    return this._trackDataCache = this._activeTrackId ? trackCollection.findById(this._activeTrackId) ?? null : null;
  }
  setTrackState(fn) {
    if (!this._trackState) {
      this._trackState = {
        id: this._activeTrackId,
        playing: false,
        progress: 0,
        duration: 0,
        liked: false,
        disliked: false,
        startedAt: Date.now() / 1e3
      };
    }
    const prevId = this._trackState.id;
    const isFunc = typeof fn === "function";
    const ret = isFunc ? fn(this._trackState) : fn;
    const isVoid = ret === void 0 || ret === void 0;
    if (!isVoid) {
      this._trackState = ret;
    }
    if (prevId !== this.trackState.id) {
      this.logger.debug("title id change", prevId, "=>", this.trackState.id);
      this.getProvider("discord").updateTrackProgress(true, 0);
    }
    this.windowContext.sendToAllViews("track:play-state", {
      ...this._trackState
    });
    events.emit("track:state-change", this._trackState);
  }
  async getActiveTrackByDOM() {
    try {
      const href = await this.views.youtubeView.webContents.executeJavaScript(`document.querySelector("a.ytp-title-link.yt-uix-sessionlink")?.href`);
      return href ? new URLSearchParams(href.split("?")[1])?.get("v") ?? null : null;
    } catch {
      return null;
    }
  }
  async currentSongLikeState() {
    try {
      const values = await this.views.youtubeView.webContents.executeJavaScript(
        `[
          document.querySelector("#like-button-renderer #button-shape-like.like button")?.ariaPressed,
          document.querySelector("#like-button-renderer #button-shape-dislike.dislike button")?.ariaPressed
        ]`
      );
      return values.map((x) => x === "true");
    } catch {
      return [false, false];
    }
  }
  getTrackDuration() {
    const td = this.trackData;
    return td ? parseTrackDuration(td) : null;
  }
  async __onTrackInfo(ev, ytTrack) {
    if (!ytTrack.video) return;
    const track = {
      ...ytTrack,
      meta: {
        thumbnail: (ytTrack?.video?.thumbnail?.thumbnails ?? ytTrack?.context?.thumbnail?.thumbnails)?.sort(thenby.firstBy((d) => d.height, "desc"))[0]?.url,
        isAudioExclusive: ytTrack?.video?.musicVideoType === "MUSIC_VIDEO_TYPE_ATV",
        startedAt: Date.now() / 1e3,
        duration: parseTrackDuration(ytTrack)
      }
    };
    trackCollection.addOrUpdate(ytTrack.video.videoId, track);
    const currentTrackId = await this.getActiveTrackByDOM();
    if (!this._activeTrackId || track.video.videoId === this._activeTrackId || currentTrackId === track.video.videoId) {
      const lastTrackId = this._activeTrackId;
      this._activeTrackId = track.video.videoId;
      await this.pushTrackToViews(track, lastTrackId !== track.video.videoId);
    }
  }
  async setActiveTrack(trackId) {
    return await this.__onActiveTrack(trackId);
  }
  __onTitleChange(ev, trackId) {
    if (trackId) this.__onActiveTrack(trackId);
  }
  async __onActiveTrack(trackId) {
    if (this._activeTrackId === trackId) return;
    this.log(`active track:`, trackId);
    this._activeTrackId = trackId;
    if (this.trackData) {
      const td = this.trackData;
      const [isLiked, isDLiked] = await this.currentSongLikeState();
      await this.pushTrackToViews(td);
      this.setTrackState({
        id: trackId,
        playing: this.playing,
        duration: this.getTrackDuration() ?? 0,
        liked: isLiked,
        disliked: isDLiked,
        progress: 0,
        uiProgress: 0,
        startedAt: Date.now() / 1e3
      });
    }
  }
  trackChangeTimeout = null;
  async pushTrackToViews(trackRef, updateLastFm = true) {
    const track = clone(trackRef);
    track.meta.startedAt = Date.now() / 1e3;
    this.views.toolbarView?.webContents.send("track:title", track?.video?.title);
    this.views.youtubeView?.webContents.send("track.change", track.video.videoId);
    this.windowContext.sendToAllViews(IPC_EVENT_NAMES.TRACK_CHANGE, track);
    events.emit("track:change", track);
    try {
      const media = this.getProvider("mediaController");
      if (media?.instance) {
        await media.handleTrackMediaOSControlChange(track);
      }
    } catch (error) {
      this.logger.error("Failed to update media controls:", error);
    }
    const api = this.getProvider("api");
    api.sendMessage("track:change", track);
    const lastfm = this.getProvider("lastfm");
    const lastfmState = lastfm.getState();
    if (updateLastFm && lastfm && lastfmState.connected && !lastfmState.processing && track.video.videoId) {
      await lastfm.handleTrackStart(track);
      if (this.trackChangeTimeout) {
        clearTimeout(this.trackChangeTimeout);
      }
      this.trackChangeTimeout = setTimeout(
        () => {
          lastfm.handleTrackChange(track);
          if (this.trackChangeTimeout) {
            clearTimeout(this.trackChangeTimeout);
            this.trackChangeTimeout = null;
          }
        },
        clamp(track.meta.duration * 0.65, 30, 90) * 1e3
      );
    }
  }
  async __onPlayStateChange(_ev, isPlaying, progressSeconds = 0) {
    if (!this.trackData?.meta) return;
    this._playState = isPlaying ? "playing" : "paused";
    const discordProvider = this.getProvider("discord");
    const duration = Number(this.trackData.meta.duration);
    await discordProvider.updateTrackProgress(isPlaying, progressSeconds);
    try {
      const mediaController = this.getProvider("mediaController");
      if (mediaController?.instance) {
        mediaController.instance.setTimeline(duration, progressSeconds);
      }
    } catch (error) {
      this.logger.error("Failed to update media timeline:", error);
    }
    const [isLiked, isDLiked] = await this.currentSongLikeState();
    this.setTrackState((state) => {
      state.playing = isPlaying;
      state.progress = progressSeconds;
      state.uiProgress = progressSeconds;
      state.liked = isLiked;
      state.disliked = isDLiked;
      state.duration = duration;
    });
  }
  onTrackStateChange(callback, options = { immediate: false }) {
    const handler = debounce(callback, options?.debounce);
    if (options.immediate) handler(this.trackState);
    events.on("track:state-change", handler);
    this.app.on("before-quit", () => events.off("track:state-change", handler));
    return () => events.off("track:state-change", handler);
  }
  onTrackChange(callback, options = { debounce: 1e3, immediate: false }) {
    const handler = debounce(callback, options?.debounce);
    if (options.immediate) handler(this.trackData);
    events.on("track:change", handler);
    this.app.on("before-quit", () => events.off("track:change", handler));
    return () => events.off("track:change", handler);
  }
};
__decorateClass$5([
  IpcOn("track:info-req")
], TrackProvider.prototype, "__onTrackInfo", 1);
__decorateClass$5([
  IpcOn("track:title-change", { debounce: 100 })
], TrackProvider.prototype, "__onTitleChange", 1);
__decorateClass$5([
  IpcOn(IPC_EVENT_NAMES.TRACK_PLAYSTATE, { debounce: 100 })
], TrackProvider.prototype, "__onPlayStateChange", 1);
TrackProvider = __decorateClass$5([
  IpcContext
], TrackProvider);
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get default() {
    return TrackProvider;
  }
}, Symbol.toStringTag, { value: "Module" }));
const createTrayMenu = (provider) => {
  const { set, instance: settings } = provider.getProvider("settings");
  const { app } = provider.getProvider("app");
  const { updateAvailable, onCheckUpdate: checkUpdate, onAutoUpdateRun: applyUpdate, updateInfo } = provider.getProvider("update");
  const menu = electron.Menu.buildFromTemplate([
    {
      label: STRINGS.appName,
      sublabel: `Version: ${app.getVersion()}`,
      click: () => serverMain.emit("app.trayState", null, "visible")
    },
    {
      label: updateAvailable ? `Update Available - ${updateInfo?.version ? `Download v${updateInfo.version}` : "Download"}` : "Check for Updates",
      click: () => updateAvailable ? applyUpdate(null, false) : checkUpdate()
    },
    {
      type: "separator"
    },
    {
      label: "Auto Startup",
      type: "checkbox",
      checked: settings.app.autostart,
      click: (item) => {
        set("app.autostart", item.checked);
      }
    },
    {
      label: "Auto Update",
      type: "checkbox",
      checked: settings.app.autoupdate,
      click: (item) => {
        set("app.autoupdate", item.checked);
      }
    },
    {
      type: "separator"
    },
    {
      label: "Settings",
      click: () => {
        serverMain.emit("subwindow.show", null, "settingsWindow");
      }
    },
    {
      type: "separator"
    },
    {
      type: "submenu",
      label: "Discord",
      submenu: [
        {
          label: "Show Presence",
          type: "checkbox",
          checked: settings.discord.enabled,
          click: (item) => {
            set("discord.enabled", item.checked);
          }
        },
        {
          label: "Show Buttons",
          type: "checkbox",
          checked: settings.discord.buttons,
          click: (item) => {
            set("discord.buttons", item.checked);
          }
        }
      ]
    },
    {
      type: "separator"
    },
    {
      type: "submenu",
      label: "Custom CSS",
      submenu: [
        {
          label: "Enable CSS",
          type: "checkbox",
          checked: settings.customcss.enabled,
          click: (item) => {
            set("customcss.enabled", item.checked);
          }
        },
        {
          label: "Open selected CSS File",
          enabled: settings.customcss.enabled && !!settings.customcss.scssFile,
          click: (item) => {
            if (item.enabled) electron.shell.openExternal(settings.customcss.scssFile);
          }
        },
        {
          label: "Change CSS File",
          enabled: settings.customcss.enabled,
          click: (item) => {
            if (item.enabled) serverMain.emit("subwindow.show", null, "settingsWindow");
          }
        }
      ]
    },
    {
      type: "separator"
    },
    {
      label: "Quit",
      click: () => serverMain.emit("app.quit", null, true)
    }
  ]);
  return menu;
};
var __defProp$3 = Object.defineProperty;
var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
var __decorateClass$4 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$4(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$3(target, key, result);
  return result;
};
let TrayProvider = class extends BaseProvider {
  constructor(app) {
    super("tray");
    this.app = app;
  }
  get settingsInstance() {
    return this.getProvider("settings");
  }
  _tray;
  get Tray() {
    return this._tray;
  }
  async AfterInit() {
  }
  buildMenu() {
    return createTrayMenu(this);
  }
  async initializeTray() {
    if (this._tray && !this._tray.isDestroyed()) this._tray.destroy();
    this._tray = new electron.Tray(appIconPath);
    this._tray.setToolTip(`YouTube Music for Desktop`);
    this._tray.addListener("click", () => electron.BrowserWindow.fromWebContents(this.views.youtubeView.webContents)?.show());
    this._tray.setContextMenu(this.buildMenu());
    this._tray.setIgnoreDoubleClickEvents(true);
    this._tray.on("click", (ev) => {
      if (ev.triggeredByAccelerator) electron.BrowserWindow.fromWebContents(this.views.youtubeView.webContents)?.show();
    });
    return this._tray;
  }
  onSettingsChange() {
    if (this._tray) this._tray.setContextMenu(this.buildMenu());
  }
  async __trayWindow() {
    let mpId;
    let mpWindow = this.windowContext.views.taskViewWindow;
    if (!mpWindow || mpWindow.isDestroyed()) {
      const width = 400, height = 300;
      mpWindow = await createAppWindow({
        // parent: this.windowContext.main,
        path: "/taskview",
        minWidth: width,
        minHeight: height,
        height,
        width,
        maxHeight: height,
        maxWidth: width,
        showTaskBar: false,
        minimizeable: false,
        maximizeable: false
      });
      mpWindow.setAlwaysOnTop(true, "pop-up-menu");
      mpWindow.setResizable(false);
      mpWindow.on("close", (ev) => {
        ev.preventDefault();
        mpWindow.hide();
      });
      mpWindow.on("blur", () => {
        mpWindow.close();
      });
      mpWindow.webContents.on("before-input-event", (ev, input) => {
        if (input.key === "esc") mpWindow.close();
      });
      const trayBounds = this._tray.getBounds();
      mpWindow.setBounds({
        x: trayBounds.x + trayBounds.width - width,
        y: trayBounds.y + trayBounds.height - height,
        height,
        width
      });
      this.windowContext.views.taskViewWindow = mpWindow;
      mpId = mpWindow.id;
    } else {
      mpId = mpWindow.id;
      mpWindow.show();
    }
    this.windowContext.sendToAllViews("taskview.state", !this.views.taskViewWindow ? null : { active: false });
    return mpId;
  }
  async OnDestroy() {
    this.views.taskViewWindow?.destroy();
  }
};
__decorateClass$4([
  IpcOn("settingsProvider.change", {
    debounce: 50
  })
], TrayProvider.prototype, "onSettingsChange", 1);
__decorateClass$4([
  IpcHandle("action:app.taskView"),
  IpcHandle("app.taskView")
], TrayProvider.prototype, "__trayWindow", 1);
TrayProvider = __decorateClass$4([
  IpcContext
], TrayProvider);
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get default() {
    return TrayProvider;
  }
}, Symbol.toStringTag, { value: "Module" }));
const REPO_WITH_AUTHOR = "Venipa/ytmdesktop2";
const [GITHUB_AUTHOR$1, GITHUB_REPOSITORY$1] = REPO_WITH_AUTHOR.split("/", 2);
var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
var __decorateClass$3 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$3(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$2(target, key, result);
  return result;
};
const [GITHUB_AUTHOR, GITHUB_REPOSITORY] = "Venipa/ytmdesktop2".split("/", 2);
let UpdateProvider = class extends BaseProvider {
  constructor(app) {
    super("update");
    this.app = app;
  }
  _update = null;
  _updateAvailable = false;
  _updateQueuedForInstall = false;
  _updateDownloaded = false;
  _downloadToken = null;
  _autoUpdateCheckHandle = null;
  _readyPromise = null;
  _downloadCachedPromise = null;
  _window;
  get settingsInstance() {
    return this.getProvider("settings");
  }
  get updateQueuedForInstall() {
    return this._updateQueuedForInstall;
  }
  get updateAvailable() {
    return this._updateAvailable;
  }
  get updateDownloaded() {
    return this._updateDownloaded;
  }
  get window() {
    return this._window;
  }
  get updateInfo() {
    return this._update;
  }
  get isAutoUpdate() {
    return this.settingsInstance.instance.app.autoupdate && !devUtils.isDevelopment;
  }
  // Private helper methods
  isUpdateInRange(ver) {
    this.logger.debug("isUpdateInRange", { newVersion: ver, currentVersion: this.app.getVersion() });
    return semver.gtr(ver, this.app.getVersion(), {
      includePrerelease: !!this.settingsInstance.instance?.app?.beta,
      loose: true
    });
  }
  sendToAllViews(ev, ...args) {
    this.windowContext.sendToAllViews(ev, ...args);
    this.window?.webContents.send(ev, ...args);
  }
  sendUpdateStatus(checking) {
    this.sendToAllViews(IPC_EVENT_NAMES.APP_UPDATE_CHECKING, checking);
  }
  async parseUpdateInfo(ev) {
    return {
      ...ev,
      releaseNotes: ev.releaseNotes
    };
  }
  async handleUpdateAvailable(ev) {
    this.logger.debug("handleUpdateAvailable", { ev });
    this._updateAvailable = ev && this.isUpdateInRange(ev.version);
    this._update = this._updateAvailable ? await this.parseUpdateInfo(ev) : null;
    this.logger.debug("handleUpdateAvailable", { updateAvailable: this._updateAvailable, update: this._update });
    if (this._updateAvailable) {
      this.sendToAllViews(IPC_EVENT_NAMES.APP_UPDATE, this._update);
    }
    this.sendUpdateStatus(false);
  }
  async handleUpdateDownloaded(ev) {
    this._updateAvailable = true;
    this._updateDownloaded = true;
    this.sendToAllViews(IPC_EVENT_NAMES.APP_UPDATE_PROGRESS, null);
    this.sendToAllViews(IPC_EVENT_NAMES.APP_UPDATE_DOWNLOADED, await this.parseUpdateInfo(ev));
    if (this.isAutoUpdate) {
      electronUpdater.autoUpdater.quitAndInstall(false, true);
    }
  }
  _showUpdateDialogPromise = null;
  async showUpdateDialog(updateInfo) {
    if (this._showUpdateDialogPromise) {
      await this._showUpdateDialogPromise;
      return;
    }
    if (this.window?.isDestroyed()) this._window = null;
    if (this.window && this.window.isVisible()) {
      this.window.focus();
      return;
    }
    await (this._showUpdateDialogPromise = new Promise(async (resolve) => {
      const parent = this.windowContext.main;
      const height = clamp(parent.getBounds().height, 600, clamp(parent.getBounds().height - 48, 600, 800));
      this._window = await createAppWindow({
        path: "/update",
        height,
        width: 460,
        minWidth: 460,
        maxWidth: 460,
        minHeight: height,
        maxHeight: height,
        maximizeable: false,
        minimizeable: false,
        showTaskBar: true,
        parent,
        top: true,
        show: false
      });
      resolve();
      this.window.webContents.on("did-finish-load", () => {
        this.window.webContents.send("app.update", { ...updateInfo });
      });
      this.window.on("closed", () => {
        this._window = null;
      });
      this.window.show();
    })).finally(() => {
      this._showUpdateDialogPromise = null;
    });
  }
  // Lifecycle methods
  BeforeStart() {
    electronUpdater.autoUpdater.logger = this.logger;
    electronUpdater.autoUpdater.setFeedURL({
      provider: "github",
      owner: GITHUB_AUTHOR,
      repo: GITHUB_REPOSITORY
    });
    electronUpdater.autoUpdater.autoDownload = false;
    electronUpdater.autoUpdater.autoInstallOnAppQuit = devUtils.isProduction;
    this.logger.debug(electronUpdater.autoUpdater.updateConfigPath);
    this.logger.debug("Updater Cache: " + electronUpdater.autoUpdater["app"].baseCachePath);
    electronUpdater.autoUpdater.on("update-available", this.handleUpdateAvailable.bind(this));
    electronUpdater.autoUpdater.on("update-not-available", () => this.sendUpdateStatus(false));
    electronUpdater.autoUpdater.on("update-cancelled", () => this.sendUpdateStatus(false));
    electronUpdater.autoUpdater.on("error", () => this.sendUpdateStatus(false));
    electronUpdater.autoUpdater.on("checking-for-update", () => this.sendUpdateStatus(true));
    electronUpdater.autoUpdater.on("download-progress", (ev) => {
      if (!this.updateDownloaded) {
        this.sendToAllViews(IPC_EVENT_NAMES.APP_UPDATE_PROGRESS, ev);
      }
    });
    electronUpdater.autoUpdater.signals.updateDownloaded(this.handleUpdateDownloaded.bind(this));
    electronUpdater.autoUpdater.on("before-quit-for-update", () => {
      this._updateQueuedForInstall = true;
    });
    this._readyPromise = new Promise(async (resolve) => {
      await Promise.race([new Promise((r1) => electronUpdater.autoUpdater.once("update-available", r1)), new Promise((r1) => electronUpdater.autoUpdater.once("update-not-available", r1))]);
      resolve();
    });
    this._downloadCachedPromise = new Promise(async (resolve) => {
      await Promise.allSettled([new Promise((r1) => electronUpdater.autoUpdater.once("update-downloaded", r1))]).finally(resolve);
    });
  }
  async AfterInit() {
    if (this._update) {
      this.sendToAllViews(IPC_EVENT_NAMES.APP_UPDATE, this._update);
    }
    if (this.isAutoUpdate) {
      this.onCheckUpdate().catch((err) => this.logger.error("Error checking for update", err));
    }
  }
  async getUpdate() {
    await this._readyPromise;
    this.logger.debug("getUpdate", this._update);
    return this._update;
  }
  async onAutoUpdateRun(__ev, quitAndInstall = true) {
    if (this._downloadToken) throw new Error("Download already in progress [E002]");
    if (!this.updateDownloaded && !this.updateQueuedForInstall) {
      const [downloadPromise] = this.onDownloadUpdate();
      if (!downloadPromise) return false;
      await downloadPromise;
    }
    if (!quitAndInstall) return this._updateDownloaded;
    if (!this.isAutoUpdate || this.updateQueuedForInstall) electronUpdater.autoUpdater.quitAndInstall(false, true);
    else if (this.updateDownloaded) electronUpdater.autoUpdater.quitAndInstall(false, true);
    return this._updateDownloaded;
  }
  async _checkUpdate() {
    try {
      this.sendUpdateStatus(true);
      const beta = !!this.settingsInstance.instance?.app?.beta;
      electronUpdater.autoUpdater.allowPrerelease = beta;
      const result = await electronUpdater.autoUpdater.checkForUpdates();
      if (!result?.updateInfo || !this.isUpdateInRange(result.updateInfo.version)) {
        throw new Error("No Update available");
      }
      return result;
    } finally {
      this.sendUpdateStatus(false);
    }
  }
  onDownloadUpdate() {
    if (!this.updateAvailable || this.updateDownloaded || this.updateQueuedForInstall) {
      return [];
    }
    this._downloadToken = new electronUpdater.CancellationToken();
    return [
      electronUpdater.autoUpdater.downloadUpdate(this._downloadToken).then((files) => {
        this._updateDownloaded = !!files.length;
        return files;
      }).finally(() => {
        this._downloadToken?.dispose();
        this._downloadToken = null;
      }),
      () => {
        if (this._downloadToken) {
          this._downloadToken.cancel();
          this._downloadToken.dispose();
          this._downloadToken = null;
        }
        this.sendToAllViews(IPC_EVENT_NAMES.APP_UPDATE_PROGRESS, null);
      }
    ];
  }
  onDownloadUpdateCancel() {
    if (this._downloadToken) {
      this._downloadToken.cancel();
    }
  }
  async isUpdateDownloaded() {
    await this._readyPromise;
    await this._downloadCachedPromise;
    return this.updateDownloaded;
  }
  async onCheckUpdate() {
    try {
      const result = await this._checkUpdate();
      await this.showUpdateDialog(result.updateInfo);
    } catch (err) {
      this.logger.error(err.message);
    } finally {
    }
  }
  onBetaToggled(key, enabled) {
    electronUpdater.autoUpdater.allowPrerelease = !!enabled;
    this.onCheckUpdate();
  }
  onAutoUpdateToggled(key, autoUpdateEnabled) {
    if (autoUpdateEnabled && !this._autoUpdateCheckHandle) {
      this._autoUpdateCheckHandle = setInterval(() => this.onCheckUpdate(), 1e3 * 60 * 15);
    } else if (!autoUpdateEnabled && this._autoUpdateCheckHandle) {
      clearInterval(this._autoUpdateCheckHandle);
      this._autoUpdateCheckHandle = null;
    }
  }
};
__decorateClass$3([
  IpcHandle("action:app.getUpdate")
], UpdateProvider.prototype, "getUpdate", 1);
__decorateClass$3([
  IpcHandle("action:app.installUpdate"),
  IpcOn("app.installUpdate", { debounce: 1e3 })
], UpdateProvider.prototype, "onAutoUpdateRun", 1);
__decorateClass$3([
  IpcOn("app.downloadUpdate")
], UpdateProvider.prototype, "onDownloadUpdate", 1);
__decorateClass$3([
  IpcOn("app.downloadUpdateCancel")
], UpdateProvider.prototype, "onDownloadUpdateCancel", 1);
__decorateClass$3([
  IpcHandle("action:app.updateDownloaded")
], UpdateProvider.prototype, "isUpdateDownloaded", 1);
__decorateClass$3([
  IpcHandle("action:app.checkUpdate"),
  IpcHandle("app.checkUpdate", { debounce: 1e3 })
], UpdateProvider.prototype, "onCheckUpdate", 1);
__decorateClass$3([
  IpcOn("settingsProvider.change", {
    debounce: 250,
    filter: (key) => key === "app.beta"
  })
], UpdateProvider.prototype, "onBetaToggled", 1);
__decorateClass$3([
  IpcOn("settingsProvider.change", {
    debounce: 250,
    filter: (key) => key === "app.autoupdate"
  })
], UpdateProvider.prototype, "onAutoUpdateToggled", 1);
UpdateProvider = __decorateClass$3([
  IpcContext
], UpdateProvider);
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get default() {
    return UpdateProvider;
  }
}, Symbol.toStringTag, { value: "Module" }));
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __decorateClass$2 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$1(target, key, result);
  return result;
};
let VolumeRatioProvider = class extends BaseProvider {
  constructor() {
    super("player-volume-ratio");
  }
  get settingsInstance() {
    return this.getProvider("settings");
  }
  async AfterInit() {
    if (this.settingsInstance.get("volumeRatio.enabled")) {
      await onWindowLoad(
        this.views.youtubeView,
        async () => {
          await this.enable();
        },
        { once: true }
      );
    }
  }
  async __onToggle(key, value) {
    if (value) await this.enable();
    else await this.disable();
  }
  async enable() {
    this.logger.debug("Enabling volume ratio");
    await this.isYtmReady();
    await this.executeCommand("enable");
    await this.forceUpdateVolume();
  }
  async disable() {
    this.logger.debug("Disabling volume ratio");
    await this.isYtmReady();
    await this.executeCommand("disable");
    await this.forceUpdateVolume();
  }
  async forceUpdateVolume(volume) {
    this.logger.debug("Force updating volume ratio", volume ?? "refreshing");
    return await this.executeCommand("force_update", volume).catch(this.logger.error);
  }
};
__decorateClass$2([
  IpcOn("settingsProvider.change", {
    filter(key) {
      return key === "volumeRatio.enabled";
    },
    debounce: 1e3
  })
], VolumeRatioProvider.prototype, "__onToggle", 1);
VolumeRatioProvider = __decorateClass$2([
  IpcContext
], VolumeRatioProvider);
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get default() {
    return VolumeRatioProvider;
  }
}, Symbol.toStringTag, { value: "Module" }));
var __defProp = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
const CSPDevHeaders = [
  `default-src * 'unsafe-inline' 'unsafe-eval'; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; media-src * data: blob: 'unsafe-inline'; frame-src *; style-src * 'unsafe-inline';`
];
let WindowUtilsProvider = class extends BaseProvider {
  constructor() {
    super("window");
  }
  async BeforeStart() {
  }
  async OnInit() {
  }
  async _getWindowState(_ev) {
    try {
      const win = electron.BrowserWindow.fromWebContents(_ev.sender);
      const state = getWindowState(win);
      if (!state) return state;
      return {
        ...state,
        navigation: this.views.youtubeView && {
          canGoBack: this.views.youtubeView.webContents.navigationHistory.canGoBack(),
          index: this.views.youtubeView.webContents.navigationHistory.getActiveIndex()
        } || null
      };
    } catch (ex) {
      this.logger.error(ex);
      return null;
    }
  }
  _toolbarMouseEvent(event, ignore, options) {
    const win = electron.BrowserWindow.fromWebContents(event.sender);
    win.setIgnoreMouseEvents(ignore, options);
  }
  async _getMainWindowState(_ev) {
    if (!this.windowContext) return null;
    try {
      const state = getWindowStateFromContext(this.windowContext);
      if (!state) return state;
      return state;
    } catch (ex) {
      this.logger.error(ex);
      return null;
    }
  }
  _handleNavigation(_ev, url) {
    pushWindowStates(this.views.youtubeView.webContents.id);
    this.logger.debug("navigation", { url });
  }
  async AfterInit() {
    this.views.youtubeView.webContents.on("will-navigate", this._handleNavigation.bind(this));
    this.views.youtubeView.webContents.on("did-navigate", this._handleNavigation.bind(this));
    this.views.youtubeView.webContents.on("did-navigate-in-page", this._handleNavigation.bind(this));
    this.logger.debug("Watching nav changes for window state...");
  }
  async OnDestroy() {
  }
};
__decorateClass$1([
  IpcHandle("windowState")
], WindowUtilsProvider.prototype, "_getWindowState", 1);
__decorateClass$1([
  IpcOn("toolbar/set-ignore-mouse-events")
], WindowUtilsProvider.prototype, "_toolbarMouseEvent", 1);
__decorateClass$1([
  IpcHandle("mainWindowState")
], WindowUtilsProvider.prototype, "_getMainWindowState", 1);
WindowUtilsProvider = __decorateClass$1([
  IpcContext
], WindowUtilsProvider);
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CSPDevHeaders,
  get default() {
    return WindowUtilsProvider;
  }
}, Symbol.toStringTag, { value: "Module" }));
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
};
let YoutubeControlProvider = class extends BaseProvider {
  constructor(app) {
    super("youtube");
    this.app = app;
  }
  async BeforeStart() {
  }
  async AfterInit() {
  }
};
YoutubeControlProvider = __decorateClass([
  IpcContext
], YoutubeControlProvider);
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get default() {
    return YoutubeControlProvider;
  }
}, Symbol.toStringTag, { value: "Module" }));
class BaseEvent {
  constructor(_eventName, type = "server") {
    this._eventName = _eventName;
    if (!["on", "once", "handle", "server"].includes(type)) {
      throw new Error(`Invalid event type ${type}`);
    }
    this._loggerInstance = console$1.logger.child(`event/${_eventName}`);
    this.__type = type;
  }
  __type;
  _loggerInstance;
  _providers = {};
  _app;
  get eventName() {
    return this._eventName;
  }
  get logger() {
    return this._loggerInstance;
  }
  get app() {
    return this._app;
  }
  getProvider(name) {
    return this._providers[name];
  }
  __registerProviders(p) {
    this._providers = p.reduce((l, r) => ({ ...l, [r.getName()]: r }), {});
  }
  __registerApp(app) {
    this._app = app;
  }
  __prepare() {
    const type = this.__type;
    const func = (...args) => {
      return type === "handle" ? Promise.resolve(this["handle"](...args)) : this["execute"](...args);
    };
    this.logger.debug(`registered "${this.__type}" event "${this.eventName}"`);
    if (type === "server") serverMain.onServer(this.eventName, func);
    else serverMain[type](this.eventName, func);
  }
}
class settingsChange_event extends BaseEvent {
  constructor() {
    super("settingsProvider.change");
  }
  execute(key, value) {
    this.logger.debug(`${key} has changed its value to`, value);
  }
}
const __vite_glob_2_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: settingsChange_event
}, Symbol.toStringTag, { value: "Module" }));
class TrackInfoChange extends BaseEvent {
  constructor() {
    super("track:change");
  }
  execute(track) {
    const trackProvider = this.getProvider("track");
    trackProvider.pushTrackToViews(track);
  }
}
const __vite_glob_2_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: TrackInfoChange
}, Symbol.toStringTag, { value: "Module" }));
const GLOB_PATTERNS = {
  plugins: () => /* @__PURE__ */ Object.assign({ "../plugins/apiProvider.plugin.ts": __vite_glob_0_0, "../plugins/appProvider.plugin.ts": __vite_glob_0_1, "../plugins/customCssProvider.plugin.ts": __vite_glob_0_2, "../plugins/discordProvider.plugin.ts": __vite_glob_0_3, "../plugins/eventProvider.plugin.ts": __vite_glob_0_4, "../plugins/lastfmProvider.plugin.ts": __vite_glob_0_5, "../plugins/mediaControlProvider.plugin.ts": __vite_glob_0_6, "../plugins/miniPlayerProvider.plugin.ts": __vite_glob_0_7, "../plugins/navigationProvider.plugin.ts": __vite_glob_0_8, "../plugins/settingsProvider.plugin.ts": __vite_glob_0_9, "../plugins/startupProvider.plugin.ts": __vite_glob_0_10, "../plugins/touchbarProvider.plugin.ts": __vite_glob_0_11, "../plugins/trackProvider.plugin.ts": __vite_glob_0_12, "../plugins/trayProvider.plugin.ts": __vite_glob_0_13, "../plugins/updateProvider.plugin.ts": __vite_glob_0_14, "../plugins/volumeRatio.plugin.ts": __vite_glob_0_15, "../plugins/windowProvider.plugin.ts": __vite_glob_0_16, "../plugins/youtubeProvider.plugin.ts": __vite_glob_0_17 }),
  providers: () => /* @__PURE__ */ Object.assign({}),
  events: () => /* @__PURE__ */ Object.assign({ "../events/settingsChange.event.ts": __vite_glob_2_0, "../events/trackInfoChange.event.ts": __vite_glob_2_1 })
};
class BaseCollection {
  constructor(app) {
    this.app = app;
  }
  items = [];
  logger = console$1.logger.child(this.constructor.name);
  async initializeItems(globPattern) {
    const patternImport = GLOB_PATTERNS[globPattern];
    if (!patternImport) {
      throw new Error(`Invalid glob pattern: ${globPattern}`);
    }
    const collectionEntries = patternImport();
    this.items = Object.values(collectionEntries).map((m) => m.default).filter(Boolean).map((item) => new item(this.app));
  }
  getProviderNames() {
    return this.items.map((x) => x.getName?.() ?? x.eventName ?? "");
  }
  getProvider(name) {
    return this.items.find((x) => x.getName?.() === name || x.eventName === name);
  }
  async executeMethod(methodName, ...args) {
    const itemsWithMethod = this.items.filter((x) => typeof x[methodName] === "function");
    if (itemsWithMethod.length === 0) return [];
    this.logger.debug(`Executing ${methodName} on ${itemsWithMethod.map((x) => x.getName?.() ?? x.eventName).join(", ")}`);
    return await Promise.all(itemsWithMethod.map((x) => Promise.resolve(x[methodName](...args))));
  }
  getItems() {
    return this.items;
  }
  async executeLifecycleEvent(event, ...args) {
    return await this.executeMethod(event, ...args);
  }
  registerWindows(context) {
    this.items.forEach((item) => {
      if (typeof item.__registerWindows === "function") {
        item.__registerWindows(context);
      }
    });
  }
  registerProviders(providers) {
    this.items.forEach((item) => {
      if (typeof item.__registerProviders === "function") {
        item.__registerProviders(providers);
      }
    });
  }
  registerApp() {
    this.items.forEach((item) => {
      if (typeof item.__registerApp === "function") {
        item.__registerApp(this.app);
      }
    });
  }
}
class EventCollection extends BaseCollection {
  constructor(app) {
    super(app);
  }
  async initialize(providers) {
    await this.initializeItems("events");
    this.items.forEach((p) => {
      if (providers) p.__registerProviders(providers);
      p.__registerApp(this.app);
    });
    return this;
  }
  async prepare() {
    return await this.executeMethod("__prepare");
  }
}
class ProviderCollection extends BaseCollection {
  constructor(app) {
    super(app);
  }
  async initialize() {
    await this.initializeItems("plugins");
    this.registerProviders(this.items);
    return this;
  }
  async exec(event) {
    console$1.logger.debug(`executing provider event: "${event}" for ${this.getProviderNames().join(", ")}`);
    return await this.executeLifecycleEvent(event, this.app);
  }
  getTypedProvider(name) {
    return this.getProvider(name);
  }
}
async function createPluginCollection(app) {
  const collection = new ProviderCollection(app);
  await collection.initialize();
  return collection;
}
async function createEventCollection(app, providers) {
  const collection = new EventCollection(app);
  await collection.initialize(providers);
  return collection;
}
function createWindowContext(_data) {
  return new class {
    main = _data.main;
    views = _data.views || {};
    async sendTrackControl(type) {
      const view = this.views.youtubeView;
      if (!view) return Promise.reject(new Error("View not found"));
      const data = await view.invoke(IPC_EVENT_NAMES.TRACK_CONTROL, { type }) ?? {};
      if (data.type !== type) throw new Error("Invalid response");
      return data;
    }
    sendToAllViews(ev, ...args) {
      return Object.values(this.views).filter((x) => x && (x instanceof electron.BrowserWindow ? !x.isDestroyed() && !x.webContents.isDestroyed() : x.webContents && !x.webContents.isDestroyed())).forEach((x) => {
        try {
          x.webContents.send(ev, ...args);
        } catch (ex) {
          console.error({
            error: ex,
            disposed: x.webContents.isDestroyed()
          });
        }
      });
    }
  }();
}
const createApiView = async (path2, postFunc, options) => {
  const view = new electron.WebContentsView({
    webPreferences: {
      nodeIntegration: true,
      sandbox: false,
      contextIsolation: true,
      webSecurity: devUtils.isProduction,
      allowRunningInsecureContent: !devUtils.isProduction,
      preload: path$1.join(__dirname, "../preload/api.js"),
      transparent: options?.transparent
    }
  });
  await loadUrlOfWebContents(view.webContents, path2);
  if (postFunc) await Promise.resolve(postFunc(view));
  const wnd = electron.BrowserWindow.fromWebContents(view.webContents);
  if (wnd) lockSizeToParent(wnd, options?.lockSize)(view);
  return view;
};
const createView = async (preload, postFunc, options = {}) => {
  const view = new electron.WebContentsView({
    webPreferences: {
      disableHtmlFullscreenWindowResize: true,
      nodeIntegration: true,
      sandbox: false,
      webSecurity: devUtils.isProduction,
      allowRunningInsecureContent: !devUtils.isProduction,
      contextIsolation: true,
      ...options,
      preload
    }
  });
  if (postFunc) await Promise.resolve(postFunc(view));
  const wnd = electron.BrowserWindow.fromWebContents(view.webContents);
  if (wnd) lockSizeToParent(wnd)(view);
  return view;
};
const createPopup = async (options) => {
  const wnd = new electron.BrowserWindow({
    minHeight: 400,
    minWidth: 400,
    ...options ? options : {},
    webPreferences: {
      disableHtmlFullscreenWindowResize: true,
      nodeIntegration: true,
      sandbox: false,
      webSecurity: devUtils.isProduction,
      contextIsolation: false,
      // window object is required to be rewritten for tracking current track
      ...options?.webPreferences ? options.webPreferences : {}
    }
  });
  const lockSize = lockSizeToParent(wnd);
  return { popup: wnd, lockSize };
};
const googleLoginPopup = async (authUrl, parent) => {
  const webPreferences = {
    nodeIntegration: false,
    nodeIntegrationInSubFrames: false,
    nodeIntegrationInWorker: false,
    webSecurity: devUtils.isProduction,
    sandbox: false,
    contextIsolation: true,
    allowRunningInsecureContent: false,
    preload: path$1.join(__dirname, "../preload/login.js")
  };
  const { lockSize, popup } = await createPopup({
    icon: appIconPath,
    title: STRINGS.appName,
    height: 580,
    width: 800,
    resizable: false,
    maximizable: false,
    frame: false,
    fullscreenable: false,
    minimizable: false,
    alwaysOnTop: true,
    autoHideMenuBar: true,
    webPreferences,
    ...parent && { parent, modal: true } || {}
  });
  popup.setMenu(null);
  const noticeView = await createApiView("youtube/login-notice");
  popup.contentView.addChildView(noticeView);
  const [width, height] = popup.getContentSize();
  const noticeHeight = 120;
  noticeView.setBounds({ height: noticeHeight, width, x: 0, y: 0 });
  const loginView = new electron.WebContentsView({
    webPreferences
  });
  popup.contentView.addChildView(loginView, 0);
  loginView.setBounds({ height: height - noticeHeight, width, x: 0, y: noticeHeight });
  await loginView.webContents.loadURL(authUrl, {
    httpReferrer: devUtils.defaultUrl
  });
  loginView.webContents.setWindowOpenHandler(({ url }) => {
    if (!url.startsWith("http")) {
      return { action: "deny" };
    }
    if (/^https?\:\/\/([a-zA-Z0-9]+)?\.google\.([a-z]+)/.test(url)) {
      electron.shell.openExternal(url);
      return { action: "deny" };
    }
    return { action: "allow" };
  });
  let timeoutHandler;
  const clearGC = () => {
    timeoutHandler && clearTimeout(timeoutHandler);
  };
  electron.ipcMain.once("subwindow.close/loginView", () => {
    popup.close();
    clearGC();
  });
  return await new Promise((resolve, reject) => {
    timeoutHandler = setTimeout(
      () => {
        reject();
      },
      10 * 60 * 1e3
    );
    let isAuthenticated = false;
    popup.on("close", () => {
      resolve(isAuthenticated);
      clearGC();
    });
    loginView.webContents.on("ipc-message", (ev, eventName) => {
      console.log("login event", eventName);
      if (eventName === "g-login-success") {
        isAuthenticated = true;
        popup.close();
      }
    });
  });
};
function isGoogleLoginUrl(url) {
  return /^accounts\.google\.(\w+)/.test(url.hostname);
}
function isPreventedNavOrRedirect(url) {
  return /^(?!consent\.youtube\.com|accounts\.youtube\.com|music\.youtube\.com|accounts\.google\.\w+)$/.test(url.hostname) && !/^(www\.youtube\.com|youtube\.com)\/(premium|musicpremium)$/i.test(url.hostname + url.pathname) && !url.hostname.match(/^accounts\.google\.(\w+)$/);
}
const GOOGLE_LOGIN_URL = "https://accounts.google.com/ServiceLogin?" + new URLSearchParams({
  ltmpl: "music",
  service: "youtube",
  continue: "https://www.youtube.com/signin?action_handle_signin=true&app=desktop&next=https://music.youtube.com/"
}).toString();
class WindowManager {
  constructor(userAgent) {
    this.userAgent = userAgent;
  }
  mainWindow = null;
  views = null;
  loadingView = null;
  isGoogleLoginProcessing = false;
  async createRootWindow(options) {
    const winSize = {
      width: 1500,
      height: 800
    };
    this.mainWindow = new electron.BrowserWindow({
      ...winSize,
      minWidth: 800,
      minHeight: 480,
      autoHideMenuBar: true,
      icon: appIconPath,
      backgroundColor: "#030404",
      center: true,
      closable: true,
      skipTaskbar: false,
      resizable: true,
      frame: false,
      title: STRINGS.appName,
      darkTheme: true,
      titleBarStyle: process.platform === "darwin" ? "hiddenInset" : "hidden",
      maximizable: true,
      show: false,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: true,
        sandbox: false,
        webSecurity: devUtils.isDevelopment,
        allowRunningInsecureContent: !devUtils.isDevelopment,
        backgroundThrottling: false,
        ...options?.webPreferences || {}
      },
      ...options || {}
    });
    this.setupWindowUserAgent();
    await this.setupViews();
    this.setupWindowEvents();
    await this.initializeWindowState(winSize);
    return createWindowContext({
      main: this.mainWindow,
      views: this.views
    });
  }
  setupWindowUserAgent() {
    if (!this.mainWindow || !this.userAgent) return;
    let originalUserAgent;
    electron.app.on("web-contents-created", (event, webContents) => {
      webContents.setUserAgent(this.userAgent);
      webContents.session.webRequest.onBeforeSendHeaders((details, cb) => {
        if (isGoogleLoginUrl(new URL(details.url))) {
          console$1.logger.debug(`Setting user agent to ${originalUserAgent} for ${details.url}`);
          details.requestHeaders["User-Agent"] = originalUserAgent;
        } else {
          details.requestHeaders["User-Agent"] = this.userAgent;
        }
        cb({ requestHeaders: details.requestHeaders });
      });
    });
  }
  async setupViews() {
    if (!this.mainWindow) return;
    this.loadingView = await this.createLoadingView();
    this.views = {
      youtubeView: await this.createYoutubeView(),
      toolbarView: await this.createToolbarView()
    };
    this.setupViewEvents();
  }
  async createLoadingView() {
    const view = await createApiView("/youtube/loading", (view2) => {
      if (!this.mainWindow) return;
      this.mainWindow.contentView.addChildView(view2);
      const [width, height] = this.mainWindow.getSize();
      view2.setBounds({
        x: 0,
        y: 0,
        width,
        height
      });
    });
    return view;
  }
  async createYoutubeView() {
    return await createView(
      path$1.join(__dirname, "../preload/youtube.js"),
      (view) => {
        if (!this.mainWindow) return;
        this.mainWindow.contentView.addChildView(view);
        const [width, height] = this.mainWindow.getSize();
        view.setBounds({
          y: 40,
          x: 0,
          height: height - 40,
          width
        });
        this.setupYoutubeViewEvents(view);
      },
      {
        sandbox: false,
        contextIsolation: false
      }
    );
  }
  async createToolbarView() {
    return await createApiView(
      "/youtube/toolbar",
      (view) => {
        if (!this.mainWindow) return;
        this.mainWindow.contentView.addChildView(view);
        this.mainWindow.contentView.addChildView(this.loadingView);
        const [width, height] = this.mainWindow.getSize();
        view.setBounds({
          height: 40,
          width,
          x: 0,
          y: 0
        });
      },
      { lockSize: { resize: "width" }, transparent: true }
    );
  }
  setupYoutubeViewEvents(view) {
    let lastLocation;
    view.webContents.on("did-navigate", (ev, location) => {
      lastLocation = location;
    });
    view.webContents.on("will-navigate", (ev, location) => {
      if (this.isGoogleLoginProcessing) {
        ev.preventDefault();
        return;
      }
      if (!lastLocation || new URL(lastLocation).origin !== new URL(location).origin) {
        console$1.logger.info(`will-navigate: ${location}`);
      }
      if (location?.match(/^https?\:\/\/(accounts)?.google.([a-z]+)/)) {
        ev.preventDefault();
        this.handleGoogleLogin(location, view);
      }
    });
    view.webContents.on("will-navigate", (ev, location) => {
      if (!lastLocation?.match(devUtils.defaultUrl) && !!location?.match(devUtils.defaultUrl)) {
        serverMain.emit("app.loadStart");
      } else {
        pushWindowStates(view.webContents.id);
      }
    });
    view.webContents.on("will-redirect", (event) => {
      const url = new URL(event.url);
      if (isPreventedNavOrRedirect(url)) {
        event.preventDefault();
        console$1.logger.info(`Handling YouTube Music View navigation: ${event.url}`);
      }
      if (/^(?:www\.)?youtube\.com\/(?:premium|musicpremium)$/i.test(url.hostname + url.pathname)) {
        this.handleGoogleLogin(GOOGLE_LOGIN_URL, view);
      }
    });
    view.webContents.on("page-title-updated", (ev, title) => view.webContents.emit("window-title-updated", title));
  }
  async handleGoogleLogin(location, view) {
    this.isGoogleLoginProcessing = true;
    try {
      const isAuthenticated = await googleLoginPopup(location, this.mainWindow);
      if (isAuthenticated) {
        view.webContents.reload();
        serverMain.emit("app.loadStart");
        await new Promise((resolve) => view.webContents.once("did-finish-load", () => resolve()));
      }
    } catch (error) {
      console$1.logger.error("Error handling Google login", error);
    } finally {
      this.isGoogleLoginProcessing = false;
    }
  }
  _youtubeReady = false;
  get youtubeReady() {
    return this._youtubeReady;
  }
  setupViewEvents() {
    const handleLoadEnd = () => {
      if (!this.mainWindow || !this.loadingView || !this.views) return;
      this.mainWindow.contentView.removeChildView(this.loadingView);
      this.mainWindow.contentView.addChildView(this.views.toolbarView);
      this._youtubeReady = true;
    };
    const handleLoadStart = debounce(() => {
      if (!this.mainWindow || !this.loadingView || !this.views) return;
      if (!this.mainWindow.contentView.children?.find((x) => this.loadingView?.webContents && x === this.loadingView)) {
        this.mainWindow.contentView.addChildView(this.loadingView);
      }
      this._youtubeReady = false;
    }, 100);
    serverMain.on("app.loadEnd", handleLoadEnd);
    serverMain.on("app.loadStart", handleLoadStart);
  }
  setupWindowEvents() {
    if (!this.mainWindow || !this.views) return;
    this.mainWindow.on("maximize", () => {
      this.updateViewBounds();
    });
    this.mainWindow.on("unmaximize", () => {
      this.updateViewBounds();
    });
    this.mainWindow.on(
      "resize",
      debounce(() => {
        this.updateViewBounds();
      }, 100)
    );
  }
  updateViewBounds() {
    if (!this.mainWindow || !this.views) return;
    const [winWidth, winHeight] = this.mainWindow.getSize();
    const youtubeBounds = this.views.youtubeView.getBounds();
    const toolbarBounds = this.views.toolbarView.getBounds();
    this.views.toolbarView.setBounds({
      ...toolbarBounds,
      width: winWidth
    });
    this.views.youtubeView.setBounds({
      ...youtubeBounds,
      width: winWidth,
      height: winHeight - toolbarBounds.height
    });
  }
  async initializeWindowState(winSize) {
    if (!this.mainWindow || !this.views) return;
    const { state } = await wrapWindowHandler(this.mainWindow, "root", { ...winSize });
    if (state?.maximized) {
      this.mainWindow.maximize();
    } else {
      this.mainWindow.setBounds({ ...state });
    }
    callWindowListeners(this.mainWindow, "will-resize", state);
    serverMain.emit("app.loadStart");
    await this.views.youtubeView.webContents.loadURL(devUtils.defaultUrl).then(() => {
      if (process.platform === "darwin") {
        const bounds = this.mainWindow.getBounds();
        this.mainWindow.setBounds({
          width: bounds.width + 1
        });
        this.mainWindow.setBounds({
          width: bounds.width - 1
        });
      }
    });
  }
  getWindow() {
    return this.mainWindow;
  }
  getViews() {
    return this.views;
  }
}
initializeCustomElectronEnvironment();
const log = console$1.logger.child("main");
const runApp = async function() {
  const serviceCollection = await createPluginCollection(electron.app), eventCollection = await createEventCollection(electron.app, serviceCollection.getItems());
  log.debug(`Loaded Providers: ${serviceCollection.getProviderNames().join(", ")}`);
  log.debug(`Loaded Events: ${eventCollection.getProviderNames().join(", ")}`);
  try {
    await serviceCollection.exec("BeforeStart");
    await eventCollection.prepare();
  } catch (ex) {
    log.error(ex);
  }
  electron.protocol.registerSchemesAsPrivileged([{ scheme: "app", privileges: { secure: true, standard: true } }]);
  const brickGoogleUA = {
    darwin: "Mozilla/5.0 (Macintosh; Intel Mac OS X 14.7; rv:139.0) Gecko/20100101 Firefox/139.0",
    win32: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:139.0) Gecko/20100101 Firefox/139.0",
    linux: "Mozilla/5.0 (X11; Linux x86_64; rv:139.0) Gecko/20100101 Firefox/139.0"
  };
  const currentUserAgent = brickGoogleUA[process.platform] ?? brickGoogleUA.win32;
  const windowManager = new WindowManager(currentUserAgent);
  let mainWindow;
  const reactivate = async () => {
    if (electron.BrowserWindow.getAllWindows().length === 0) {
      mainWindow = await windowManager.createRootWindow();
      await waitMs();
      mainWindow.main.show();
      if (serviceCollection) {
        serviceCollection.registerWindows(mainWindow);
        await serviceCollection.exec("AfterInit");
      }
    }
  };
  electron.app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      serverMain.emit("app.quit", null, true);
    }
  });
  electron.app.on("activate", reactivate);
  electron.app.on("ready", async () => {
    await waitMs();
    mainWindow = await windowManager.createRootWindow();
    serviceCollection.registerWindows(mainWindow);
    await waitMs();
    await serviceCollection.exec("OnInit");
    const startupService = serviceCollection.getTypedProvider("startup");
    log.debug({ isStartupContext: startupService.isStartupContext });
    if (startupService.isStartupContext ? !startupService.isEnabled || !startupService.isInitialMinimized : !startupService.isMinimizedArg) {
      mainWindow.main.show();
    }
    await onWindowLoad(mainWindow.main, () => serviceCollection.exec("AfterInit"), { once: true });
    mainWindow.main.webContents.on("did-finish-load", () => serviceCollection.exec("AfterInit"));
  });
  serverMain.on("app.minimize", (ev) => {
    const window2 = electron.BrowserWindow.fromWebContents(ev.sender);
    if (window2 && window2.isMinimizable()) window2.minimize();
  });
  serverMain.on("app.maximize", (ev) => {
    const window2 = electron.BrowserWindow.fromWebContents(ev.sender);
    if (window2 && window2.isMaximizable()) window2.isMaximized() ? window2.unmaximize() : window2.maximize();
  });
  serverMain.on("app.goback", () => {
    const { youtubeView } = mainWindow.views ?? {};
    if (!youtubeView || youtubeView.webContents.isDestroyed() || !youtubeView.webContents.navigationHistory.canGoBack()) return;
    youtubeView.webContents.navigationHistory.goBack();
  });
  let forcedQuit = false;
  serverMain.on("app.quit", (ev, forceQuit) => {
    forcedQuit = !!forceQuit;
    electron.app.quit();
  });
  electron.app.on("before-quit", (ev) => {
    if (forcedQuit || serviceCollection.getTypedProvider("update").updateQueuedForInstall) return;
    const settings = serviceCollection.getTypedProvider("settings");
    if (settings.get("app.minimizeTrayOverride")) {
      serverMain.emit("app.trayState", null, "hidden");
      ev.preventDefault();
    } else {
      serviceCollection.getTypedProvider("settings")?.saveToDrive();
    }
  });
  serverMain.on("app.restore", () => {
    if (!mainWindow.main.isVisible()) {
      serverMain.emit("app.trayState", null, "visible");
    }
  });
  serverMain.on("app.trayState", (ev, state) => {
    if (state === "visible" && !mainWindow.main.isVisible()) {
      mainWindow.main.show();
      mainWindow.main.setSkipTaskbar(false);
    } else if (state === "hidden" && mainWindow.main.isVisible()) {
      mainWindow.main.hide();
      mainWindow.main.setSkipTaskbar(true);
    }
  });
};
runApp();
