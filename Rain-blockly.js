+(function (window, webduino) {
  'use strict';
  window.getRain = function(board, pin) {
    return new webduino.module.rain(board, board.getDigitalPin(pin));
  }
}(window, window.webduino));
