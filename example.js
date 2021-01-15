var Ctext = require('./index');

let primary = new Ctext();
let highlighted = new Ctext({ color: Ctext.colors.red, bgColor: Ctext.bgColors.cyan });

console.log(primary.text('Hello!'));
console.log(highlighted.text('Hello!'));