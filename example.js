var Ctext = require('./index');
var utils = require('./utils');

let primary = new Ctext();
let highlighted = new Ctext({ color: 'black', bgColor: 'yellow' });

console.log(primary.text('Hello!'));
console.log(highlighted.text('Hello!'));