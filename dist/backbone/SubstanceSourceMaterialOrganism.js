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
exports.SubstanceSourceMaterialOrganism = void 0;
require("reflect-metadata");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const BackboneElement_1 = require("../base/BackboneElement");
const Element_1 = require("../base/Element");
const CodeableConcept_1 = require("../elements/CodeableConcept");
const SubstanceSourceMaterialOrganismAuthor_1 = require("./SubstanceSourceMaterialOrganismAuthor");
const SubstanceSourceMaterialOrganismHybrid_1 = require("./SubstanceSourceMaterialOrganismHybrid");
const SubstanceSourceMaterialOrganismOrganismGeneral_1 = require("./SubstanceSourceMaterialOrganismOrganismGeneral");
class SubstanceSourceMaterialOrganism extends BackboneElement_1.BackboneElement {
    constructor(source = {}) {
        super(source);
    }
}
exports.SubstanceSourceMaterialOrganism = SubstanceSourceMaterialOrganism;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => SubstanceSourceMaterialOrganismAuthor_1.SubstanceSourceMaterialOrganismAuthor),
    __metadata("design:type", Array)
], SubstanceSourceMaterialOrganism.prototype, "author", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CodeableConcept_1.CodeableConcept),
    __metadata("design:type", CodeableConcept_1.CodeableConcept)
], SubstanceSourceMaterialOrganism.prototype, "family", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CodeableConcept_1.CodeableConcept),
    __metadata("design:type", CodeableConcept_1.CodeableConcept)
], SubstanceSourceMaterialOrganism.prototype, "genus", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => SubstanceSourceMaterialOrganismHybrid_1.SubstanceSourceMaterialOrganismHybrid),
    __metadata("design:type", SubstanceSourceMaterialOrganismHybrid_1.SubstanceSourceMaterialOrganismHybrid)
], SubstanceSourceMaterialOrganism.prototype, "hybrid", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SubstanceSourceMaterialOrganism.prototype, "intraspecificDescription", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element_1.Element),
    __metadata("design:type", Element_1.Element)
], SubstanceSourceMaterialOrganism.prototype, "_intraspecificDescription", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CodeableConcept_1.CodeableConcept),
    __metadata("design:type", CodeableConcept_1.CodeableConcept)
], SubstanceSourceMaterialOrganism.prototype, "intraspecificType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => SubstanceSourceMaterialOrganismOrganismGeneral_1.SubstanceSourceMaterialOrganismOrganismGeneral),
    __metadata("design:type", SubstanceSourceMaterialOrganismOrganismGeneral_1.SubstanceSourceMaterialOrganismOrganismGeneral)
], SubstanceSourceMaterialOrganism.prototype, "organismGeneral", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CodeableConcept_1.CodeableConcept),
    __metadata("design:type", CodeableConcept_1.CodeableConcept)
], SubstanceSourceMaterialOrganism.prototype, "species", void 0);
//# sourceMappingURL=SubstanceSourceMaterialOrganism.js.map