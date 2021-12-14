"use strict";
exports.__esModule = true;
exports.UserModelSchema = void 0;
var joi_1 = require("joi");
exports.UserModelSchema = joi_1["default"].object().keys({
    address: joi_1["default"].string()
});
