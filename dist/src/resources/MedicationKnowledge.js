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
exports.MedicationKnowledge = void 0;
require("reflect-metadata");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const DomainResource_1 = require("../base/DomainResource");
const Element_1 = require("../base/Element");
const CodeableConcept_1 = require("../elements/CodeableConcept");
const MedicationKnowledgeAdministrationGuidelines_1 = require("../backbone/MedicationKnowledgeAdministrationGuidelines");
const MedicationKnowledgeCost_1 = require("../backbone/MedicationKnowledgeCost");
const MedicationKnowledgeDrugCharacteristic_1 = require("../backbone/MedicationKnowledgeDrugCharacteristic");
const MedicationKnowledgeIngredient_1 = require("../backbone/MedicationKnowledgeIngredient");
const MedicationKnowledgeKinetics_1 = require("../backbone/MedicationKnowledgeKinetics");
const MedicationKnowledgeMedicineClassification_1 = require("../backbone/MedicationKnowledgeMedicineClassification");
const MedicationKnowledgeMonitoringProgram_1 = require("../backbone/MedicationKnowledgeMonitoringProgram");
const MedicationKnowledgeMonograph_1 = require("../backbone/MedicationKnowledgeMonograph");
const MedicationKnowledgePackaging_1 = require("../backbone/MedicationKnowledgePackaging");
const MedicationKnowledgeRegulatory_1 = require("../backbone/MedicationKnowledgeRegulatory");
const MedicationKnowledgeRelatedMedicationKnowledge_1 = require("../backbone/MedicationKnowledgeRelatedMedicationKnowledge");
const Quantity_1 = require("../elements/Quantity");
const Reference_1 = require("../elements/Reference");
class MedicationKnowledge extends DomainResource_1.DomainResource {
    constructor(source = {}) {
        super(source);
        this.resourceType = 'MedicationKnowledge';
        this.resourceType = 'MedicationKnowledge';
    }
}
exports.MedicationKnowledge = MedicationKnowledge;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => MedicationKnowledgeAdministrationGuidelines_1.MedicationKnowledgeAdministrationGuidelines),
    __metadata("design:type", Array)
], MedicationKnowledge.prototype, "administrationGuidelines", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Quantity_1.Quantity),
    __metadata("design:type", Quantity_1.Quantity)
], MedicationKnowledge.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Reference_1.Reference),
    __metadata("design:type", Array)
], MedicationKnowledge.prototype, "associatedMedication", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CodeableConcept_1.CodeableConcept),
    __metadata("design:type", CodeableConcept_1.CodeableConcept)
], MedicationKnowledge.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Reference_1.Reference),
    __metadata("design:type", Array)
], MedicationKnowledge.prototype, "contraindication", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => MedicationKnowledgeCost_1.MedicationKnowledgeCost),
    __metadata("design:type", Array)
], MedicationKnowledge.prototype, "cost", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CodeableConcept_1.CodeableConcept),
    __metadata("design:type", CodeableConcept_1.CodeableConcept)
], MedicationKnowledge.prototype, "doseForm", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => MedicationKnowledgeDrugCharacteristic_1.MedicationKnowledgeDrugCharacteristic),
    __metadata("design:type", Array)
], MedicationKnowledge.prototype, "drugCharacteristic", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => MedicationKnowledgeIngredient_1.MedicationKnowledgeIngredient),
    __metadata("design:type", Array)
], MedicationKnowledge.prototype, "ingredient", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CodeableConcept_1.CodeableConcept),
    __metadata("design:type", Array)
], MedicationKnowledge.prototype, "intendedRoute", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => MedicationKnowledgeKinetics_1.MedicationKnowledgeKinetics),
    __metadata("design:type", Array)
], MedicationKnowledge.prototype, "kinetics", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Reference_1.Reference),
    __metadata("design:type", Reference_1.Reference)
], MedicationKnowledge.prototype, "manufacturer", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => MedicationKnowledgeMedicineClassification_1.MedicationKnowledgeMedicineClassification),
    __metadata("design:type", Array)
], MedicationKnowledge.prototype, "medicineClassification", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => MedicationKnowledgeMonitoringProgram_1.MedicationKnowledgeMonitoringProgram),
    __metadata("design:type", Array)
], MedicationKnowledge.prototype, "monitoringProgram", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => MedicationKnowledgeMonograph_1.MedicationKnowledgeMonograph),
    __metadata("design:type", Array)
], MedicationKnowledge.prototype, "monograph", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => MedicationKnowledgePackaging_1.MedicationKnowledgePackaging),
    __metadata("design:type", MedicationKnowledgePackaging_1.MedicationKnowledgePackaging)
], MedicationKnowledge.prototype, "packaging", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MedicationKnowledge.prototype, "preparationInstruction", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element_1.Element),
    __metadata("design:type", Element_1.Element)
], MedicationKnowledge.prototype, "_preparationInstruction", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => CodeableConcept_1.CodeableConcept),
    __metadata("design:type", Array)
], MedicationKnowledge.prototype, "productType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => MedicationKnowledgeRegulatory_1.MedicationKnowledgeRegulatory),
    __metadata("design:type", Array)
], MedicationKnowledge.prototype, "regulatory", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => MedicationKnowledgeRelatedMedicationKnowledge_1.MedicationKnowledgeRelatedMedicationKnowledge),
    __metadata("design:type", Array)
], MedicationKnowledge.prototype, "relatedMedicationKnowledge", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['active', 'inactive', 'entered-in-error']),
    __metadata("design:type", String)
], MedicationKnowledge.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Element_1.Element),
    __metadata("design:type", Element_1.Element)
], MedicationKnowledge.prototype, "_status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], MedicationKnowledge.prototype, "synonym", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Element_1.Element),
    __metadata("design:type", Array)
], MedicationKnowledge.prototype, "_synonym", void 0);
//# sourceMappingURL=MedicationKnowledge.js.map