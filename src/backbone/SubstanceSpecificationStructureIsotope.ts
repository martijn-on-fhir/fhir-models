import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Quantity } from '../elements/Quantity';
import { SubstanceSpecificationStructureIsotopeMolecularWeight } from './SubstanceSpecificationStructureIsotopeMolecularWeight';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstanceSpecificationStructureIsotope extends BackboneElement {
  /**
   * Half life - for a non-natural nuclide.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  halfLife?: Quantity;

  /**
   * Substance identifier for each non-natural or radioisotope.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /**
   * The molecular weight or weight range (for proteins, polymers or nucleic acids).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => SubstanceSpecificationStructureIsotopeMolecularWeight)
  molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeight;

  /**
   * Substance name for each non-natural or radioisotope.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  name?: CodeableConcept;

  /**
   * The type of isotopic substitution present in a single substance.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  substitution?: CodeableConcept;

  /**
   * Constructor for SubstanceSpecificationStructureIsotope
   */
  constructor(source: Partial<SubstanceSpecificationStructureIsotope> = {}) {
    super(source);
  }
}
