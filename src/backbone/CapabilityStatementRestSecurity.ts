import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CapabilityStatementRestSecurity extends BackboneElement {
  /**
   * The easiest CORS headers to add are Access-Control-Allow-Origin: * & Access-Control-Request-Method: GET, POST, PUT, DELE
   */
  @IsOptional()
  @IsBoolean()
  cors?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _cors?: Element;

  /**
   * General description of how security works.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Types of security services that are supported/required by the system.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  service?: CodeableConcept[];

  /**
   * Constructor for CapabilityStatementRestSecurity
   */
  constructor(source: Partial<CapabilityStatementRestSecurity> = {}) {
    super(source);
  }
}
