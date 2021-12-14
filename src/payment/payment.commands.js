"use strict";
exports.__esModule = true;
exports.Pay = exports.RejectPayment = exports.ApprovePayment = exports.StartPayment = void 0;
var joi_1 = require("joi");
var StartPayment = function () { return ({
    schema: null,
    isPublic: true
}); };
exports.StartPayment = StartPayment;
var ApprovePayment = function () { return ({
    schema: joi_1["default"].object().keys({
        cartId: joi_1["default"].string().uuid()
    })
}); };
exports.ApprovePayment = ApprovePayment;
var RejectPayment = function () { return ({
    schema: joi_1["default"].object().keys({
        cartId: joi_1["default"].string().uuid(),
        reason: joi_1["default"].string()
    })
}); };
exports.RejectPayment = RejectPayment;
var Pay = function () { return ({
    // schema: PaymentModelSchema
    schema: joi_1["default"].object().keys({
        cartId: joi_1["default"].string(),
        amount: joi_1["default"].number()
    })
}); };
exports.Pay = Pay;
//TODO: Webhook
