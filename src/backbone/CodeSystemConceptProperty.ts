import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Coding } from '../elements/Coding';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CodeSystemConceptProperty extends BackboneElement {
  /**
   * A code that is a reference to CodeSystem.property.code.
   */
  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _code?: Element;

  /**
   * The value of this property.
   */
  @IsOptional()
  @IsString()
  valueCode?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueCode?: Element;

  /**
   * The value of this property.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  valueCoding?: Coding;

  /**
   * The value of this property.
   */
  @IsOptional()
  @IsString()
  valueString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueString?: Element;

  /**
   * The value of this property.
   */
  @IsOptional()
  @IsNumber()
  valueInteger?: number;

  /**
   * The value of this property.
   */
  @IsOptional()
  @IsBoolean()
  valueBoolean?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueBoolean?: Element;

  /**
   * The value of this property.
   */
  @IsOptional()
  @IsString()
  valueDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueDateTime?: Element;

  /**
   * The value of this property.
   */
  @IsOptional()
  @IsNumber()
  valueDecimal?: number;

  /**
   * Constructor for CodeSystemConceptProperty
   */
  constructor(source: Partial<CodeSystemConceptProperty> = {}) {
    super(source);
  }
}
