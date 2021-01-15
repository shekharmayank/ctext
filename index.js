var utils = require('./utils');

class Ctext {
  static colors = {
    black: 'black',
    red: 'red',
    green: 'green',
    yellow: 'yellow',
    blue: 'blue',
    magenta: 'magenta',
    cyan: 'cyan',
    white: 'white'
  };

  static bgColors = {
    black: 'black',
    red: 'red',
    green: 'green',
    yellow: 'yellow',
    blue: 'blue',
    magenta: 'magenta',
    cyan: 'cyan',
    white: 'white'
  };

  static format = {
    reset: 'reset',
    bright: 'bright',
    dim: 'dim',
    underscore: 'underscore',
    blink: 'blink',
    reverse: 'reverse',
    hidden: 'hidden'
  }

  constructor({ color, bgColor, format } = {}) {
    this.style = {
      color,
      bgColor,
      format
    }
  }

  text(text) {
    let color = utils.colors[this.style.color] || '';
    let bgColor = utils.bgColors[this.style.bgColor] || '';
    let format = utils.format[this.style.format] || '';
    return `${bgColor}${color}${format}${text}${utils.format.reset}`;
  }
}

module.exports = Ctext;