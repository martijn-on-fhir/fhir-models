import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ExplanationOfBenefitProcessNote extends BackboneElement {
  /**
   * Only required if the language is different from the resource language.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  language?: CodeableConcept;

  /**
   * A number to uniquely identify a note entry.
   */
  @IsOptional()
  @IsNumber()
  number?: number;

  /**
   * The explanation or description associated with the processing.
   */
  @IsOptional()
  @IsString()
  text?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _text?: Element;

  /**
   * The business purpose of the note text.
   */
  @IsOptional()
  @IsIn(['display', 'print', 'printoper'])
  type?: ('display'|'print'|'printoper');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * Constructor for ExplanationOfBenefitProcessNote
   */
  constructor(source: Partial<ExplanationOfBenefitProcessNote> = {}) {
    super(source);
  }
}
