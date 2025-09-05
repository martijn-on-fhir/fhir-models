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
exports.CapabilityStatementRest = void 0;
require("reflect-metadata");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const BackboneElement_1 = require("../base/BackboneElement");
const Element_1 = require("../base/Element");
const CapabilityStatementRestInteraction_1 = require("./CapabilityStatementRestInteraction");
const CapabilityStatementRestResource_1 = require("./CapabilityStatementRestResource");
const CapabilityStatementRestResourceOperation_1 = require("./CapabilityStatementRestResourceOperation");
const CapabilityStatementRestResourceSearchParam_1 = require("./CapabilityStatementRestResourceSearchParam");
const CapabilityStatementRestSecurity_1 = require("./CapabilityStatementRestSecurity");
class CapabilityStatementRest extends BackboneElement_1.BackboneElement {
    constructor(source = {}) {
        super(source);
    }
}
exports.CapabilityStatementRest = CapabilityStatementRest;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CapabilityStatementRest.prototype, "compartment", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Element_1.Element),
    __metadata("design:type", Array)
], CapabilityStatementRest.prototype, "_compartment", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CapabilityStatementRest.prototype, "documentation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element_1.Element),
    __metadata("design:type", Element_1.Element)
], CapabilityStatementRest.prototype, "_documentation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CapabilityStatementRestInteraction_1.CapabilityStatementRestInteraction),
    __metadata("design:type", Array)
], CapabilityStatementRest.prototype, "interaction", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['client', 'server']),
    __metadata("design:type", String)
], CapabilityStatementRest.prototype, "mode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element_1.Element),
    __metadata("design:type", Element_1.Element)
], CapabilityStatementRest.prototype, "_mode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CapabilityStatementRestResourceOperation_1.CapabilityStatementRestResourceOperation),
    __metadata("design:type", Array)
], CapabilityStatementRest.prototype, "operation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CapabilityStatementRestResource_1.CapabilityStatementRestResource),
    __metadata("design:type", Array)
], CapabilityStatementRest.prototype, "resource", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CapabilityStatementRestResourceSearchParam_1.CapabilityStatementRestResourceSearchParam),
    __metadata("design:type", Array)
], CapabilityStatementRest.prototype, "searchParam", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CapabilityStatementRestSecurity_1.CapabilityStatementRestSecurity),
    __metadata("design:type", CapabilityStatementRestSecurity_1.CapabilityStatementRestSecurity)
], CapabilityStatementRest.prototype, "security", void 0);
//# sourceMappingURL=CapabilityStatementRest.js.map