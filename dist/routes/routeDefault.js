"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _response = _interopRequireDefault(require("../utils/response"));

var _constants = _interopRequireDefault(require("../constants"));

var router = new _koaRouter["default"]();
var res = new _response["default"]();

var defaultRouterReturn = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctx) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res.setSuccess(undefined, _constants["default"].instance.HTTP_CODE.Success, "Welcome to Backend API. There is no route right now. Add router in routers folder");
            return _context.abrupt("return", res.send(ctx));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function defaultRouterReturn(_x) {
    return _ref.apply(this, arguments);
  };
}(); // default api return


router.get('/', defaultRouterReturn);
router.post('/', defaultRouterReturn);
router.put('/', defaultRouterReturn);
router["delete"]('/', defaultRouterReturn);
var _default = router;
exports["default"] = _default;