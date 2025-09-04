import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { EpisodeOfCareDiagnosis } from '../backbone/EpisodeOfCareDiagnosis';
import { EpisodeOfCareStatusHistory } from '../backbone/EpisodeOfCareStatusHistory';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class EpisodeOfCare extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'EpisodeOfCare' as const;

  /**
   * The billing system may choose to allocate billable items associated with the EpisodeOfCare to different referenced Accou
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  account?: Reference[];

  /**
   * The practitioner that is the care manager/care coordinator for this patient.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  careManager?: Reference;

  /**
   * The list of diagnosis relevant to this episode of care.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EpisodeOfCareDiagnosis)
  diagnosis?: EpisodeOfCareDiagnosis[];

  /**
   * The EpisodeOfCare may be known by different identifiers for different contexts of use, such as when an external agency i
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * The organization that has assumed the specific responsibilities for the specified duration.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  managingOrganization?: Reference;

  /**
   * The patient who is the focus of this episode of care.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /**
   * The interval during which the managing organization assumes the defined responsibility.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * Referral Request(s) that are fulfilled by this EpisodeOfCare, incoming referrals.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  referralRequest?: Reference[];

  /**
   * This element is labeled as a modifier because the status contains codes that mark the episode as not currently valid.
   */
  @IsOptional()
  @IsIn(['planned', 'waitlist', 'active', 'onhold', 'finished', 'cancelled', 'entered-in-error'])
  status?: ('planned'|'waitlist'|'active'|'onhold'|'finished'|'cancelled'|'entered-in-error');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resourc
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EpisodeOfCareStatusHistory)
  statusHistory?: EpisodeOfCareStatusHistory[];

  /**
   * The list of practitioners that may be facilitating this episode of care for specific purposes.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  team?: Reference[];

  /**
   * The type can be very important in processing as this could be used in determining if the EpisodeOfCare is relevant to sp
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  type?: CodeableConcept[];

  /**
   * Constructor for EpisodeOfCare
   */
  constructor(source: Partial<EpisodeOfCare> = {}) {
    super(source);
    this.resourceType = 'EpisodeOfCare';
  }
}
