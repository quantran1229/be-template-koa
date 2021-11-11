"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _dotenv = _interopRequireDefault(require("dotenv"));

// Load .env
_dotenv["default"].config(); // Constant class to store constant value + value set using ENV


var Constant = // Default Http Code
// Set Constant variable as ENV variable
function Constant() {
  (0, _classCallCheck2["default"])(this, Constant);
  (0, _defineProperty2["default"])(this, "HTTP_CODE", {
    Success: 200,
    Created: 201,
    SuccessNoContent: 204,
    BadRequest: 400,
    Unauthorized: 401,
    Forbidden: 403,
    NotFound: 404,
    Conflict: 409,
    BodyParseError: 422,
    InternalError: 500
  });
  (0, _defineProperty2["default"])(this, "APP_PORT", process.env.APP_PORT);
  (0, _defineProperty2["default"])(this, "APP_HOST", process.env.APP_HOST);
  (0, _defineProperty2["default"])(this, "NODE_ENV", process.env.NODE_ENV);
};

exports["default"] = Constant;
(0, _defineProperty2["default"])(Constant, "instance", new Constant());