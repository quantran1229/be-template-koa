"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dayjs = _interopRequireDefault(require("dayjs"));

var _logger = _interopRequireDefault(require("../utils/logger"));

// Log middleware to show log(time, call, ...) at end of every finish route call
function routeLog(_x, _x2) {
  return _routeLog.apply(this, arguments);
}

function _routeLog() {
  _routeLog = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctx, next) {
    var startTime, error, ms;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            startTime = (0, _dayjs["default"])().clone();
            error = null;
            _context.prev = 2;
            _context.next = 5;
            return next();

          case 5:
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](2);
            error = _context.t0;

          case 10:
            ms = (0, _dayjs["default"])().diff(startTime, 'ms'); // Log request

            _logger["default"].http("".concat(ctx.request.method.toUpperCase(), "[").concat(error ? error.status : ctx.response.status, "] - ").concat(ms, "ms - ").concat(ctx.request.url));

            if (error !== null) {
              ctx["throw"](error.status, error.message);
            }

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 7]]);
  }));
  return _routeLog.apply(this, arguments);
}

var _default = routeLog;
exports["default"] = _default;