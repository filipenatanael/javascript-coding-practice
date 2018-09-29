/**
 * This is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSONCompliant type
 */

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}
