import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class GraphDefinitionLinkTargetCompartment extends BackboneElement implements fhir.GraphDefinitionLinkTargetCompartment {
  /**
   * Identifies the compartment.
   */
  @IsOptional()
  @IsIn(['Patient', 'Encounter', 'RelatedPerson', 'Practitioner', 'Device'])
  code?: ('Patient'|'Encounter'|'RelatedPerson'|'Practitioner'|'Device');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _code?: Element;

  /**
   * Documentation for FHIRPath expression.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Custom rule, as a FHIRPath expression.
   */
  @IsOptional()
  @IsString()
  expression?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _expression?: Element;

  /**
   * identical | matching | different | no-rule | custom.
   */
  @IsOptional()
  @IsIn(['identical', 'matching', 'different', 'custom'])
  rule?: ('identical'|'matching'|'different'|'custom');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _rule?: Element;

  /**
   * All conditional rules are evaluated; if they are true, then the rules are evaluated.
   */
  @IsOptional()
  @IsIn(['condition', 'requirement'])
  use?: ('condition'|'requirement');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _use?: Element;

  /**
   * Constructor for GraphDefinitionLinkTargetCompartment
   */
  constructor(source: Partial<GraphDefinitionLinkTargetCompartment> = {}) {
    super(source);
  }
}
