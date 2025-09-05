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
exports.BiologicallyDerivedProduct = void 0;
require("reflect-metadata");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const DomainResource_1 = require("../base/DomainResource");
const Element_1 = require("../base/Element");
const BiologicallyDerivedProductCollection_1 = require("../backbone/BiologicallyDerivedProductCollection");
const BiologicallyDerivedProductManipulation_1 = require("../backbone/BiologicallyDerivedProductManipulation");
const BiologicallyDerivedProductProcessing_1 = require("../backbone/BiologicallyDerivedProductProcessing");
const BiologicallyDerivedProductStorage_1 = require("../backbone/BiologicallyDerivedProductStorage");
const CodeableConcept_1 = require("../elements/CodeableConcept");
const Identifier_1 = require("../elements/Identifier");
const Reference_1 = require("../elements/Reference");
class BiologicallyDerivedProduct extends DomainResource_1.DomainResource {
    constructor(source = {}) {
        super(source);
        this.resourceType = 'BiologicallyDerivedProduct';
        this.resourceType = 'BiologicallyDerivedProduct';
    }
}
exports.BiologicallyDerivedProduct = BiologicallyDerivedProduct;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => BiologicallyDerivedProductCollection_1.BiologicallyDerivedProductCollection),
    __metadata("design:type", BiologicallyDerivedProductCollection_1.BiologicallyDerivedProductCollection)
], BiologicallyDerivedProduct.prototype, "collection", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Identifier_1.Identifier),
    __metadata("design:type", Array)
], BiologicallyDerivedProduct.prototype, "identifier", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => BiologicallyDerivedProductManipulation_1.BiologicallyDerivedProductManipulation),
    __metadata("design:type", BiologicallyDerivedProductManipulation_1.BiologicallyDerivedProductManipulation)
], BiologicallyDerivedProduct.prototype, "manipulation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Reference_1.Reference),
    __metadata("design:type", Array)
], BiologicallyDerivedProduct.prototype, "parent", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => BiologicallyDerivedProductProcessing_1.BiologicallyDerivedProductProcessing),
    __metadata("design:type", Array)
], BiologicallyDerivedProduct.prototype, "processing", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['organ', 'tissue', 'fluid', 'cells', 'biologicalAgent']),
    __metadata("design:type", String)
], BiologicallyDerivedProduct.prototype, "productCategory", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element_1.Element),
    __metadata("design:type", Element_1.Element)
], BiologicallyDerivedProduct.prototype, "_productCategory", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CodeableConcept_1.CodeableConcept),
    __metadata("design:type", CodeableConcept_1.CodeableConcept)
], BiologicallyDerivedProduct.prototype, "productCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], BiologicallyDerivedProduct.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Reference_1.Reference),
    __metadata("design:type", Array)
], BiologicallyDerivedProduct.prototype, "request", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['available', 'unavailable']),
    __metadata("design:type", String)
], BiologicallyDerivedProduct.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element_1.Element),
    __metadata("design:type", Element_1.Element)
], BiologicallyDerivedProduct.prototype, "_status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => BiologicallyDerivedProductStorage_1.BiologicallyDerivedProductStorage),
    __metadata("design:type", Array)
], BiologicallyDerivedProduct.prototype, "storage", void 0);
//# sourceMappingURL=BiologicallyDerivedProduct.js.map