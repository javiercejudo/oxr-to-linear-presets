# oxr-to-linear-presets

[![Build Status](https://travis-ci.org/javiercejudo/oxr-to-linear-presets.svg)](https://travis-ci.org/javiercejudo/oxr-to-linear-presets)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/oxr-to-linear-presets/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/oxr-to-linear-presets?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/oxr-to-linear-presets/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/oxr-to-linear-presets)

Transform [open exchange rates API response](https://openexchangerates.org/documentation#preview-api-response) to [linear presets](https://github.com/javiercejudo/linear-presets) format.

## Install

    npm i oxr-to-linear-presets

## Usage

See the [tested example](test/example.js) or check the [live Tonic notebook](https://tonicdev.com/javiercejudo/oxr-to-linear-presets/2.0.0).

It also works with [fixer.io](http://fixer.io/) out of the box ([live example](https://tonicdev.com/javiercejudo/fx-linear-converter)).

### Node.js

```js
var oxrTransform = require('oxr-to-linear-presets');
var oxr = require('open-exchange-rates');

oxr.set({ app_id: 'YOUR_APP_ID' });

oxr.latest(function() {
  console.log(oxrTransform(oxr.rates, oxr.base));
});
```

### jQuery

```js
// browserified or similar
var oxrTransform = require('oxr-to-linear-presets');

$.ajax({
  url: 'https://openexchangerates.org/api/latest.json?app_id=YOUR_APP_ID',
  dataType: 'jsonp',
  success: function(json) {
    console.log(oxrTransform(json.rates, json.base));
  }
});
```
