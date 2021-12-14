"use strict";
exports.__esModule = true;
exports.CartClosed = exports.ProductRemoved = exports.QuantityUpdated = exports.ProductAdded = exports.UserCartCreated = void 0;
var joi_1 = require("joi");
var _1 = require(".");
var UserCartCreated = function () { return ({
    schema: null
}); };
exports.UserCartCreated = UserCartCreated;
var ProductAdded = function () { return ({
    schema: _1.CartProductSchema
}); };
exports.ProductAdded = ProductAdded;
var QuantityUpdated = function () { return ({
    schema: joi_1["default"].object().keys({
        productId: joi_1["default"].string().uuid(),
        quantity: joi_1["default"].number()
    })
}); };
exports.QuantityUpdated = QuantityUpdated;
var ProductRemoved = function () { return ({
    schema: joi_1["default"].object().keys({
        productId: joi_1["default"].string()
    })
}); };
exports.ProductRemoved = ProductRemoved;
var CartClosed = function () { return ({
    schema: null
}); };
exports.CartClosed = CartClosed;
