import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CapabilityStatementDocument extends BackboneElement {
  /**
   * A description of how the application supports or uses the specified document profile.  For example, when documents are c
   */
  @IsOptional()
  @IsString()
  documentation?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _documentation?: Element;

  /**
   * Mode of this document declaration - whether an application is a producer or consumer.
   */
  @IsOptional()
  @IsIn(['producer', 'consumer'])
  mode?: ('producer'|'consumer');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _mode?: Element;

  /**
   * The profile is actually on the Bundle.
   */
  @IsOptional()
  @IsString()
  profile?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _profile?: Element;

  /**
   * Constructor for CapabilityStatementDocument
   */
  constructor(source: Partial<CapabilityStatementDocument> = {}) {
    super(source);
  }
}
