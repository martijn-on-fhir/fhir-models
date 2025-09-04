import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class DiagnosticReportMedia extends BackboneElement {
  /**
   * The comment should be displayed with the image. It would be common for the report to include additional discussion of th
   */
  @IsOptional()
  @IsString()
  comment?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _comment?: Element;

  /**
   * Reference to the image source.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  link?: Reference;

  /**
   * Constructor for DiagnosticReportMedia
   */
  constructor(source: Partial<DiagnosticReportMedia> = {}) {
    super(source);
  }
}
