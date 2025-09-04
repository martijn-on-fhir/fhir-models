import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstanceSourceMaterialPartDescription extends BackboneElement implements fhir.SubstanceSourceMaterialPartDescription {
  /**
   * Entity of anatomical origin of source material within an organism.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  part?: CodeableConcept;

  /**
   * The detailed anatomic location when the part can be extracted from different anatomical locations of the organism. Multi
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  partLocation?: CodeableConcept;

  /**
   * Constructor for SubstanceSourceMaterialPartDescription
   */
  constructor(source: Partial<SubstanceSourceMaterialPartDescription> = {}) {
    super(source);
  }
}
