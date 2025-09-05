import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class DetectedIssueMitigation extends BackboneElement {
  /**
   * The "text" component can be used for detail or when no appropriate code exists.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  action?: CodeableConcept;

  /**
   * Identifies the practitioner who determined the mitigation and takes responsibility for the mitigation step occurring.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  author?: Reference;

  /**
   * This might not be the same as when the mitigating step was actually taken.
   */
  @IsOptional()
  @IsString()
  date?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _date?: Element;

  /**
   * Constructor for DetectedIssueMitigation
   */
  constructor(source: Partial<DetectedIssueMitigation> = {}) {
    super(source);
  }
}
