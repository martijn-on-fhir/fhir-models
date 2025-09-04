import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class OperationDefinitionParameterReferencedFrom extends BackboneElement {
  /**
   * The name of the parameter or dot-separated path of parameter names pointing to the resource parameter that is expected t
   */
  @IsOptional()
  @IsString()
  source?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _source?: Element;

  /**
   * The id of the element in the referencing resource that is expected to resolve to this resource.
   */
  @IsOptional()
  @IsString()
  sourceId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _sourceId?: Element;

  /**
   * Constructor for OperationDefinitionParameterReferencedFrom
   */
  constructor(source: Partial<OperationDefinitionParameterReferencedFrom> = {}) {
    super(source);
  }
}
