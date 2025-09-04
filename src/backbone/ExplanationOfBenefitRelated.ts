import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ExplanationOfBenefitRelated extends BackboneElement implements fhir.ExplanationOfBenefitRelated {
  /**
   * Reference to a related claim.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  claim?: Reference;

  /**
   * For example, Property/Casualty insurer claim number or Workers Compensation case number.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  reference?: Identifier;

  /**
   * For example, prior claim or umbrella.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  relationship?: CodeableConcept;

  /**
   * Constructor for ExplanationOfBenefitRelated
   */
  constructor(source: Partial<ExplanationOfBenefitRelated> = {}) {
    super(source);
  }
}
