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
exports.Endpoint = void 0;
require("reflect-metadata");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const DomainResource_1 = require("../base/DomainResource");
const Element_1 = require("../base/Element");
const CodeableConcept_1 = require("../elements/CodeableConcept");
const Coding_1 = require("../elements/Coding");
const ContactPoint_1 = require("../elements/ContactPoint");
const Identifier_1 = require("../elements/Identifier");
const Period_1 = require("../elements/Period");
const Reference_1 = require("../elements/Reference");
class Endpoint extends DomainResource_1.DomainResource {
    constructor(source = {}) {
        super(source);
        this.resourceType = 'Endpoint';
        this.resourceType = 'Endpoint';
    }
}
exports.Endpoint = Endpoint;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Endpoint.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element_1.Element),
    __metadata("design:type", Element_1.Element)
], Endpoint.prototype, "_address", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Coding_1.Coding),
    __metadata("design:type", Coding_1.Coding)
], Endpoint.prototype, "connectionType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ContactPoint_1.ContactPoint),
    __metadata("design:type", Array)
], Endpoint.prototype, "contact", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], Endpoint.prototype, "header", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Element_1.Element),
    __metadata("design:type", Array)
], Endpoint.prototype, "_header", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Identifier_1.Identifier),
    __metadata("design:type", Array)
], Endpoint.prototype, "identifier", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Reference_1.Reference),
    __metadata("design:type", Reference_1.Reference)
], Endpoint.prototype, "managingOrganization", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Endpoint.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element_1.Element),
    __metadata("design:type", Element_1.Element)
], Endpoint.prototype, "_name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], Endpoint.prototype, "payloadMimeType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Element_1.Element),
    __metadata("design:type", Array)
], Endpoint.prototype, "_payloadMimeType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CodeableConcept_1.CodeableConcept),
    __metadata("design:type", Array)
], Endpoint.prototype, "payloadType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Period_1.Period),
    __metadata("design:type", Period_1.Period)
], Endpoint.prototype, "period", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['active', 'suspended', 'error', 'off', 'entered-in-error', 'test']),
    __metadata("design:type", String)
], Endpoint.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element_1.Element),
    __metadata("design:type", Element_1.Element)
], Endpoint.prototype, "_status", void 0);
//# sourceMappingURL=Endpoint.js.map