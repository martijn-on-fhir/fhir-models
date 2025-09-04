import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class OperationDefinitionParameterBinding extends BackboneElement {
  /**
   * For further discussion, see [Using Terminologies](terminologies.html).
   */
  @IsOptional()
  @IsIn(['required', 'extensible', 'preferred', 'example'])
  strength?: ('required'|'extensible'|'preferred'|'example');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _strength?: Element;

  /**
   * For value sets with a referenceResource, the display can contain the value set description.  The reference may be versio
   */
  @IsOptional()
  @IsString()
  valueSet?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueSet?: Element;

  /**
   * Constructor for OperationDefinitionParameterBinding
   */
  constructor(source: Partial<OperationDefinitionParameterBinding> = {}) {
    super(source);
  }
}
