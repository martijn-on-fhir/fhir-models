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
exports.MolecularSequence = void 0;
require("reflect-metadata");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const DomainResource_1 = require("../base/DomainResource");
const Element_1 = require("../base/Element");
const Identifier_1 = require("../elements/Identifier");
const MolecularSequenceQuality_1 = require("../backbone/MolecularSequenceQuality");
const MolecularSequenceReferenceSeq_1 = require("../backbone/MolecularSequenceReferenceSeq");
const MolecularSequenceRepository_1 = require("../backbone/MolecularSequenceRepository");
const MolecularSequenceStructureVariant_1 = require("../backbone/MolecularSequenceStructureVariant");
const MolecularSequenceVariant_1 = require("../backbone/MolecularSequenceVariant");
const Quantity_1 = require("../elements/Quantity");
const Reference_1 = require("../elements/Reference");
class MolecularSequence extends DomainResource_1.DomainResource {
    constructor(source = {}) {
        super(source);
        this.resourceType = 'MolecularSequence';
        this.resourceType = 'MolecularSequence';
    }
}
exports.MolecularSequence = MolecularSequence;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], MolecularSequence.prototype, "coordinateSystem", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Reference_1.Reference),
    __metadata("design:type", Reference_1.Reference)
], MolecularSequence.prototype, "device", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Identifier_1.Identifier),
    __metadata("design:type", Array)
], MolecularSequence.prototype, "identifier", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MolecularSequence.prototype, "observedSeq", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element_1.Element),
    __metadata("design:type", Element_1.Element)
], MolecularSequence.prototype, "_observedSeq", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Reference_1.Reference),
    __metadata("design:type", Reference_1.Reference)
], MolecularSequence.prototype, "patient", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Reference_1.Reference),
    __metadata("design:type", Reference_1.Reference)
], MolecularSequence.prototype, "performer", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Reference_1.Reference),
    __metadata("design:type", Array)
], MolecularSequence.prototype, "pointer", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => MolecularSequenceQuality_1.MolecularSequenceQuality),
    __metadata("design:type", Array)
], MolecularSequence.prototype, "quality", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Quantity_1.Quantity),
    __metadata("design:type", Quantity_1.Quantity)
], MolecularSequence.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], MolecularSequence.prototype, "readCoverage", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => MolecularSequenceReferenceSeq_1.MolecularSequenceReferenceSeq),
    __metadata("design:type", MolecularSequenceReferenceSeq_1.MolecularSequenceReferenceSeq)
], MolecularSequence.prototype, "referenceSeq", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => MolecularSequenceRepository_1.MolecularSequenceRepository),
    __metadata("design:type", Array)
], MolecularSequence.prototype, "repository", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Reference_1.Reference),
    __metadata("design:type", Reference_1.Reference)
], MolecularSequence.prototype, "specimen", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => MolecularSequenceStructureVariant_1.MolecularSequenceStructureVariant),
    __metadata("design:type", Array)
], MolecularSequence.prototype, "structureVariant", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['aa', 'dna', 'rna']),
    __metadata("design:type", String)
], MolecularSequence.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element_1.Element),
    __metadata("design:type", Element_1.Element)
], MolecularSequence.prototype, "_type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => MolecularSequenceVariant_1.MolecularSequenceVariant),
    __metadata("design:type", Array)
], MolecularSequence.prototype, "variant", void 0);
//# sourceMappingURL=MolecularSequence.js.map