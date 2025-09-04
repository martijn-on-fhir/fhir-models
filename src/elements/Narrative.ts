import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { Element } from '../base/Element';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address form
 */
export class Narrative extends Element implements fhir.Narrative {
  /**
   * The contents of the html element are an XHTML fragment containing only the basic html formatting elements described in chapters 7-11 and 15 of the HTML 4.0 standard, <a> elements (either name or href)
   */
  @IsOptional()
  @IsString()
  div: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _div?: Element;

  /**
   * The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.
   */
  @IsOptional()
  @IsIn(['generated', 'extensions', 'additional', 'empty'])
  status: ('generated'|'extensions'|'additional'|'empty');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Constructor for Narrative
   */
  constructor(source: Partial<Narrative> = {}) {
    super(source);
  }
}
