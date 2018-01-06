Blockly.JavaScript['rain_setup'] = function(block) {
  var variable_rain = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('rain'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['rain_pin'] = function(block) {
  var dropdown_uno_dpin1 = block.getFieldValue('uno_Dpin1');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['rain_sencing'] = function(block) {
  var variable_rain = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('rain'), Blockly.Variables.NAME_TYPE);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['rain_display'] = function(block) {
  var variable_rain = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('rain'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};