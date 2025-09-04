import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Age } from '../elements/Age';
import { AllergyIntoleranceReaction } from '../backbone/AllergyIntoleranceReaction';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Range } from '../elements/Range';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class AllergyIntolerance extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'AllergyIntolerance' as const;

  /**
   * The recorder takes responsibility for the content, but can reference the source from where they got it.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  asserter?: Reference;

  /**
   * This data element has been included because it is currently being captured in some clinical systems. This data can be de
   */
  @IsOptional()
  @IsIn(['food', 'medication', 'environment', 'biologic'])
  category?: Array<'food'|'medication'|'environment'|'biologic'>;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _category?: Element[];

  /**
   * Refer to [discussion](extensibility.html#Special-Case) if clincalStatus is missing data. The data type is CodeableConcep
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  clinicalStatus?: CodeableConcept;

  /**
   * It is strongly recommended that this element be populated using a terminology, where possible. For example, some termino
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * The default criticality value for any propensity to an adverse reaction should be 'Low Risk', indicating at the very lea
   */
  @IsOptional()
  @IsIn(['low', 'high', 'unable-to-assess'])
  criticality?: ('low'|'high'|'unable-to-assess');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _criticality?: Element;

  /**
   * The encounter when the allergy or intolerance was asserted.
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
   * This date may be replicated by one of the Onset of Reaction dates. Where a textual representation of the date of last oc
   */
  @IsOptional()
  @IsString()
  lastOccurrence?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _lastOccurrence?: Element;

  /**
   * For example: including reason for flagging a seriousness of 'High Risk'; and instructions related to future exposure or 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  @IsOptional()
  @IsString()
  onsetDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _onsetDateTime?: Element;

  /**
   * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Age)
  onsetAge?: Age;

  /**
   * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  onsetPeriod?: Period;

  /**
   * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  onsetRange?: Range;

  /**
   * Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
   */
  @IsOptional()
  @IsString()
  onsetString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _onsetString?: Element;

  /**
   * The patient who has the allergy or intolerance.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /**
   * Details about each adverse reaction event linked to exposure to the identified substance.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AllergyIntoleranceReaction)
  reaction?: AllergyIntoleranceReaction[];

  /**
   * The recordedDate represents when this particular AllergyIntolerance record was created in the system, which is often a s
   */
  @IsOptional()
  @IsString()
  recordedDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _recordedDate?: Element;

  /**
   * Individual who recorded the record and takes responsibility for its content.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  recorder?: Reference;

  /**
   * Allergic (typically immune-mediated) reactions have been traditionally regarded as an indicator for potential escalation
   */
  @IsOptional()
  @IsIn(['allergy', 'intolerance'])
  type?: ('allergy'|'intolerance');

  /**
   * Constructor for AllergyIntolerance
   */
  constructor(source: Partial<AllergyIntolerance> = {}) {
    super(source);
    this.resourceType = 'AllergyIntolerance';
  }
}
