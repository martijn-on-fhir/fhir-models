import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { ChargeItemPerformer } from '../backbone/ChargeItemPerformer';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Money } from '../elements/Money';
import { Period } from '../elements/Period';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
import { Timing } from '../backbone/Timing';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ChargeItem extends DomainResource implements fhir.ChargeItem {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'ChargeItem' as const;

  /**
   * Systems posting the ChargeItems might not always be able to determine, which accounts the Items need to be places into. 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  account?: Reference[];

  /**
   * Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resourc
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  bodysite?: CodeableConcept[];

  /**
   * A code that identifies the charge, like a billing code.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * The encounter or episode of care that establishes the context for this event.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  context?: Reference;

  /**
   * The costCenter could either be given as a reference to an Organization(Role) resource or as the identifier of the cost c
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  costCenter?: Reference;

  /**
   * References the source of pricing information, rules of application for the code this ChargeItem uses.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  definitionCanonical?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _definitionCanonical?: Element[];

  /**
   * References the (external) source of pricing information, rules of application for the code this ChargeItem uses.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  definitionUri?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _definitionUri?: Element[];

  /**
   * The actual date when the service associated with the charge has been rendered is captured in occurrence[x].
   */
  @IsOptional()
  @IsString()
  enteredDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _enteredDate?: Element;

  /**
   * The enterer is also the person considered responsible for factor/price overrides if applicable.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  enterer?: Reference;

  /**
   * There is no reason to carry the factor in the instance of a ChargeItem unless special circumstances require a manual ove
   */
  @IsOptional()
  @IsNumber()
  factorOverride?: number;

  /**
   * Identifiers assigned to this event performer or other systems.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * Comments made about the event by the performer, subject or other participants.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * The list of types may be constrained as appropriate for the type of charge item.
   */
  @IsOptional()
  @IsString()
  occurrenceDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _occurrenceDateTime?: Element;

  /**
   * The list of types may be constrained as appropriate for the type of charge item.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  occurrencePeriod?: Period;

  /**
   * The list of types may be constrained as appropriate for the type of charge item.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Timing)
  occurrenceTiming?: Timing;

  /**
   * Derived Profiles may choose to add invariants requiring this field to be populated if either priceOverride or factorOver
   */
  @IsOptional()
  @IsString()
  overrideReason?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _overrideReason?: Element;

  /**
   * ChargeItems can be grouped to larger ChargeItems covering the whole set.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  partOf?: Reference[];

  /**
   * Indicates who or what performed or participated in the charged service.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ChargeItemPerformer)
  performer?: ChargeItemPerformer[];

  /**
   * Practitioners and Devices can be associated with multiple organizations. It has to be made clear, on behalf of which Org
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  performingOrganization?: Reference;

  /**
   * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. Th
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  priceOverride?: Money;

  /**
   * Constructor for ChargeItem
   */
  constructor(source: Partial<ChargeItem> = {}) {
    super(source);
    this.resourceType = 'ChargeItem';
  }
}
