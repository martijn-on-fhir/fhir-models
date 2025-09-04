import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { MolecularSequenceStructureVariantInner } from './MolecularSequenceStructureVariantInner';
import { MolecularSequenceStructureVariantOuter } from './MolecularSequenceStructureVariantOuter';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MolecularSequenceStructureVariant extends BackboneElement implements fhir.MolecularSequenceStructureVariant {
  /**
   * Used to indicate if the outer and inner start-end values have the same meaning.
   */
  @IsOptional()
  @IsBoolean()
  exact?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _exact?: Element;

  /**
   * Structural variant inner.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => MolecularSequenceStructureVariantInner)
  inner?: MolecularSequenceStructureVariantInner;

  /**
   * Length of the variant chromosome.
   */
  @IsOptional()
  @IsNumber()
  length?: number;

  /**
   * Structural variant outer.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => MolecularSequenceStructureVariantOuter)
  outer?: MolecularSequenceStructureVariantOuter;

  /**
   * Information about chromosome structure variation DNA change type.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  variantType?: CodeableConcept;

  /**
   * Constructor for MolecularSequenceStructureVariant
   */
  constructor(source: Partial<MolecularSequenceStructureVariant> = {}) {
    super(source);
  }
}
