import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactDetail } from '../elements/ContactDetail';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import { RelatedArtifact } from '../elements/RelatedArtifact';
import { ResearchStudyArm } from '../backbone/ResearchStudyArm';
import { ResearchStudyObjective } from '../backbone/ResearchStudyObjective';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ResearchStudy extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'ResearchStudy' as const;

  /**
   * Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exp
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ResearchStudyArm)
  arm?: ResearchStudyArm[];

  /**
   * Codes categorizing the type of study such as investigational vs. observational, type of blinding, type of randomization,
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /**
   * The condition that is the focus of the study.  For example, In a study to examine risk factors for Lupus, might have as 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  condition?: CodeableConcept[];

  /**
   * Contact details to assist a user in learning more about or engaging with the study.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /**
   * A full description of how the study is being conducted.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * The Group referenced should not generally enumerate specific subjects.  Subjects will be linked to the study using the R
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  enrollment?: Reference[];

  /**
   * The medication(s), food(s), therapy(ies), device(s) or other concerns or interventions that the study is seeking to gain
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  focus?: CodeableConcept[];

  /**
   * Identifiers assigned to this research study by the sponsor or other systems.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * Key terms to aid in searching for or filtering the study.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  keyword?: CodeableConcept[];

  /**
   * Indicates a country, state or other region where the study is taking place.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  location?: CodeableConcept[];

  /**
   * Comments made about the study by the performer, subject or other participants.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data coll
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ResearchStudyObjective)
  objective?: ResearchStudyObjective[];

  /**
   * A larger research study of which this particular study is a component or step.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  partOf?: Reference[];

  /**
   * Identifies the start date and the expected (or actual, depending on status) end date for the study.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * The stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market eval
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  phase?: CodeableConcept;

  /**
   * The type of study based upon the intent of the study's activities. A classification of the intent of the study.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  primaryPurposeType?: CodeableConcept;

  /**
   * A researcher in a study who oversees multiple aspects of the study, such as concept development, protocol writing, proto
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  principalInvestigator?: Reference;

  /**
   * The set of steps expected to be performed as part of the execution of the study.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  protocol?: Reference[];

  /**
   * A description and/or code explaining the premature termination of the study.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  reasonStopped?: CodeableConcept;

  /**
   * Citations, references and other related documents.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RelatedArtifact)
  relatedArtifact?: RelatedArtifact[];

  /**
   * A facility in which study activities are conducted.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  site?: Reference[];

  /**
   * An organization that initiates the investigation and is legally responsible for the study.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  sponsor?: Reference;

  /**
   * The current state of the study.
   */
  @IsOptional()
  @IsIn(['active', 'administratively-completed', 'approved', 'closed-to-accrual', 'closed-to-accrual-and-intervention', 'completed', 'disapproved', 'in-review', 'temporarily-closed-to-accrual', 'temporarily-closed-to-accrual-and-intervention', 'withdrawn'])
  status?: ('active'|'administratively-completed'|'approved'|'closed-to-accrual'|'closed-to-accrual-and-intervention'|'completed'|'disapproved'|'in-review'|'temporarily-closed-to-accrual'|'temporarily-closed-to-accrual-and-intervention'|'withdrawn');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Constructor for ResearchStudy
   */
  constructor(source: Partial<ResearchStudy> = {}) {
    super(source);
    this.resourceType = 'ResearchStudy';
  }
}
