import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { AuditEventAgentNetwork } from './AuditEventAgentNetwork';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Coding } from '../elements/Coding';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class AuditEventAgent extends BackboneElement {
  /**
   * Alternative agent Identifier. For a human, this should be a user identifier text string from authentication system. This
   */
  @IsOptional()
  @IsString()
  altId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _altId?: Element;

  /**
   * Where the event occurred.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  location?: Reference;

  /**
   * Type of media involved. Used when the event is about exporting/importing onto media.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  media?: Coding;

  /**
   * Human-meaningful name for the agent.
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * Logical network location for application activity, if the activity has a network location.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => AuditEventAgentNetwork)
  network?: AuditEventAgentNetwork;

  /**
   * For example: Where an OAuth token authorizes, the unique identifier from the OAuth token is placed into the policy eleme
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  policy?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _policy?: Element[];

  /**
   * Use AuditEvent.agent.purposeOfUse when you know that is specific to the agent, otherwise use AuditEvent.purposeOfEvent. 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  purposeOfUse?: CodeableConcept[];

  /**
   * There can only be one initiator. If the initiator is not clear, then do not choose any one agent as the initiator.
   */
  @IsOptional()
  @IsBoolean()
  requestor?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _requestor?: Element;

  /**
   * Should be roles relevant to the event. Should  not be an exhaustive list of roles.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  role?: CodeableConcept[];

  /**
   * Specification of the participation type the user plays when performing the event.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Where a User ID is available it will go into who.identifier.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  who?: Reference;

  /**
   * Constructor for AuditEventAgent
   */
  constructor(source: Partial<AuditEventAgent> = {}) {
    super(source);
  }
}
