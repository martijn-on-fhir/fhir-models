import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CareTeamParticipant } from '../backbone/CareTeamParticipant';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactPoint } from '../elements/ContactPoint';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CareTeam extends DomainResource implements fhir.CareTeam {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'CareTeam' as const;

  /**
   * There may be multiple axis of categorization and one team may serve multiple purposes.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after t
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best prac
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * The organization responsible for the care team.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  managingOrganization?: Reference[];

  /**
   * The meaning/purpose of the team is conveyed in CareTeam.category.  This element may also convey semantics of the team (e
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * Comments made about the CareTeam.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * Identifies all people and organizations who are expected to be involved in the care team.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CareTeamParticipant)
  participant?: CareTeamParticipant[];

  /**
   * Indicates when the team did (or is intended to) come into effect and end.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * Describes why the care team exists.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /**
   * Condition(s) that this care team addresses.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /**
   * This element is labeled as a modifier because the status contains the code entered-in-error that marks the care team as 
   */
  @IsOptional()
  @IsIn(['proposed', 'active', 'suspended', 'inactive', 'entered-in-error'])
  status?: ('proposed'|'active'|'suspended'|'inactive'|'entered-in-error');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Identifies the patient or group whose intended care is handled by the team.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /**
   * The ContactPoint.use code of home is not appropriate to use. These contacts are not the contact details of individual ca
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactPoint)
  telecom?: ContactPoint[];

  /**
   * Constructor for CareTeam
   */
  constructor(source: Partial<CareTeam> = {}) {
    super(source);
    this.resourceType = 'CareTeam';
  }
}
