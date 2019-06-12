const lib = require('./jsonpath-picker');

var JPPicker = window.JPPicker || {};

JPPicker.render = lib.jsonPathPicker;
JPPicker.destory = lib.clearJsonPathPicker;

window.JPPicker = JPPicker;
