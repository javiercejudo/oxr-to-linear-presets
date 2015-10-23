/* jshint node:true */

'use strict';

module.exports = function transform(rates, base) {
  return {
    base: base,
    conversions: singlesToPreset(rates)
  };
};

function singlesToPreset(singles) {
  return Object.keys(singles).reduce(function(result, key) {
    result[key] = [[0, 1], [0, singles[key]]];

    return result;
  }, {});
}
