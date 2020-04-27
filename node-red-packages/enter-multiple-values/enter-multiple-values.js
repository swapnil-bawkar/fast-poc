module.exports = function(RED) {
  function EnterMultipleValues(config) {
      RED.nodes.createNode(this,config);
  }
  RED.nodes.registerType("enter-multiple-values", EnterMultipleValues);
}
