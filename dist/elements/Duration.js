"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Duration = void 0;
require("reflect-metadata");
const Quantity_1 = require("./Quantity");
class Duration extends Quantity_1.Quantity {
    constructor(source = {}) {
        super(source);
    }
}
exports.Duration = Duration;
