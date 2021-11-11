"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _constants = _interopRequireDefault(require("../constants"));

var Response = /*#__PURE__*/function () {
  function Response() {
    (0, _classCallCheck2["default"])(this, Response);
    this.statusCode = null;
    this.content = undefined;
  }

  (0, _createClass2["default"])(Response, [{
    key: "setSuccess",
    value: function setSuccess(data, statusCode, msg, code) {
      this.statusCode = statusCode ? statusCode : _constants["default"].instance.HTTP_CODE.Success;
      this.content = {
        statusCode: this.statusCode,
        data: data,
        msg: msg,
        code: code
      };
    }
  }, {
    key: "setError",
    value: function setError(msg, statusCode, data, code) {
      this.statusCode = statusCode ? statusCode : _constants["default"].instance.HTTP_CODE.InternalError;
      this.content = {
        statusCode: this.statusCode,
        data: data,
        error: msg,
        code: code
      };
    }
  }, {
    key: "send",
    value: function send(ctx) {
      ctx.status = this.statusCode;

      if (ctx.status !== _constants["default"].instance.HTTP_CODE.SuccessNoContent) {
        ctx.body = this.content;
      }

      return;
    }
  }]);
  return Response;
}();

exports["default"] = Response;