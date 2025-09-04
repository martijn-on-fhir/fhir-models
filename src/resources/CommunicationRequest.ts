import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { CommunicationRequestPayload } from '../backbone/CommunicationRequestPayload';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CommunicationRequest extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'CommunicationRequest' as const;

  /**
   * Don't use CommunicationRequest.about element when a more specific element exists, such as basedOn, reasonReference, or r
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  about?: Reference[];

  /**
   * For draft requests, indicates the date of initial creation.  For requests with other statuses, indicates the date of act
   */
  @IsOptional()
  @IsString()
  authoredOn?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _authoredOn?: Element;

  /**
   * A plan or proposal that is fulfilled in whole or in part by this request.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /**
   * There may be multiple axes of categorization and one communication request may serve multiple purposes.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /**
   * The attributes provided with the request qualify what is not to be done.
   */
  @IsOptional()
  @IsBoolean()
  doNotPerform?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _doNotPerform?: Element;

  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after t
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /**
   * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common re
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  groupIdentifier?: Identifier;

  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best prac
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * A channel that was used for this communication (e.g. email, fax).
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  medium?: CodeableConcept[];

  /**
   * Comments made about the request by the requester, sender, recipient, subject or other participants.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * The time when this communication is to occur.
   */
  @IsOptional()
  @IsString()
  occurrenceDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _occurrenceDateTime?: Element;

  /**
   * The time when this communication is to occur.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  occurrencePeriod?: Period;

  /**
   * Text, attachment(s), or resource(s) to be communicated to the recipient.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CommunicationRequestPayload)
  payload?: CommunicationRequestPayload[];

  /**
   * Characterizes how quickly the proposed act must be initiated. Includes concepts such as stat, urgent, routine.
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
   * Indicates another resource whose existence justifies this request.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /**
   * The entity (e.g. person, organization, clinical information system, device, group, or care team) which is the intended t
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  recipient?: Reference[];

  /**
   * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  replaces?: Reference[];

  /**
   * The device, individual, or organization who initiated the request and has responsibility for its activation.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  requester?: Reference;

  /**
   * The entity (e.g. person, organization, clinical information system, or device) which is to be the source of the communic
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  sender?: Reference;

  /**
   * The status of the proposal or order.
   */
  @IsOptional()
  @IsIn(['draft', 'active', 'on-hold', 'revoked', 'completed', 'entered-in-error', 'unknown'])
  status?: ('draft'|'active'|'on-hold'|'revoked'|'completed'|'entered-in-error'|'unknown');

  /**
   * Constructor for CommunicationRequest
   */
  constructor(source: Partial<CommunicationRequest> = {}) {
    super(source);
    this.resourceType = 'CommunicationRequest';
  }
}
