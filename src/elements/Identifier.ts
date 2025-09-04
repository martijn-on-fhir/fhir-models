import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { Element } from '../base/Element';
import { Reference } from './Reference';
import { Period } from './Period';
import { CodeableConcept } from './CodeableConcept';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address form
 */
export class Identifier extends Element {
  /**
   * The Identifier.assigner may omit the .reference element and only contain a .display element reflecting the name or other textual information about the assigning organization.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)

  assigner?: Reference;

  /**
   * Time period during wh
   * ich identifier is/was valid for use.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * Identifier.system is always case sensitive.
   */
  @IsOptional()
  @IsString()
  system?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _system?: Element;

  /**
   * This element deals only with general categories of identifiers.  It SHOULD not be used for codes that correspond 1..1 with the Identifier.system. Some identifiers may fall into multiple categories due
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Applications can assume that an identifier is permanent unless it explicitly says that it is temporary.
   */
  @IsOptional()
  @IsIn(['usual', 'official', 'temp', 'secondary', 'old'])
  use?: ('usual'|'official'|'temp'|'secondary'|'old');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _use?: Element;

  /**
   * If the value is a full URI, then the system SHALL be urn:ietf:rfc:3986.  The value's primary purpose is computational mapping.  As a result, it may be normalized for comparison purposes (e.g. removing
   */
  @IsOptional()
  @IsString()
  value?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _value?: Element;

  /**
   * Constructor for Identifier
   */
  constructor(source: Partial<Identifier> = {}) {
    super(source);
  }
}
