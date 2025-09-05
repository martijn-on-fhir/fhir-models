import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CapabilityStatementRestResourceOperation extends BackboneElement {
  /**
   * This can be used to build an HTML form to invoke the operation, for instance.
   */
  @IsOptional()
  @IsString()
  definition?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _definition?: Element;

  /**
   * Documentation that describes anything special about the operation behavior, possibly detailing different behavior for sy
   */
  @IsOptional()
  @IsString()
  documentation?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _documentation?: Element;

  /**
   * The name here SHOULD be the same as the name in the definition, unless there is a name clash and the name cannot be used
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * Constructor for CapabilityStatementRestResourceOperation
   */
  constructor(source: Partial<CapabilityStatementRestResourceOperation> = {}) {
    super(source);
  }
}
