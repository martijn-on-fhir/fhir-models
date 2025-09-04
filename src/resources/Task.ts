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
import { TaskInput } from '../backbone/TaskInput';
import { TaskOutput } from '../backbone/TaskOutput';
import { TaskRestriction } from '../backbone/TaskRestriction';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Task extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Task' as const;

  /**
   * The date and time this task was created.
   */
  @IsOptional()
  @IsString()
  authoredOn?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _authoredOn?: Element;

  /**
   * BasedOn refers to a higher-level authorization that triggered the creation of the task.  It references a "request" resou
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /**
   * Contains business-specific nuances of the business state.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  businessStatus?: CodeableConcept;

  /**
   * The title (eg "My Tasks", "Outstanding Tasks for Patient X") should go into the code.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * A free-text description of what is to be performed.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * The healthcare event  (e.g. a patient and healthcare provider interaction) during which this task was created.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /**
   * Identifies the time action was first taken against the task (start) and/or the time final action was taken against the t
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  executionPeriod?: Period;

  /**
   * If multiple resources need to be manipulated, use sub-tasks.  (This ensures that status can be tracked independently for
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  focus?: Reference;

  /**
   * The entity who benefits from the performance of the service specified in the task (e.g., the patient).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  for?: Reference;

  /**
   * An identifier that links together multiple tasks and other requests that were created in the same context.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  groupIdentifier?: Identifier;

  /**
   * The business identifier for this task.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * Additional information that may be needed in the execution of the task.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TaskInput)
  input?: TaskInput[];

  /**
   * The URL pointing to a *FHIR*-defined protocol, guideline, orderset or other definition that is adhered to in whole or in
   */
  @IsOptional()
  @IsString()
  instantiatesCanonical?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _instantiatesCanonical?: Element;

  /**
   * The URL pointing to an *externally* maintained  protocol, guideline, orderset or other definition that is adhered to in 
   */
  @IsOptional()
  @IsString()
  instantiatesUri?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _instantiatesUri?: Element;

  /**
   * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be relevant to the Task.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  insurance?: Reference[];

  /**
   * This element is immutable.  Proposed tasks, planned tasks, etc. must be distinct instances. In most cases, Tasks will ha
   */
  @IsOptional()
  @IsIn(['unknown', 'proposal', 'plan', 'order', 'original-order', 'reflex-order', 'filler-order', 'instance-order', 'option'])
  intent?: ('unknown'|'proposal'|'plan'|'order'|'original-order'|'reflex-order'|'filler-order'|'instance-order'|'option');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _intent?: Element;

  /**
   * The date and time of last modification to this task.
   */
  @IsOptional()
  @IsString()
  lastModified?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _lastModified?: Element;

  /**
   * Principal physical location where the this task is performed.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  location?: Reference;

  /**
   * Free-text information captured about the task as it progresses.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * Constructor for Task
   */
  constructor(source: Partial<Task> = {}) {
    super(source);
    this.resourceType = 'Task';
  }
}
