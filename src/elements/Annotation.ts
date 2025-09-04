import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { Element } from '../base/Element';
import { Reference } from './Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address form
 */
export class Annotation extends Element implements fhir.Annotation {
  /**
   * Organization is used when there's no need for specific attribution as to who made the comment.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  authorReference?: Reference;

  /**
   * Organization is used when there's no need for specific attribution as to who made the comment.
   */
  @IsOptional()
  @IsString()
  authorString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _authorString?: Element;

  /**
   * The text of the annotation in markdown format.
   */
  @IsOptional()
  @IsString()
  text: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _text?: Element;

  /**
   * Indicates when this particular annotation was made.
   */
  @IsOptional()
  @IsString()
  time?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _time?: Element;

  /**
   * Constructor for Annotation
   */
  constructor(source: Partial<Annotation> = {}) {
    super(source);
  }
}
