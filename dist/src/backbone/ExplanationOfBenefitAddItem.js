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
exports.ExplanationOfBenefitAddItem = void 0;
require("reflect-metadata");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const BackboneElement_1 = require("../base/BackboneElement");
const Element_1 = require("../base/Element");
const Address_1 = require("../elements/Address");
const CodeableConcept_1 = require("../elements/CodeableConcept");
const ExplanationOfBenefitAddItemDetail_1 = require("./ExplanationOfBenefitAddItemDetail");
const ExplanationOfBenefitItemAdjudication_1 = require("./ExplanationOfBenefitItemAdjudication");
const Money_1 = require("../elements/Money");
const Period_1 = require("../elements/Period");
const Quantity_1 = require("../elements/Quantity");
const Reference_1 = require("../elements/Reference");
class ExplanationOfBenefitAddItem extends BackboneElement_1.BackboneElement {
    constructor(source = {}) {
        super(source);
    }
}
exports.ExplanationOfBenefitAddItem = ExplanationOfBenefitAddItem;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ExplanationOfBenefitItemAdjudication_1.ExplanationOfBenefitItemAdjudication),
    __metadata("design:type", Array)
], ExplanationOfBenefitAddItem.prototype, "adjudication", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CodeableConcept_1.CodeableConcept),
    __metadata("design:type", CodeableConcept_1.CodeableConcept)
], ExplanationOfBenefitAddItem.prototype, "bodySite", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ExplanationOfBenefitAddItemDetail_1.ExplanationOfBenefitAddItemDetail),
    __metadata("design:type", Array)
], ExplanationOfBenefitAddItem.prototype, "detail", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    __metadata("design:type", Array)
], ExplanationOfBenefitAddItem.prototype, "detailSequence", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ExplanationOfBenefitAddItem.prototype, "factor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    __metadata("design:type", Array)
], ExplanationOfBenefitAddItem.prototype, "itemSequence", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CodeableConcept_1.CodeableConcept),
    __metadata("design:type", CodeableConcept_1.CodeableConcept)
], ExplanationOfBenefitAddItem.prototype, "locationCodeableConcept", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Address_1.Address),
    __metadata("design:type", Address_1.Address)
], ExplanationOfBenefitAddItem.prototype, "locationAddress", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Reference_1.Reference),
    __metadata("design:type", Reference_1.Reference)
], ExplanationOfBenefitAddItem.prototype, "locationReference", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CodeableConcept_1.CodeableConcept),
    __metadata("design:type", Array)
], ExplanationOfBenefitAddItem.prototype, "modifier", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Money_1.Money),
    __metadata("design:type", Money_1.Money)
], ExplanationOfBenefitAddItem.prototype, "net", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    __metadata("design:type", Array)
], ExplanationOfBenefitAddItem.prototype, "noteNumber", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CodeableConcept_1.CodeableConcept),
    __metadata("design:type", CodeableConcept_1.CodeableConcept)
], ExplanationOfBenefitAddItem.prototype, "productOrService", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CodeableConcept_1.CodeableConcept),
    __metadata("design:type", Array)
], ExplanationOfBenefitAddItem.prototype, "programCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Reference_1.Reference),
    __metadata("design:type", Array)
], ExplanationOfBenefitAddItem.prototype, "provider", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Quantity_1.Quantity),
    __metadata("design:type", Quantity_1.Quantity)
], ExplanationOfBenefitAddItem.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ExplanationOfBenefitAddItem.prototype, "servicedDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element_1.Element),
    __metadata("design:type", Element_1.Element)
], ExplanationOfBenefitAddItem.prototype, "_servicedDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Period_1.Period),
    __metadata("design:type", Period_1.Period)
], ExplanationOfBenefitAddItem.prototype, "servicedPeriod", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    __metadata("design:type", Array)
], ExplanationOfBenefitAddItem.prototype, "subDetailSequence", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CodeableConcept_1.CodeableConcept),
    __metadata("design:type", Array)
], ExplanationOfBenefitAddItem.prototype, "subSite", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Money_1.Money),
    __metadata("design:type", Money_1.Money)
], ExplanationOfBenefitAddItem.prototype, "unitPrice", void 0);
//# sourceMappingURL=ExplanationOfBenefitAddItem.js.map