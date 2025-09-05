import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class RelatedPersonCommunication extends BackboneElement {
  /**
   * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems act
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  language?: CodeableConcept;

  /**
   * This language is specifically identified for communicating healthcare information.
   */
  @IsOptional()
  @IsBoolean()
  preferred?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _preferred?: Element;

  /**
   * Constructor for RelatedPersonCommunication
   */
  constructor(source: Partial<RelatedPersonCommunication> = {}) {
    super(source);
  }
}
