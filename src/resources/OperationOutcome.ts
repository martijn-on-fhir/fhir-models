import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { OperationOutcomeIssue } from '../backbone/OperationOutcomeIssue';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class OperationOutcome extends DomainResource implements fhir.OperationOutcome {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'OperationOutcome' as const;

  /**
   * An error, warning, or information message that results from a system action.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OperationOutcomeIssue)
  issue?: OperationOutcomeIssue[];

  /**
   * Constructor for OperationOutcome
   */
  constructor(source: Partial<OperationOutcome> = {}) {
    super(source);
    this.resourceType = 'OperationOutcome';
  }
}
