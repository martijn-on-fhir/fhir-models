import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstanceSpecificationNameOfficial extends BackboneElement implements fhir.SubstanceSpecificationNameOfficial {
  /**
   * Which authority uses this official name.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  authority?: CodeableConcept;

  /**
   * Date of official name change.
   */
  @IsOptional()
  @IsString()
  date?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _date?: Element;

  /**
   * The status of the official name.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  status?: CodeableConcept;

  /**
   * Constructor for SubstanceSpecificationNameOfficial
   */
  constructor(source: Partial<SubstanceSpecificationNameOfficial> = {}) {
    super(source);
  }
}
