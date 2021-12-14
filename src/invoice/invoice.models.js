"use strict";
exports.__esModule = true;
exports.InvoiceModelSchema = void 0;
var joi_1 = require("joi");
var cart_1 = require("../cart");
exports.InvoiceModelSchema = joi_1["default"].object().keys({
    userId: joi_1["default"].string().uuid(),
    products: joi_1["default"].object().pattern(joi_1["default"].string().uuid(), cart_1.CartProductSchema),
    total: joi_1["default"].number(),
    address: joi_1["default"].string()
});
