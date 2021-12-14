"use strict";
exports.__esModule = true;
exports.CloseCart = exports.RemoveProduct = exports.UpdateQuantity = exports.AddProduct = exports.CreateUserCart = void 0;
var joi_1 = require("joi");
var _1 = require(".");
var CreateUserCart = function () { return ({
    schema: null,
    isPublic: true
}); };
exports.CreateUserCart = CreateUserCart;
var AddProduct = function () { return ({
    schema: _1.CartProductSchema,
    isPublic: true
}); };
exports.AddProduct = AddProduct;
var UpdateQuantity = function () { return ({
    schema: joi_1["default"].object().keys({
        productId: joi_1["default"].string().uuid(),
        quantity: joi_1["default"].number()
    }),
    isPublic: true,
    errors: [
        _1.CartErrors.ProductOutOfStock,
        _1.CartErrors.NegativeQuantity,
        _1.CartErrors.ProductNotInCart
    ]
}); };
exports.UpdateQuantity = UpdateQuantity;
var RemoveProduct = function () { return ({
    schema: joi_1["default"].string(),
    isPublic: true
}); };
exports.RemoveProduct = RemoveProduct;
var CloseCart = function () { return ({
    schema: null
}); };
exports.CloseCart = CloseCart;
