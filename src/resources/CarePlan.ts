import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CarePlanActivity } from '../backbone/CarePlanActivity';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CarePlan extends DomainResource implements fhir.CarePlan {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'CarePlan' as const;

  /**
   * Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, s
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CarePlanActivity)
  activity?: CarePlanActivity[]

  /**
   * When the diagnosis is related to an allergy or intolerance, the Condition and AllergyIntolerance resources can both be u
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  addresses?: Reference[];

  /**
   * The author may also be a contributor.  For example, an organization can be an author, but not listed as a contributor.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  author?: Reference;

  /**
   * A care plan that is fulfilled in whole or in part by this care plan.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /**
   * Identifies all people and organizations who are expected to be involved in the care envisioned by this plan.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  careTeam?: Reference[];

  /**
   * There may be multiple axes of categorization and one plan may serve multiple purposes.  In some cases, this may be redun
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /**
   * Collaborative care plans may have multiple contributors.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  contributor?: Reference[];

  /**
   * Represents when this particular CarePlan record was created in the system, which is often a system-generated date.
   */
  @IsOptional()
  @IsString()
  created?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _created?: Element;

  /**
   * A description of the scope and nature of the plan.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after t
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /**
   * Goal can be achieving a particular change or merely maintaining a current state or even slowing a decline.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  goal?: Reference[];

  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best prac
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or
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
   * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
   */
  @IsOptional()
  @IsIn(['proposal', 'plan', 'order', 'option'])
  intent?: ('proposal'|'plan'|'order'|'option');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _intent?: Element;

  /**
   * General notes about the care plan not covered elsewhere.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * Each care plan is an independent request, such that having a care plan be part of another care plan can cause issues wit
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  partOf?: Reference[];

  /**
   * Any activities scheduled as part of the plan should be constrained to the specified period regardless of whether the act
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * The replacement could be because the initial care plan was immediately rejected (due to an issue) or because the previou
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  replaces?: Reference[];

  /**
   * The unknown code is not to be used to convey other statuses.  The unknown code should be used when one of the statuses a
   */
  @IsOptional()
  @IsIn(['draft', 'active', 'on-hold', 'revoked', 'completed', 'entered-in-error', 'unknown'])
  status?: ('draft'|'active'|'on-hold'|'revoked'|'completed'|'entered-in-error'|'unknown');

  /**
   * Constructor for CarePlan
   */
  constructor(source: Partial<CarePlan> = {}) {
    super(source);
    this.resourceType = 'CarePlan';
  }
}
