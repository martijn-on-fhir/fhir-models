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
exports.MedicationKnowledgeRegulatory = void 0;
require("reflect-metadata");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const BackboneElement_1 = require("../base/BackboneElement");
const MedicationKnowledgeRegulatoryMaxDispense_1 = require("./MedicationKnowledgeRegulatoryMaxDispense");
const MedicationKnowledgeRegulatorySchedule_1 = require("./MedicationKnowledgeRegulatorySchedule");
const MedicationKnowledgeRegulatorySubstitution_1 = require("./MedicationKnowledgeRegulatorySubstitution");
const Reference_1 = require("../elements/Reference");
class MedicationKnowledgeRegulatory extends BackboneElement_1.BackboneElement {
    constructor(source = {}) {
        super(source);
    }
}
exports.MedicationKnowledgeRegulatory = MedicationKnowledgeRegulatory;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => MedicationKnowledgeRegulatoryMaxDispense_1.MedicationKnowledgeRegulatoryMaxDispense),
    __metadata("design:type", MedicationKnowledgeRegulatoryMaxDispense_1.MedicationKnowledgeRegulatoryMaxDispense)
], MedicationKnowledgeRegulatory.prototype, "maxDispense", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Reference_1.Reference),
    __metadata("design:type", Reference_1.Reference)
], MedicationKnowledgeRegulatory.prototype, "regulatoryAuthority", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => MedicationKnowledgeRegulatorySchedule_1.MedicationKnowledgeRegulatorySchedule),
    __metadata("design:type", Array)
], MedicationKnowledgeRegulatory.prototype, "schedule", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => MedicationKnowledgeRegulatorySubstitution_1.MedicationKnowledgeRegulatorySubstitution),
    __metadata("design:type", Array)
], MedicationKnowledgeRegulatory.prototype, "substitution", void 0);
