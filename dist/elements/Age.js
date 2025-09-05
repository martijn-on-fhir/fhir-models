"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Age = void 0;
require("reflect-metadata");
const Quantity_1 = require("./Quantity");
class Age extends Quantity_1.Quantity {
    constructor(source = {}) {
        super(source);
    }
}
exports.Age = Age;
