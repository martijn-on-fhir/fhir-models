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
export class InvoiceParticipant extends BackboneElement implements fhir.InvoiceParticipant {
  /**
   * The device, practitioner, etc. who performed or participated in the service.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  actor?: Reference;

  /**
   * Describes the type of involvement (e.g. transcriptionist, creator etc.). If the invoice has been created automatically, 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  role?: CodeableConcept;

  /**
   * Constructor for InvoiceParticipant
   */
  constructor(source: Partial<InvoiceParticipant> = {}) {
    super(source);
  }
}
