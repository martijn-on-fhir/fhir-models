import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { SubstanceAmount } from './SubstanceAmount';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstancePolymerMonomerSetStartingMaterial extends BackboneElement {
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
  @IsBoolean()
  isDefining?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _isDefining?: Element;

  /**
   * Todo.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  material?: CodeableConcept;

  /**
   * Todo.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for SubstancePolymerMonomerSetStartingMaterial
   */
  constructor(source: Partial<SubstancePolymerMonomerSetStartingMaterial> = {}) {
    super(source);
  }
}
