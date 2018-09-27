// Check if value is primitive

function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'symbol' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  )
}
