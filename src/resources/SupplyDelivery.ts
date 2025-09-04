import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import { SupplyDeliverySuppliedItem } from '../backbone/SupplyDeliverySuppliedItem';
import { Timing } from '../backbone/Timing';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SupplyDelivery extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'SupplyDelivery' as const;

  /**
   * A plan, proposal or order that is fulfilled in whole or in part by this event.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /**
   * Identification of the facility/location where the Supply was shipped to, as part of the dispense event.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  destination?: Reference;

  /**
   * This identifier is typically assigned by the dispenser, and may be used to reference the delivery when exchanging inform
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * [The list of types may be constrained as appropriate for the type of event].
   */
  @IsOptional()
  @IsString()
  occurrenceDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _occurrenceDateTime?: Element;

  /**
   * [The list of types may be constrained as appropriate for the type of event].
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  occurrencePeriod?: Period;

  /**
   * [The list of types may be constrained as appropriate for the type of event].
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Timing)
  occurrenceTiming?: Timing;

  /**
   * Not to be used to link an event to an Encounter - use Event.context for that. [The allowed reference resources may be ad
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  partOf?: Reference[];

  /**
   * A link to a resource representing the person whom the delivered item is for.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /**
   * Identifies the person who picked up the Supply.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  receiver?: Reference[];

  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  @IsOptional()
  @IsIn(['in-progress', 'completed', 'abandoned', 'entered-in-error'])
  status?: ('in-progress'|'completed'|'abandoned'|'entered-in-error');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * The item that is being delivered or has been supplied.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => SupplyDeliverySuppliedItem)
  suppliedItem?: SupplyDeliverySuppliedItem;

  /**
   * The individual responsible for dispensing the medication, supplier or device.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  supplier?: Reference;

  /**
   * Indicates the type of dispensing event that is performed. Examples include: Trial Fill, Completion of Trial, Partial Fil
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for SupplyDelivery
   */
  constructor(source: Partial<SupplyDelivery> = {}) {
    super(source);
    this.resourceType = 'SupplyDelivery';
  }
}
