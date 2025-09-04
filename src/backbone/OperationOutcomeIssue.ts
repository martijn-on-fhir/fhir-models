import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class OperationOutcomeIssue extends BackboneElement implements fhir.OperationOutcomeIssue {
  /**
   * Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from 
   */
  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _code?: Element;

  /**
   * A human readable description of the error issue SHOULD be placed in details.text.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  details?: CodeableConcept;

  /**
   * This may be a description of how a value is erroneous, a stack dump to help trace the issue or other troubleshooting inf
   */
  @IsOptional()
  @IsString()
  diagnostics?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _diagnostics?: Element;

  /**
   * The root of the FHIRPath is the resource or bundle that generated OperationOutcome.  Each FHIRPath SHALL resolve to a si
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  expression?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _expression?: Element[];

  /**
   * The root of the XPath is the resource or bundle that generated OperationOutcome.  Each XPath SHALL resolve to a single n
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  location?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _location?: Element[];

  /**
   * This is labeled as "Is Modifier" because applications should not confuse hints and warnings with errors.
   */
  @IsOptional()
  @IsIn(['fatal', 'error', 'warning', 'information'])
  severity?: ('fatal'|'error'|'warning'|'information');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _severity?: Element;

  /**
   * Constructor for OperationOutcomeIssue
   */
  constructor(source: Partial<OperationOutcomeIssue> = {}) {
    super(source);
  }
}
