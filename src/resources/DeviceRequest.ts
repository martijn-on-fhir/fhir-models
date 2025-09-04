import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { DeviceRequestParameter } from '../backbone/DeviceRequestParameter';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import { Timing } from '../backbone/Timing';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class DeviceRequest extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'DeviceRequest' as const;

  /**
   * When the request transitioned to being actionable.
   */
  @IsOptional()
  @IsString()
  authoredOn?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _authoredOn?: Element;

  /**
   * Plan/proposal/order fulfilled by this request.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /**
   * The details of the device to be used.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  codeReference?: Reference;

  /**
   * The details of the device to be used.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  codeCodeableConcept?: CodeableConcept;

  /**
   * An encounter that provides additional context in which this request is made.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /**
   * Composite request this is part of.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  groupIdentifier?: Identifier;

  /**
   * Identifiers assigned to this order by the orderer or by the receiver.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is bes
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiatesCanonical?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _instantiatesCanonical?: Element[];

  /**
   * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiatesUri?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _instantiatesUri?: Element[];

  /**
   * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be required for delivering t
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  insurance?: Reference[];

  /**
   * Whether the request is a proposal, plan, an original order or a reflex order.
   */
  @IsOptional()
  @IsIn(['proposal', 'plan', 'directive', 'order', 'original-order', 'reflex-order', 'filler-order', 'instance-order', 'option'])
  intent?: ('proposal'|'plan'|'directive'|'order'|'original-order'|'reflex-order'|'filler-order'|'instance-order'|'option');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _intent?: Element;

  /**
   * Details about this request that were not represented at all or sufficiently in one of the attributes provided in a class
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "E
   */
  @IsOptional()
  @IsString()
  occurrenceDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _occurrenceDateTime?: Element;

  /**
   * The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "E
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  occurrencePeriod?: Period;

  /**
   * The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "E
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Timing)
  occurrenceTiming?: Timing;

  /**
   * Specific parameters for the ordered item.  For example, the prism value for lenses.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DeviceRequestParameter)
  parameter?: DeviceRequestParameter[];

  /**
   * The desired performer for doing the diagnostic testing.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  performer?: Reference;

  /**
   * Desired type of performer for doing the diagnostic testing.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  performerType?: CodeableConcept;

  /**
   * Indicates how quickly the {{title}} should be addressed with respect to other requests.
   */
  @IsOptional()
  @IsIn(['routine', 'urgent', 'asap', 'stat'])
  priority?: ('routine'|'urgent'|'asap'|'stat');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _priority?: Element;

  /**
   * Constructor for DeviceRequest
   */
  constructor(source: Partial<DeviceRequest> = {}) {
    super(source);
    this.resourceType = 'DeviceRequest';
  }
}
