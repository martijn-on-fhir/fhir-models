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
exports.ResearchElementDefinitionCharacteristic = void 0;
require("reflect-metadata");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const BackboneElement_1 = require("../base/BackboneElement");
const Element_1 = require("../base/Element");
const CodeableConcept_1 = require("../elements/CodeableConcept");
const DataRequirement_1 = require("../elements/DataRequirement");
const Duration_1 = require("../elements/Duration");
const Expression_1 = require("../elements/Expression");
const Period_1 = require("../elements/Period");
const Timing_1 = require("./Timing");
const UsageContext_1 = require("../elements/UsageContext");
class ResearchElementDefinitionCharacteristic extends BackboneElement_1.BackboneElement {
    constructor(source = {}) {
        super(source);
    }
}
exports.ResearchElementDefinitionCharacteristic = ResearchElementDefinitionCharacteristic;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CodeableConcept_1.CodeableConcept),
    __metadata("design:type", CodeableConcept_1.CodeableConcept)
], ResearchElementDefinitionCharacteristic.prototype, "definitionCodeableConcept", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResearchElementDefinitionCharacteristic.prototype, "definitionCanonical", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element_1.Element),
    __metadata("design:type", Element_1.Element)
], ResearchElementDefinitionCharacteristic.prototype, "_definitionCanonical", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Expression_1.Expression),
    __metadata("design:type", Expression_1.Expression)
], ResearchElementDefinitionCharacteristic.prototype, "definitionExpression", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => DataRequirement_1.DataRequirement),
    __metadata("design:type", DataRequirement_1.DataRequirement)
], ResearchElementDefinitionCharacteristic.prototype, "definitionDataRequirement", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ResearchElementDefinitionCharacteristic.prototype, "exclude", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element_1.Element),
    __metadata("design:type", Element_1.Element)
], ResearchElementDefinitionCharacteristic.prototype, "_exclude", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResearchElementDefinitionCharacteristic.prototype, "participantEffectiveDateTime", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element_1.Element),
    __metadata("design:type", Element_1.Element)
], ResearchElementDefinitionCharacteristic.prototype, "_participantEffectiveDateTime", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Period_1.Period),
    __metadata("design:type", Period_1.Period)
], ResearchElementDefinitionCharacteristic.prototype, "participantEffectivePeriod", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Duration_1.Duration),
    __metadata("design:type", Duration_1.Duration)
], ResearchElementDefinitionCharacteristic.prototype, "participantEffectiveDuration", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Timing_1.Timing),
    __metadata("design:type", Timing_1.Timing)
], ResearchElementDefinitionCharacteristic.prototype, "participantEffectiveTiming", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResearchElementDefinitionCharacteristic.prototype, "participantEffectiveDescription", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element_1.Element),
    __metadata("design:type", Element_1.Element)
], ResearchElementDefinitionCharacteristic.prototype, "_participantEffectiveDescription", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['mean', 'median', 'mean-of-mean', 'mean-of-median', 'median-of-mean', 'median-of-median']),
    __metadata("design:type", String)
], ResearchElementDefinitionCharacteristic.prototype, "participantEffectiveGroupMeasure", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element_1.Element),
    __metadata("design:type", Element_1.Element)
], ResearchElementDefinitionCharacteristic.prototype, "_participantEffectiveGroupMeasure", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Duration_1.Duration),
    __metadata("design:type", Duration_1.Duration)
], ResearchElementDefinitionCharacteristic.prototype, "participantEffectiveTimeFromStart", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResearchElementDefinitionCharacteristic.prototype, "studyEffectiveDateTime", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element_1.Element),
    __metadata("design:type", Element_1.Element)
], ResearchElementDefinitionCharacteristic.prototype, "_studyEffectiveDateTime", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Period_1.Period),
    __metadata("design:type", Period_1.Period)
], ResearchElementDefinitionCharacteristic.prototype, "studyEffectivePeriod", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Duration_1.Duration),
    __metadata("design:type", Duration_1.Duration)
], ResearchElementDefinitionCharacteristic.prototype, "studyEffectiveDuration", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Timing_1.Timing),
    __metadata("design:type", Timing_1.Timing)
], ResearchElementDefinitionCharacteristic.prototype, "studyEffectiveTiming", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResearchElementDefinitionCharacteristic.prototype, "studyEffectiveDescription", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element_1.Element),
    __metadata("design:type", Element_1.Element)
], ResearchElementDefinitionCharacteristic.prototype, "_studyEffectiveDescription", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['mean', 'median', 'mean-of-mean', 'mean-of-median', 'median-of-mean', 'median-of-median']),
    __metadata("design:type", String)
], ResearchElementDefinitionCharacteristic.prototype, "studyEffectiveGroupMeasure", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element_1.Element),
    __metadata("design:type", Element_1.Element)
], ResearchElementDefinitionCharacteristic.prototype, "_studyEffectiveGroupMeasure", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Duration_1.Duration),
    __metadata("design:type", Duration_1.Duration)
], ResearchElementDefinitionCharacteristic.prototype, "studyEffectiveTimeFromStart", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CodeableConcept_1.CodeableConcept),
    __metadata("design:type", CodeableConcept_1.CodeableConcept)
], ResearchElementDefinitionCharacteristic.prototype, "unitOfMeasure", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => UsageContext_1.UsageContext),
    __metadata("design:type", Array)
], ResearchElementDefinitionCharacteristic.prototype, "usageContext", void 0);
//# sourceMappingURL=ResearchElementDefinitionCharacteristic.js.map