import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { Element } from '../base/Element';
import { Period } from './Period';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address form
 */
export class ContactPoint extends Element {
  /**
   * Time period when the contact point was/is in use.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * Note that rank does not necessarily follow the order in which the contacts are represented in the instance.
   */
  @IsOptional()
  @IsNumber()
  rank?: number;

  /**
   * Telecommunications form for contact point - what communications system is required to make use of the contact.
   */
  @IsOptional()
  @IsIn(['phone', 'fax', 'email', 'pager', 'url', 'sms', 'other'])
  system?: ('phone'|'fax'|'email'|'pager'|'url'|'sms'|'other');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _system?: Element;

  /**
   * Applications can assume that a contact is current unless it explicitly says that it is temporary or old.
   */
  @IsOptional()
  @IsIn(['home', 'work', 'temp', 'old', 'mobile'])
  use?: ('home'|'work'|'temp'|'old'|'mobile');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _use?: Element;

  /**
   * Additional text data such as phone extension numbers, or notes about use of the contact are sometimes included in the value.
   */
  @IsOptional()
  @IsString()
  value?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _value?: Element;

  /**
   * Constructor for ContactPoint
   */
  constructor(source: Partial<ContactPoint> = {}) {
    super(source);
  }
}
