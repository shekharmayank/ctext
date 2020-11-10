var utils = require('./utils');

function cyan(msg) {
    return `${utils.colors.cyan}${msg}${utils.format.reset}`;
};

function yellow(msg) {
    return `${utils.colors.yellow}${msg}${utils.format.reset}`;
};

function bgWhite(msg) {
    return `${utils.bgColors.white}${msg}${utils.format.reset}`;
}

module.exports = {
    yellow,
    cyan,
    bgWhite
}