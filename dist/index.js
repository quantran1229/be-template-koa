"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _koa = _interopRequireDefault(require("koa"));

var _koaBodyparser = _interopRequireDefault(require("koa-bodyparser"));

var _koaHelmet = _interopRequireDefault(require("koa-helmet"));

var _cors = _interopRequireDefault(require("@koa/cors"));

var _routes = _interopRequireDefault(require("./routes"));

var _middlewares = require("./middlewares");

var _logger = _interopRequireDefault(require("./utils/logger"));

var _response = _interopRequireDefault(require("./utils/response"));

var _constants = _interopRequireDefault(require("./constants"));

// Constant
var app = new _koa["default"]();
var res = new _response["default"]();
app.use((0, _cors["default"])()).use((0, _koaHelmet["default"])()).use((0, _koaBodyparser["default"])({
  enableTypes: ["json"],
  extendTypes: {
    json: ["application/json"]
  },
  onerror: function onerror(err, ctx) {
    res.setError("Body parse error", _constants["default"].instance.HTTP_CODE.BodyParseError);
    return res.send(ctx);
  }
})).use(_middlewares.routerLog).use(_routes["default"]);
var server = app.listen(_constants["default"].instance.APP_PORT || 3000, // Port default 3000
_constants["default"].instance.APP_HOST, // Host default localhost
function () {
  _logger["default"].info("App run on ".concat(_constants["default"].instance.APP_HOST, ":").concat(_constants["default"].instance.APP_PORT));
});
module.exports = server;