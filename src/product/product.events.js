"use strict";
exports.__esModule = true;
exports.StockIncreased = exports.StockDecreased = exports.ProductDeleted = exports.StockUpdated = exports.ProductCreated = void 0;
var joi_1 = require("joi");
var product_model_1 = require("./product.model");
var ProductCreated = function () { return ({
    schema: product_model_1.ProductModelSchema
}); };
exports.ProductCreated = ProductCreated;
var StockUpdated = function () { return ({
    schema: joi_1["default"].number()
}); };
exports.StockUpdated = StockUpdated;
var ProductDeleted = function () { return ({
    schema: null
}); };
exports.ProductDeleted = ProductDeleted;
var StockDecreased = function () { return ({
    schema: joi_1["default"].number()
}); };
exports.StockDecreased = StockDecreased;
var StockIncreased = function () { return ({
    schema: joi_1["default"].number()
}); };
exports.StockIncreased = StockIncreased;
