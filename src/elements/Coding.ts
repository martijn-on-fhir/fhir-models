import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { Element } from '../base/Element';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address form
 */
export class Coding extends Element {
  /**
   * A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).
   */
  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _code?: Element;

  /**
   * A representation of the meaning of the code in the system, following the rules of the system.
   */
  @IsOptional()
  @IsString()
  display?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _display?: Element;

  /**
   * The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs o
   */
  @IsOptional()
  @IsString()
  system?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _system?: Element;

  /**
   * Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading par
   */
  @IsOptional()
  @IsBoolean()
  userSelected?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _userSelected?: Element;

  /**
   * Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version w
   */
  @IsOptional()
  @IsString()
  version?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _version?: Element;

  /**
   * Constructor for Coding
   */
  constructor(source: Partial<Coding> = {}) {
    super(source);
  }
}
