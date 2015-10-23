/*jshint node:true, mocha:true */

'use strict';

require('should');

var response = require('../fixtures/response.json');
var oxrTransform = require('../src/oxr-to-linear-presets');

var Decimal = require('arbitrary-precision')(require('floating-adapter'));
var anyToAny = require('linear-preset-any-to-any')(Decimal);
var convert = require('linear-converter')(Decimal).convert;

describe('oxr-to-linear-presets example', function() {
  it('should allow conversions from any to any', function() {
    var presets = oxrTransform(response.rates, response.base);
    var EUR_AUD = anyToAny(presets.conversions, 'EUR', 'AUD');

    convert(EUR_AUD, 1).valueOf().toFixed(2).should.be.exactly('1.52');
  });
});
