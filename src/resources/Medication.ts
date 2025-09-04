import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { MedicationBatch } from '../backbone/MedicationBatch';
import { MedicationIngredient } from '../backbone/MedicationIngredient';
import { Ratio } from '../elements/Ratio';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Medication extends DomainResource implements fhir.Medication {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Medication' as const;

  /**
   * Specific amount of the drug in the packaged product.  For example, when specifying a product that has the same strength 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  amount?: Ratio;

  /**
   * Information that only applies to packages (not products).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => MedicationBatch)
  batch?: MedicationBatch;

  /**
   * Depending on the context of use, the code that was actually selected by the user (prescriber, dispenser, etc.) will have
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * When Medication is referenced from MedicationRequest, this is the ordered form.  When Medication is referenced within Me
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  form?: CodeableConcept;

  /**
   * The serial number could be included as an identifier.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * The ingredients need not be a complete list.  If an ingredient is not specified, this does not indicate whether an ingre
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationIngredient)
  ingredient?: MedicationIngredient[];

  /**
   * Describes the details of the manufacturer of the medication product.  This is not intended to represent the distributor 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  manufacturer?: Reference;

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
   * Constructor for Medication
   */
  constructor(source: Partial<Medication> = {}) {
    super(source);
    this.resourceType = 'Medication';
  }
}
