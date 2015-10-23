/*jshint node:true, mocha:true */

'use strict';

require('should');

var response = require('../fixtures/response.json');
var transformed = require('../fixtures/transformed.json');
var oxrTransform = require('../src/oxr-to-linear-presets');

describe('oxr-to-linear-presets', function() {
  it('should transform open exchange rates API response to linear presets format', function() {
    oxrTransform(response.rates, response.base).should.eql(transformed);
  });
});
