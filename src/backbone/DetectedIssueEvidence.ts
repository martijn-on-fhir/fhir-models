import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class DetectedIssueEvidence extends BackboneElement implements fhir.DetectedIssueEvidence {
  /**
   * A manifestation that led to the recording of this detected issue.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  code?: CodeableConcept[];

  /**
   * Links to resources that constitute evidence for the detected issue such as a GuidanceResponse or MeasureReport.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  detail?: Reference[];

  /**
   * Constructor for DetectedIssueEvidence
   */
  constructor(source: Partial<DetectedIssueEvidence> = {}) {
    super(source);
  }
}
