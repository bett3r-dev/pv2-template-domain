"use strict";
exports.__esModule = true;
exports.ProductModelSchema = exports.ProductModelBaseSchema = void 0;
var joi_1 = require("joi");
exports.ProductModelBaseSchema = joi_1["default"].object().keys({
    // id: joi.string().uuid(),
    sku: joi_1["default"].string(),
    name: joi_1["default"].string().max(300),
    price: joi_1["default"].number()
});
exports.ProductModelSchema = exports.ProductModelBaseSchema.concat(joi_1["default"].object().keys({
    quantity: joi_1["default"].number().integer()
})).preferences({ presence: 'required' });
