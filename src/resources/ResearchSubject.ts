import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ResearchSubject extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'ResearchSubject' as const;

  /**
   * The name of the arm in the study the subject actually followed as part of this study.
   */
  @IsOptional()
  @IsString()
  actualArm?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _actualArm?: Element;

  /**
   * The name of the arm in the study the subject is expected to follow as part of this study.
   */
  @IsOptional()
  @IsString()
  assignedArm?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _assignedArm?: Element;

  /**
   * A record of the patient's informed agreement to participate in the study.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  consent?: Reference;

  /**
   * Identifiers assigned to this research subject for a study.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * The record of the person or animal who is involved in the study.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  individual?: Reference;

  /**
   * The dates the subject began and ended their participation in the study.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * The current state of the subject.
   */
  @IsOptional()
  @IsIn(['candidate', 'eligible', 'follow-up', 'ineligible', 'not-registered', 'off-study', 'on-study', 'on-study-intervention', 'on-study-observation', 'pending-on-study', 'potential-candidate', 'screening', 'withdrawn'])
  status?: ('candidate'|'eligible'|'follow-up'|'ineligible'|'not-registered'|'off-study'|'on-study'|'on-study-intervention'|'on-study-observation'|'pending-on-study'|'potential-candidate'|'screening'|'withdrawn');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Reference to the study the subject is participating in.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  study?: Reference;

  /**
   * Constructor for ResearchSubject
   */
  constructor(source: Partial<ResearchSubject> = {}) {
    super(source);
    this.resourceType = 'ResearchSubject';
  }
}
