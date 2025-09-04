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
exports.Dosage = void 0;
require("reflect-metadata");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const BackboneElement_1 = require("../base/BackboneElement");
const CodeableConcept_1 = require("../elements/CodeableConcept");
const DosageDoseAndRate_1 = require("../elements/DosageDoseAndRate");
const Quantity_1 = require("../elements/Quantity");
const Ratio_1 = require("../elements/Ratio");
const Timing_1 = require("./Timing");
class Dosage extends BackboneElement_1.BackboneElement {
    constructor(source = {}) {
        super(source);
    }
}
exports.Dosage = Dosage;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CodeableConcept_1.CodeableConcept),
    __metadata("design:type", Array)
], Dosage_1.Dosage.prototype, "additionalInstruction", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Dosage_1.Dosage.prototype, "asNeededBoolean", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element),
    __metadata("design:type", Element)
], Dosage_1.Dosage.prototype, "_asNeededBoolean", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CodeableConcept_1.CodeableConcept),
    __metadata("design:type", CodeableConcept_1.CodeableConcept)
], Dosage_1.Dosage.prototype, "asNeededCodeableConcept", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => DosageDoseAndRate_1.DosageDoseAndRate),
    __metadata("design:type", Array)
], Dosage_1.Dosage.prototype, "doseAndRate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Quantity_1.Quantity),
    __metadata("design:type", Quantity_1.Quantity)
], Dosage_1.Dosage.prototype, "maxDosePerAdministration", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Quantity_1.Quantity),
    __metadata("design:type", Quantity_1.Quantity)
], Dosage_1.Dosage.prototype, "maxDosePerLifetime", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Ratio_1.Ratio),
    __metadata("design:type", Ratio_1.Ratio)
], Dosage_1.Dosage.prototype, "maxDosePerPeriod", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CodeableConcept_1.CodeableConcept),
    __metadata("design:type", CodeableConcept_1.CodeableConcept)
], Dosage_1.Dosage.prototype, "method", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Dosage_1.Dosage.prototype, "patientInstruction", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element),
    __metadata("design:type", Element)
], Dosage_1.Dosage.prototype, "_patientInstruction", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CodeableConcept_1.CodeableConcept),
    __metadata("design:type", CodeableConcept_1.CodeableConcept)
], Dosage_1.Dosage.prototype, "route", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Dosage_1.Dosage.prototype, "sequence", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CodeableConcept_1.CodeableConcept),
    __metadata("design:type", CodeableConcept_1.CodeableConcept)
], Dosage_1.Dosage.prototype, "site", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Dosage_1.Dosage.prototype, "text", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element),
    __metadata("design:type", Element)
], Dosage_1.Dosage.prototype, "_text", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Timing_1.Timing),
    __metadata("design:type", Timing_1.Timing)
], Dosage_1.Dosage.prototype, "timing", void 0);
