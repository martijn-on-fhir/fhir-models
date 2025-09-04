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
exports.SubstanceReferenceInformation = void 0;
require("reflect-metadata");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const DomainResource_1 = require("../base/DomainResource");
const Element_1 = require("../base/Element");
const SubstanceReferenceInformationClassification_1 = require("../backbone/SubstanceReferenceInformationClassification");
const SubstanceReferenceInformationGene_1 = require("../backbone/SubstanceReferenceInformationGene");
const SubstanceReferenceInformationGeneElement_1 = require("../backbone/SubstanceReferenceInformationGeneElement");
const SubstanceReferenceInformationTarget_1 = require("../backbone/SubstanceReferenceInformationTarget");
class SubstanceReferenceInformation extends DomainResource_1.DomainResource {
    constructor(source = {}) {
        super(source);
        this.resourceType = 'SubstanceReferenceInformation';
        this.resourceType = 'SubstanceReferenceInformation';
    }
}
exports.SubstanceReferenceInformation = SubstanceReferenceInformation;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => SubstanceReferenceInformationClassification_1.SubstanceReferenceInformationClassification),
    __metadata("design:type", Array)
], SubstanceReferenceInformation.prototype, "classification", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SubstanceReferenceInformation.prototype, "comment", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element_1.Element),
    __metadata("design:type", Element_1.Element)
], SubstanceReferenceInformation.prototype, "_comment", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => SubstanceReferenceInformationGene_1.SubstanceReferenceInformationGene),
    __metadata("design:type", Array)
], SubstanceReferenceInformation.prototype, "gene", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => SubstanceReferenceInformationGeneElement_1.SubstanceReferenceInformationGeneElement),
    __metadata("design:type", Array)
], SubstanceReferenceInformation.prototype, "geneElement", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => SubstanceReferenceInformationTarget_1.SubstanceReferenceInformationTarget),
    __metadata("design:type", Array)
], SubstanceReferenceInformation.prototype, "target", void 0);
