var utils = require('./utils');

class Ctext {
  constructor({ color, bgColor, format } = {}) {
    this.style = {
      color,
      bgColor,
      format
    }
  }

  text(text) {
    let color = this.style.color || '';
    let bgColor = this.style.bgColor || '';
    let format = this.style.format || '';
    return `${utils.bgColors[bgColor] || ''}${utils.colors[color] || ''}${utils.format[format] || ''}${text}${utils.format.reset}`;
  }
}

module.exports = Ctext;