import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { CommunicationPayload } from '../backbone/CommunicationPayload';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Communication extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Communication' as const;

  /**
   * Don't use Communication.about element when a more specific element exists, such as basedOn or reasonReference.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  about?: Reference[];

  /**
   * This must point to some sort of a 'Request' resource, such as CarePlan, CommunicationRequest, ServiceRequest, Medication
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /**
   * There may be multiple axes of categorization and one communication may serve multiple purposes.
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
   * Prior communication that this communication is in response to.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  inResponseTo?: Reference[];

  /**
   * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in p
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
   * A channel that was used for this communication (e.g. email, fax).
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  medium?: CodeableConcept[];

  /**
   * Additional notes or commentary about the communication by the sender, receiver or other interested parties.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * Part of this action.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  partOf?: Reference[];

  /**
   * Text, attachment(s), or resource(s) that was communicated to the recipient.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CommunicationPayload)
  payload?: CommunicationPayload[];

  /**
   * Used to prioritize workflow (such as which communication to read first) when the communication is planned or in progress
   */
  @IsOptional()
  @IsIn(['routine', 'urgent', 'asap', 'stat'])
  priority?: ('routine'|'urgent'|'asap'|'stat');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _priority?: Element;

  /**
   * Textual reasons can be captured using reasonCode.text.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /**
   * Indicates another resource whose existence justifies this communication.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /**
   * The time when this communication arrived at the destination.
   */
  @IsOptional()
  @IsString()
  received?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _received?: Element;

  /**
   * The entity (e.g. person, organization, clinical information system, care team or device) which was the target of the com
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  recipient?: Reference[];

  /**
   * The entity (e.g. person, organization, clinical information system, or device) which was the source of the communication
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  sender?: Reference;

  /**
   * The time when this communication was sent.
   */
  @IsOptional()
  @IsString()
  sent?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _sent?: Element;

  /**
   * This element is labeled as a modifier because the status contains the codes aborted and entered-in-error that mark the c
   */
  @IsOptional()
  @IsIn(['preparation', 'in-progress', 'not-done', 'on-hold', 'stopped', 'completed', 'entered-in-error', 'unknown'])
  status?: ('preparation'|'in-progress'|'not-done'|'on-hold'|'stopped'|'completed'|'entered-in-error'|'unknown') | undefined;

  /**
   * Constructor for Communication
   */
  constructor(source: Partial<Communication> = {}) {
    super(source);
    this.resourceType = 'Communication';
  }
}
