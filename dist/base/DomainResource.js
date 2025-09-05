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
exports.DomainResource = void 0;
require("reflect-metadata");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const Resource_1 = require("./Resource");
const Element_1 = require("./Element");
class DomainResource extends Resource_1.Resource {
    constructor(source = {}) {
        super(source);
    }
}
exports.DomainResource = DomainResource;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Resource_1.Resource),
    __metadata("design:type", Array)
], DomainResource.prototype, "contained", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Extension),
    __metadata("design:type", Array)
], DomainResource.prototype, "extension", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Extension),
    __metadata("design:type", Array)
], DomainResource.prototype, "modifierExtension", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Narrative),
    __metadata("design:type", Narrative)
], DomainResource.prototype, "text", void 0);
class Extension extends Element_1.Element {
    constructor(source = {}) {
        super(source);
    }
}
class Narrative extends Element_1.Element {
    constructor(source = {}) {
        super(source);
    }
}
//# sourceMappingURL=DomainResource.js.map