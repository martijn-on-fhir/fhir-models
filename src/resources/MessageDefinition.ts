import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Coding } from '../elements/Coding';
import { ContactDetail } from '../elements/ContactDetail';
import { Identifier } from '../elements/Identifier';
import { MessageDefinitionAllowedResponse } from '../backbone/MessageDefinitionAllowedResponse';
import { MessageDefinitionFocus } from '../backbone/MessageDefinitionFocus';
import { UsageContext } from '../elements/UsageContext';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MessageDefinition extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'MessageDefinition' as const;

  /**
   * This indicates an application level response to "close" a transaction implicit in a particular request message.  To defi
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MessageDefinitionAllowedResponse)
  allowedResponse?: MessageDefinitionAllowedResponse[];

  /**
   * The MessageDefinition that is the basis for the contents of this resource.
   */
  @IsOptional()
  @IsString()
  base?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _base?: Element;

  /**
   * The impact of the content of the message.
   */
  @IsOptional()
  @IsIn(['consequence', 'currency', 'notification'])
  category?: ('consequence'|'currency'|'notification');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _category?: Element;

  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDetail)
  contact?: ContactDetail[];

  /**
   * A copyright statement relating to the message definition and/or its contents. Copyright statements are generally legal r
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
   * This description can be used to capture details such as why the message definition was built, comments about misuse, ins
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Event code or link to the EventDefinition.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  eventCoding?: Coding;

  /**
   * Event code or link to the EventDefinition.
   */
  @IsOptional()
  @IsString()
  eventUri?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _eventUri?: Element;

  /**
   * Allows filtering of message definitions that are appropriate for use versus not.
   */
  @IsOptional()
  @IsBoolean()
  experimental?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _experimental?: Element;

  /**
   * Identifies the resource (or resources) that are being addressed by the event.  For example, the Encounter for an admit m
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MessageDefinitionFocus)
  focus?: MessageDefinitionFocus[];

  /**
   * Canonical reference to a GraphDefinition. If a URL is provided, it is the canonical reference to a [GraphDefinition](gra
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  graph?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _graph?: Element[];

  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identi
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * It may be possible for the message definition to be used in jurisdictions other than those for which it was originally d
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is 
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * It should be possible to use MessageDefinition to describe a message to be used by certain steps in a particular protoco
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  parent?: string[];

  /**
   * Constructor for MessageDefinition
   */
  constructor(source: Partial<MessageDefinition> = {}) {
    super(source);
    this.resourceType = 'MessageDefinition';
  }
}
