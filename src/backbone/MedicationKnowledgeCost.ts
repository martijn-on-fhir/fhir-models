import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Money } from '../elements/Money';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicationKnowledgeCost extends BackboneElement {
  /**
   * The price of the medication.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  cost?: Money;

  /**
   * The source or owner that assigns the price to the medication.
   */
  @IsOptional()
  @IsString()
  source?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _source?: Element;

  /**
   * The category of the cost information.  For example, manufacturers' cost, patient cost, claim reimbursement cost, actual 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for MedicationKnowledgeCost
   */
  constructor(source: Partial<MedicationKnowledgeCost> = {}) {
    super(source);
  }
}
