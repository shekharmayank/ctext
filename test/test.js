var assert = require('assert');
var ctext = require('../index');
const utils = require('../utils');

const resets = '\x1B[0m';

describe('ctext', function() {
  describe('text()', function() {
    it('should return default for default text', function() {
      const dt = new ctext();
      assert.strictEqual(dt.text('hello'), `hello${resets}`);
    });
    it('should return modified text with style', function() {
      const bw = new ctext({ color: ctext.colors.black, bgColor: ctext.bgColors.white});
      assert.strictEqual(bw.text('hello'), `${utils.bgColors.white}${utils.colors.black}hello${resets}`);
    });
  });
});