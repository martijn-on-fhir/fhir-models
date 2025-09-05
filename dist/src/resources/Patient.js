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
exports.Patient = void 0;
require("reflect-metadata");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const DomainResource_1 = require("../base/DomainResource");
const Element_1 = require("../base/Element");
const Address_1 = require("../elements/Address");
const PatientCommunication_1 = require("../backbone/PatientCommunication");
const PatientContact_1 = require("../backbone/PatientContact");
const Reference_1 = require("../elements/Reference");
const Identifier_1 = require("../elements/Identifier");
const PatientLink_1 = require("../backbone/PatientLink");
const CodeableConcept_1 = require("../elements/CodeableConcept");
const HumanName_1 = require("../elements/HumanName");
const Attachment_1 = require("../elements/Attachment");
const ContactPoint_1 = require("../elements/ContactPoint");
class Patient extends DomainResource_1.DomainResource {
    constructor(source = {}) {
        super(source);
        this.resourceType = 'Patient';
        this.resourceType = 'Patient';
        Object.assign(this, source);
    }
}
exports.Patient = Patient;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Patient.prototype, "active", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Element_1.Element)
], Patient.prototype, "_active", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Address_1.Address),
    __metadata("design:type", Array)
], Patient.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Patient.prototype, "birthDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Element_1.Element)
], Patient.prototype, "_birthDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => PatientCommunication_1.PatientCommunication),
    __metadata("design:type", Array)
], Patient.prototype, "communication", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => PatientContact_1.PatientContact),
    __metadata("design:type", Array)
], Patient.prototype, "contact", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Patient.prototype, "deceasedBoolean", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Element_1.Element)
], Patient.prototype, "_deceasedBoolean", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Patient.prototype, "deceasedDateTime", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Element_1.Element)
], Patient.prototype, "_deceasedDateTime", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['male', 'female', 'other', 'unknown']),
    __metadata("design:type", String)
], Patient.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Element_1.Element)
], Patient.prototype, "_gender", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Reference_1.Reference),
    __metadata("design:type", Array)
], Patient.prototype, "generalPractitioner", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Identifier_1.Identifier),
    __metadata("design:type", Array)
], Patient.prototype, "identifier", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => PatientLink_1.PatientLink),
    __metadata("design:type", Array)
], Patient.prototype, "link", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => Reference_1.Reference),
    __metadata("design:type", Reference_1.Reference)
], Patient.prototype, "managingOrganization", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CodeableConcept_1.CodeableConcept),
    __metadata("design:type", CodeableConcept_1.CodeableConcept)
], Patient.prototype, "maritalStatus", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], Patient.prototype, "multipleBirthBoolean", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Element_1.Element)
], Patient.prototype, "_multipleBirthBoolean", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], Patient.prototype, "multipleBirthInteger", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => HumanName_1.HumanName),
    __metadata("design:type", Array)
], Patient.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Attachment_1.Attachment),
    __metadata("design:type", Array)
], Patient.prototype, "photo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ContactPoint_1.ContactPoint),
    __metadata("design:type", Array)
], Patient.prototype, "telecom", void 0);
//# sourceMappingURL=Patient.js.map