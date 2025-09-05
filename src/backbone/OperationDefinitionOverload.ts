import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class OperationDefinitionOverload extends BackboneElement {
  /**
   * Comments to go on overload.
   */
  @IsOptional()
  @IsString()
  comment?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _comment?: Element;

  /**
   * Name of parameter to include in overload.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  parameterName?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _parameterName?: Element[];

  /**
   * Constructor for OperationDefinitionOverload
   */
  constructor(source: Partial<OperationDefinitionOverload> = {}) {
    super(source);
  }
}
