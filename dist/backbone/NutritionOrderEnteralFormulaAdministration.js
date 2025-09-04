"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NutritionOrderEnteralFormulaAdministration = void 0;
require("reflect-metadata");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const BackboneElement_1 = require("../base/BackboneElement");
const Quantity_1 = require("../elements/Quantity");
const Ratio_1 = require("../elements/Ratio");
const Timing_1 = require("./Timing");
class NutritionOrderEnteralFormulaAdministration extends BackboneElement_1.BackboneElement {
    constructor(source = {}) {
        super(source);
    }
}
exports.NutritionOrderEnteralFormulaAdministration = NutritionOrderEnteralFormulaAdministration;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Quantity_1.Quantity),
    __metadata("design:type", Quantity_1.Quantity)
], NutritionOrderEnteralFormulaAdministration.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Quantity_1.Quantity),
    __metadata("design:type", Quantity_1.Quantity)
], NutritionOrderEnteralFormulaAdministration.prototype, "rateQuantity", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Ratio_1.Ratio),
    __metadata("design:type", Ratio_1.Ratio)
], NutritionOrderEnteralFormulaAdministration.prototype, "rateRatio", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Timing_1.Timing),
    __metadata("design:type", Timing_1.Timing)
], NutritionOrderEnteralFormulaAdministration.prototype, "schedule", void 0);
