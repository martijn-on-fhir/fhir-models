import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ImmunizationReaction extends BackboneElement {
  /**
   * Date of reaction to the immunization.
   */
  @IsOptional()
  @IsString()
  date?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _date?: Element;

  /**
   * Details of the reaction.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  detail?: Reference;

  /**
   * Self-reported indicator.
   */
  @IsOptional()
  @IsBoolean()
  reported?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _reported?: Element;

  /**
   * Constructor for ImmunizationReaction
   */
  constructor(source: Partial<ImmunizationReaction> = {}) {
    super(source);
  }
}
