module.exports = function asset (type, opts, children) {
  var asset = {}

  if (!type) {
    throw new Error('Asset type must be dinfined')
  }

  asset.type = type

  return asset
}
