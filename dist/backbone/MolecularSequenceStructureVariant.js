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
exports.MolecularSequenceStructureVariant = void 0;
require("reflect-metadata");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const BackboneElement_1 = require("../base/BackboneElement");
const CodeableConcept_1 = require("../elements/CodeableConcept");
const MolecularSequenceStructureVariantInner_1 = require("./MolecularSequenceStructureVariantInner");
const MolecularSequenceStructureVariantOuter_1 = require("./MolecularSequenceStructureVariantOuter");
class MolecularSequenceStructureVariant extends BackboneElement_1.BackboneElement {
    constructor(source = {}) {
        super(source);
    }
}
exports.MolecularSequenceStructureVariant = MolecularSequenceStructureVariant;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], MolecularSequenceStructureVariant.prototype, "exact", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element),
    __metadata("design:type", Element)
], MolecularSequenceStructureVariant.prototype, "_exact", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => MolecularSequenceStructureVariantInner_1.MolecularSequenceStructureVariantInner),
    __metadata("design:type", MolecularSequenceStructureVariantInner_1.MolecularSequenceStructureVariantInner)
], MolecularSequenceStructureVariant.prototype, "inner", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], MolecularSequenceStructureVariant.prototype, "length", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => MolecularSequenceStructureVariantOuter_1.MolecularSequenceStructureVariantOuter),
    __metadata("design:type", MolecularSequenceStructureVariantOuter_1.MolecularSequenceStructureVariantOuter)
], MolecularSequenceStructureVariant.prototype, "outer", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CodeableConcept_1.CodeableConcept),
    __metadata("design:type", CodeableConcept_1.CodeableConcept)
], MolecularSequenceStructureVariant.prototype, "variantType", void 0);
