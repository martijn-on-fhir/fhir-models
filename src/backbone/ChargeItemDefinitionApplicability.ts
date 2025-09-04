import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ChargeItemDefinitionApplicability extends BackboneElement implements fhir.ChargeItemDefinitionApplicability {
  /**
   * A brief, natural language description of the condition that effectively communicates the intended semantics.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Please note that FHIRPath Expressions can only be evaluated in the scope of the current ChargeItem resource to which thi
   */
  @IsOptional()
  @IsString()
  expression?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _expression?: Element;

  /**
   * The media type of the language for the expression, e.g. "text/cql" for Clinical Query Language expressions or "text/fhir
   */
  @IsOptional()
  @IsString()
  language?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _language?: Element;

  /**
   * Constructor for ChargeItemDefinitionApplicability
   */
  constructor(source: Partial<ChargeItemDefinitionApplicability> = {}) {
    super(source);
  }
}
