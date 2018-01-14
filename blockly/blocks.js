var mainUrl = 'https://tutorials.webduino.io/zh-tw/docs/';
var utmUrl = '?utm_source=cloud-blockly&utm_medium=contextMenu&utm_campaign=tutorials';

Blockly.Blocks['rain_setup'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField(Blockly.Msg.WEBDUINO_RAIN_SET, "設定")
        .appendField(new Blockly.FieldVariable("rain"), "rain")
        .appendField(Blockly.Msg.WEBDUINO_RAIN_PIN, "腳位為");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl);
  }
};

Blockly.Blocks['rain_pin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBDUINO_RAIN_GAUGE, "雨量筒，")
        .appendField(Blockly.Msg.WEBDUINO_RAIN_GAUGEPIN, "rain pin")
        .appendField(new Blockly.FieldDropdown([["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"], ["17","17"], ["18","18"], ["19","19"]]), "uno_Dpin1");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl);
  }
};

Blockly.Blocks['rain_sencing'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("rain"), "rain")
        .appendField(Blockly.Msg.WEBDUINO_RAIN_DETECT, "開始偵測");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField(Blockly.Msg.WEBDUINO_RAIN_DO, "執行");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl);
  }
};

Blockly.Blocks['rain_display'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("rain"), "rain")
        .appendField(Blockly.Msg.WEBDUINO_RAIN_DETECTED, "所測得目前的")
        .appendField(Blockly.Msg.WEBDUINO_RAIN_VALUE, "雨量(mm)");
    this.setOutput(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl);
  }
};