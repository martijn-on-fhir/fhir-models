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
exports.SpecimenDefinitionTypeTested = void 0;
require("reflect-metadata");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const BackboneElement_1 = require("../base/BackboneElement");
const CodeableConcept_1 = require("../elements/CodeableConcept");
const Duration_1 = require("../elements/Duration");
const SpecimenDefinitionTypeTestedContainer_1 = require("./SpecimenDefinitionTypeTestedContainer");
const SpecimenDefinitionTypeTestedHandling_1 = require("./SpecimenDefinitionTypeTestedHandling");
class SpecimenDefinitionTypeTested extends BackboneElement_1.BackboneElement {
    constructor(source = {}) {
        super(source);
    }
}
exports.SpecimenDefinitionTypeTested = SpecimenDefinitionTypeTested;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => SpecimenDefinitionTypeTestedContainer_1.SpecimenDefinitionTypeTestedContainer),
    __metadata("design:type", SpecimenDefinitionTypeTestedContainer_1.SpecimenDefinitionTypeTestedContainer)
], SpecimenDefinitionTypeTested.prototype, "container", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => SpecimenDefinitionTypeTestedHandling_1.SpecimenDefinitionTypeTestedHandling),
    __metadata("design:type", Array)
], SpecimenDefinitionTypeTested.prototype, "handling", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], SpecimenDefinitionTypeTested.prototype, "isDerived", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element),
    __metadata("design:type", Element)
], SpecimenDefinitionTypeTested.prototype, "_isDerived", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['preferred', 'alternate']),
    __metadata("design:type", String)
], SpecimenDefinitionTypeTested.prototype, "preference", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element),
    __metadata("design:type", Element)
], SpecimenDefinitionTypeTested.prototype, "_preference", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CodeableConcept_1.CodeableConcept),
    __metadata("design:type", Array)
], SpecimenDefinitionTypeTested.prototype, "rejectionCriterion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SpecimenDefinitionTypeTested.prototype, "requirement", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element),
    __metadata("design:type", Element)
], SpecimenDefinitionTypeTested.prototype, "_requirement", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Duration_1.Duration),
    __metadata("design:type", Duration_1.Duration)
], SpecimenDefinitionTypeTested.prototype, "retentionTime", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CodeableConcept_1.CodeableConcept),
    __metadata("design:type", CodeableConcept_1.CodeableConcept)
], SpecimenDefinitionTypeTested.prototype, "type", void 0);
