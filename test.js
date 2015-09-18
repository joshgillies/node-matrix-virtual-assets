var asset = require('./')
var test = require('tape')

test('exports a function', function (assert) {
  assert.plan(1)
  assert.deepEqual(asset('folder'), { type: 'folder' })
})

test('error if type is undefined', function (assert) {
  assert.plan(1)
  try {
    asset()
  } catch (error) {
    assert.ok(error)
  }
})
