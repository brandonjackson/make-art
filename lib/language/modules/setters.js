var session = require('../session'),
    utils = require('../utils');

function background(color) {
    session.settings.bg = color;
    utils.record('background', { color: color });
}

function strokeColor(color) {
    session.settings.stroke.color = color;
    session.ctx.strokeStyle = color;
    utils.record('strokeColor', { color: color });
}

function strokeWidth(val) {
    session.settings.stroke.width = val;
    session.ctx.lineWidth = val * session.ratio;
    utils.record('strokeWidth', { width: val });
}

function stroke() {
    var style = utils.parseLineStyle(arguments);

    if (style.color) { strokeColor(style.color); }
    if (typeof style.width !== 'undefined') { strokeWidth(style.width); }
}

function color(val) {
    session.ctx.fillStyle = val || 'transparent';
    utils.record('color', { color: val });
}

module.exports = {
    background  : background,
    strokeColor : strokeColor,
    strokeWidth : strokeWidth,
    stroke      : stroke,
    color       : color
};