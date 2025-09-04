import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
import { SubstanceSpecificationStructureIsotope } from './SubstanceSpecificationStructureIsotope';
import { SubstanceSpecificationStructureIsotopeMolecularWeight } from './SubstanceSpecificationStructureIsotopeMolecularWeight';
import { SubstanceSpecificationStructureRepresentation } from './SubstanceSpecificationStructureRepresentation';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstanceSpecificationStructure extends BackboneElement implements fhir.SubstanceSpecificationStructure {
  /**
   * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceSpecificationStructureIsotope)
  isotope?: SubstanceSpecificationStructureIsotope[];

  /**
   * Molecular formula.
   */
  @IsOptional()
  @IsString()
  molecularFormula?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _molecularFormula?: Element;

  /**
   * Specified per moiety according to the Hill system, i.e. first C, then H, then alphabetical, each moiety separated by a d
   */
  @IsOptional()
  @IsString()
  molecularFormulaByMoiety?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _molecularFormulaByMoiety?: Element;

  /**
   * The molecular weight or weight range (for proteins, polymers or nucleic acids).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => SubstanceSpecificationStructureIsotopeMolecularWeight)
  molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeight;

  /**
   * Optical activity type.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  opticalActivity?: CodeableConcept;

  /**
   * Molecular structural representation.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceSpecificationStructureRepresentation)
  representation?: SubstanceSpecificationStructureRepresentation[];

  /**
   * Supporting literature.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  source?: Reference[];

  /**
   * Stereochemistry type.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  stereochemistry?: CodeableConcept;

  /**
   * Constructor for SubstanceSpecificationStructure
   */
  constructor(source: Partial<SubstanceSpecificationStructure> = {}) {
    super(source);
  }
}
