"use strict";
exports.__esModule = true;
exports.IncreaseStock = exports.DecreaseStock = exports.DeleteProduct = exports.UpdateStock = exports.CreateProduct = void 0;
var joi_1 = require("joi");
var product_model_1 = require("./product.model");
var CreateProduct = function () { return ({
    schema: product_model_1.ProductModelSchema,
    isPublic: true
}); };
exports.CreateProduct = CreateProduct;
var UpdateStock = function () { return ({
    schema: joi_1["default"].number(),
    isPublic: true
}); };
exports.UpdateStock = UpdateStock;
var DeleteProduct = function () { return ({
    schema: null,
    isPublic: true
}); };
exports.DeleteProduct = DeleteProduct;
var DecreaseStock = function () { return ({
    schema: joi_1["default"].object().keys({
        cartId: joi_1["default"].string(),
        quantity: joi_1["default"].number()
    })
}); };
exports.DecreaseStock = DecreaseStock;
var IncreaseStock = function () { return ({
    schema: joi_1["default"].object().keys({
        cartId: joi_1["default"].string(),
        quantity: joi_1["default"].number()
    })
}); };
exports.IncreaseStock = IncreaseStock;
