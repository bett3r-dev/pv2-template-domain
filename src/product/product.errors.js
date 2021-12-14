"use strict";
exports.__esModule = true;
exports.NegativeQuantity = exports.ProductDoesNotExist = exports.ProductAlreadyExists = void 0;
var joi_1 = require("joi");
var ProductAlreadyExists = function () { return ({
    schema: joi_1["default"].array().items(joi_1["default"].string()),
    type: 'ConflictError'
}); };
exports.ProductAlreadyExists = ProductAlreadyExists;
var ProductDoesNotExist = function () { return ({
    schema: joi_1["default"].array().items(joi_1["default"].string()),
    type: 'NotFoundError'
}); };
exports.ProductDoesNotExist = ProductDoesNotExist;
var NegativeQuantity = function () { return ({
    type: 'NotAcceptableError',
    schema: joi_1["default"].array().items(joi_1["default"].string())
}); };
exports.NegativeQuantity = NegativeQuantity;
