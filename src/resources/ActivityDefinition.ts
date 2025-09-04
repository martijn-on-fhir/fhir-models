import 'reflect-metadata';
import {IsArray, IsBoolean, IsIn, IsOptional, IsString, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';
import {DomainResource} from '../base/DomainResource';
import {Element} from '../base/Element';
import {ActivityDefinitionDynamicValue} from '../backbone/ActivityDefinitionDynamicValue';
import {CodeableConcept} from '../elements/CodeableConcept';
import {ContactDetail} from '../elements/ContactDetail';
import {Dosage} from '../backbone/Dosage';
import {Identifier} from '../elements/Identifier';
import {Period} from '../elements/Period';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ActivityDefinition extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'ActivityDefinition' as const;

  /**
   * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
   */
  @IsOptional()
  @IsString()
  approvalDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _approvalDate?: Element;

  /**
   * An individiual or organization primarily involved in the creation and maintenance of the content.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  author?: ContactDetail[];

  /**
   * Only used if not implicit in the code found in ServiceRequest.type.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  bodySite?: CodeableConcept[];

  /**
   * Tends to be less relevant for activities involving particular products.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /**
   * A copyright statement relating to the activity definition and/or its contents. Copyright statements are generally legal 
   */
  @IsOptional()
  @IsString()
  copyright?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _copyright?: Element;

  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation 
   */
  @IsOptional()
  @IsString()
  date?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _date?: Element;

  /**
   * This description can be used to capture details such as why the activity definition was built, comments about misuse, in
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * This element is not intended to be used to communicate a decision support response to cancel an order in progress. That 
   */
  @IsOptional()
  @IsBoolean()
  doNotPerform?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _doNotPerform?: Element;

  /**
   * If a dosage instruction is used, the definition should not specify timing or quantity.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Dosage)
  dosage?: Dosage[];

  /**
   * Dynamic values are applied in the order in which they are defined in the ActivityDefinition. Note that if both a transfo
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ActivityDefinitionDynamicValue)
  dynamicValue?: ActivityDefinitionDynamicValue[];

  /**
   * An individual or organization primarily responsible for internal coherence of the content.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  editor?: ContactDetail[];

  /**
   * The effective period for a activity definition  determines when the content is applicable for usage and is independent o
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  effectivePeriod?: Period;

  /**
   * An individual or organization responsible for officially endorsing the content for use in some setting.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  endorser?: ContactDetail[];

  /**
   * Allows filtering of activity definitions that are appropriate for use versus not.
   */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _experimental?: Element;

  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identi
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * Indicates the level of authority/intentionality associated with the activity and where the request should fit into the w
   */
  @IsOptional()
  @IsIn(['proposal', 'plan', 'directive', 'order', 'original-order', 'reflex-order', 'filler-order', 'instance-order', 'option'])
  intent?: ('proposal'|'plan'|'directive'|'order'|'original-order'|'reflex-order'|'filler-order'|'instance-order'|'option');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _intent?: Element;

  /**
   * It may be possible for the activity definition to be used in jurisdictions other than those for which it was originally 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /**
   * Constructor for ActivityDefinition
   */
  constructor(source: Partial<ActivityDefinition> = {}) {
    super(source);
    this.resourceType = 'ActivityDefinition';
  }
}
