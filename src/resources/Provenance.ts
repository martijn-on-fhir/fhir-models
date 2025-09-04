import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Period } from '../elements/Period';
import { ProvenanceAgent } from '../backbone/ProvenanceAgent';
import { ProvenanceEntity } from '../backbone/ProvenanceEntity';
import { Reference } from '../elements/Reference';
import { Signature } from '../elements/Signature';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Provenance extends DomainResource implements fhir.Provenance {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Provenance' as const;

  /**
   * An activity is something that occurs over a period of time and acts upon or with entities; it may include consuming, pro
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  activity?: CodeableConcept;

  /**
   * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProvenanceAgent)
  agent?: ProvenanceAgent[];

  /**
   * An entity used in this activity.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProvenanceEntity)
  entity?: ProvenanceEntity[];

  /**
   * Where the activity occurred, if relevant.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  location?: Reference;

  /**
   * The period can be a little arbitrary; where possible, the time should correspond to human assessment of the activity tim
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  occurredPeriod?: Period;

  /**
   * The period can be a little arbitrary; where possible, the time should correspond to human assessment of the activity tim
   */
  @IsOptional()
  @IsString()
  occurredDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _occurredDateTime?: Element;

  /**
   * For example: Where an OAuth token authorizes, the unique identifier from the OAuth token is placed into the policy eleme
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  policy?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _policy?: Element[];

  /**
   * The reason that the activity was taking place.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reason?: CodeableConcept[];

  /**
   * This can be a little different from the time stamp on the resource if there is a delay between recording the event and u
   */
  @IsOptional()
  @IsString()
  recorded?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _recorded?: Element;

  /**
   * A digital signature on the target Reference(s). The signer should match a Provenance.agent. The purpose of the signature
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Signature)
  signature?: Signature[];

  /**
   * Target references are usually version specific, but might not be, if a version has not been assigned or if the provenanc
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  target?: Reference[];

  /**
   * Constructor for Provenance
   */
  constructor(source: Partial<Provenance> = {}) {
    super(source);
    this.resourceType = 'Provenance';
  }
}
