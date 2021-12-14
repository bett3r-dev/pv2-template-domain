"use strict";
exports.__esModule = true;
exports.ProductsReadModelSchema = void 0;
var joi_1 = require("joi");
var product_model_1 = require("./product.model");
exports.ProductsReadModelSchema = product_model_1.ProductModelSchema.concat(joi_1["default"].object().keys({
    id: joi_1["default"].string().uuid()
}));
