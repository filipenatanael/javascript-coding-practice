// Check whether the object has the property:

var hasOwnProperty = Object.prototype.hasOwnProperty;

function hasOwnProps(obj, key) {
  return hasOwnProperty.call(obj, key)
}
