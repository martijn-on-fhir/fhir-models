import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CodeSystemProperty extends BackboneElement {
  /**
   * A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also
   */
  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _code?: Element;

  /**
   * A description of the property- why it is defined, and how its value might be used.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * The type of the property value. Properties of type "code" contain a code defined by the code system (e.g. a reference to
   */
  @IsOptional()
  @IsIn(['code', 'Coding', 'string', 'integer', 'boolean', 'dateTime', 'decimal'])
  type?: ('code'|'Coding'|'string'|'integer'|'boolean'|'dateTime'|'decimal');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * Reference to the formal meaning of the property. One possible source of meaning is the [Concept Properties](codesystem-c
   */
  @IsOptional()
  @IsString()
  uri?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _uri?: Element;

  /**
   * Constructor for CodeSystemProperty
   */
  constructor(source: Partial<CodeSystemProperty> = {}) {
    super(source);
  }
}
