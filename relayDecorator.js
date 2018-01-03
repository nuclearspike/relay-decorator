var Relay = require('react-relay/classic');

module.exports = function(spec) {
  return function(Component) {
    return Relay.createContainer(Component, spec)
  }
};
