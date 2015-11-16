/* jshint node:true */

'use strict';

var unitScale = require('unit-scale');

module.exports = function transform(rates, base) {
  rates[base] = 1;

  return {
    base: base,
    conversions: singlesToPreset(rates)
  };
};

function singlesToPreset(singles) {
  return Object.keys(singles).reduce(function(result, key) {
    result[key] = [unitScale, [0, singles[key]]];

    return result;
  }, {});
}
