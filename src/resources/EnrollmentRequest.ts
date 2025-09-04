import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class EnrollmentRequest extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'EnrollmentRequest' as const;

  /**
   * Patient Resource.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  candidate?: Reference;

  /**
   * Reference to the program or plan identification, underwriter or payor.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  coverage?: Reference;

  /**
   * The date when this resource was created.
   */
  @IsOptional()
  @IsString()
  created?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _created?: Element;

  /**
   * The Response business identifier.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * The Insurer who is target  of the request.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  insurer?: Reference;

  /**
   * The practitioner who is responsible for the services rendered to the patient.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  provider?: Reference;

  /**
   * This element is labeled as a modifier because the status contains codes that mark the request as not currently valid.
   */
  @IsOptional()
  @IsIn(['active', 'cancelled', 'draft', 'entered-in-error'])
  status?: ('active'|'cancelled'|'draft'|'entered-in-error');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Constructor for EnrollmentRequest
   */
  constructor(source: Partial<EnrollmentRequest> = {}) {
    super(source);
    this.resourceType = 'EnrollmentRequest';
  }
}
