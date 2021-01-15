# Colored Text in Console

Small library (zero dependency) to display colored text in the console.

## Basic Usage

1. Initialize
```js
const colord = require('colord');

const ymu = new colord({
  color: 'yellow', // or colord.colors.yellow
  bgColor: 'magenta', // or colord.bgColors.magenta
  format: 'underscore' // or colord.format.underscore
});
```
2. Use
```js
console.log(ymu.text('Hello World'));
```

## Code and output samples

```js
const colord = require('colord');

// text with no styling
const dText = new colord();

// text with black color and white background
const bw = new colord({
  color: 'black', 
  bgColor: 'white'
});

// parameters can be passed using colors, bgColors, and format attributes
const ymu = new colord({
  color: colord.colors.yellow,
  bgColor: colord.bgColors.magenta,
  format: colord.format.underscore
});

const y = new colord({
  color: colord.colors.yellow
});

const dr = new colord({
  bgColor: colord.bgColors.red
});

console.log(dText.text('Hello World'));
console.log(bw.text('Hello World'));
console.log(ymu.text('Hello World'));
console.log(y.text('Hello World'));
console.log(dr.text('Hello World'));
```

Output

![Output](./assets/colord.PNG)