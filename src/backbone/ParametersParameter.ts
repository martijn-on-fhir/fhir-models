import 'reflect-metadata';
import {IsArray, IsBoolean, IsNumber, IsOptional, IsString, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import {BackboneElement} from '../base/BackboneElement';
import {Element} from '../base/Element';
import {Resource} from '../elements/FhirResource';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ParametersParameter extends BackboneElement {
  /**
   * The name of the parameter (reference to the operation definition).
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * Only one level of nested parameters is allowed.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ParametersParameter)
  part?: ParametersParameter[];

  /**
   * When resolving references in resources, the operation definition may specify how references may be resolved between para
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Resource)
  resource?: Resource;

  /**
   * If the parameter is a data type.
   */
  @IsOptional()
  @IsString()
  valueBase64Binary?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueBase64Binary?: Element;

  /**
   * If the parameter is a data type.
   */
  @IsOptional()
  @IsBoolean()
  valueBoolean?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueBoolean?: Element;

  /**
   * If the parameter is a data type.
   */
  @IsOptional()
  @IsString()
  valueCanonical?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueCanonical?: Element;

  /**
   * If the parameter is a data type.
   */
  @IsOptional()
  @IsString()
  valueCode?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueCode?: Element;

  /**
   * If the parameter is a data type.
   */
  @IsOptional()
  @IsString()
  valueDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueDate?: Element;

  /**
   * If the parameter is a data type.
   */
  @IsOptional()
  @IsString()
  valueDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueDateTime?: Element;

  /**
   * If the parameter is a data type.
   */
  @IsOptional()
  @IsNumber()
  valueDecimal?: number;

  /**
   * If the parameter is a data type.
   */
  @IsOptional()
  @IsString()
  valueId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueId?: Element;

  /**
   * If the parameter is a data type.
   */
  @IsOptional()
  @IsString()
  valueInstant?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueInstant?: Element;

  /**
   * If the parameter is a data type.
   */
  @IsOptional()
  @IsNumber()
  valueInteger?: number;

  /**
   * If the parameter is a data type.
   */
  @IsOptional()
  @IsString()
  valueMarkdown?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueMarkdown?: Element;

  /**
   * If the parameter is a data type.
   */
  @IsOptional()
  @IsString()
  valueOid?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueOid?: Element;

  /**
   * If the parameter is a data type.
   */
  @IsOptional()
  @IsNumber()
  valuePositiveInt?: number;

  /**
   * If the parameter is a data type.
   */
  @IsOptional()
  @IsString()
  valueString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueString?: Element;

  /**
   * If the parameter is a data type.
   */
  @IsOptional()
  @IsString()
  valueTime?: string;

  /**
   * Constructor for ParametersParameter
   */
  constructor(source: Partial<ParametersParameter> = {}) {
    super(source);
  }
}
