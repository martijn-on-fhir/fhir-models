import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { Element } from '../base/Element';
import { Period } from './Period';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address form
 */
export class Address extends Element implements fhir.Address {
  /**
   * The name of the city, town, suburb, village or other community or delivery center.
   */
  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _city?: Element;

  /**
   * ISO 3166 3 letter codes can be used in place of a human readable country name.
   */
  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _country?: Element;

  /**
   * District is sometimes known as county, but in some regions 'county' is used in place of city (municipality), so county name should be conveyed in city instead.
   */
  @IsOptional()
  @IsString()
  district?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _district?: Element;

  /**
   * This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  line?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _line?: Element[];

  /**
   * Time period when address was/is in use.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * A postal code designating a region defined by the postal service.
   */
  @IsOptional()
  @IsString()
  postalCode?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _postalCode?: Element;

  /**
   * Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (e.g. US 2 letter state codes).
   */
  @IsOptional()
  @IsString()
  state?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _state?: Element;

  /**
   * Can provide both a text representation and parts. Applications updating an address SHALL ensure that  when both text and parts are present,  no content is included in the text that isn't found in a pa
   */
  @IsOptional()
  @IsString()
  text?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _text?: Element;

  /**
   * The definition of Address states that "address is intended to describe postal addresses, not physical locations". However, many applications track whether an address has a dual purpose of being a loca
   */
  @IsOptional()
  @IsIn(['postal', 'physical', 'both'])
  type?: ('postal'|'physical'|'both');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * Applications can assume that an address is current unless it explicitly says that it is temporary or old.
   */
  @IsOptional()
  @IsIn(['home', 'work', 'temp', 'old', 'billing'])
  use?: ('home'|'work'|'temp'|'old'|'billing');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _use?: Element;

  /**
   * Constructor for Address
   */
  constructor(source: Partial<Address> = {}) {
    super(source);
  }
}
