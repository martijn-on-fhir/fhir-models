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
exports.ExplanationOfBenefit = void 0;
require("reflect-metadata");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const DomainResource_1 = require("../base/DomainResource");
const Element_1 = require("../base/Element");
const Attachment_1 = require("../elements/Attachment");
const CodeableConcept_1 = require("../elements/CodeableConcept");
const ExplanationOfBenefitAccident_1 = require("../backbone/ExplanationOfBenefitAccident");
const ExplanationOfBenefitAddItem_1 = require("../backbone/ExplanationOfBenefitAddItem");
const ExplanationOfBenefitBenefitBalance_1 = require("../backbone/ExplanationOfBenefitBenefitBalance");
const ExplanationOfBenefitCareTeam_1 = require("../backbone/ExplanationOfBenefitCareTeam");
const ExplanationOfBenefitDiagnosis_1 = require("../backbone/ExplanationOfBenefitDiagnosis");
const ExplanationOfBenefitInsurance_1 = require("../backbone/ExplanationOfBenefitInsurance");
const ExplanationOfBenefitItem_1 = require("../backbone/ExplanationOfBenefitItem");
const ExplanationOfBenefitItemAdjudication_1 = require("../backbone/ExplanationOfBenefitItemAdjudication");
const Identifier_1 = require("../elements/Identifier");
const Period_1 = require("../elements/Period");
const Reference_1 = require("../elements/Reference");
class ExplanationOfBenefit extends DomainResource_1.DomainResource {
    constructor(source = {}) {
        super(source);
        this.resourceType = 'ExplanationOfBenefit';
        this.resourceType = 'ExplanationOfBenefit';
    }
}
exports.ExplanationOfBenefit = ExplanationOfBenefit;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ExplanationOfBenefitAccident_1.ExplanationOfBenefitAccident),
    __metadata("design:type", ExplanationOfBenefitAccident_1.ExplanationOfBenefitAccident)
], ExplanationOfBenefit.prototype, "accident", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ExplanationOfBenefitAddItem_1.ExplanationOfBenefitAddItem),
    __metadata("design:type", Array)
], ExplanationOfBenefit.prototype, "addItem", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ExplanationOfBenefitItemAdjudication_1.ExplanationOfBenefitItemAdjudication),
    __metadata("design:type", Array)
], ExplanationOfBenefit.prototype, "adjudication", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ExplanationOfBenefitBenefitBalance_1.ExplanationOfBenefitBenefitBalance),
    __metadata("design:type", Array)
], ExplanationOfBenefit.prototype, "benefitBalance", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Period_1.Period),
    __metadata("design:type", Period_1.Period)
], ExplanationOfBenefit.prototype, "benefitPeriod", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Period_1.Period),
    __metadata("design:type", Period_1.Period)
], ExplanationOfBenefit.prototype, "billablePeriod", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ExplanationOfBenefitCareTeam_1.ExplanationOfBenefitCareTeam),
    __metadata("design:type", Array)
], ExplanationOfBenefit.prototype, "careTeam", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Reference_1.Reference),
    __metadata("design:type", Reference_1.Reference)
], ExplanationOfBenefit.prototype, "claim", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Reference_1.Reference),
    __metadata("design:type", Reference_1.Reference)
], ExplanationOfBenefit.prototype, "claimResponse", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ExplanationOfBenefit.prototype, "created", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element_1.Element),
    __metadata("design:type", Element_1.Element)
], ExplanationOfBenefit.prototype, "_created", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ExplanationOfBenefitDiagnosis_1.ExplanationOfBenefitDiagnosis),
    __metadata("design:type", Array)
], ExplanationOfBenefit.prototype, "diagnosis", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ExplanationOfBenefit.prototype, "disposition", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element_1.Element),
    __metadata("design:type", Element_1.Element)
], ExplanationOfBenefit.prototype, "_disposition", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Reference_1.Reference),
    __metadata("design:type", Reference_1.Reference)
], ExplanationOfBenefit.prototype, "enterer", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Reference_1.Reference),
    __metadata("design:type", Reference_1.Reference)
], ExplanationOfBenefit.prototype, "facility", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Attachment_1.Attachment),
    __metadata("design:type", Attachment_1.Attachment)
], ExplanationOfBenefit.prototype, "form", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CodeableConcept_1.CodeableConcept),
    __metadata("design:type", CodeableConcept_1.CodeableConcept)
], ExplanationOfBenefit.prototype, "formCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CodeableConcept_1.CodeableConcept),
    __metadata("design:type", CodeableConcept_1.CodeableConcept)
], ExplanationOfBenefit.prototype, "fundsReserve", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CodeableConcept_1.CodeableConcept),
    __metadata("design:type", CodeableConcept_1.CodeableConcept)
], ExplanationOfBenefit.prototype, "fundsReserveRequested", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Identifier_1.Identifier),
    __metadata("design:type", Array)
], ExplanationOfBenefit.prototype, "identifier", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ExplanationOfBenefitInsurance_1.ExplanationOfBenefitInsurance),
    __metadata("design:type", Array)
], ExplanationOfBenefit.prototype, "insurance", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Reference_1.Reference),
    __metadata("design:type", Reference_1.Reference)
], ExplanationOfBenefit.prototype, "insurer", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ExplanationOfBenefitItem_1.ExplanationOfBenefitItem),
    __metadata("design:type", Array)
], ExplanationOfBenefit.prototype, "item", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Reference_1.Reference),
    __metadata("design:type", Reference_1.Reference)
], ExplanationOfBenefit.prototype, "originalPrescription", void 0);
