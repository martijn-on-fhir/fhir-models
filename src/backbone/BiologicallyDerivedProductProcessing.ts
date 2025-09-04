import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class BiologicallyDerivedProductProcessing extends BackboneElement {
  /**
   * Substance added during processing.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  additive?: Reference;

  /**
   * Description of of processing.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Procesing code.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  procedure?: CodeableConcept;

  /**
   * Time of processing.
   */
  @IsOptional()
  @IsString()
  timeDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _timeDateTime?: Element;

  /**
   * Time of processing.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  timePeriod?: Period;

  /**
   * Constructor for BiologicallyDerivedProductProcessing
   */
  constructor(source: Partial<BiologicallyDerivedProductProcessing> = {}) {
    super(source);
  }
}
