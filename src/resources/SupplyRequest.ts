import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
import { SupplyRequestParameter } from '../backbone/SupplyRequestParameter';
import { Timing } from '../backbone/Timing';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SupplyRequest extends DomainResource implements fhir.SupplyRequest {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'SupplyRequest' as const;

  /**
   * When the request was made.
   */
  @IsOptional()
  @IsString()
  authoredOn?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _authoredOn?: Element;

  /**
   * Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /**
   * Where the supply is expected to come from.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  deliverFrom?: Reference;

  /**
   * Where the supply is destined to go.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  deliverTo?: Reference;

  /**
   * The identifier.type element is used to distinguish between the identifiers assigned by the requester/placer and the perf
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) im
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  itemCodeableConcept?: CodeableConcept;

  /**
   * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) im
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  itemReference?: Reference;

  /**
   * When the request should be fulfilled.
   */
  @IsOptional()
  @IsString()
  occurrenceDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _occurrenceDateTime?: Element;

  /**
   * When the request should be fulfilled.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  occurrencePeriod?: Period;

  /**
   * When the request should be fulfilled.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Timing)
  occurrenceTiming?: Timing;

  /**
   * Specific parameters for the ordered item.  For example, the size of the indicated item.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SupplyRequestParameter)
  parameter?: SupplyRequestParameter[];

  /**
   * Indicates how quickly this SupplyRequest should be addressed with respect to other requests.
   */
  @IsOptional()
  @IsIn(['routine', 'urgent', 'asap', 'stat'])
  priority?: ('routine'|'urgent'|'asap'|'stat');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _priority?: Element;

  /**
   * The amount that is being ordered of the indicated item.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /**
   * The reason why the supply item was requested.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /**
   * The reason why the supply item was requested.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /**
   * The device, practitioner, etc. who initiated the request.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  requester?: Reference;

  /**
   * Status of the supply request.
   */
  @IsOptional()
  @IsIn(['draft', 'active', 'suspended', 'cancelled', 'completed', 'entered-in-error', 'unknown'])
  status?: ('draft'|'active'|'suspended'|'cancelled'|'completed'|'entered-in-error'|'unknown');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Who is intended to fulfill the request.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  supplier?: Reference[];

  /**
   * Constructor for SupplyRequest
   */
  constructor(source: Partial<SupplyRequest> = {}) {
    super(source);
    this.resourceType = 'SupplyRequest';
  }
}
