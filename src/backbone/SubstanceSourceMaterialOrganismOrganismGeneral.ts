import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstanceSourceMaterialOrganismOrganismGeneral extends BackboneElement implements fhir.SubstanceSourceMaterialOrganismOrganismGeneral {
  /**
   * The class of an organism shall be specified.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  class?: CodeableConcept;

  /**
   * The kingdom of an organism shall be specified.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  kingdom?: CodeableConcept;

  /**
   * The order of an organism shall be specified,.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  order?: CodeableConcept;

  /**
   * The phylum of an organism shall be specified.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  phylum?: CodeableConcept;

  /**
   * Constructor for SubstanceSourceMaterialOrganismOrganismGeneral
   */
  constructor(source: Partial<SubstanceSourceMaterialOrganismOrganismGeneral> = {}) {
    super(source);
  }
}
