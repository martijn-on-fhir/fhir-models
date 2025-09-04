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
export class SpecimenProcessing extends BackboneElement {
  /**
   * Material used in the processing step.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  additive?: Reference[];

  /**
   * Textual description of procedure.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * A coded value specifying the procedure used to process the specimen.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  procedure?: CodeableConcept;

  /**
   * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the pe
   */
  @IsOptional()
  @IsString()
  timeDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _timeDateTime?: Element;

  /**
   * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the pe
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  timePeriod?: Period;

  /**
   * Constructor for SpecimenProcessing
   */
  constructor(source: Partial<SpecimenProcessing> = {}) {
    super(source);
  }
}
