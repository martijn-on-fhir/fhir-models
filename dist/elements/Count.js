"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Count = void 0;
require("reflect-metadata");
const Quantity_1 = require("./Quantity");
class Count extends Quantity_1.Quantity {
    constructor(source = {}) {
        super(source);
    }
}
exports.Count = Count;
