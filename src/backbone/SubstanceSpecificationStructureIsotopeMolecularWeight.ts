import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstanceSpecificationStructureIsotopeMolecularWeight extends BackboneElement implements fhir.SubstanceSpecificationStructureIsotopeMolecularWeight {
  /**
   * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be th
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  amount?: Quantity;

  /**
   * The method by which the molecular weight was determined.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  method?: CodeableConcept;

  /**
   * Type of molecular weight such as exact, average (also known as. number average), weight average.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for SubstanceSpecificationStructureIsotopeMolecularWeight
   */
  constructor(source: Partial<SubstanceSpecificationStructureIsotopeMolecularWeight> = {}) {
    super(source);
  }
}
