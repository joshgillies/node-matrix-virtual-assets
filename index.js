var extend = require('xtend')

module.exports = function asset (type, opts, children) {
  var asset = {}

  if (!type) {
    throw new Error('Asset type must be defined')
  }

  asset.type = type

  if (children && children.length && Array.isArray(children)) {
    asset.children = children.map(function getChild (child) {
      if (typeof child === 'function') {
        return child()
      }
      return child
    })
  }

  asset = extend(opts, asset)

  return asset
}
