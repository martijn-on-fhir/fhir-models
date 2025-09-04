import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstanceSourceMaterialFractionDescription extends BackboneElement implements fhir.SubstanceSourceMaterialFractionDescription {
  /**
   * This element is capturing information about the fraction of a plant part, or human plasma for fractionation.
   */
  @IsOptional()
  @IsString()
  fraction?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _fraction?: Element;

  /**
   * The specific type of the material constituting the component. For Herbal preparations the particulars of the extracts (l
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  materialType?: CodeableConcept;

  /**
   * Constructor for SubstanceSourceMaterialFractionDescription
   */
  constructor(source: Partial<SubstanceSourceMaterialFractionDescription> = {}) {
    super(source);
  }
}
