"use strict";
exports.__esModule = true;
exports.PaymentFailed = exports.PaymentSucceeded = exports.PaymentRejected = exports.PaymentApproved = exports.PaymentStarted = void 0;
var joi_1 = require("joi");
var cart_model_1 = require("../cart/cart.model");
var PaymentStarted = function () { return ({
    schema: joi_1["default"].object().keys({
        cartId: joi_1["default"].string().uuid(),
        cart: joi_1["default"].object().keys({
            products: joi_1["default"].object().pattern(joi_1["default"].string(), cart_model_1.CartProductSchema)
        }),
        amount: joi_1["default"].number()
    })
}); };
exports.PaymentStarted = PaymentStarted;
var PaymentApproved = function () { return ({
    schema: joi_1["default"].object().keys({
        cartId: joi_1["default"].string().uuid()
    })
}); };
exports.PaymentApproved = PaymentApproved;
var PaymentRejected = function () { return ({
    schema: joi_1["default"].object().keys({
        cartId: joi_1["default"].string().uuid(),
        reason: joi_1["default"].string()
    })
}); };
exports.PaymentRejected = PaymentRejected;
var PaymentSucceeded = function () { return ({
    schema: joi_1["default"].object().keys({
        cartId: joi_1["default"].string().uuid()
    })
}); };
exports.PaymentSucceeded = PaymentSucceeded;
var PaymentFailed = function () { return ({
    schema: joi_1["default"].object().keys({
        cartId: joi_1["default"].string().uuid(),
        reason: joi_1["default"].string().max(100)
    })
}); };
exports.PaymentFailed = PaymentFailed;
