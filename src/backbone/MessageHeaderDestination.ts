import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MessageHeaderDestination extends BackboneElement {
  /**
   * The id may be a non-resolvable URI for systems that do not use standard network-based addresses.
   */
  @IsOptional()
  @IsString()
  endpoint?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _endpoint?: Element;

  /**
   * Human-readable name for the target system.
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * Allows data conveyed by a message to be addressed to a particular person or department when routing to a specific applic
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  receiver?: Reference;

  /**
   * Identifies the target end system in situations where the initial message transmission is to an intermediary system.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  target?: Reference;

  /**
   * Constructor for MessageHeaderDestination
   */
  constructor(source: Partial<MessageHeaderDestination> = {}) {
    super(source);
  }
}
