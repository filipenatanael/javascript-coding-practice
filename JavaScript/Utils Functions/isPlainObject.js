// Get the raw type string of a value: [object Object]
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true for plain JavaScript objects:
 */
function isPlainObject (object) {
  return _toString.call(object) === '[object Object]'
}

function isRegExp (value) {
  return _toString.call(value) === '[object RegExp]'
}
