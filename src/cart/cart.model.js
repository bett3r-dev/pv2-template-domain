"use strict";
exports.__esModule = true;
exports.CartModelSchema = exports.CartProductSchema = void 0;
var joi_1 = require("joi");
var product_model_1 = require("../product/product.model");
exports.CartProductSchema = joi_1["default"].object().keys({
    productId: joi_1["default"].string(),
    productInfo: product_model_1.ProductModelBaseSchema,
    quantity: joi_1["default"].number().integer()
});
exports.CartModelSchema = joi_1["default"].object().keys({
    userId: joi_1["default"].string().uuid(),
    products: joi_1["default"].object().pattern(joi_1["default"].string().uuid(), exports.CartProductSchema),
    isClosed: joi_1["default"].boolean()
});
JSON.stringify(exports.CartModelSchema.describe(), null, 4); //?
