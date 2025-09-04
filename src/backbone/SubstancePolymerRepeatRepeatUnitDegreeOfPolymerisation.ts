import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { SubstanceAmount } from './SubstanceAmount';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation extends BackboneElement implements fhir.SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation {
  /**
   * Todo.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => SubstanceAmount)
  amount?: SubstanceAmount;

  /**
   * Todo.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  degree?: CodeableConcept;

  /**
   * Constructor for SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation
   */
  constructor(source: Partial<SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation> = {}) {
    super(source);
  }
}
