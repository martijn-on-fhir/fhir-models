import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import { Timing } from '../backbone/Timing';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class DeviceUseStatement extends DomainResource implements fhir.DeviceUseStatement {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'DeviceUseStatement' as const;

  /**
   * A plan, proposal or order that is fulfilled in whole or in part by this DeviceUseStatement.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /**
   * Indicates the anotomic location on the subject's body where the device was used ( i.e. the target).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  bodySite?: CodeableConcept;

  /**
   * The most common use cases for deriving a DeviceUseStatement comes from creating it from a request or from an observation
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  derivedFrom?: Reference[];

  /**
   * The details of the device used.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  device?: Reference;

  /**
   * An external identifier for this statement such as an IRI.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * Details about the device statement that were not represented at all or sufficiently in one of the attributes provided in
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * Reason or justification for the use of the device.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /**
   * Indicates another resource whose existence justifies this DeviceUseStatement.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /**
   * The time at which the statement was made/recorded.
   */
  @IsOptional()
  @IsString()
  recordedOn?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _recordedOn?: Element;

  /**
   * Who reported the device was being used by the patient.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  source?: Reference;

  /**
   * DeviceUseStatment is a statement at a point in time.  The status is only representative at the point when it was asserte
   */
  @IsOptional()
  @IsIn(['active', 'completed', 'entered-in-error', 'intended', 'stopped', 'on-hold'])
  status?: ('active'|'completed'|'entered-in-error'|'intended'|'stopped'|'on-hold');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * The patient who used the device.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /**
   * How often the device was used.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Timing)
  timingTiming?: Timing;

  /**
   * How often the device was used.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  timingPeriod?: Period;

  /**
   * How often the device was used.
   */
  @IsOptional()
  @IsString()
  timingDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _timingDateTime?: Element;

  /**
   * Constructor for DeviceUseStatement
   */
  constructor(source: Partial<DeviceUseStatement> = {}) {
    super(source);
    this.resourceType = 'DeviceUseStatement';
  }
}
