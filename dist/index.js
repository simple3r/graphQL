"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var appServer = (0, _express["default"])();
appServer.listen(3000, function () {
  return console.log('Server on port 3000');
});
//# sourceMappingURL=index.js.map