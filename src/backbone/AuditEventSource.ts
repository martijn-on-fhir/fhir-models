import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Coding } from '../elements/Coding';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class AuditEventSource extends BackboneElement {
  /**
   * Identifier of the source where the event was detected.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  observer?: Reference;

  /**
   * Logical source location within the healthcare enterprise network.  For example, a hospital or other provider location wi
   */
  @IsOptional()
  @IsString()
  site?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _site?: Element;

  /**
   * Code specifying the type of source where event originated.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  type?: Coding[];

  /**
   * Constructor for AuditEventSource
   */
  constructor(source: Partial<AuditEventSource> = {}) {
    super(source);
  }
}
