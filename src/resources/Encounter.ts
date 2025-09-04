import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Coding } from '../elements/Coding';
import { Duration } from '../elements/Duration';
import { EncounterClassHistory } from '../backbone/EncounterClassHistory';
import { EncounterDiagnosis } from '../backbone/EncounterDiagnosis';
import { EncounterHospitalization } from '../backbone/EncounterHospitalization';
import { EncounterLocation } from '../backbone/EncounterLocation';
import { EncounterParticipant } from '../backbone/EncounterParticipant';
import { EncounterStatusHistory } from '../backbone/EncounterStatusHistory';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Encounter extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Encounter' as const;

  /**
   * The billing system may choose to allocate billable items associated with the Encounter to different referenced Accounts 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  account?: Reference[];

  /**
   * The appointment that scheduled this encounter.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  appointment?: Reference[];

  /**
   * The request this encounter satisfies (e.g. incoming referral or procedure request).
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /**
   * Concepts representing classification of patient encounter such as ambulatory (outpatient), inpatient, emergency, home he
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  class?: Coding;

  /**
   * The class history permits the tracking of the encounters transitions without needing to go  through the resource history
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EncounterClassHistory)
  classHistory?: EncounterClassHistory[];

  /**
   * The list of diagnosis relevant to this encounter.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EncounterDiagnosis)
  diagnosis?: EncounterDiagnosis[];

  /**
   * Where a specific encounter should be classified as a part of a specific episode(s) of care this field should be used. Th
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  episodeOfCare?: Reference[];

  /**
   * An Encounter may cover more than just the inpatient stay. Contexts such as outpatients, community clinics, and aged care
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => EncounterHospitalization)
  hospitalization?: EncounterHospitalization;

  /**
   * Identifier(s) by which this encounter is known.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * May differ from the time the Encounter.period lasted because of leave of absence.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  length?: Duration;

  /**
   * Virtual encounters can be recorded in the Encounter by specifying a location reference to a location of type "kind" such
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EncounterLocation)
  location?: EncounterLocation[];

  /**
   * The list of people responsible for providing the service.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EncounterParticipant)
  participant?: EncounterParticipant[];

  /**
   * This is also used for associating a child's encounter back to the mother's encounter. Refer to the Notes section in the 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  partOf?: Reference;

  /**
   * If not (yet) known, the end of the Period may be omitted.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * Indicates the urgency of the encounter.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  priority?: CodeableConcept;

  /**
   * For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryD
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /**
   * For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryD
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /**
   * The organization that is primarily responsible for this Encounter's services. This MAY be the same as the organization o
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  serviceProvider?: Reference;

  /**
   * Broad categorization of the service that is to be provided (e.g. cardiology).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  serviceType?: CodeableConcept;

  /**
   * Note that internal business rules will determine the appropriate transitions that may occur between statuses (and also c
   */
  @IsOptional()
  @IsIn(['planned', 'arrived', 'triaged', 'in-progress', 'onleave', 'finished', 'cancelled', 'entered-in-error', 'unknown'])
  status?: ('planned'|'arrived'|'triaged'|'in-progress'|'onleave'|'finished'|'cancelled'|'entered-in-error'|'unknown');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * The current status is always found in the current version of the resource, not the status history.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EncounterStatusHistory)
  statusHistory?: EncounterStatusHistory[];

  /**
   * While the encounter is always about the patient, the patient might not actually be known in all contexts of use, and the
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /**
   * Since there are many ways to further classify encounters, this element is 0..*.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  type?: CodeableConcept[];

  /**
   * Constructor for Encounter
   */
  constructor(source: Partial<Encounter> = {}) {
    super(source);
    this.resourceType = 'Encounter';
  }
}
