"use strict";
exports.__esModule = true;
exports.EmptyCart = exports.CartDoesNotExist = exports.CartAlreadyExist = exports.NegativeQuantity = exports.ProductNotInCart = exports.ProductOutOfStock = exports.ProductAlreadyInCart = exports.ProductDoesNotExist = void 0;
var joi_1 = require("joi");
var ProductDoesNotExist = function () { return ({
    type: 'NotFoundError',
    schema: joi_1["default"].array().items(joi_1["default"].string())
}); };
exports.ProductDoesNotExist = ProductDoesNotExist;
var ProductAlreadyInCart = function () { return ({
    type: 'ConflictError',
    schema: joi_1["default"].array().items(joi_1["default"].string())
}); };
exports.ProductAlreadyInCart = ProductAlreadyInCart;
var ProductOutOfStock = function () { return ({
    type: 'ConflictError',
    schema: joi_1["default"].array().items(joi_1["default"].string())
}); };
exports.ProductOutOfStock = ProductOutOfStock;
var ProductNotInCart = function () { return ({
    type: 'NotFoundError',
    schema: joi_1["default"].array().items(joi_1["default"].string())
}); };
exports.ProductNotInCart = ProductNotInCart;
var NegativeQuantity = function () { return ({
    type: 'NotAcceptableError',
    schema: joi_1["default"].array().items(joi_1["default"].string())
}); };
exports.NegativeQuantity = NegativeQuantity;
var CartAlreadyExist = function () { return ({
    type: 'ConflictError',
    schema: joi_1["default"].array().items(joi_1["default"].string())
}); };
exports.CartAlreadyExist = CartAlreadyExist;
var CartDoesNotExist = function () { return ({
    type: 'NotFoundError',
    schema: joi_1["default"].array().items(joi_1["default"].string())
}); };
exports.CartDoesNotExist = CartDoesNotExist;
var EmptyCart = function () { return ({
    type: 'NotAcceptableError',
    schema: null
}); };
exports.EmptyCart = EmptyCart;
