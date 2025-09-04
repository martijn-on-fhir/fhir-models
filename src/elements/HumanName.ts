import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { Element } from '../base/Element';
import { Period } from './Period';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address form
 */
export class HumanName extends Element {
  /**
   * Family Name may be decomposed into specific parts using extensions (de, nl, es related cultures).
   */
  @IsOptional()
  @IsString()
  family?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _family?: Element;

  /**
   * If only initials are recorded, they may be used in place of the full name parts. Initials may be separated into multiple given names but often aren't due to paractical limitations.  This element is no
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  given?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _given?: Element[];

  /**
   * Indicates the period of time when this name was valid for the named person.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  prefix?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _prefix?: Element[];

  /**
   * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  suffix?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _suffix?: Element[];

  /**
   * Can provide both a text representation and parts. Applications updating a name SHALL ensure that when both text and parts are present,  no content is included in the text that isn't found in a part.
   */
  @IsOptional()
  @IsString()
  text?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _text?: Element;

  /**
   * Applications can assume that a name is current unless it explicitly says that it is temporary or old.
   */
  @IsOptional()
  @IsIn(['usual', 'official', 'temp', 'nickname', 'anonymous', 'old', 'maiden'])
  use?: ('usual'|'official'|'temp'|'nickname'|'anonymous'|'old'|'maiden');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _use?: Element;

  /**
   * Constructor for HumanName
   */
  constructor(source: Partial<HumanName> = {}) {
    super(source);
  }
}
