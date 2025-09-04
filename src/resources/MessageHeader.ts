import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Coding } from '../elements/Coding';
import { MessageHeaderDestination } from '../backbone/MessageHeaderDestination';
import { MessageHeaderResponse } from '../backbone/MessageHeaderResponse';
import { MessageHeaderSource } from '../backbone/MessageHeaderSource';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MessageHeader extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'MessageHeader' as const;

  /**
   * Usually only for the request but can be used in a response.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  author?: Reference;

  /**
   * Permanent link to the MessageDefinition for this message.
   */
  @IsOptional()
  @IsString()
  definition?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _definition?: Element;

  /**
   * There SHOULD be at least one destination, but in some circumstances, the source system is unaware of any particular dest
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MessageHeaderDestination)
  destination?: MessageHeaderDestination[];

  /**
   * Usually only for the request but can be used in a response.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  enterer?: Reference;

  /**
   * The time of the event will be found in the focus resource. The time of the message will be found in [Bundle.timestamp](b
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  eventCoding?: Coding;

  /**
   * The time of the event will be found in the focus resource. The time of the message will be found in [Bundle.timestamp](b
   */
  @IsOptional()
  @IsString()
  eventUri?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _eventUri?: Element;

  /**
   * The data is defined where the transaction type is defined. The transaction data is always included in the bundle that is
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  focus?: Reference[];

  /**
   * Coded indication of the cause for the event - indicates  a reason for the occurrence of the event that is a focus of thi
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  reason?: CodeableConcept;

  /**
   * Information about the message that this message is a response to.  Only present if this message is a response.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => MessageHeaderResponse)
  response?: MessageHeaderResponse;

  /**
   * Usually only for the request but can be used in a response.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  responsible?: Reference;

  /**
   * Use case is for where a (trusted) sending system is responsible for multiple organizations, and therefore cannot differe
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  sender?: Reference;

  /**
   * The source application from which this message originated.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => MessageHeaderSource)
  source?: MessageHeaderSource;

  /**
   * Constructor for MessageHeader
   */
  constructor(source: Partial<MessageHeader> = {}) {
    super(source);
    this.resourceType = 'MessageHeader';
  }
}
