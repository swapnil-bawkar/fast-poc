module.exports = function(RED) {
  function LaunchApplication(config) {
      RED.nodes.createNode(this,config);
  }
  RED.nodes.registerType("launch-application", LaunchApplication);
}
