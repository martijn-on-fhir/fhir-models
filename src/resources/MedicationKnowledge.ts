import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { MedicationKnowledgeAdministrationGuidelines } from '../backbone/MedicationKnowledgeAdministrationGuidelines';
import { MedicationKnowledgeCost } from '../backbone/MedicationKnowledgeCost';
import { MedicationKnowledgeDrugCharacteristic } from '../backbone/MedicationKnowledgeDrugCharacteristic';
import { MedicationKnowledgeIngredient } from '../backbone/MedicationKnowledgeIngredient';
import { MedicationKnowledgeKinetics } from '../backbone/MedicationKnowledgeKinetics';
import { MedicationKnowledgeMedicineClassification } from '../backbone/MedicationKnowledgeMedicineClassification';
import { MedicationKnowledgeMonitoringProgram } from '../backbone/MedicationKnowledgeMonitoringProgram';
import { MedicationKnowledgeMonograph } from '../backbone/MedicationKnowledgeMonograph';
import { MedicationKnowledgePackaging } from '../backbone/MedicationKnowledgePackaging';
import { MedicationKnowledgeRegulatory } from '../backbone/MedicationKnowledgeRegulatory';
import { MedicationKnowledgeRelatedMedicationKnowledge } from '../backbone/MedicationKnowledgeRelatedMedicationKnowledge';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicationKnowledge extends DomainResource implements fhir.MedicationKnowledge {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'MedicationKnowledge' as const;

  /**
   * Guidelines for the administration of the medication.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationKnowledgeAdministrationGuidelines)
  administrationGuidelines?: MedicationKnowledgeAdministrationGuidelines[];

  /**
   * This is the quantity of medication in a package.  To specify the strength of the medication, the Ingredient.strength att
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  amount?: Quantity;

  /**
   * Associated or related medications.  For example, if the medication is a branded product (e.g. Crestor), this is the Ther
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  associatedMedication?: Reference[];

  /**
   * Depending on the context of use, the code that was actually selected by the user (prescriber, dispenser, etc.) will have
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * Potential clinical issue with or between medication(s) (for example, drug-drug interaction, drug-disease contraindicatio
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  contraindication?: Reference[];

  /**
   * The price of the medication.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationKnowledgeCost)
  cost?: MedicationKnowledgeCost[];

  /**
   * When Medication is referenced from MedicationRequest, this is the ordered form.  When Medication is referenced within Me
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  doseForm?: CodeableConcept;

  /**
   * Specifies descriptive properties of the medicine, such as color, shape, imprints, etc.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationKnowledgeDrugCharacteristic)
  drugCharacteristic?: MedicationKnowledgeDrugCharacteristic[];

  /**
   * Identifies a particular constituent of interest in the product.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationKnowledgeIngredient)
  ingredient?: MedicationKnowledgeIngredient[];

  /**
   * The intended or approved route of administration.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  intendedRoute?: CodeableConcept[];

  /**
   * The time course of drug absorption, distribution, metabolism and excretion of a medication from the body.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationKnowledgeKinetics)
  kinetics?: MedicationKnowledgeKinetics[];

  /**
   * Describes the details of the manufacturer of the medication product.  This is not intended to represent the distributor 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  manufacturer?: Reference;

  /**
   * Categorization of the medication within a formulary or classification system.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationKnowledgeMedicineClassification)
  medicineClassification?: MedicationKnowledgeMedicineClassification[];

  /**
   * The program under which the medication is reviewed.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationKnowledgeMonitoringProgram)
  monitoringProgram?: MedicationKnowledgeMonitoringProgram[];

  /**
   * Associated documentation about the medication.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationKnowledgeMonograph)
  monograph?: MedicationKnowledgeMonograph[];

  /**
   * Information that only applies to packages (not products).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => MedicationKnowledgePackaging)
  packaging?: MedicationKnowledgePackaging;

  /**
   * The instructions for preparing the medication.
   */
  @IsOptional()
  @IsString()
  preparationInstruction?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _preparationInstruction?: Element;

  /**
   * Category of the medication or product (e.g. branded product, therapeutic moeity, generic product, innovator product, etc
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  productType?: CodeableConcept[];

  /**
   * Regulatory information about a medication.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationKnowledgeRegulatory)
  regulatory?: MedicationKnowledgeRegulatory[];

  /**
   * Associated or related knowledge about a medication.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationKnowledgeRelatedMedicationKnowledge)
  relatedMedicationKnowledge?: MedicationKnowledgeRelatedMedicationKnowledge[];

  /**
   * This status is intended to identify if the medication in a local system is in active use within a drug database or inven
   */
  @IsOptional()
  @IsIn(['active', 'inactive', 'entered-in-error'])
  status?: ('active'|'inactive'|'entered-in-error');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Additional names for a medication, for example, the name(s) given to a medication in different countries.  For example, 
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  synonym?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _synonym?: Element[];

  /**
   * Constructor for MedicationKnowledge
   */
  constructor(source: Partial<MedicationKnowledge> = {}) {
    super(source);
    this.resourceType = 'MedicationKnowledge';
  }
}
