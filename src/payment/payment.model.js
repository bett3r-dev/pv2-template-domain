"use strict";
exports.__esModule = true;
exports.PaymentModelSchema = void 0;
var joi_1 = require("joi");
exports.PaymentModelSchema = joi_1["default"].object().keys({
    amount: joi_1["default"].number(),
    cartId: joi_1["default"].string().uuid(),
    userId: joi_1["default"].string().uuid(),
    status: joi_1["default"].string().valid('new', 'approved', 'rejected'),
    reason: joi_1["default"].string().optional()
}).preferences({ presence: 'required' });
