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
exports.ImplementationGuideDefinition = void 0;
require("reflect-metadata");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const BackboneElement_1 = require("../base/BackboneElement");
const ImplementationGuideDefinitionGrouping_1 = require("./ImplementationGuideDefinitionGrouping");
const ImplementationGuideDefinitionPage_1 = require("./ImplementationGuideDefinitionPage");
const ImplementationGuideDefinitionParameter_1 = require("./ImplementationGuideDefinitionParameter");
const ImplementationGuideDefinitionResource_1 = require("./ImplementationGuideDefinitionResource");
const ImplementationGuideDefinitionTemplate_1 = require("./ImplementationGuideDefinitionTemplate");
class ImplementationGuideDefinition extends BackboneElement_1.BackboneElement {
    constructor(source = {}) {
        super(source);
    }
}
exports.ImplementationGuideDefinition = ImplementationGuideDefinition;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ImplementationGuideDefinitionGrouping_1.ImplementationGuideDefinitionGrouping),
    __metadata("design:type", Array)
], ImplementationGuideDefinition.prototype, "grouping", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ImplementationGuideDefinitionPage_1.ImplementationGuideDefinitionPage),
    __metadata("design:type", ImplementationGuideDefinitionPage_1.ImplementationGuideDefinitionPage)
], ImplementationGuideDefinition.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ImplementationGuideDefinitionParameter_1.ImplementationGuideDefinitionParameter),
    __metadata("design:type", Array)
], ImplementationGuideDefinition.prototype, "parameter", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ImplementationGuideDefinitionResource_1.ImplementationGuideDefinitionResource),
    __metadata("design:type", Array)
], ImplementationGuideDefinition.prototype, "resource", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ImplementationGuideDefinitionTemplate_1.ImplementationGuideDefinitionTemplate),
    __metadata("design:type", Array)
], ImplementationGuideDefinition.prototype, "template", void 0);
