import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class EnrollmentResponse extends DomainResource implements fhir.EnrollmentResponse {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'EnrollmentResponse' as const;

  /**
   * The date when the enclosed suite of services were performed or completed.
   */
  @IsOptional()
  @IsString()
  created?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _created?: Element;

  /**
   * A description of the status of the adjudication.
   */
  @IsOptional()
  @IsString()
  disposition?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _disposition?: Element;

  /**
   * The Response business identifier.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * The Insurer who produced this adjudicated response.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  organization?: Reference;

  /**
   * Processing status: error, complete.
   */
  @IsOptional()
  @IsIn(['queued', 'complete', 'error', 'partial'])
  outcome?: ('queued'|'complete'|'error'|'partial');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _outcome?: Element;

  /**
   * Original request resource reference.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  request?: Reference;

  /**
   * The practitioner who is responsible for the services rendered to the patient.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  requestProvider?: Reference;

  /**
   * This element is labeled as a modifier because the status contains codes that mark the response as not currently valid.
   */
  @IsOptional()
  @IsIn(['active', 'cancelled', 'draft', 'entered-in-error'])
  status?: ('active'|'cancelled'|'draft'|'entered-in-error');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Constructor for EnrollmentResponse
   */
  constructor(source: Partial<EnrollmentResponse> = {}) {
    super(source);
    this.resourceType = 'EnrollmentResponse';
  }
}
