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
exports.RequestGroupAction = void 0;
require("reflect-metadata");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const BackboneElement_1 = require("../base/BackboneElement");
const Age_1 = require("../elements/Age");
const CodeableConcept_1 = require("../elements/CodeableConcept");
const Duration_1 = require("../elements/Duration");
const Period_1 = require("../elements/Period");
const Reference_1 = require("../elements/Reference");
const RelatedArtifact_1 = require("../elements/RelatedArtifact");
const RequestGroupActionCondition_1 = require("./RequestGroupActionCondition");
const RequestGroupActionRelatedAction_1 = require("./RequestGroupActionRelatedAction");
class RequestGroupAction extends BackboneElement_1.BackboneElement {
    constructor(source = {}) {
        super(source);
    }
}
exports.RequestGroupAction = RequestGroupAction;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => RequestGroupAction),
    __metadata("design:type", Array)
], RequestGroupAction.prototype, "action", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['single', 'multiple']),
    __metadata("design:type", String)
], RequestGroupAction.prototype, "cardinalityBehavior", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element),
    __metadata("design:type", Element)
], RequestGroupAction.prototype, "_cardinalityBehavior", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CodeableConcept_1.CodeableConcept),
    __metadata("design:type", Array)
], RequestGroupAction.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => RequestGroupActionCondition_1.RequestGroupActionCondition),
    __metadata("design:type", Array)
], RequestGroupAction.prototype, "condition", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestGroupAction.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element),
    __metadata("design:type", Element)
], RequestGroupAction.prototype, "_description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => RelatedArtifact_1.RelatedArtifact),
    __metadata("design:type", Array)
], RequestGroupAction.prototype, "documentation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['visual-group', 'logical-group', 'sentence-group']),
    __metadata("design:type", String)
], RequestGroupAction.prototype, "groupingBehavior", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element),
    __metadata("design:type", Element)
], RequestGroupAction.prototype, "_groupingBehavior", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Reference_1.Reference),
    __metadata("design:type", Array)
], RequestGroupAction.prototype, "participant", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['yes', 'no']),
    __metadata("design:type", String)
], RequestGroupAction.prototype, "precheckBehavior", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element),
    __metadata("design:type", Element)
], RequestGroupAction.prototype, "_precheckBehavior", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestGroupAction.prototype, "prefix", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element),
    __metadata("design:type", Element)
], RequestGroupAction.prototype, "_prefix", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['routine', 'urgent', 'asap', 'stat']),
    __metadata("design:type", String)
], RequestGroupAction.prototype, "priority", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element),
    __metadata("design:type", Element)
], RequestGroupAction.prototype, "_priority", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => RequestGroupActionRelatedAction_1.RequestGroupActionRelatedAction),
    __metadata("design:type", Array)
], RequestGroupAction.prototype, "relatedAction", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['must', 'could', 'must-unless-documented']),
    __metadata("design:type", String)
], RequestGroupAction.prototype, "requiredBehavior", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element),
    __metadata("design:type", Element)
], RequestGroupAction.prototype, "_requiredBehavior", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Reference_1.Reference),
    __metadata("design:type", Reference_1.Reference)
], RequestGroupAction.prototype, "resource", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['any', 'all', 'all-or-none', 'exactly-one', 'at-most-one', 'one-or-more']),
    __metadata("design:type", String)
], RequestGroupAction.prototype, "selectionBehavior", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element),
    __metadata("design:type", Element)
], RequestGroupAction.prototype, "_selectionBehavior", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestGroupAction.prototype, "textEquivalent", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element),
    __metadata("design:type", Element)
], RequestGroupAction.prototype, "_textEquivalent", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestGroupAction.prototype, "timingDateTime", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element),
    __metadata("design:type", Element)
], RequestGroupAction.prototype, "_timingDateTime", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Age_1.Age),
    __metadata("design:type", Age_1.Age)
], RequestGroupAction.prototype, "timingAge", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Period_1.Period),
    __metadata("design:type", Period_1.Period)
], RequestGroupAction.prototype, "timingPeriod", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Duration_1.Duration),
    __metadata("design:type", Duration_1.Duration)
], RequestGroupAction.prototype, "timingDuration", void 0);
