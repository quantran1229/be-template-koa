"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _winston = _interopRequireWildcard(require("winston"));

var _dayjs = _interopRequireDefault(require("dayjs"));

var _constants = _interopRequireDefault(require("../constants"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var combine = _winston.format.combine,
    timestamp = _winston.format.timestamp,
    splat = _winston.format.splat,
    label = _winston.format.label,
    align = _winston.format.align,
    printf = _winston.format.printf;
var logLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    sql: 3,
    http: 4,
    debug: 5
  },
  colors: {
    error: "red",
    warn: "yellow",
    info: "green",
    sql: "blue",
    http: "cyan",
    debug: "grey"
  }
};

_winston["default"].addColors(logLevels.colors);

var myFormat = printf(function (_ref) {
  var level = _ref.level,
      message = _ref.message,
      label = _ref.label,
      timestamp = _ref.timestamp;
  return "".concat(timestamp, " [").concat(level, "]: ").concat(message);
});

var logger = _winston["default"].createLogger({
  levels: logLevels.levels,
  format: combine(timestamp(), myFormat, align(), splat(), _winston["default"].format.colorize()),
  transports: [//
  // - Write all logs with level `error` and below to `error.log`
  // - Write all logs with level `info` and below to `combined.log`
  //
  new _winston["default"].transports.File({
    filename: "logs/error-".concat((0, _dayjs["default"])().format("DDMMYYYY"), ".log"),
    level: "error"
  }), new _winston["default"].transports.File({
    filename: "logs/combined-".concat((0, _dayjs["default"])().format("DDMMYYYY"), ".log"),
    level: "info"
  })]
}); // Log into console


function filterOnly(level) {
  return (0, _winston.format)(function (info, opts) {
    var sys = Symbol["for"]("level");

    if (info[sys] === level) {
      return info;
    }
  })();
}

if (_constants["default"].instance.NODE_ENV !== "production") {
  for (var _i = 0, _Object$keys = Object.keys(logLevels.levels); _i < _Object$keys.length; _i++) {
    var i = _Object$keys[_i];
    logger.add(new _winston["default"].transports.Console({
      level: i,
      format: combine(timestamp(), myFormat, align(), splat(), _winston["default"].format.colorize(), filterOnly(i) // filter only log in this level because winston will log from level < i
      )
    }));
  }
}

var _default = logger;
exports["default"] = _default;