# node-matrix-virtual-assets

Create Squiz Matrix assets as virtual tress in JavaScript!

[![Build Status](https://travis-ci.org/joshgillies/node-matrix-virtual-assets.svg)](https://travis-ci.org/joshgillies/node-matrix-virtual-assets)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Example

```js
var asset = require('node-matrix-virtual-assets')

var tree = asset('folder', { name: 'Sites', link: 'type_2' }, [
  asset('site', { name: 'My Site' }, [
    asset('page_standard', { name: 'Home' }, [
      asset('bodycopy', { link: 'type_2', dependant: '1', exclusive: '1' },
        asset('bodycopy_div', { link: 'type_2', dependant: '1' }, [
          asset('content_type_wysiwyg', { link: 'type_2', dependant: '1', exclusive: '1' })
        ])
      ])
    ])
  ])
])
```

## Install

`npm install node-matrix-virtual-assets`

## License

MIT
